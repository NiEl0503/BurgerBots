import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''
  senha: string = ''
  public errorMessage: string | undefined;
  subscription: Subscription = new Subscription()

  constructor(
    private readonly service: LoginService,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService
  ) { }

  onLoginButtonClick() {
   let response = this.service.executeLogin(this.email, this.senha)
   console.log(response);
  }
}