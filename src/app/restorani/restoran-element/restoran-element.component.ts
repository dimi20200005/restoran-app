import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restoran } from '../restoran.model';

@Component({
  selector: 'app-restoran-element',
  templateUrl: './restoran-element.component.html',
  styleUrls: ['./restoran-element.component.scss'],
})
export class RestoranElementComponent  implements OnInit {
  @Input() restoran: Restoran =  {
    id: 'r1',
    naziv: 'Restoran A',
    lokacija: 'Opis restorana A',
    slikaUrl: 'path/to/imageA.jpg',
    ocena: 4,
    brojOcena: 10,
    sajt: 'https://burgerhousebros.com/'
  };
  @Output() selected = new EventEmitter<void>();

  onSelected() {
    this.selected.emit();
  }


  constructor() { }

  ngOnInit() {}

}
