import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Restoran } from '../restorani/restoran.model';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Hrana } from '../hrana/hrana.model';
import { KorpaService } from '../korpa.service';

@Component({
  selector: 'app-restorani-hrane',
  templateUrl: './restorani-hrane.component.html',
  styleUrls: ['./restorani-hrane.component.scss'],
})
export class RestoraniHraneComponent implements OnInit {

  @Input() restorani: Restoran[] = [];
  @Input() hrana: Hrana | undefined;

  constructor(private modalController: ModalController, private alertCtrl: AlertController, private korpaService: KorpaService,private navBar:NavController) { }

  closeModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    console.log(this.restorani);

  }


  openAlart(restoran: Restoran) {
    this.alertCtrl.create({
      header: 'Korpa',
      message: 'Da li ste sigurni da zelite da dododate ovaj proizvod u korpu?',
      buttons: [
        {
          text: 'Dodaj',
          handler: () => {
            if (this.hrana != undefined){
              this.dodajUKorpu(restoran, this.hrana);
            this.navBar.navigateForward('/');   
            }       
          }
        },
        {
          text: 'Odustani',
          role: 'cancel',
          handler: () => {
            console.log('odustani')
          }


        }
      ]

    }).then((alert: HTMLIonAlertElement) => {
      alert.present();


    });
  }

  dodajUKorpu(restoran: Restoran, hrana: Hrana) {
    hrana = { ...hrana, restoran: { ...restoran } }; // Dublja kopija objekta hrane i restorana
    console.log("Restoran je ", hrana.restoran);


    hrana.cena = (Math.round) (hrana.cena * restoran.ocena);


    this.korpaService.dodajUKorpu(hrana);
  }

}
