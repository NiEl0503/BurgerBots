import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private readonly service: LoginService,
    private readonly router: Router
  ) { }

  onLoginButtonClick() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;

    this.service.login(email, senha).subscribe(
      (response: any) => {
        console.log(response);
        // Aquí, si el inicio de sesión es exitoso, redireccionamos al usuario a otra página (por ejemplo, 'home').
        if (response && response.success) {
          this.router.navigate(['/home']);
        }
      },
      (error: any) => {
        console.error('Error en inicio de sesión:', error);
        // Aquí puedes mostrar un mensaje de error al usuario si el inicio de sesión falla.
      }
    );
  }

}
