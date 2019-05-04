import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor() { }

  isCollapsed: Boolean = true;

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
  ngOnInit() {
    window.onscroll = function () { myFunction() };

    var header = document.getElementById("background");
    var navbar = header.offsetTop;

    header.classList.add("background")

    function myFunction() {
      if (window.pageYOffset > navbar) {
        header.classList.add("edit-background");
        header.classList.remove("background")

      } else {
        header.classList.remove("edit-background");
        header.classList.add("background")
      }
    }

  }
}
