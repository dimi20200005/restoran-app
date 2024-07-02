import { Component, OnInit } from '@angular/core';
import {Hrana} from "../hrana.model";
import { HranaService } from 'src/app/hrana.service';
import { ModalController } from '@ionic/angular';
import { HranaModalComponent } from '../hrana-modal/hrana-modal.component';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.page.html',
  styleUrls: ['./pretraga.page.scss'],
})
export class PretragaPage implements OnInit {
  hrana: Hrana[];
  searchTerm: string = ''; // Deklaracija searchTerm
  filteredHrana: Hrana[] = [];
  selectedType: string = ''; 

  constructor(private hranaService: HranaService,private modalCtrl: ModalController,public authService: AuthService) {
    this.hrana = this.hranaService.hrana;
  }

  ngOnInit() {
    this.filteredHrana = this.hrana;
  }
  filterItems() {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredHrana = this.hrana.filter(hrana =>
      hrana.naziv.toLowerCase().includes(searchTermLower) &&
      (this.selectedType === '' || hrana.tipHrane === this.selectedType)
    );
  }



  filterByType(type: string) {
    this.selectedType = type;
    this.filterItems();
  }


  openModal(){
  this.modalCtrl.create({
  component: HranaModalComponent,
  componentProps: {title: "Upit za hranu"}

  }).then((modal: HTMLIonModalElement)=>{
    modal.present();
    return modal.onDidDismiss();
  }).then((resultData) =>{
    if (resultData.role === 'confirm'){
      console.log(resultData);
      this.hranaService.addHrana(resultData.data.hranaData.naziv, resultData.data.hranaData.upit).subscribe((res: any)=>{
        console.log(res);
      });
    }

  }

  );
 }
}