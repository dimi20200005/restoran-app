import { Injectable } from '@angular/core';
import { Hrana } from './hrana/hrana.model';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class KorpaService {

  private korpa: Hrana[] = [];
  private ukupnaCena: number = 0;

  constructor(public navController: NavController) { }

  dodajUKorpu(hrana: Hrana) {
    this.korpa.push({ ...hrana }); 
    this.azurirajUkupnuCenu();
    this.navController.navigateRoot('/hrana/tabs/pretraga');
  }

  getKorpa() {
    return this.korpa; 
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
