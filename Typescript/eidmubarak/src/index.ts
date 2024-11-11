'use strict';
// npx tsc ./src/index.ts -> index.js -> node index.js
// let userName: string = 'Anisul Islam';
// userName = "true";
// console.log(userName);
// let nam: string = 'Jubayer Hossain';
// let age: number = 30;
// let boll: boolean = true;
// let nall: null = null;
// let und: undefined = undefined;
// let obj1: {} = {};
// let obj2: object = {};
// let arr: [] = [];
// Defined All way to string in Typescript
// let name1: string = 'Jubayer Hossain';
// let name2: string = 'Jubayer Hossain';
// let name3: string = `Jubayer Hossain`;
// let name4 = 'John';
// let age = 30;
// let message = `Hello, My name is ${name} and I'm ${age} years old`;
// type color = 'red' | 'green' | 'blue';
// let my: color = 'red';
// let myObj: { [key: string]: any } = {
//   key1: 'value1',
//   key2: 'value2',
// };
// let num1: number = 10;
// let num2: number = Number(20);
// let num3: number = new Number(30);
// console.log(num1);
// console.log(num2);
// console.log(num3);
// let str1: string = 'Hello';
// let str2: string = String('Hello');
// let str3: string = new String('Hello');
// let bool1: boolean = true;
// let bool2: boolean = Boolean(true);
// let bool3: boolean = new Boolean(true);
// let un1: undefined = undefined;
// let un2: undefined = Undefined(undefined);
// let un3: undefined = new undefined();
// With semicolons
// let person: { name: string; age: number } = {
//   name: 'John',
//   age: 30,
// };
// // Without semicolons
// let person2: { name: string; age: number } = {
//   name: 'Jane',
//   age: 25,
// };
// type Person1 = {
//   name: string;
//   age: number;
// };
// let john: Person1 = {
//   name: 'John',
//   age: 30,
// };
// interface Person2 {
//   name: string;
//   age: number;
// }
// let Sakib: Person2 = {
//   name: 'Sakib',
//   age: 30,
// };
// class Person3 {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// let bob = new Person3('Bob', 35);
// type Person = { name: string };
// type Employee = { department: string };
// let johnDoe: Person & Employee = {
//   name: 'John Doe',
//   department: 'IT',
// };
// interface name {
//   name: string;
// }
// interface age {
//   age: number;
// }
// let sakib: name & age = {
//   name: 'Sakib',
//   age: 30,
// };
// console.log(johnDoe);
// console.log(sakib);

// console.dir(global, { depth: 0 });

// console.log(
//   Object.keys(global).filter(
//     (prop) =>
//       typeof global[prop] === 'function' || typeof global[prop] === 'object'
//   )
// );

// console.log(Object.keys(require('module')._builtinModules));

// const data = require('module').builtinModules;

// console.log(data);

// const data1 = Object.getOwnPropertyNames(Array.prototype);
// const data2 = require('module').Module;

// // console.table(data1);
// console.table(data2);

// const data = require('console');

// console.log(data);

// const startTime = performance.now();
// console.log('Hello World');
// const endTime = performance.now();
// const executionTime = endTime - startTime;
// console.log(`Execution time: ${executionTime} milliseconds`);

// const data = performance;

// console.log(data);

// const data = require('path');

// console.log(data);

// const data = require('module').builtinModules;

// console.dir(data);

// const data = Object.getOwnPropertyNames(String.prototype);
// const data = Object.getOwnPropertyNames(Number);
// const data = Object.getOwnPropertyNames(Boolean);
// const data = Object.getOwnPropertyNames(undefined);
// const data = Object.getOwnPropertyNames(null);
// const data = Object.getOwnPropertyNames(Object);
// const data = Object.getOwnPropertyNames(Array.prototype);
// const data = Object.getOwnPropertyNames(Function.prototype);
// const data = Object.getOwnPropertyNames(Symbol);
// const data = Object.getOwnPropertyNames(BigInt);
// const data = Object.getOwnPropertyNames(RegExp.prototype);
// const data = Object.getOwnPropertyNames(Math);
// const data = Object.getOwnPropertyNames(Date.prototype);
// const data = Object.getOwnPropertyNames(Map.prototype);
// const data = Object.getOwnPropertyNames(Set.prototype);

// const data = require('module').builtinModules;

// console.table(data);

// console.table(Object.keys(window));
// console.table(Object.getOwnPropertyNames(window));
// console.table(Object.getOwnPropertyNames(self));

// console.table(Object.keys(window));

// function addNumber(num1: number, num2: number) {
//   console.log(num1 + num2);
// }

// addNumber(10, 20);

// // Expected 2 arguments, but got 1.ts(2554)
