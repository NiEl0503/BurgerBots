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
  editMode = false;

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

  deleteUsers(user: any) {
    const confirmarExclusao = confirm(`Tem certeza de que deseja excluir o usuário ${user.email}?`);
    if (confirmarExclusao) {
      this.userService.deleteUser(user.id).subscribe(
        () => {
          this.loadUsers();
        },
        error => {
          console.error('Erro ao excluir usuario:', error);
        }
      );
    }
  }
  

  addUsers() {
    this.userService.addUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { email: '', password: '', role: '' };      
    });
  }

  editUsers(user: any) {
    console.log('Editing user:', user);
    const userToEdit = { ...user };
    this.newUser = userToEdit;
    this.editMode = true;
  }
  
  saveEdit() {
    console.log('Saving edited user:', this.newUser);
    this.userService.updateUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { email: '', password: '', role: '' };
      this.editMode = false;
    });
  }
  
}
