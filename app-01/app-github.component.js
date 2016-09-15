System.register(['angular2/core', './github.service', 'angular2/http', 'rxjs/add/observable/forkJoin'], function(exports_1, context_1) {
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
    var core_1, github_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_gitHubService) {
                    this._gitHubService = _gitHubService;
                    this.isLoading = true;
                    this.user = {};
                    this.followers = [];
                    this.username = 'octocat';
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._gitHubService
                        .getProfile(this.username)
                        .subscribe(function (res) {
                        _this.user = res[0];
                        _this.followers = res[1];
                    }, null, function () {
                        _this.isLoading = false;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x muted\"></i>\n    <div *ngIf=\"!isLoading\" class=\"container\">\n    <div class=\"col-sm-2\">\n      <h2>@{{ user.login }}</h2>\n      <img class=\"avatar\" src=\"{{ user.avatar_url }}\">\n    </div>\n    <div class=\"col-sm-1\"></div>\n    <div class=\"col-sm-9\">\n      <h3>Followers</h3>\n      <br class=\"clearfix\">\n      <div *ngFor=\"#follower of followers\" class=\"media pull-left\">\n        <div class=\"media-left text-centered\"><a href=\"#\">\n          <img class=\"media-object avatar small\" src=\"{{ follower.avatar_url}}\">\n          {{ follower.login }}\n        </a></div>\n      </div>\n    </div>\n  ",
                        styles: [".avatar {\n    width:120px;\n    height:120px;\n    border-radius:100%;\n  }\n  .avatar.small {\n    width:60px;\n    height:60px;\n  }"],
                        providers: [github_service_1.GitHubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GitHubService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-github.component.js.map