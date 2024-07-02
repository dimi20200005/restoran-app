import { Inject, Injectable } from '@angular/core';
import { Hrana } from './hrana/hrana.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, switchMap, take, tap } from 'rxjs';
import { AuthService } from './auth/auth.service';

interface HranaData{
  naziv : string;
  upit: string;
  imageUrl: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class HranaService {
  private _hrana = new BehaviorSubject<Hrana[]>([]);

   hrana: Hrana[] = [
    {
      id: 'h1',
      naziv: 'Pasta Carbonara',
      sastojci: 'Penne testenina,Jaja,Slanina,Biber,Parmezan',
      kolicina: '550g',
      userId:"",
      imageUrl: 'https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Spaghetti-Carbonara-Fifteen-Spatulas-12.jpg',
      tipHrane: 'Italijanska'
    },
    {
      id: 'h2',
      naziv: 'Burger',
      sastojci: 'Duplo juneće meso, Čedar sir, Kiseli krastavci, Kečap, Senf, Luk',
      kolicina: '700g',
      userId:"",
      imageUrl: 'https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e-768x768.jpeg',
      tipHrane: 'Američka'
    }
  ];

  constructor(private http:HttpClient,private authService : AuthService) {}

  addHrana(naziv: string, upit: string) {
    let generatedId: string;
    let newHrana: Hrana;

    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        newHrana = new Hrana(
          '',
          naziv,
          upit,
          '',
          'https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e-768x768.jpeg',
          '',
          ''
        );
        return this.http.post<{ name: string }>(
          'https://restoran-app-67582-default-rtdb.europe-west1.firebasedatabase.app/hrana.json',
          newHrana
        );
      }),
      switchMap(resData => {
        generatedId = resData.name;
        return this.hrana;
      }),
      take(1),
      tap(hrana => {
        newHrana.id = generatedId;
        this._hrana.next(this.hrana.concat(newHrana));
      })
    );
  }

  getHrane(){
    return this.http.get<{[key:string]: HranaData}>('https://restoran-app-67582-default-rtdb.europe-west1.firebasedatabase.app/hrana.json')
  }
  getHrana(id: string) {
    return this.hrana.find((h:Hrana) => h.id === id);
  }
}
