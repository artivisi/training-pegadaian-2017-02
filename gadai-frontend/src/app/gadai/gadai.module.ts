import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';
import { SimulasiComponent } from './simulasi/simulasi.component';
import { PengajuanComponent } from './pengajuan/pengajuan.component';
import { HistoryComponent } from './history/history.component';

const routingGadai : Routes = [
	{path : 'gadai/simulasi', component : SimulasiComponent},
	{path : 'gadai/pengajuan', component : PengajuanComponent},
	{path : 'gadai/history', component : HistoryComponent}
];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forChild(routingGadai),
	DropdownModule
  ],
  declarations: [SimulasiComponent, PengajuanComponent, HistoryComponent]
})
export class GadaiModule { }
