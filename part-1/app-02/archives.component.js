System.register(['angular2/core', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1;
    var AlbumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent() {
                    this.isLoading = true;
                    this.archives = [
                        { year: 2016, month: 1 },
                        { year: 2016, month: 2 },
                        { year: 2016, month: 3 },
                        { year: 2016, month: 4 },
                    ];
                }
                AlbumsComponent.prototype.ngOnInit = function () {
                };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Archives</h1>\n        <div *ngIf=\"isLoading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n        <ul>\n            <li *ngFor=\"#archive of archives\">\n                <a [routerLink]=\"['Archive', {year: archive.year, month: archive.month}]\">\n                  {{ archive.year }} / {{ archive.month }}\n                </a>\n            </li>\n        </ul>\n    ",
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlbumsComponent);
                return AlbumsComponent;
            }());
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});
//# sourceMappingURL=archives.component.js.map