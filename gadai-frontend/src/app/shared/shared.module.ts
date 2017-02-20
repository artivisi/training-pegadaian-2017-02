import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ NavbarComponent, LoginComponent, RegistrasiComponent, FooterComponent ],
  exports: [ NavbarComponent, FooterComponent ]
})
export class SharedModule { }
