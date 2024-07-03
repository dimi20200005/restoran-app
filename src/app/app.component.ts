import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  userEmail$: Observable<string> | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userEmail$ = this.authService.userEmail.pipe(
      map(email => {
        if (email) {
          const namePart = email.split('@')[0];
          return namePart.charAt(0).toUpperCase() + namePart.slice(1);
        } else {
          return '';
        }
      })
    );
  }
}
