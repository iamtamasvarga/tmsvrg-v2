import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarOpen!: boolean;
  navbarOpenAnimation: boolean = false;
  navbarCloseAnimation: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;

    if(this.navbarOpen)
    {
      this.navbarCloseAnimation = false;
      this.navbarOpenAnimation = true;
    }
    else {
      this.navbarCloseAnimation = true;
      this.navbarOpenAnimation = false;
    }
  }

  goTo(route: string): void
  {
    this.toggleNavbar();
    this.router.navigateByUrl(route);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
