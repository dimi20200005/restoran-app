import { Component, OnInit } from '@angular/core';
import { Hrana } from '../hrana.model';
import { KorpaService } from 'src/app/korpa.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.page.html',
  styleUrls: ['./korpa.page.scss'],
})
export class KorpaPage implements OnInit {
  ukupnaCena: number = 0;

  korpa: Hrana[] = [];

  constructor(private korpaService: KorpaService, private alertController: AlertController) { }

  ngOnInit(): void {
    this.ucitajKorpu();
    
  }
  ionViewWillEnter() {
    // Osvežavanje podataka prilikom ulaska na stranicu
    this.ucitajKorpu();
  }
  ucitajKorpu() {
 this.korpa = this.korpaService.getKorpa();
    this.ukupnaCena = this.korpaService.getUkupnaCena();  }

  async obrisiIzKorpe(hrana: Hrana) {
    const alert = await this.alertController.create({
      header: 'Potvrda brisanja',
      message: `Da li želite da obrišete "${hrana.naziv}" iz korpe?`,
      buttons: [
        {
          text: 'Odustani',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Odustali ste od brisanja.');
          }
        },
        {
          text: 'Obriši',
          handler: () => {
            this.korpaService.obrisiIzKorpe(hrana);
            this.ucitajKorpu(); // Ponovno učitavanje korpe nakon brisanja
            console.log('Stavka je uspešno obrisana iz korpe.');
          }
        }
      ]
    });

    await alert.present();
  }
 


}
