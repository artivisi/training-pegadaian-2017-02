import { Component, OnInit, Input } from '@angular/core';
import { Pengajuan } from './pengajuan.model';

@Component({
  selector: 'pengajuan-gadai',
  templateUrl: './pengajuan.component.html',
  styleUrls: ['./pengajuan.component.css']
})
export class PengajuanComponent implements OnInit {

  @Input() pengajuan: Pengajuan;

  pilihanCabang = [
  	{ id : "abcd001", nama : "Cabang Jakarta Timur"},
	{ id : "abcd002", nama : "Cabang Jakarta Pusat"},
	{ id : "abcd003", nama : "Cabang Jakarta Barat"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
