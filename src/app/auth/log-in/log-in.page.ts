import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  defaultEmail: string = "";
  defaultPass: string = "";
  isLoading = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.defaultEmail = 'Dimi@gmail.com';
    this.defaultPass = '1234567';
  }

  onLogIn(logInForm: NgForm) {
    this.isLoading = true;
    console.log(logInForm);
    this.authService.logIn(logInForm.value).subscribe(resData =>{
      console.log('prijava uspesna')
      console.log(resData)
      this.isLoading = false;
      this.router.navigateByUrl('/hrana/tabs/pretraga');
    });
  }

}
