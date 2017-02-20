import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  sudahLogin() : boolean {
	  return localStorage.getItem("userInfo") != null
	  && localStorage.getItem("token") != null;
  }

  login (username : string, password : string) : boolean {
	  if("endy" == username && "123" == password){
		  let userInfo = {
			  fullname : "Endy Muhardin",
			  username : "endy"
		  };

		  localStorage.setItem("userInfo", JSON.stringify(userInfo));
		  localStorage.setItem("token", "abcd1234");
		  return true;
	  }
	  return false;
  }

  logout () : void {
	  localStorage.removeItem("userInfo");
	  localStorage.removeItem("token");
  }

  getUserInfo(){
	  return JSON.parse(localStorage.getItem("userInfo"));
  }

}
