import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulasiComponent } from './simulasi/simulasi.component';
import { PengajuanComponent } from './pengajuan/pengajuan.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimulasiComponent, PengajuanComponent, HistoryComponent]
})
export class GadaiModule { }
