import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: any[] = [];
  newUser: any = { email: '', password: '', role: '' };

  constructor(
    private userService: UsersService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    const accessToken = this.localStorageService.getItem('accessToken');
    if (accessToken) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
      this.userService.getusers().subscribe((data: any) => {
        this.users = data;
        console.log(this.users);
      });
    }
  }

  deletarUsuario(user: any) {
    const confirmarExclusao= confirm(`Tem certeza de que deseja excluir o usuário ${user.email}?`);
    if (confirmarExclusao) {
      this.userService.deleteUser(user.id).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  adicionarUsuario() {
    this.userService.addUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { email: '', password: '', role: '' };      
    });
  }
}
