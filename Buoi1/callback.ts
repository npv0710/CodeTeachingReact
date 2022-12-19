/**
 *  Callback Function
 */
import { XMLHttpRequest } from 'xmlhttprequest-ts';

function a (callback) {
    console.log('This is a higher-order function');
    let x = 10;
    callback(x);
}

function b(value) {
    console.log('Value received form above function: ' + value);
}

a(b);

a(function(number) {
    console.log('number received from higher-order function: ')
    console.log(number)
})

function login(username: string, password: string) {
    console.log('Please login first with username and password');
    setTimeout(() => {
        if (username === 'Nguyen Van A' && password === '123abc') {
            console.log('Username && password valid');
        }else {
            console.log('Login fail');
            console.log('Username or password invalid');
        }
    }, 2000)
    console.log('Login successfully');
    console.log('welcom to VTI Group: ' + username);
}

function loginWithCallback(username: string, password: string, callback) {
    console.log('Please login first with username and password');
    let message = '';
    setTimeout(() => {
        if (username === 'Nguyen Van A' && password === '123abc') {
            message = 'Login successfully';
            callback('success', message, username);
        }else {
            message = 'Login fail';
            callback('error', message);
        }
    }, 2000)
}

function showResultLogin(status: string, messge: string, username?: string) {
    if (status === 'success') {
        console.log(messge);
        console.log('welcom to VTI Group: ' + username);
    }else {
        console.log(messge);
    }
}

/**
 * Callback handle request api
 */

function getPostById(id: number, callback){
    let request = new XMLHttpRequest();

    request.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + id);

    request.onload = function () {
        if (request.status == 200) {
            callback(request.responseText)
        }else callback(request.status)
    }

    request.send();
}

function showResultCallApi(data) {
    console.log('Data received from api request: ');
    console.log(data);
}

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
    insertCard(function() {
        checkInfo(function() {
            withdraw(function() {
                checkBalance(function() {
                    getMoney(function() {

                    });
                })
            })
        })
    })
}

export {
    login,
    loginWithCallback,
    showResultLogin,
    getPostById,
    showResultCallApi,
    getMoneyATM,
    
}