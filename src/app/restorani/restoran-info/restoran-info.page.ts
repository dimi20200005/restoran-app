import { Component, Input, OnInit } from '@angular/core';
import { Restoran } from '../restoran.model';
import { ActivatedRoute } from '@angular/router';
import { RestoranService } from 'src/app/restoran.service';

@Component({
  selector: 'app-restoran-info',
  templateUrl: './restoran-info.page.html',
  styleUrls: ['./restoran-info.page.scss'],
})


export class RestoranInfoPage implements OnInit {
  @Input() restoran: Restoran =  {
    id: 'r1',
    naziv: 'Restoran A',
    lokacija: 'Opis restorana A',
    slikaUrl: 'path/to/imageA.jpg',
    ocena: 4,
    brojOcena: 130,
    sajt: 'https://burgerhousebros.com/'
  };
  constructor(private route: ActivatedRoute, private restoranService: RestoranService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const restoranId = paramMap.get('id');
      if (restoranId !== null) {
        const foundResotran = this.restoranService.getRestoran(restoranId);
        if (foundResotran !== undefined) {
          this.restoran = foundResotran;
        } else {
          
        }
      }
    });
  }

}
