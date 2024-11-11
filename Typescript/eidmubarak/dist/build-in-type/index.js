"use strict";
// Today Topic
// Build in Type in Typescript:
/**
 * 01 -> string
 * 02 -> number
 * 03 -> boolean
 * 04 -> undefined
 * 05 -> null
 * 06 -> symbol
 * 07 -> bigint
 * 08 -> void
 * 09 -> any
 */
// String
// const str1: string = 'Jubayer Hossain';
// const str2: string = 'Jubayer Hossain';
// const str3: string = `Jubayer Hossain`;
// const str4: string = String('Jubayer Hossain');
// console.log(str1);
// console.log(typeof str1);
// console.log(str2);
// console.log(typeof str2);
// console.log(str3);
// console.log(typeof str3);
// console.log(str4);
// console.log(typeof str4);
// Number
// var num1: number = 123;
// let num2: number = 123;
// const num3: number = 123;
// const num4: number = Number('123');
// let employeeId: 12345 = 12345;
// console.log(num1);
// console.log(typeof num1);
// console.log(num2);
// console.log(typeof num2);
// Boolean
// var bool1 = true;
// let bool2 = false;
// const bool3 = true;
// const bool4 = Boolean('true');
// console.log(bool1);
// console.log(typeof bool1);
// console.log(bool2);
// console.log(typeof bool2);
// console.log(bool3);
// console.log(typeof bool3);
// console.log(bool4);
// console.log(typeof bool4);
// undefined
// var und1: undefined = undefined;
// let und2: undefined = undefined;
// const und3: undefined = undefined;
// console.log(und1);
// console.log(typeof und1);
// console.log(und2);
// console.log(typeof und2);
// console.log(und3);
// console.log(typeof und3);
// null
// var nall1: null = null;
// let nall2: null = null;
// const nall3: null = null;
// console.log(nall1);
// console.log(typeof nall1);
// console.log(nall2);
// console.log(typeof nall2);
// console.log(nall3);
// console.log(typeof nall3);
// symbol
// let symbol1 = Symbol();
// let symbol2 = Symbol('This is a descriptive symbol');
// const compare1 = symbol1 == symbol2;
// const compare2 = symbol1 === symbol2;
// console.log(symbol1);
// console.log(typeof symbol1);
// console.log(symbol2);
// console.log(typeof symbol2);
// console.log(compare1);
// console.log(compare2);
// console.log(String instanceof Object);
// console.log(Number instanceof Object);
// console.log(Boolean instanceof Object);
// // console.log(undefined instanceof Object);
// // console.log(null instanceof Object);
// console.log(Symbol instanceof Object);
// console.log(BigInt instanceof Object);
// console.log(Array instanceof Object);
// console.log(Function instanceof Object);
// console.log(Object instanceof Object);
// console.log(Date instanceof Object);
// console.log(Math instanceof Object);
// console.log(Map instanceof Object);
// console.log(WeakMap instanceof Object);
// console.log(Set instanceof Object);
// console.log(WeakSet instanceof Object);
// console.log(RegExp instanceof Object);
// BigInt
// var bigint1: bigint = 9007199254740991n;
// console.log(bigint1);
// console.log(typeof bigint1);
// void
// let id = [1,2,3,4,5]
// const str1: string = 'Jubayer';
// const str2: string = ' Hossain';
// const data = Object.getOwnPropertyNames(String.prototype);
// console.table(data);
// console.log(str.length);
// console.log(str.constructor);
// console.log(str.anchor());
// console.log(str.big());
// console.log(str.blink());
// console.log(str.at(1));
// console.log(str.bold(1));
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str.charAt(1));
// console.log(str.charCodeAt(1));
// console.log(str.charAt(14));
// console.log(str.charCodeAt(14));
// let str = 'Hello, 𝄞 World!';
// console.log(str.charCodeAt(0)); // Output: 72
// console.log(str.codePointAt(0)); // Output: 72
// console.log(str.charCodeAt(7)); // Output: 55348 (first surrogate pair)
// console.log(str.codePointAt(7)); // Output: 119030 (full Unicode code point)
// console.log(str1.concat(str2));
// console.log(str1.startsWith('J'));
// console.log(str1.endsWith('r'));
// console.log(str1.fontcolor('red'));
// console.log(str1.fontsize('16px'));
// console.log(str1.fixed());
// console.log(str1.includes('Jubayer'));
// console.log(str1.indexOf('r'));
// console.log(str1.link('https://www.facebook.com'));
// console.log(str1.localeCompare('J', 'de'));
// console.log(str1.match('Jubayer'));
// let str1 = 'The quick brown fox jumps over the lazy dog';
// // console.log(str1.match('fox')); // Output: ["fox"]
// // console.log(str1.matchAll('fox'));
// // console.log(str1.normalize('NFKD'));
// console.log(str1.padStart(5, 'J'));
// Example 1: Padding with a single character
// let str1 = 'fox';
// let paddedStr1 = str1.padStart(10, '*');
// console.log(paddedStr1); // Output: ********fox
// // Example 2: Padding with a custom string
// let str2 = 'JavaScript';
// let paddedStr2 = str2.padStart(20, ' ');
// console.log(paddedStr2); // Output:        JavaScript
// const str1 = 'Jubayer';
// console.log(str1.padStart(10, '*'));
// console.log(str1.padEnd(10, '#'));
// const str1: string = 'Jubayer ';
// // console.log(str1.repeat(5));
// console.log(str1.replace('Jubayer'));
const str1 = '     Jubayer Hossain      ';
const str2 = 'The quick brown fox jumps over the lazy dog';
// console.log(str1.replace('Jubayer', 'Hossain'));
// console.log(str1.replaceAll('Jubayer', 'Hossain'));
// console.log(str1.search('r'));
// console.log(str1.indexOf('r'));
// console.log(str1.lastIndexOf('r'));
// console.log(str1.split('/'));
// console.log(str1.small());
// console.log(str1.substring(0, 15));
// console.log(str1.substr(0, 15));
// console.log(str1.strike());
// console.log(str1.toString());
// console.log(str1.toLocaleLowerCase());
// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str1.toLocaleUpperCase());
// console.log(str1.trim());
// console.log(str1.trimStart());
// console.log(str1.trimEnd());
// console.log(str1.valueOf());
// console.log(str2.valueOf());
// console.log(str1.charAt(0));
// console.log(str1.search('J'));
// console.log(str1.indexOf('J'));
// console.log(str1.charCodeAt(0));
// console.log(str1.codePointAt(0));
// console.log(str1.valueOf());
// console.log(str1.lastIndexOf('n'));
// console.log(str1.length);
// console.log(str1.padStart(18, '*'));
// console.log(str1.padEnd(18, '*'));
// console.log(str1.trim());
// console.log(str1.trimEnd());
// console.log(str1.trimStart());
// console.log(str1.concat(str2));
