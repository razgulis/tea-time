"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_modal_1 = require("ng2-modal");
var tea_list_component_1 = require("./tea-list.component");
var tea_detail_component_1 = require("./tea-detail.component");
//import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
var tea_guard_service_1 = require("./tea-guard.service");
var tea_service_1 = require("./tea.service");
var tea_filter_pipe_1 = require("./tea-filter.pipe");
var shared_module_1 = require("../shared/shared.module");
var TeaModule = (function () {
    function TeaModule() {
    }
    return TeaModule;
}());
TeaModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'teas', component: tea_list_component_1.TeaListComponent },
                { path: 'teas/:id',
                    canActivate: [tea_guard_service_1.TeaGuardService],
                    component: tea_detail_component_1.TeaDetailComponent },
            ]),
            shared_module_1.SharedModule,
            ng2_modal_1.ModalModule
        ],
        declarations: [
            tea_list_component_1.TeaListComponent,
            tea_detail_component_1.TeaDetailComponent,
            tea_filter_pipe_1.TeaFilterPipe,
        ],
        providers: [
            tea_service_1.TeaService,
            tea_guard_service_1.TeaGuardService
        ]
    })
], TeaModule);
exports.TeaModule = TeaModule;
//# sourceMappingURL=tea.module.js.map