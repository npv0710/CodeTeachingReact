"use strict";
exports.__esModule = true;
exports.getMoneyATM = exports.showResultCallApi = exports.getPostById = exports.showResultLogin = exports.loginWithCallback = exports.login = void 0;
/**
 *  Callback Function
 */
var xmlhttprequest_ts_1 = require("xmlhttprequest-ts");
function a(callback) {
    console.log('This is a higher-order function');
    var x = 10;
    callback(x);
}
function b(value) {
    console.log('Value received form above function: ' + value);
}
a(b);
a(function (number) {
    console.log('number received from higher-order function: ');
    console.log(number);
});
function login(username, password) {
    console.log('Please login first with username and password');
    setTimeout(function () {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Username && password valid');
        }
        else {
            console.log('Login fail');
            console.log('Username or password invalid');
        }
    }, 2000);
    console.log('Login successfully');
    console.log('welcom to VTI Group: ' + username);
}
exports.login = login;
function loginWithCallback(username, password, callback) {
    console.log('Please login first with username and password');
    var message = '';
    setTimeout(function () {
        if (username === 'Nguyen Van A' && password === '123abc') {
            message = 'Login successfully';
            callback('success', message, username);
        }
        else {
            message = 'Login fail';
            callback('error', message);
        }
    }, 2000);
}
exports.loginWithCallback = loginWithCallback;
function showResultLogin(status, messge, username) {
    if (status === 'success') {
        console.log(messge);
        console.log('welcom to VTI Group: ' + username);
    }
    else {
        console.log(messge);
    }
}
exports.showResultLogin = showResultLogin;
/**
 * Callback handle request api
 */
function getPostById(id, callback) {
    var request = new xmlhttprequest_ts_1.XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + id);
    request.onload = function () {
        if (request.status == 200) {
            callback(request.responseText);
        }
        else
            callback(request.status);
    };
    request.send();
}
exports.getPostById = getPostById;
function showResultCallApi(data) {
    console.log('Data received from api request: ');
    console.log(data);
}
exports.showResultCallApi = showResultCallApi;
/**
 * Withdraw money ATM
 */
function insertCard(callback) {
    callback();
}
function checkInfo(callback) {
    callback();
}
function withdraw(callback) {
    callback();
}
function checkBalance(callback) {
    callback();
}
function getMoney(callback) {
    callback();
}
/*Callback hell */
function getMoneyATM() {
    insertCard(function () {
        checkInfo(function () {
            withdraw(function () {
                checkBalance(function () {
                    getMoney(function () {
                    });
                });
            });
        });
    });
}
exports.getMoneyATM = getMoneyATM;
