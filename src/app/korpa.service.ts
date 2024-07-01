import { Injectable } from '@angular/core';
import { Hrana } from './hrana/hrana.model';

@Injectable({
  providedIn: 'root'
})
export class KorpaService {

  private korpa: Hrana[] = [];
  private ukupnaCena: number = 0;

  constructor() { }

  dodajUKorpu(hrana: Hrana) {
    this.korpa.push({ ...hrana }); // Dublja kopija objekta hrane
    this.azurirajUkupnuCenu();
  }

  getKorpa() {
    return this.korpa; // Vraća trenutni sadržaj korpe
  }
  obrisiIzKorpe(stavka: Hrana) {
    const index = this.korpa.indexOf(stavka);
    if (index > -1) {
      this.korpa.splice(index, 1);
      this.azurirajUkupnuCenu();

    }
  }
  private azurirajUkupnuCenu() {
    this.ukupnaCena = this.korpa.reduce((total, hrana) => total + (hrana.cena || 0), 0);
  }

  getUkupnaCena(): number {
    return this.ukupnaCena;
  }
}
