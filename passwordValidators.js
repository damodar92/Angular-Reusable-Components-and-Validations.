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
                PasswordValidators.matchPassword = function (group) {
                    var newPass = group.find('newPassword').value;
                    var confirmPass = group.find('confirmPassword').value;
                    if (newPass == '' || confirmPass == '') {
                        return null;
                    }
                    if (newPass != confirmPass) {
                        return { matchPassword: true };
                    }
                    else {
                        return null;
                    }
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map