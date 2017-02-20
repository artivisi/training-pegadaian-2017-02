import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login(){
	  console.log("Username : "+ this.username);
	  console.log("Password : "+ this.password);

	  if (this.auth.login(this.username, this.password)){
		  console.log("Login sukses");
		  this.router.navigate(["/"]);
	  } else {
		  console.log("Login gagal");
	  }
  }

}
