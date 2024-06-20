import { Component, OnInit } from '@angular/core';
import {Hrana} from "../hrana.model";
import { HranaService } from 'src/app/hrana.service';
import { ModalController } from '@ionic/angular';
import { HranaModalComponent } from '../hrana-modal/hrana-modal.component';


@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.page.html',
  styleUrls: ['./pretraga.page.scss'],
})
export class PretragaPage implements OnInit {
  hrana: Hrana[];

  constructor(private hranaService: HranaService,private modalCtrl: ModalController) {
    this.hrana = this.hranaService.hrana;
  }

  ngOnInit() {
  }
 openModal(){
  this.modalCtrl.create({
component: HranaModalComponent,

  }).then((modal: HTMLIonModalElement)=>{
    modal.present();
    return modal.onDidDismiss();
  });
 }
}