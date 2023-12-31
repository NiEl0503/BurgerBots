import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  element(): boolean {
    const currentUrl = this.router.url;
    return this.router.url.includes('/garcom') || currentUrl.includes('/cozi') || currentUrl.includes('/admin');
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user_data');
    this.router.navigate(['']);
  }
}
