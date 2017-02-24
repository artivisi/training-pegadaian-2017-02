import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserService {

  constructor(private authHttp: AuthHttp) { }

  getUserData() : Promise<any> {
	  let url = "/api/user";
	  return this.authHttp.get(url).toPromise()
	  .then(hasil => {
		  return hasil.json();
	    })
	  .catch(error => {
		  console.log(error);
		  return error;
		  });
  }

  simpan(user) : Promise<boolean> {
	  let url = "/api/user";
	  if(user.id != null){
	  return this.authHttp.put(url, user).toPromise()
	  .then(hasil => {
		  return true;
	    })
	  .catch(error => {
		  console.log(error);
		  return false;
		  });
	  } else {
		  return this.authHttp.post(url, user).toPromise()
		  .then(hasil => {
			  return true;
		    })
		  .catch(error => {
			  console.log(error);
			  return false;
			  });
	  }
  }

}
