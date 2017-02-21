import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Pengajuan } from './pengajuan.model';

@Component({
  selector: 'pengajuan-gadai',
  templateUrl: './pengajuan.component.html',
  styleUrls: ['./pengajuan.component.css']
})
export class PengajuanComponent implements OnInit {

  @Input() pengajuan: Pengajuan;
  @Input() fileUploader:FileUploader;

  @Output() pengajuanEmitter = new EventEmitter<Pengajuan>();

  constructor() { }

  ngOnInit() {
  }

  tambahPengajuan() {
	  this.pengajuanEmitter.emit(this.pengajuan);
  }

}
