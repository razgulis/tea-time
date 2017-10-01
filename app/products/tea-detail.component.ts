import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ITea } from './tea';

@Component({
	templateUrl: 'app/products/tea-detail.component.html',
	styleUrls: ['app/products/tea-detail.component.css']
})
export class TeaDetailComponent implements OnInit {
	pageTitle: string = 'Tea Detail';
	tea: ITea;

	constructor(
		private _route: ActivatedRoute,
		private _router : Router
	) { }

	ngOnInit() {
		let id = +this._route.snapshot.params['id'];
		this.pageTitle += `: ${id}`;
		this.tea = {
			"teaId" : id,
			"teaName" : "Placeholder Name",
			"teaDescription" : "",
			"teaType" : "Black",
			"teaRating" : 3.2,
			"teaRatingVotes" : 10,
			"teaAvailability" : true,
			"imageUrl" : "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
		}
	}

	onBack() : void {
		this._router.navigate(['/teas']);
	}
}
