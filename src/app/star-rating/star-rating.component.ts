import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent  implements OnInit {
  
    @Input() rating: number=0;
    @Input() brojOcena: number = 0;
    @Input() interaktivno: boolean = true;
    @Output() ratingChanged = new EventEmitter<number>();
    stars: boolean[] = Array(5).fill(false);
    prethodnaOcena: number = 0; // Prethodna ocena

    ngOnInit() {
      console.log('Ulazni rating:', this.rating);
      this.updateStars();    }
  
    updateStars() {
      console.log('Ažuriranje zvezdica za ocenu:', this.rating);

      for (let i = 0; i < this.stars.length; i++) {
        if(this.rating!=undefined)
        this.stars[i] = i < this.rating;
      }
    }
  
    rate(index: number) {
      if (this.interaktivno) {
  
        let novaOcena = index + 1;
        console.log('nova ocena:', novaOcena);

        // Izračunaj novu prosečnu ocenu
        console.log('stara ocena:', this.rating);
        console.log('broj ocena:', this.brojOcena);


        this.rating = ((this.rating * this.brojOcena) + novaOcena) / (this.brojOcena+1) ;
        console.log('neozakruzeno:', this.rating);

        this.rating = Math.round(((this.rating * this.brojOcena) + novaOcena) / (this.brojOcena+1)) ;

        this.brojOcena++;
        console.log('postavljamo ocenu na:', this.rating);

      
        this.updateStars();
      }
    }
}
