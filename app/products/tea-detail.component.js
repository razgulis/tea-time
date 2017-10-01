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
var router_1 = require("@angular/router");
var TeaDetailComponent = (function () {
    function TeaDetailComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Tea Detail';
    }
    TeaDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ": " + id;
        this.tea = {
            "teaId": id,
            "teaName": "Placeholder Name",
            "teaDescription": "",
            "teaType": "Black",
            "teaRating": 3.2,
            "teaRatingVotes": 10,
            "teaAvailability": true,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        };
    };
    TeaDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/teas']);
    };
    return TeaDetailComponent;
}());
TeaDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/tea-detail.component.html',
        styleUrls: ['app/products/tea-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], TeaDetailComponent);
exports.TeaDetailComponent = TeaDetailComponent;
//# sourceMappingURL=tea-detail.component.js.map