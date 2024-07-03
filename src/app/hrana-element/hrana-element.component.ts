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
    userId:'',
    tipHrane:'',
    cena: 0
  };

  constructor(private alertCtrl: AlertController,private modalService: PrikazRestoranaHranaService) { }

  ngOnInit(){
    
  }
  openModal(hrana: Hrana) {
    // Simulating restorani data for demonstration purposes
    let restorani: Restoran[] = [];
   
      if (hrana.tipHrane === 'Italijanska') {
        restorani=[
          {
            id: 'r5',
            naziv: 'Casa Nova',
            lokacija: 'Uroša Martinovića 31, Novi Beograd',
            slikaUrl: 'https://www.casanova.rs/img/gallery/4.jpg',
            ocena: 3,
            brojOcena: 125,
      
            sajt: 'https://www.casanova.rs/'
          },
          {
            id: 'r6',
            naziv: 'Amci',
            lokacija: 'Nebojšina 8, Beograd',
            slikaUrl: 'https://www.011info.com/uploads/Firma/2011/12/26/18397/2a.jpg',
            ocena: 4.7,
            brojOcena: 89,
            sajt: 'https://www.amicirestoran.rs/'
          },
          {
            id: 'r7',
            naziv: 'Pizza bar',
            lokacija: 'Bulevar Mihajla Pupina 165v, Beograd',
            slikaUrl: 'https://pizzabar.rs/wp-content/uploads/2022/03/HI_MIC_0424-1.jpg',
            ocena: 4.1,
            brojOcena: 190,
            sajt: 'https://pizzabar.rs/'
          },
          {
            id: 'r8',
            naziv: 'Bosiljak Pizza Napoletana',
            lokacija: 'Bežanijska 36, Beograd 11080',
            slikaUrl: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/cf/c0/03/bosiljak-pizza-napoletana.jpg',
            ocena: 4.8,
            brojOcena: 155,
            sajt: 'https://www.bosiljakpizza.com/'
          },
          {
      
            id: 'r9',
            naziv: 'Majstor i Margarita',
            lokacija: 'Balkanska 16, Belgrade Serbia',
            slikaUrl: 'https://www.dizajnenterijera.rs/wp-content/uploads/2023/08/picerija-majstor-margarita-beograd-zabriskie-02.jpg',
            ocena: 4.4,
            brojOcena:150,
            sajt: 'https://majstorimargarita.rs/'
          }
    ]
    }

   if(hrana.tipHrane === 'Američka'){
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
  
  if(hrana.tipHrane === 'Meksička'){
    restorani=[
      {
        id: 'r10',
        naziv: 'Burrito Madre',
        lokacija: 'Terazije 27, Beograd',
        slikaUrl: 'https://www.bigcenters.rs/beograd/wp-content/uploads/sites/3/2022/05/burrito-madre-beograd-big-fashion-beograd-1.jpg',
        ocena: 4.2,
        brojOcena:100,
        sajt: 'https://www.burritomadre.com/burito'
      },
      {
  
        id: 'r11',
        naziv: 'Buena Vida',
        lokacija: 'Bulevar Milutina Milankovića 1i,11070, Beograd, Serbia',
        slikaUrl: 'https://assets-global.website-files.com/61cf014bfba51e62fad747d1/61cf014bfba51e5664d74844_IMG_2358.jpg',
        ocena: 4.6,
        brojOcena:100,
        sajt: 'https://www.buenavidarestaurant.com/'
      },
    ];
  }
  
 
  if (restorani.length === 0) {
    console.error('Nema restorana za zadati naziv hrane:', hrana.naziv);
} else {
    // Otvaranje modala sa pronađenim restoranima
    this.modalService.openModal(restorani,hrana);
}  }
  

}
