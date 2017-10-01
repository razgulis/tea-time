import { Injectable } from '@angular/core'
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'

@Injectable()
export class TeaGuardService implements CanActivate {

	constructor(private _router : Router) { }

	canActivate(route : ActivatedRouteSnapshot) : boolean {
		let id = +route.url[1].path;
		if (isNaN(id) || id < 0) {
			alert("Invalid product Id");
			this._router.navigate(['/teas']);
			return false;
		}
		return true;
	}
}