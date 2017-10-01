"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tea_service_1 = require("./tea.service");
var TeaListComponent = (function () {
    function TeaListComponent(_teaService) {
        this._teaService = _teaService;
        this.pageTitle = 'Tea List';
        this.imageWidth = 64;
        this.imageMargin = 2;
        this.showImage = true;
        this.newTeaName = null;
        this.newTeaType = null;
        // newTeaRating: string;
        // newTeaAvailable: string;
        this.newTeaDescription = null;
    }
    TeaListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    TeaListComponent.prototype.addNewTea = function (modal) {
        var _this = this;
        if (this.newTeaName &&
            this.newTeaType &&
            this.newTeaDescription &&
            !this.teas.find(function (myObj) { return myObj.teaName == _this.newTeaName; })) {
            var tempTea = {
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
            // this._teaService.saveTea(tempTea)
            // 	.subscribe(
            // 		error => this.errorMessage = <any>error);
            modal.close();
        }
    };
    TeaListComponent.prototype.pickRandomTea = function () {
        this.textRandomTea = this.teas[this.getRandomInt(0, this.teas.length - 1)].teaName;
    };
    TeaListComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    TeaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('In OnInit');
        this._teaService.getTeas()
            .subscribe(function (teas) { return _this.teas = teas; }, function (error) { return _this.errorMessage = error; });
    };
    TeaListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Tea List: ' + message;
    };
    return TeaListComponent;
}());
TeaListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './tea-list.component.html',
        styleUrls: ['tea-list.component.css']
    }),
    __metadata("design:paramtypes", [tea_service_1.TeaService])
], TeaListComponent);
exports.TeaListComponent = TeaListComponent;
//# sourceMappingURL=tea-list.component.js.map