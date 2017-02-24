import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';
import { ProgressDialogService } from '../progress-dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  constructor(private auth : AuthService, private router : Router, private progressService : ProgressDialogService) { }

  ngOnInit() {
  }

  login(){
	  console.log("Username : "+ this.username);
	  console.log("Password : "+ this.password);

	  this.progressService.showDialog("Memeriksa username dan password");

	  this.auth.login(this.username, this.password)
	  .then(sukses => {
		  this.progressService.hideDialog();
		  if(sukses) {
			  console.log("Login berhasil");
			  this.router.navigate(["/"]);
		  } else {
			  console.log("Login gagal");
		  }})
	  .catch(error => {
		  console.log(error);
		  this.progressService.hideDialog();
		  });
  }

}
