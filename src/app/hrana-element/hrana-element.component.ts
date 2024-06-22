import {Component, Input, OnInit} from '@angular/core';
import { Hrana } from '../hrana/hrana.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hrana-element',
  templateUrl: './hrana-element.component.html',
  styleUrls: ['./hrana-element.component.scss'],
})
export class HranaElementComponent implements OnInit {
  @Input() hrana: Hrana =  {
    id: 'h1',
    naziv: 'Pasta Carbonara',
    sastojci: 'Penne testenina,Jaja,Slanina,Biber,Parmezan',
    kolicina: '550g',
    imageUrl: 'https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Spaghetti-Carbonara-Fifteen-Spatulas-12.jpg',
    userId:''
  };

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {}

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
