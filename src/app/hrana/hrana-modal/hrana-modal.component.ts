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
    if (this.form.valid) {
      return;
    }
    this.modalCtrl.dismiss(
      {
        hranaData: {
          hrana: this.form.value['hrana'],
          upit: this.form.value['upit']
        }
      },
      'confirm'
    );
}
}
