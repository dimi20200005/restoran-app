import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent  implements OnInit {
  
  @Input() rating: number | undefined = 0;
  @Input() brojOcena: number = 0;
    @Input() interaktivno: boolean = true;
    @Output() ratingChanged = new EventEmitter<number>();
    stars: number[] = Array(5).fill(0);
    prethodnaOcena: number = 0; // Prethodna ocena

    ngOnInit() {
      console.log('Ulazni rating:', this.rating);
      this.updateStars();    }
  
    updateStars() {
      console.log('Ažuriranje zvezdica za ocenu:', this.rating);

      if (this.rating !== undefined) {
        for (let i = 0; i < this.stars.length; i++) {
          if (i < Math.floor(this.rating)) {
            this.stars[i] = 1;
          } else if (i === Math.floor(this.rating)) {
            this.stars[i] = this.rating % 1;
          } else {
            this.stars[i] = 0;
          }
        }
      }
      console.log('Stars array:', this.stars); 
    }
  
  
    rate(index: number) {
      if (this.interaktivno) {
  
        let novaOcena = index + 1;
        console.log('nova ocena:', novaOcena);

        
        console.log('stara ocena:', this.rating);
        console.log('broj ocena:', this.brojOcena);


        this.rating = ((this.rating || 0) * this.brojOcena + novaOcena) / (this.brojOcena + 1);

        this.brojOcena++;
        console.log('postavljamo ocenu na:', this.rating);

      
        this.updateStars();
        this.ratingChanged.emit(this.rating);

      }
    }
    getBackgroundPosition(index: number): string {
      const starWidth = this.stars[index] * 100;
      return `${100 - starWidth}%`;
    }
}
