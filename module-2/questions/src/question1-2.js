let b1 = true;
let b2 = Boolean(false);
console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);

let n1 = 100;
let n2 = Number("200");
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);

let big1 = 1234567890990000n;
let big2 = BigInt(200);
console.log(`${big1} [${typeof big1}]`);
console.log(`${big2} [${typeof big2}]`);

let str1 = "Hello";
let str2 = String("Hello");
console.log(`${str1} [${typeof str1}]`);
console.log(`${str2} [${typeof str2}]`);

let u1 = undefined;
console.log(`${u1} [${typeof u1}]`);
