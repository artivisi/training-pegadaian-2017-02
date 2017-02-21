import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { DropdownModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap';

import { SharedModule } from './shared/shared.module';
import { GadaiModule } from './gadai/gadai.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistrasiComponent } from './shared/registrasi/registrasi.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { LupaComponent } from './shared/lupa/lupa.component';

import { AuthGuard } from './shared/auth.guard';
import { ProgressDialogService } from './shared/progress-dialog.service';

const routingAplikasi : Routes = [
	{path : 'login', component : LoginComponent},
	{path : 'registrasi', component : RegistrasiComponent},
	{path : 'lupa', component : LupaComponent},
	{path : 'gadai', redirectTo : "/gadai", pathMatch: "full"},
	{path : '**', component : WelcomeComponent}
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
	DropdownModule.forRoot(),
	ModalModule.forRoot(),
	ProgressbarModule.forRoot(),
	SharedModule,
	GadaiModule
  ],
  providers: [ AuthGuard, ProgressDialogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
