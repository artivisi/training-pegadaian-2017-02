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

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
	RouterModule,
	FormsModule
  ],
  providers: [ AuthService ],
  declarations: [ NavbarComponent, LoginComponent, RegistrasiComponent, FooterComponent, WelcomeComponent, LupaComponent ],
  exports: [ NavbarComponent, FooterComponent, LoginComponent, RegistrasiComponent, WelcomeComponent, LupaComponent ]
})
export class SharedModule { }
