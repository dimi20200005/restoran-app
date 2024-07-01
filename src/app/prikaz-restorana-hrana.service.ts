import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Restoran } from './restorani/restoran.model';
import { RestoraniHraneComponent } from './restorani-hrane/restorani-hrane.component';

@Injectable({
  providedIn: 'root'
})
export class PrikazRestoranaHranaService {

  constructor(private modalController: ModalController) { }

  async openModal(restorani: Restoran[]) {
    const modal = await this.modalController.create({
      component: RestoraniHraneComponent,
      componentProps: {
        restorani: restorani
      }
    });
    await modal.present();
  }
}
