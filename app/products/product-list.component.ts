import { Component, OnInit } from '@angular/core';
import { ITea } from './product';
import { TeaService } from './product.service';

@Component({
	selector: 'pm-products',
	moduleId: module.id,
	templateUrl: 'product-list.component.html',
	styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
	pageTitle: string = 'Tea List';
	imageWidth: number = 64;
	imageMargin: number = 2;
	showImage: boolean = true;
	listFilter: string;
	errorMessage: string;
	teas: ITea[];
	textRandomTea: string;

	newTeaName: string = null;
	newTeaType: string = null;
	// newTeaRating: string;
	// newTeaAvailable: string;
	newTeaDescription: string = null;

	constructor(private _teaService: TeaService) {
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	// TODO: rewrite adding new tea as a modal with ability to upload thumbnail images
	addNewTea(): void {
		if (this.newTeaName &&
			this.newTeaType &&
			this.newTeaDescription &&
			!this.teas.find(myObj => myObj.teaName == this.newTeaName)) {

			let tempTea = {
				"teaId": this.teas.length + 1,
        		"teaName": this.newTeaName,
        		"teaType": this.newTeaType,
        		"teaDescription": this.newTeaDescription,
        		"teaRating": 2.5,
		        "teaRatingVotes": 0,
		        "teaAvailability": true,
		        "imageUrl": this.teas.length % 2 == 1 ?
		        	"https://openclipart.org/image/64px/svg_to_png/170029/jubilee-teapot.png" :
		        	"https://openclipart.org/image/64px/svg_to_png/170033/jubilee-teapot-red.png"
		    };

			this.newTeaName = null;
			this.newTeaType = null;
			this.newTeaDescription = null;

			this.teas.push(tempTea);
			this._teaService.saveTea(tempTea)
				.subscribe(
					error => this.errorMessage = <any>error);
		}
	}

	pickRandomTea(): void {
		this.textRandomTea = this.teas[this.getRandomInt(0,this.teas.length - 1)].teaName;
	}

	getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

	ngOnInit(): void {
		console.log('In OnInit');
		this._teaService.getTeas()
			.subscribe(
				teas => this.teas = teas,
				error => this.errorMessage = <any>error);
	}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Product List: ' + message;
	}
}