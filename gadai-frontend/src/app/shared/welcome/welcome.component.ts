import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

   @ViewChild('dialogEditUser') dialogEditUser : ModalDirective

   userData : any = {};
   user = {};

  constructor(private userService : UserService) { }

  ngOnInit() {
	  this.refreshTabelUser();
  }

  refreshTabelUser() : void {
	  this.userService.getUserData()
	  .then( data => this.userData = data);
  }

  baru() : void {
	  this.user = {};
	  this.dialogEditUser.show();
  }

  edit(u) : void {
	  this.user = u;
	  this.dialogEditUser.show();
  }

  simpan() : void {
	  this.dialogEditUser.hide();
  }

}
