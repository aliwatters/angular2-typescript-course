System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var PasswordFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            PasswordFormComponent = (function () {
                function PasswordFormComponent(fb) {
                    this.form = fb.group({
                        password: ['', common_1.Validators.required],
                        passwordNew: ['',
                            common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(5)
                            ])],
                        passwordConfirm: ['', common_1.Validators.required]
                    }, { validator: PasswordFormComponent.passwordMatch });
                }
                PasswordFormComponent.passwordMatch = function (group) {
                    var pass1 = group.find('passwordNew');
                    var pass2 = group.find('passwordConfirm');
                    if (pass1.value !== pass2.value) {
                        group.find('passwordConfirm').setErrors({
                            passwordMatch: true
                        });
                    }
                };
                PasswordFormComponent.prototype.checkPassword = function () {
                    // var result = authService.update(this.form.value);,
                    if (this.form.value.password !== 'password') {
                        this.form.find('password').setErrors({
                            passwordCorrect: true
                        });
                    }
                    else {
                        console.log(this.form.value);
                        alert('password changed');
                    }
                };
                PasswordFormComponent = __decorate([
                    core_1.Component({
                        selector: 'password-form',
                        templateUrl: 'app/password-form.template.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], PasswordFormComponent);
                return PasswordFormComponent;
            }());
            exports_1("PasswordFormComponent", PasswordFormComponent);
        }
    }
});
//# sourceMappingURL=password-form.component.js.map