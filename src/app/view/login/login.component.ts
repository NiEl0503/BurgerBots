import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(
  private readonly service: LoginService
) {
  this.service.login('dunes@gmail.com','123456789').subscribe(
    (response:any) => {
      console.log(response);
      
    }
  )
}

}
