import {Component, Input, OnInit} from '@angular/core';
import { Hrana } from '../hrana/hrana.model';
import { AlertController, ModalController } from '@ionic/angular';
import { Restoran } from '../restorani/restoran.model';
import { PrikazRestoranaHranaService } from '../prikaz-restorana-hrana.service';

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

  constructor(private alertCtrl: AlertController,private modalService: PrikazRestoranaHranaService) { }

  ngOnInit(){
    
  }
  openModal(hranaNaziv: string) {
    // Simulating restorani data for demonstration purposes
    let restorani: Restoran[] = [];
   
      if (hranaNaziv === 'Pasta Carbonara') {
        restorani=[
      {
        id: 'r8',
        naziv: 'Bosiljak Pizza Napoletana',
        lokacija: 'Bežanijska 36, Beograd 11080',
        slikaUrl: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/cf/c0/03/bosiljak-pizza-napoletana.jpg',
        ocena: 3,
        brojOcena: 10,
        sajt: 'https://www.bosiljakpizza.com/'
      },
      {
        id: 'r9',
        naziv: 'Majstor i Margarita',
        lokacija: 'Balkanska 16, Belgrade Serbia',
        slikaUrl: 'https://www.dizajnenterijera.rs/wp-content/uploads/2023/08/picerija-majstor-margarita-beograd-zabriskie-02.jpg',
        ocena: 4.7,
        brojOcena: 150,
        sajt: 'https://majstorimargarita.rs/'
      }
    ]
    }

  else if(hranaNaziv === 'Burger'){
    restorani=[
      {
        id: 'r1',
        naziv: 'Burger House Bros',
        lokacija: 'Kralja Petra 10, Belgrade 11000 Serbia',
        slikaUrl: 'https://cafebarrestoran.rs/wp-content/uploads/2023/09/Burger-House-Bros-glavna-fotografija.jpg',
        ocena: 4.5,
        brojOcena: 100,
        sajt:'https://burgerhousebros.com/'
      },
      {
        id: 'r2',
        naziv: 'Fat Boys Food co.',
        lokacija: 'Strahinjića Bana 3, Belgrade, Serbia',
        slikaUrl: 'https://lh3.googleusercontent.com/p/AF1QipMou7iXKjSeehDTe9H9raLouVlsQzy22dEea2Vt=s1360-w1360-h1020',
        ocena: 4,
        brojOcena: 120,
        sajt: 'https://www.instagram.com/fatboys.bg/'
      },
      {
        id: 'r3',
        naziv: 'Smash Burgers',
        lokacija: 'Omladinskih brigada 18b, Belgrade, Serbia',
        slikaUrl: 'https://www.011info.com/uploads/Firma/2021/07/20/43961/3.jpg',
        ocena: 4,
        brojOcena:160,
        sajt: 'https://smashburgers.rs/'
      }
    ];
  }
  if (restorani.length === 0) {
    console.error('Nema restorana za zadati naziv hrane:', hranaNaziv);
} else {
    // Otvaranje modala sa pronađenim restoranima
    this.modalService.openModal(restorani);
}  }
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
