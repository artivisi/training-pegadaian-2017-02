import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
	RouterModule
  ],
  declarations: [ NavbarComponent, LoginComponent, RegistrasiComponent, FooterComponent, WelcomeComponent ],
  exports: [ NavbarComponent, FooterComponent, LoginComponent, RegistrasiComponent, WelcomeComponent ]
})
export class SharedModule { }
