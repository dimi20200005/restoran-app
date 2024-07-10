import { Inject, Injectable } from '@angular/core';
import { Hrana } from './hrana/hrana.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, switchMap, take, tap, throwError } from 'rxjs';
import { AuthService } from './auth/auth.service';

interface HranaData{
  id: string;
  naziv : string;
  sastojci: string;
  kolicina:string;
  imageUrl: string;
  tipHrane: string;
  cena: number
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
      tipHrane: 'Italijanska',
      cena: 200
    },
    {
      id: 'h2',
      naziv: 'Burger',
      sastojci: 'Duplo juneće meso, Čedar sir, Kiseli krastavci, Kečap, Senf, Luk',
      kolicina: '700g',
      userId:"",
      imageUrl: 'https://recipes.net/wp-content/uploads/2023/05/hardees-double-cheeseburger-recipe_d48b79ef43b714e98a3ad95a7ab9e12e-768x768.jpeg',
      tipHrane: 'Američka',
      cena: 180

    },
    {
      id: 'h3',
      naziv: 'Capricciosa pica',
      sastojci: 'Pelat, Cotto Šunka, Mocarela, Šampinjoni, Artičoka, Maslinovo Ulje',
      kolicina: '30cm',
      userId:"",
      imageUrl: 'https://nova.rs/wp-content/uploads/2023/06/14/1686733247-profimedia-0745843205.jpg',
      tipHrane: 'Italijanska',
      cena: 300

    },
    {
      id: 'h4',
      naziv: 'Burrito',
      sastojci: 'Pinto pasulj, Achiote piletina,Pečeni kukuruz, Šampinjoni, Crema fresca',
      kolicina: '450g',
      userId:"",
      imageUrl: 'https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg',
      tipHrane: 'Meksička',
      cena: 150

    },
    {
      id: 'h5',
      naziv: 'Američka palačinka',
      sastojci: 'Javorov sirup, med, krem, šećer u prahu, bobice',
      kolicina: '350g',
      userId:"",
      imageUrl: 'https://fagor.rs/wp-content/uploads/2021/09/americke-palacinke.jpg.webp',
      tipHrane: 'Američka',
      cena: 100

    },


  ];

  constructor(private http:HttpClient,private authService : AuthService) {
    this._hrana.next(this.hrana);
  }

  get hrane() {
    return this._hrana.asObservable();
  }

  addHrana(id: string, naziv: string, sastojci: string, kolicina: string, imageUrl: string, tipHrane: string,cena:number) {
    let newHrana: Hrana;
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        if (!userId) {
          throw new Error('User not authenticated');
        }
        newHrana = new Hrana('', naziv, sastojci, kolicina, imageUrl, tipHrane,cena);
        return this.http.post<{ name: string }>(
          'https://restoran-app-67582-default-rtdb.europe-west1.firebasedatabase.app/hrana.json',
          { ...newHrana, id: null }
        );
      }),
      switchMap(resData => {
        newHrana.id = resData.name; 
        return this.hrane.pipe(
          take(1),
          tap(hrane => {
            this._hrana.next([...this._hrana.value, newHrana]);
          })
        );
      })
    );
  }
  

  getHrane() {
    return this.http.get<{ [key: string]: HranaData }>('https://restoran-app-67582-default-rtdb.europe-west1.firebasedatabase.app/hrana.json')
      .pipe(
        map(responseData => {
          const hranaArray: Hrana[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              hranaArray.push(new Hrana(
                key,
                responseData[key].naziv,
                responseData[key].sastojci,
                responseData[key].kolicina,
                responseData[key].imageUrl,
                responseData[key].tipHrane,
                responseData[key].cena,

              ));
            }
          }
          return hranaArray;
        }),
        tap(hrane => {
          this._hrana.next([...this.hrana, ...hrane]); 
        })
      );
  }

  getHrana(id: string) {
    return this._hrana.value.find((h: Hrana) => h.id === id);
  }

  
  izmeniHranu(id: string, naziv: string, sastojci: string, kolicina: string, imageUrl: string, tipHrane: string,cena:number) {
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        if (!userId) {
          throw new Error('User not authenticated');
        }
        
        const hranaIndex = this._hrana.value.findIndex(h => h.id === id);
        if (hranaIndex < 0) {
          throw new Error('Hrana not found');
        }
  
        const updatedHrana = { ...this._hrana.value[hranaIndex], naziv, sastojci, kolicina, imageUrl, tipHrane,cena };
        return this.http.put(
          `https://restoran-app-67582-default-rtdb.europe-west1.firebasedatabase.app/hrana/${id}.json`,
          { ...updatedHrana, id: null }
        ).pipe(
          tap(() => {
            const updatedHrane = [...this._hrana.value];
            updatedHrane[hranaIndex] = updatedHrana;
            this._hrana.next(updatedHrane);
          })
        );
      })
    );
  }
  
  
  deleteHrana(hranaId: string) {
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        if (!userId) {
          throw new Error('User not authenticated');
        }
        return this.http.delete(
          `https://restoran-app-67582-default-rtdb.europe-west1.firebasedatabase.app/hrana/${hranaId}.json`
        );
      }),
      switchMap(() => {
        return this.hrane;
      }),
      take(1),
      tap(hrane => {
        this._hrana.next(hrane.filter(hrana => hrana.id !== hranaId));
      })
    );
  }
}
