import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hrana-modal',
  templateUrl: './hrana-modal.component.html',
  styleUrls: ['./hrana-modal.component.scss'],
})
export class HranaModalComponent implements OnInit {
  @ViewChild('f', { static: true })
  form!: NgForm;
  // @Input() title: string;
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
            tipHrane: this.form.value.tip
        }
      },
      'confirm'
    );
}
}
