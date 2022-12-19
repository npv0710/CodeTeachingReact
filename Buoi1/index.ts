export {};

import Account from "./Account";

import { showAccountInfo } from "./Account";

import { Department, department1, printDepartment } from "./department";

import Admin from "./Admin";

import { getPostById, showResultCallApi } from "./callback";

var title: string = 'Buoi1 ReactJs demo typescript';

var x: number = 10;

var loginSuccess: boolean = false;

function sum(a: number, b: number): number {
    let total = a + b;
    return total;
}

// let total: number = 100;
// let total: string = '123abc';

function total(a:number, b?: number, c?: number): number {
    let total = 0;
    if (b) {
        total = a + b;
    }else {
        total = a + 20;
    }
    return total;
}

function total2(a, b?, c?){
    let total = a + b + 20;
    return total;
}

/*Test function*/

// console.log('Sum: ' + sum(1, 5));
// console.log('total: ' + total(10, 50));
// console.log('total2: ' + total2(10));

/*Class & extends*/
var ac = new Account(1, 'quanghai');
//console.log(ac.getUsername());

//showAccountInfo(ac);

//printDepartment(department1);

var admin = new Admin(2, 'vanhau', 'ADMIN');

//admin.printInfo();

/*Data Type*/
var fullName: string = 'Nguyen Cong Phuong';
var age: number = 27;
var isMale: boolean = true;

var temp;
var test = null;

// console.log('temp: ');
// console.log(temp);
// console.log(typeof temp);


// console.log('test: ');
// console.log(test);
// console.log(typeof test);

// if(temp) {
//     console.log('Temp is defined')
// }else {
//     console.log('Temp is undefined')
// }

// if(temp == undefined) {
//     console.log('Temp is undefined')
// }else {
//     console.log('Temp is defined')
// }

// if(test) {
//     console.log('Test is not null')
// }else {
//     console.log('Test is null')
// }

// var empty = '';

// if(empty) {
//     console.log('not empty')
// }else {
//     console.log('is empty')
// }


var input;//Đầu vào

if (input === '')
if (input == null)
if (input == undefined)

if (input) {//input không rơi vào một trong 3 TH tren

}else {//input rơi vào một trong 3 TH tren

}

getPostById(1, showResultCallApi);