import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ITea } from './tea';

@Injectable()
export class TeaService {
	private _productUrl = 'api/products/teas.json';

	constructor(private _http: Http){}

	getTeas(): Observable<ITea[]> {
		return this._http.get(this._productUrl)
			.map((response: Response) => <ITea[]> response.json())
			.do(data => console.log('All: ' + JSON.stringify(data)))
			.catch(this.handleError);
	}

	saveTea(tea : any): Observable<ITea[]> {
    	let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
    	return this._http.put(this._productUrl, tea, options)
            .map((response: Response) => <ITea[]> response.json())
            .catch(this.handleError);
    }

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server Error');
	}
}