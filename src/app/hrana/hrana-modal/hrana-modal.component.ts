import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Hrana } from '../hrana.model'

@Component({
  selector: 'app-hrana-modal',
  templateUrl: './hrana-modal.component.html',
  styleUrls: ['./hrana-modal.component.scss'],
})
export class HranaModalComponent implements OnInit {
  @ViewChild('f', { static: true })
  form!: NgForm;
  @Input()
  hrana!: Hrana;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {this.initializeForm(); }
  initializeForm() {
    
    if (this.hrana) {
      this.form.setValue({
        naziv: this.hrana.naziv,
        id: this.hrana.id,
        sastojci: this.hrana.sastojci,
        kolicina: this.hrana.kolicina,
        imageUrl: this.hrana.imageUrl,
        tipHrane: this.hrana.tipHrane,
        cena: this.hrana.cena,

      });
    }
  }
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
            imageUrl: this.form.value.imageUrl,
            tipHrane: this.form.value.tipHrane,
            cena: this.form.value.cena,

        }
      },
      'confirm'
    );
}
}
