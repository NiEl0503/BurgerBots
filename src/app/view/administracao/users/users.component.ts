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
  
    constructor(
      private userService: UsersService,
      private localStorageService: LocalStorageService,
    ) { }

    ngOnInit() {
      const accessToken = this.localStorageService.getItem('accessToken');
      if (accessToken) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
        this.userService.getusers().subscribe((data: any) => {
          this.users = data;
          console.log(this.users);
        });
      }
    }
  }
