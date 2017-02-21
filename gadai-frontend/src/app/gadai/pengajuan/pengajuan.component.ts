import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pengajuan } from './pengajuan.model';

@Component({
  selector: 'pengajuan-gadai',
  templateUrl: './pengajuan.component.html',
  styleUrls: ['./pengajuan.component.css']
})
export class PengajuanComponent implements OnInit {

  @Input() pengajuan: Pengajuan;
  foto: string;

  @Output() pengajuanEmitter = new EventEmitter<Pengajuan>();


  constructor() { }

  ngOnInit() {
  }

  tambahPengajuan() {
	  this.pengajuan.foto = this.foto;
	  this.pengajuanEmitter.emit(this.pengajuan);
  }

}
