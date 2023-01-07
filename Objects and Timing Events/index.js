/*
var student = {
  "name" : "abc",
  rollNo : 135,
  marks :90
};
console.log(student)
// {name: 'abc', rollNo: 135, marks: 90}

console.log(student.marks)
// 90

student.marks = 100
console.log(student)
// {name: 'abc', rollNo: 135, marks: 100}

student.sem;
console.log(student)

student.sem = 4;
console.log(student)
// {name: 'abc', rollNo: 135, marks: 100, sem: 4}
*/


//-------------------------------square bracket notation-------------------------------
/*
var student = {
  "name" : "abc",
  rollNo : 135,
  marks :90
};
console.log(student)


console.log(student.marks)
// 90

console.log(student["marks"])
//90

console.log(student[marks])
//without double quotation gives error
*/




//-----------------hyphen------------------------------------------
/*
var student = {
  "-name" : "abc",
  rollNo : 135,
  marks :90
};
console.log(student)
// {-name: 'abc', rollNo: 135, marks: 90}

console.log(student.-name);
//error
*/

/*
var student = {
  "-name" : "abc",
  rollNo : 135,
  marks :90
};
console.log(student)


console.log(student["-name"])
// abc
*/




/*
var student = {
  "-name" : "abc",
  rollNo : 135,
  marks :90,
  "2" : "two"
};
console.log(student)


//console.log(student.2)
//error

console.log(student["2"])
//two
*/



/*
var student = {
  "-name": "abc",
  rollNo: 135,
  marks: 90,
  "2": "two"
};
function printProperty(obj,prop){
  console.log(obj[prop])
}

printProperty(student, "marks");
//output-90
*/





/*
var student = {
  "-name": "abc",
  rollNo: 135,
  marks: 90,
  "2": "two"
};
function printProperty(obj,prop){
  console.log(obj[prop])
}
var prop
printProperty(student, "marks");
// output-90
*/





/*
var student = {
  "-name": "abc",
  rollNo: 135,
  marks: 90,
  "2": "two"
};
function printProperty(obj,prop){
  console.log(obj[prop])
}
var prop = "marks";
printProperty(student, prop);
// output-90
*/



/*

//----------------name lane ke liye hyphen remove---------------
var student = {
  "name": "abc",
  rollNo: 135,
  marks: 90,
  "2": "two"
};
function printProperty(obj,prop){
  console.log(obj[prop])
}
var prop = "name";
printProperty(student, prop);
//output - abc

*/




/*------------------------------Deleting Properties----------------------------------------------*/

/*
var student = {
  "name": "abc",
  rollNo: 135,
  marks: 90,
  "2": "two"
};
console.log(delete student.marks)
//true


console.log(student)
*/


/*
var student = {
  "name": "abc",
  rollNo: 135,
  marks: 90,
  "2": "two"
};
console.log(delete student["2"])
//true


console.log(student)
*/





/*-----------------------------------HOW ARE OBJECTS STORED------------------*/

/*
var obj = {
  "p1" : 10

};
var obj2 = obj;
console.log(obj);
// opt- {p1: 10}

console.log(obj2);
// opt- {p1: 10}

console.log(obj2.p1 = 100);
// 100


console.log(obj2);
// opt- {p1: 10}

console.log(obj);
// opt- {p1: 10}

console.log(obj == obj2);
// true

*/





/*
var obj = {
  "p1" : 10

};


console.log(obj2 = {"p1":100});
// {p1: 100}


console.log(obj);
// opt- {p1: 10}

console.log(obj2);
// opt- {p1: 100}

console.log(obj == obj2);
// false

*/







/*---------------------------------------iterating over objects--------------------------------------*/

/*
var student = {
  "name" : "abc",
  rollNo : 135,
  marks : 90,
  "2" : "two"
};

for(var prop in student){
  console.log(prop);
}
*/

//output
// 2
// name
// rollNo
// marks




/*
var student = {
  "name" : "abc",
  rollNo : 135,
  marks : 90,
  "2" : "two"
};

for(var prop in student){
  console.log(prop,student[prop]);
}

// output
// 2 two
// name abc
// rollNo 135
// marks 90

*/




/*
var student = {
  "name" : "abc",
  rollNo : 135,
  marks : 90,
  "2" : "two"
};
var keys = Object.keys(student);
console.log(keys);
// (4) ['2', 'name', 'rollNo', 'marks']
*/


/*
var student = {
  "name" : "abc",
  rollNo : 135,
  marks : 90,
  "2" : "two"
};
var keys = Object.getOwnPropertyNames(student)
console.log(keys);
// (4) ['2', 'name', 'rollNo', 'marks']
*/







/*
var student = {
  "name" : "abc",
  rollNo : 135,
  marks : 90,
  "2" : "two",
  address : {
    city : "NEW DELHI",
    pincode :110032
  }
};``
console.log(student);
// {2: 'two', name: 'abc', rollNo: 135, marks: 90, address: {…}}

console.log(student.address);
// {city: 'new delhi', pincode: 110032}

console.log(student.address.city);
// NEW DELHI

console.log(student.address["city"]);
//  NEW DELHI
*/





/*----------------------------ARRAYS AND OBJECTS---------------------*/
/*
var arr = [20,30,40,50];
console.log(arr);
// (4) [20, 30, 40, 50]


console.log(arr[0]);
// 20

console.log(arr["0"]);
// 20
*/



/*

var arr = [20,30,40,50];
var obj = {
  "0" : 20,
  "1" : 30,
  "2" : 40,
  "3" : 50,
}
console.log(arr);
// (4) [20, 30, 40, 50]

console.log(obj);
// {0: 20, 1: 30, 2: 40, 3: 50}


console.log(obj.length);
//undefined


console.log(arr.length);
// 4

console.log(arr[6] = "abb");
// abb

console.log(arr);
// (7) [20, 30, 40, 50, empty × 2, 'abb']
*/




/*-------------------ITERATING OVER ARRAY USING FOR IN-----------------------------------------*/

/*
var arr = [20,30,40,50];
var obj = {
  "0" : 20,
  "1" : 30,
  "2" : 40,
  "3" : 50,
}
console.log(arr);

// (4) [20, 30, 40, 50]

console.log(obj.prop1 = "demo")
//demo

console.log(obj);
// {0: 20, 1: 30, 2: 40, 3: 50, prop1: 'demo'}

console.log(arr.prop1 = "demo")
//demo

console.log(arr);
// (4) [20, 30, 40, 50, prop1: 'demo']


console.log(arr[10] = "dd");
//dd

console.log(arr);
// (11) [20, 30, 40, 50, empty × 6, 'dd', prop1: 'demo']

for (var i in arr){
  console.log(i);
}

//output
// 0
// 1
// 2
// 3
// 10
// prop1
*/






/*--------------------------------------TIMING EVENTS----------------------------------------------*/
/*
function sayHello(){
  console.log("hello");
}
setTimeout(sayHello,2000);
//hello
*/


/*
function sayHello(){
  console.log("hello");
}
setInterval(sayHello,1000);
// 5 hello
*/



/*
var sec = 1;
function sayHello(){
  console.log("after" ,sec);
  sec++;
}
setInterval(sayHello,1000);

//after 1
//after 2................
*/





/*
var sec = 1;
function sayHello(){
  console.log("after" ,sec);
  sec++;

if(sec == 6){
  //stop
  clearInterval(id);
}
}
var id = setInterval(sayHello,1000);
*/






































