import { Component, OnInit } from '@angular/core';
import { Hrana } from "../../hrana.model";
import { ActivatedRoute } from "@angular/router";
import { HranaService } from 'src/app/hrana.service';


@Component({
  selector: 'app-hrana-info',
  templateUrl: './hrana-info.page.html',
  styleUrls: ['./hrana-info.page.scss'],
})
export class HranaInfoPage implements OnInit {
  hrana:  Hrana = 
    {
      id: 'h1',
      naziv: 'Pasta Carbonara',
      sastojci: 'Penne testenina,Jaja,Slanina,Biber,Parmezan',
      kolicina: '550g',
      imageUrl: 'https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Spaghetti-Carbonara-Fifteen-Spatulas-12.jpg'
    }
  ;
  constructor(private route: ActivatedRoute, private hranaService: HranaService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const hranaId = paramMap.get('hranaId');
      if (hranaId !== null) {
        const foundHrana = this.hranaService.getHrana(hranaId);
        if (foundHrana !== undefined) {
          this.hrana = foundHrana;
        } else {
          // Usluga nije pronađena, možete obraditi ovu situaciju na odgovarajući način
        }
      }
    });
  }
}