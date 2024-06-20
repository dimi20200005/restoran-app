import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-hrana',
  templateUrl: './hrana.page.html',
  styleUrls: ['./hrana.page.scss'],
})
export class HranaPage implements OnInit, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
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