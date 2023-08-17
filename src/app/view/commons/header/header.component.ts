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

  isGarconPage(): boolean {
    const currentUrl = this.router.url;
    return this.router.url.includes('/garcom') || currentUrl.includes('/cozi') || currentUrl.includes('/admin');
  }
}
