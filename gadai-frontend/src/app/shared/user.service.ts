import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserService {

  constructor(private authHttp: AuthHttp) { }

  getUserData() : Promise<any> {
	  let url = "/api/user";
	  return this.authHttp.get(url).toPromise()
	  .then(hasil => {
		  let data = hasil.json();
		  console.log(data);
		  return data;
	    })
	  .catch(error => {
		  console.log(error);
		  return error;
		  });
  }

}
