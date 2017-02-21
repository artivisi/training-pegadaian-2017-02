import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';
import { SimulasiComponent } from './simulasi/simulasi.component';
import { PengajuanComponent } from './pengajuan/pengajuan.component';
import { HistoryComponent } from './history/history.component';

import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/auth.guard';

const routingGadai : Routes = [
	{path : 'gadai/simulasi', component : SimulasiComponent, canActivate: [AuthGuard]},
	{path : 'gadai/pengajuan', component : PengajuanComponent, canActivate: [AuthGuard]},
	{path : 'gadai/history', component : HistoryComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
	FormsModule,
	RouterModule.forChild(routingGadai),
	DropdownModule
  ],
  declarations: [SimulasiComponent, PengajuanComponent, HistoryComponent]
})
export class GadaiModule { }
