"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Happy Tea Time with Happy Tea Friends';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "<div class=\"outer-shell\">\n\t\t\t\t\t<h1>\n\t\t\t\t\t\t{{pageTitle}}\n\t\t\t\t\t\t<img src=\"app/assets/images/happy-tea-friends.jpg\" style=\"width:128px;height:128px\">\n\t\t\t\t\t</h1>\n\t\t\t\t\t<pm-products></pm-products>\n\t\t\t\t</div>",
        providers: [product_service_1.TeaService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map