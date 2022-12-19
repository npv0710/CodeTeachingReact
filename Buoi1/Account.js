"use strict";
exports.__esModule = true;
exports.showAccountInfo = void 0;
var Account = /** @class */ (function () {
    function Account(id, username) {
        this.id = id;
        this.username = username;
        //console.log('id: ' + id + '; username: ' + username);
    }
    Account.prototype.getId = function () {
        return this.id;
    };
    Account.prototype.getUsername = function () {
        return this.username;
    };
    Account.prototype.printInfo = function () {
        console.log('Id: ' + this.id);
        console.log('Username: ' + this.username);
    };
    return Account;
}());
function showAccountInfo(ac) {
    console.log('Account info: ');
    console.log('[id = ' + ac.getId() + '; username = ' + ac.getUsername() + ']');
}
exports.showAccountInfo = showAccountInfo;
exports["default"] = Account;
