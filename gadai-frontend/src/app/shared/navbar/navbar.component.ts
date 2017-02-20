import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  namaAplikasi = 'Gadai Online';

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

  logout() : void {
	  this.auth.logout();
  }

}
