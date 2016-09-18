System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.passwordCorrect = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value !== 'password')
                                resolve({ passwordCorrect: true });
                            else
                                resolve(null);
                        }, 1000);
                    });
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=password.validators.js.map