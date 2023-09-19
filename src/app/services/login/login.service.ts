import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router
  ) {}

  async executeLogin(email: string, senha: string) {
    try {
      const response: any = await this.http.post('http://burger-queen-api-mock-mauve.vercel.app/login', {
        email: email,
        password: senha,
      }).toPromise();
  
      if (response.accessToken && response.user && response.user.role) {
        this.localStorageService.setItem('user_data', response.user);
        this.localStorageService.setItem('accessToken', response.accessToken);
  
        switch (response.user.role) {
          case 'cozinha':
            this.router.navigate(['/cozi']);
            break;
          case 'admin':
            this.router.navigate(['/admin']);
            break;
          case 'garcom':
            this.router.navigate(['/garcom']);
            break;
          default:
            console.error('Função de usuário inválida:', response.user.role);
        }
      }
    } catch (error) {
      console.error('falha no login:', error);
  
      const err = error as any;
  
      if (err.status === 400) {
        console.log('Senha incorreta');
      } else if (err.status === 404) {
        console.log('Usuário não encontrado');
      }
    }
  }  
}
