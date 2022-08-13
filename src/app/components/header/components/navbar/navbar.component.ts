import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}
}
