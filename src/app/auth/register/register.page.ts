import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup; // Dodajemo '!' modifikator
  errorMessage: string = '';

  
  constructor(private authService: AuthService,private loadingCtrl: LoadingController,private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(7)])
    })

}
onRegister() {
  this.loadingCtrl.create({message: "Registrating..."}).then((loadingEl: HTMLIonLoadingElement)=>{
    loadingEl.present();
    this.authService.register(this.registerForm.value).subscribe( resData =>
      {
        console.log('Registracija uspela');
        console.log(resData);
        loadingEl.dismiss();
        this.router.navigateByUrl('/hrana');
        this.errorMessage = '';
      },error => {
        // Handle error
        this.errorMessage = this.authService.handleError(error);
      }
    )
  })
}
}
