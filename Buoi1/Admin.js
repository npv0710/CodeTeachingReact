"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Account_1 = require("./Account");
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, username, role) {
        var _this = _super.call(this, id, username) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        console.log('Role: ' + this.role);
    };
    return Admin;
}(Account_1["default"]));
exports["default"] = Admin;
