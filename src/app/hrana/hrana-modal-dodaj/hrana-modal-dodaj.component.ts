import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hrana-modal',
  templateUrl: './hrana-modal-dodaj.component.html',
  styleUrls: ['./hrana-modal-dodaj.component.scss'],
})
export class HranaModalDodajComponent implements OnInit {
  @ViewChild('f', { static: true })
  form!: NgForm;
   //@Input() title: string;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }
  onCancel() {
    this.modalCtrl.dismiss();
  }
  dodajUpit() {
    
    this.modalCtrl.dismiss(
      {
        hranaData: {
            naziv: this.form.value.naziv,
            sastojci: this.form.value.sastojci,
            kolicina: this.form.value.kolicina,
            imageUrl: this.form.value.url,
            tipHrane: this.form.value.tip,
            cena: this.form.value.cena,
        }
      },
      'confirm'
    );
}
}