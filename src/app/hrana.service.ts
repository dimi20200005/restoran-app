import { Inject, Injectable } from '@angular/core';
import { Hrana } from './hrana/hrana.model.js';
import { HttpClient } from '@angular/common/http';
interface HranaData{
  naziv : string;
  upit: string;
}

@Injectable({
  providedIn: 'root'
})
export class HranaService {

   hrana: Hrana[] = [
    {
      id: 'h1',
      naziv: 'Pasta Carbonara',
      sastojci: 'Penne testenina,Jaja,Slanina,Biber,Parmezan',
      kolicina: '550g',
      imageUrl: 'https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Spaghetti-Carbonara-Fifteen-Spatulas-12.jpg'
    },
    {
      id: 'h2',
      naziv: 'Burger',
      sastojci: 'Duplo juneće meso, Čedar sir, Kiseli krastavci, Kečap, Senf, Luk',
      kolicina: '700g',
      imageUrl: 'https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e-768x768.jpeg'
    }
  ];

  constructor(private http:HttpClient) {}

  addHrana(naziv: string,upit: string) {
    return this.http.post<{naziv:string,upit:string}>('https://restoran-app-67582-default-rtdb.europe-west1.firebasedatabase.app/hrana.json', {naziv,upit});
  }
  getHrane(){
    return this.http.get<{[key:string]: HranaData}>('https://restoran-app-67582-default-rtdb.europe-west1.firebasedatabase.app/hrana.json')
  }
  getHrana(id: string) {
    return this.hrana.find((h:Hrana) => h.id === id);
  }

}