import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistrasiComponent } from './shared/registrasi/registrasi.component';

const routingAplikasi : Routes = [
	{path : 'login', component : LoginComponent},
	{path : 'registrasi', component : RegistrasiComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(routingAplikasi),
	SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }