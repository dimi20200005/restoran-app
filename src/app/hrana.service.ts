import { Inject, Injectable } from '@angular/core';
import { Hrana } from './hrana/hrana.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, switchMap, take, tap } from 'rxjs';
import { AuthService } from './auth/auth.service';

interface HranaData{
  id: string;
  naziv : string;
  sastojci: string;
  kolicina:string;
  imageUrl: string;
  tipHrane: string;
}

@Injectable({
  providedIn: 'root'
})
export class HranaService {
  private _hrana = new BehaviorSubject<Hrana[]>([]);
  private hranaLoaded = false;

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
    },
    {
      id: 'h3',
      naziv: 'Capricciosa pica',
      sastojci: 'Pelat, Cotto Šunka, Mocarela, Šampinjoni, Artičoka, Maslinovo Ulje',
      kolicina: '30cm',
      userId:"",
      imageUrl: 'https://nova.rs/wp-content/uploads/2023/06/14/1686733247-profimedia-0745843205.jpg',
      tipHrane: 'Italijanska'
    },
    {
      id: 'h4',
      naziv: 'Burrito',
      sastojci: 'Pinto pasulj, Achiote piletina,Pečeni kukuruz, Šampinjoni, Crema fresca',
      kolicina: '450g',
      userId:"",
      imageUrl: 'https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg',
      tipHrane: 'Meksička'
    },
    {
      id: 'h5',
      naziv: 'Američka palačinka',
      sastojci: 'Javorov sirup, med, krem, šećer u prahu, bobice',
      kolicina: '350g',
      userId:"",
      imageUrl: 'https://fagor.rs/wp-content/uploads/2021/09/americke-palacinke.jpg.webp',
      tipHrane: 'Američka'
    },


  ];

  constructor(private http:HttpClient,private authService : AuthService) {}

  addHrana(naziv: string, sastojci: string, kolicina: string, imageUrl: string, tipHrane: string) {
    let newHrana: Hrana;

    return this.authService.userId.pipe(
      tap(userId => {
        if (!userId) {
          throw new Error('User not authenticated');
        }
        newHrana = new Hrana( naziv, sastojci, kolicina, imageUrl, userId, tipHrane);
      }),
      tap(() => {
        this.http.post<{ name: string }>(
          'https://restoran-app-67582-default-rtdb.europe-west1.firebasedatabase.app/hrana.json',
          newHrana
        ).subscribe(resData => {
          newHrana.id = resData.name;
          this._hrana.next([...this._hrana.value, newHrana]);
        });
      })
    );
  }

 
  get hrane() {
    return this._hrana.asObservable();
  }

  
  getHrane() {
    return this.http.get<{ [key: string]: Hrana }>('https://restoran-app-67582-default-rtdb.europe-west1.firebasedatabase.app/hrana.json')
    .pipe(
      take(1),
      switchMap(responseData => {
        const hranaArray: Hrana[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            const hrana: Hrana = {
              id: key,
              naziv: responseData[key].naziv,
              sastojci: responseData[key].sastojci,
              kolicina: responseData[key].kolicina,
              imageUrl: responseData[key].imageUrl,
              tipHrane: responseData[key].tipHrane
            };

            // Provera da li već postoji hrana sa istim id-jem ili nazivom
            if (!hranaArray.some(h => h.id === hrana.id || h.naziv === hrana.naziv)) {
              hranaArray.push(hrana);
            }
          }
        }
        return hranaArray;
      }),
      
    );
}

  
  getHrana(id: string) {
    return this.hrana.find((h:Hrana) => h.id === id);
  }
}
