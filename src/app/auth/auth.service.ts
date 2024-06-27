import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

interface AuthResponseData{
  kind:string,
  idToken:string,
  email:string,
  refreashToken:string,
  localId:string,
  expiresIn:string,
  registered?:boolean
}
interface UserData{
  name?:string,
  surname?:string,
  email: string,
  password: string,
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isUserAuthenticated = false;
  private adminEmail = 'dimi@gmail.com';
  private _user = new BehaviorSubject<User>(new User("","","",new Date,""));
  constructor(private http:HttpClient) { }

  get isUserAuthenticated(){
    return this._user.asObservable().pipe(
      map((user)=>{
        if(user){
          return !!user.getToken();
        }else{
          return false;
        }
      })
    )
    ;
  }
  get userId(){
    return this._user.asObservable().pipe(
      map((user)=>{
        if(user){
          return !!user.id;
        }else{
          return null;
        }
      })
    )
  }
  get role() {
    return this._user.asObservable().pipe(
      map((user) => {
        if (user) {
          return user.role;
        } else {
          return null;
        }
      })
    );
  }
  get token(){
    return this._user.asObservable().pipe(
      map((user)=>{
        if(user){
          return user.getToken;
        }else{
          return null;
        }
      })
    )
  }
  register(user:UserData){
    this._isUserAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {email: user.email,password:user.password,returnSecureToken: true}
    ).pipe(tap((userData) =>{
      const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
      const user = new User(userData.localId,userData.email,userData.idToken,expirationTime,"user");
      this._user.next(user);
    }));
  }
  logIn(user:UserData) {
    this._isUserAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {email: user.email,password:user.password,returnSecureToken: true}
    ).pipe(tap((userData) =>{
      const role = userData.email === this.adminEmail ? 'admin' : 'user';
      const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
      const user = new User(userData.localId,userData.email,userData.idToken,expirationTime,role);
      this._user.next(user);
    }))
    ;
  }

  logOut() {
    this._user.next(new User("","","",new Date,""));
  }
  public handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error && error.error.error) {
      switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email address is already in use!';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email address does not exist!';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'This password is not correct!';
          break;
        case 'ADMIN_ONLY_OPERATION':
          errorMessage = 'This operation is restricted to administrators!';
          break;
        
      }
    }
    return errorMessage;
  }
}
