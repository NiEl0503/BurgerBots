import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient ) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/users')
      .subscribe(users => {
        this.users = users;
      });
  }
}