import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Restoran } from './restorani/restoran.model';
import { RestoraniHraneComponent } from './restorani-hrane/restorani-hrane.component';
import { Hrana } from './hrana/hrana.model';

@Injectable({
  providedIn: 'root'
})
export class PrikazRestoranaHranaService {

  constructor(private modalController: ModalController) { }

  async openModal(restorani: Restoran[],hrana: Hrana) {
    const modal = await this.modalController.create({
      component: RestoraniHraneComponent,
      componentProps: {
        restorani: restorani,
        hrana: hrana
      }
    });
    await modal.present();
  }
}
