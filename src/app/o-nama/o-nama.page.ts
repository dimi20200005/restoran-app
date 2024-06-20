import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-o-nama',
  templateUrl: './o-nama.page.html',
  styleUrls: ['./o-nama.page.scss'],
})
export class ONamaPage implements OnInit, OnDestroy {

  constructor(private menuCtrl: MenuController) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  openMenu() {
    this.menuCtrl.open();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}