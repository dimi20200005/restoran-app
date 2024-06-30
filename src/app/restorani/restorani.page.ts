import { Component, OnInit } from '@angular/core';
import { Restoran } from './restoran.model';
import { RestoranService } from '../restoran.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restorani',
  templateUrl: './restorani.page.html',
  styleUrls: ['./restorani.page.scss'],
})
export class RestoraniPage implements OnInit {
  restoran: Restoran[] | undefined;

  constructor(private restoranService: RestoranService,private router: Router) {
    this.restoran = this.restoranService.restorani;
  }
  ngOnInit() {
  }
  onRestoranSelected(id: string) {
    this.router.navigate(['/restorani', id]);
  }
}
