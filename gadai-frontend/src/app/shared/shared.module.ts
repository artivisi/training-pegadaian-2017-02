import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LupaComponent } from './lupa/lupa.component';

import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AuthService } from './auth.service';
import { UserService } from './user.service';

function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
	  tokenName: 'access_token'
	  }), http, options);
}

@NgModule({
  imports: [
    CommonModule,
	RouterModule,
	FormsModule,
	HttpModule
  ],
  providers: [ AuthService , UserService, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  declarations: [ NavbarComponent, LoginComponent, RegistrasiComponent, FooterComponent, WelcomeComponent, LupaComponent ],
  exports: [ NavbarComponent, FooterComponent, LoginComponent, RegistrasiComponent, WelcomeComponent, LupaComponent ]
})
export class SharedModule { }
