import { Component, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/modal';

import { ProgressDialogService } from './shared/progress-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild('progressDialog') progressDialog : ModalDirective

	progressMessage : string;
	subscription: Subscription;

    constructor(private progressService : ProgressDialogService){}

	ngOnInit(){
		this.subscription = this.progressService.getObservable()
		.subscribe( message => {
			console.log(message);
			if(message && message.action && "show" == message.action){
				this.showProgressDialog(message.label);
			} else {
				this.hideProgressDialog();
			}
		});
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

	showProgressDialog(x : string) {
		this.progressMessage = x;
		this.progressDialog.show();
	}

	hideProgressDialog() {
		this.progressDialog.hide();
	}
}
