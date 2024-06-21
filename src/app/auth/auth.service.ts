import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from 'src/environments/environment';

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
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isUserAuthenticated = false;

  constructor(private http:HttpClient) { }

  get isUserAuthenticated(): boolean {
    return this._isUserAuthenticated;
  }
  register(user:UserData){
    this._isUserAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {email: user.email,password:user.password,returnSecureToken: true}
    );
  }
  logIn(user:UserData) {
    this._isUserAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {email: user.email,password:user.password,returnSecureToken: true}
    );
  }

  logOut() {
    this._isUserAuthenticated = false;
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
