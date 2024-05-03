

// alert('Hello World!');

// document.write('Hello World!');

// console.log("Hello World!");


// Inner HTML

let text = document.querySelector(".text");
text.style.color = "red";
text.style.backgroundColor = "green";
text.innerHTML = "WORLD";




/*
  -Data Types

    -String = 'this is string';
    -Number = 123,456,789;
    -Boolean. 
    -Undefined.
    -Null. 
    -Array.
    -object
        
*/





// string -

let test = 'this is string0909';
console.log(typeof(test));


// number -

let test_2 = 12345;
console.log(typeof(test_2));



// Boolean - true / false 

let test_3 = 20;
let test_4 = 20;
console.log(test_3 == test_4);



// Undefined -

let test_5;
console.log(typeof(test_5));



// Null

let test_6 = null;
console.log(typeof(test_6));



// Array

let str = [10, 'tom', true];
console.table(str);




// object literal -

let obj = {

  name: "tom",
  age: 40,
  institute: "IDK",


};
console.log(obj);




// object Constructor -


let obj_2 = Object();
obj_2.name = "Tom";
obj_2.age = 45;
obj_2.institute = "IDK";

console.log(obj_2);



/*
  -variable

    -var
    -let
    -const

*/


// var

var varName = "Text here";
document.write(varName);



// let

let letName = "This is me";
document.write(letName);



// const

const constVar = "I am a constant";
document.write(constVar);



