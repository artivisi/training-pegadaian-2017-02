import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProgressDialogService {

	private subject = new Subject<any>();

	constructor() { }

	showDialog(message: string) {
		this.subject.next({ label: message, action: "show" });
	}

	hideDialog() {
		this.subject.next({ action : "hide" });
	}

	getObservable() : Observable<any> {
		return this.subject.asObservable();
	}
}
