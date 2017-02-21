import { Component, OnInit } from '@angular/core';

import { Pengajuan } from '../pengajuan/pengajuan.model';

@Component({
  selector: 'app-simulasi',
  templateUrl: './simulasi.component.html',
  styleUrls: ['./simulasi.component.css']
})
export class SimulasiComponent implements OnInit {

  pengajuan : Pengajuan = new Pengajuan();

  pilihanKaratase = [
  	{ value : "18", label : "18 Karat"},
	{ value : "22", label : "22 Karat"},
	{ value : "24", label : "24 Karat"}
  ];

  pilihanCabang = [
  	{ id : "abcd001", nama : "Cabang Jakarta Timur"},
	{ id : "abcd002", nama : "Cabang Jakarta Pusat"},
	{ id : "abcd003", nama : "Cabang Jakarta Barat"}
  ];

  daftarPengajuan : Pengajuan[] = [];
  totalNilai : number = 0;

  constructor() { }

  ngOnInit() {
  }

  lanjutkanPengajuan() : void {
	  this.pengajuan.nilai = 550000 * this.pengajuan.beratBersih;
  }

  tambahkanPengajuanKeTabel(p : Pengajuan){
	  this.daftarPengajuan.push(p);
	  this.totalNilai = this.totalNilai + p.nilai;
	  this.pengajuan = new Pengajuan();
  }

}
