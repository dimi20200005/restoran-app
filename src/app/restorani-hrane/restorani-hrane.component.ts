import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Restoran } from '../restorani/restoran.model';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-restorani-hrane',
  templateUrl: './restorani-hrane.component.html',
  styleUrls: ['./restorani-hrane.component.scss'],
})
export class RestoraniHraneComponent  implements OnInit {

  @Input() restorani: Restoran[] = [];

  constructor(private modalController: ModalController,private alertCtrl: AlertController) {}

  closeModal() {
    this.modalController.dismiss();
  }
 
  ngOnInit(){
    console.log(this.restorani);
  }
  openAlart(){
    this.alertCtrl.create({
     header: 'Korpa',
     message: 'Da li ste sigurni da zelite da dododate ovaj proizvod u korpu?',
     buttons: [
       {
         text:'Dodaj',
         handler: ()=>{
           console.log('sacuvaj')
         }
    },
    {
     text:'Odustani',
     role: 'cancel',
     handler: ()=>{
       console.log('odustani')
     }

       
    }
   ]

    }).then((alert: HTMLIonAlertElement)=> {
     alert.present();

    });
 }

 
}
