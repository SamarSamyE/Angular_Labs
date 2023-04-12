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
var Account = /** @class */ (function () {
    function Account(accNo, balance) {
        if (accNo === void 0) { accNo = 0; }
        if (balance === void 0) { balance = 0; }
        this.accNo = accNo;
        this.balance = balance;
    }
    Account.prototype.debitAmount = function () {
        throw new Error("Method not implemented.");
    };
    Account.prototype.creditAmount = function () {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(Account.prototype, "Balance", {
        get: function () {
            return this.balance;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var currentAccount = /** @class */ (function (_super) {
    __extends(currentAccount, _super);
    function currentAccount(accNo, balance, interestRate) {
        if (accNo === void 0) { accNo = 0; }
        if (balance === void 0) { balance = 0; }
        if (interestRate === void 0) { interestRate = 0; }
        var _this = _super.call(this, accNo, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    currentAccount.prototype.addCustomer = function () {
        throw new Error("Method not implemented.");
    };
    currentAccount.prototype.removeCustomer = function () {
        throw new Error("Method not implemented.");
    };
    return currentAccount;
}(Account));
var savingAccount = /** @class */ (function (_super) {
    __extends(savingAccount, _super);
    function savingAccount(accNo, balance, minBalance) {
        if (accNo === void 0) { accNo = 0; }
        if (balance === void 0) { balance = 0; }
        if (minBalance === void 0) { minBalance = 0; }
        var _this = _super.call(this, accNo, balance) || this;
        _this.minBalance = minBalance;
        return _this;
    }
    savingAccount.prototype.addCustomer = function () {
        throw new Error("Method not implemented.");
    };
    savingAccount.prototype.removeCustomer = function () {
        throw new Error("Method not implemented.");
    };
    return savingAccount;
}(Account));
