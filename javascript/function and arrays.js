
/*
//fuctions
function showAlert(){
    alert("hey!!");
}
showAlert();
*/



/*
//parameter(msg)
function showAlert(msg){
    alert("msg!!");
}
showAlert("hello!!!");
*/




//-----------------more than one input------------------------
/*
//10
function sum(a,b){
    console.log(a+b);
}
sum(4,6);
*/



/*
function sum(a,b){
    return a+b;
}
var result = sum(4,6);
console.log(result);
*/



/*--------------------------------------------------------variable length argument---------------------------------------------------------*/
/*
function sum(a,b){
    console.log(a,b);
    return a+b;
}
var result = sum(4);
console.log(result);

//0utput-
// 4
// NaN
*/

//EXTRA ARGUMENT IGNORED{YHA 3 ARGUMENT DIYA BUT FUNCTION 2 KA HI HAI ISLIYE 3RD KO IGNORE KR DIYA}
/*
function sum(a,b){
    console.log(a,b);
    return a+b;
}
var result = sum(4,5,6);
console.log(result);

//OUTPUT-
// 4 5
// 9
*/






/*----------------------------------------------------------------FUNCTION HOISTING---------------------------------------*/
/*
//--------------------------------------variable hoisting-----------------------------------------------
//output gives error
function hoistDemo(){
    console.log(i);
}
hoistDemo();
*/



/*
// otput-undefined
function hoistDemo(){
    console.log(i);
    var i =10;
}
hoistDemo();
*/


/*
//output-undefined
console.log(j);
function hoistDemo(){
    console.log(i);
    var i =10;
}
hoistDemo();
var j =10;
*/

//---------------------------------------------function hoisting-------------------------------------------------------

/*
//output-undefined
console.log(j);
hoistDemo();
function hoistDemo(){
    console.log(i);
    var i =10;
}

var j =10;
*/




/*------------------------------------------functions and scope-------------------------------------------------------------*/
/*
//scope
var name = "scope";
console.log(name);
*/




/*
//10
function scopedemo(){
    var i = 10;
    console.log(i);
}
scopedemo();
*/


/*
var name = "global"
function scopedemo(){
    var name = "function"
    console.log(name);
}
scopedemo();
console.log(name);
*/






/*
function c (){
console.log("inside c");  
}
function b (){
c ();
console.log("inside b");
}
function a (){
    b ();
    console.log("inside b");
    }
    a ();
    console.log("global context");
*/




/*-------------------------------------function within function---------------------------------------------*/
/*
// output-10
function outer (){
    var outervar =10;
    function inner (){
        console.log(outervar);
    }
    inner();
}
//inner();
outer();
*/




//output gives error because inner function outside it's scope
/*
function outer (){
    var outervar =10;
    function inner (){
        var innervar =100;
        console.log(outervar);
    }
    inner();
    console.log(innervar);
}
//inner();
outer();
*/






/*
var name = "global";
function outer (){
    var name = "outer";
    var outervar =10;
    function inner (){
        var innervar =100;
        var name = "inner";
        console.log(name);
    }
    inner();
    console.log(name);
}
//inner();
outer();
console.log(name);
*/


//output
// inner
// outer
// global




/*
var name = "global";
function outer (){
    var name = "outer";
    var outervar =10;
    function inner (){
        var innervar =100;
        var name = "inner";
        console.log(name);
    }
    inner();
    console.log(name);
}
//inner();
outer();
console.log(name);


//output
// outer
// outer
// global

*/








/*
var name = "global";
function outer() {
    var name = "outer";
    var outervar = 10;
    function inner() {
        var innervar = 100;
        //var name = "inner";
        console.log(name);
    }
    inner();
    console.log(name);
}
//inner();
outer();
console.log(name);


//output
// outer
// outer
// global
*/




/*
var name = "global";
function outer() {
   // var name = "outer";
    var outervar = 10;
    function inner() {
        var innervar = 100;
        //var name = "inner";
        console.log(name);
    }
    inner();
    console.log(name);
}
//inner();
outer();
console.log(name);


//output
// global
// global
// global

*/







//-----------------------Function Expressions------------------------------

/*
var factorial = function fact(n){
    var ans =1;
    for(var i = 1; i <= n; i++){
        ans = ans*i;
    }
    return ans;
    };
    console.log(factorial);
    console.log(factorial(5));
*/
    //output
    // ƒ fact(n){
    //     var ans =1;
    //     for(var i = 1; i <= n; i++){
    //         ans = ans*i;
    //     }
    //     return ans;
    //     }
    // 120





/*
    var factorial = function fact(n){
        var ans =1;
        for(var i = 1; i <= n; i++){
            ans = ans*i;
        }
        return ans;
        };
        console.log(fact(4));
        console.log(factorial);
        console.log(factorial(5));
*/
//output- error




//----------------anonymus function-------------------------------------
/*
var factorial = function fact(n){
    var ans =1;
    for(var i = 1; i <= n; i++){
        ans = ans*i;
    }
    return ans;
    };
        var factorial2 = function fact(n){
        var ans =1;
        for(var i = 1; i <= n; i++){
            ans = ans*i;
        }
        return ans;
        };
        console.log(factorial);
        console.log(factorial2);
*/


/*ƒ fact(n){
    var ans =1;
    for(var i = 1; i <= n; i++){
        ans = ans*i;
    }
    return ans;
    }
 ƒ fact(n){
        var ans =1;
        for(var i = 1; i <= n; i++){
            ans = ans*i;
        }
        return ans;
        }
        */







//---------------------recursively--------------------------------------
/*
        var factorial = function fact(n){
            if (n = 0){
                return 1;
            }
            
            return n*fact(n-1);
            };
                var factorial2 = function fact(n){
                var ans =1;
                for(var i = 1; i <= n; i++){
                    ans = ans*i;
                }
                return ans;
                };
                console.log(factorial);
                console.log(factorial2);
*/

//output
// ƒ fact(n){
//     if (n = 0){
//         return 1;
//     }
    
//     return n*fact(n-1);
//     }
// function and arrays.js:439 ƒ fact(n){
//         var ans =1;
//         for(var i = 1; i <= n; i++){
//             ans = ans*i;
//         }
//         return ans;
//         }







//------------stackoverflow-----------because negative value in console.log------------- 
/*
var factorial = function fact(n){
    if (n = 0){
        return 1;
    }
    
    return n*fact(n-1);
    };
        var factorial2 = function fact(n){
        var ans =1;
        for(var i = 1; i <= n; i++){
            ans = ans*i;
        }
        return ans;
        };
        console.log(factorial(-1));
        console.log(factorial2(4));
*/







/*----------Function Declaration vs Expressions--------hoisting-----*/



//-----------------error in output----------------
/*
console.log(factorial(5));
function fact(n){
    var ans =1;
    for(var i = 1; i <= n; i++){
        ans = ans*i;
    }
            return ans;
    }
        var factorial = function fact(n){
        var ans =1;
        for(var i = 1; i <= n; i++){
            ans = ans*i;
        }
        return ans;
        };
*/




/*
console.log(fact(5));
console.log(factorial);
//console.log(factorial(5));
function fact(n){
    var ans =1;
    for(var i = 1; i <= n; i++){
        ans = ans*i;
    }
            return ans;
    }
        var factorial = function fact(n){
        var ans =1;
        for(var i = 1; i <= n; i++){
            ans = ans*i;
        }
        return ans;
        };
    */




/*
        console.log(fact(5));
        console.log(factorial);
        //console.log(factorial(5));
        function fact(n){
            var ans =1;
            for(var i = 1; i <= n; i++){
                ans = ans*i;
            }
                    return ans;
            }
                var factorial = function fact(n){
                var ans =1;
                for(var i = 1; i <= n; i++){
                    ans = ans*i;
                }
                return ans;
                };
*/




//-------------------------------Passing function as arguments-------------------

/*
        var factorial = function fact(n){
        var ans =1;
        for(var i = 1; i <= n; i++){
            ans = ans*i;
        }
        return ans;
        };
        function ncr(n,r,factorial){
            return factorial(n)/(factorial(r)*factorial(n-r));
            
        }
        console.log(ncr (5,2, factorial))
*/




//----------------------------------------Arrays--------------------------------
/*
var arr = [1,2,3,4];
console.log(arr);

var arr = new Array(1,2,3,4,5);
console.log(arr);

console.log(arr[3]);
//4


console.log(arr[6]);
//undefined

//------------set array-----------
console.log(arr[2] =90);


console.log(arr);
//output- (5) [1, 2, 90, 4, 5]


//---------------set array out of bond-------------
console.log(arr[7] =100);

console.log(arr);
//output-  (8) [1, 2, 90, 4, 5, empty × 2, 100]

console.log(arr.length);
//8

console.log(arr[5]);
//undefined

*/




/*
var arr = new Array();
console.log(arr);
//undefined


var arr = new Array(2);
console.log(arr);
//(2) [empty × 2]


var arr = new Array(2,3);
console.log(arr);
//(2) [2, 3]
*/





/*-----------------------function on arrays-------------------------------------*/
/*
var arr = ["abc",10,true,20];
console.log(arr);

var arr = new Array(1000);
console.log(arr);
*/



/*
var arr = [4,5,6,7];
console.log(arr.length);
//4


console.log(arr.push(10));
//5

console.log(arr);
//(5) [4, 5, 6, 7, 10]

console.log(arr.pop());
//10

console.log(arr);
//(4) [4, 5, 6, 7]


console.log(arr.shift());
//4

console.log(arr);
//(3) [5, 6, 7]

console.log(arr.unshift(8));
//4

console.log(arr);
//(4) [8, 5, 6, 7]

*/








/*-----------------------Splice function--------------------------------*/
/*
var arr = [2,3,4,5,6]
console.log(arr);
//(5) [2, 3, 4, 5, 6]



//------------------start from 1 delee from 1---------------

arr.splice(1,1);
console.log(arr);
//(4) [2, 4, 5, 6]



console.log(arr.splice(1));
//(3) [4, 5, 6]

console.log(arr);
//[2]


arr = [2,3,4,5,6]
console.log(arr);
//(5) [2, 3, 4, 5, 6]


console.log(arr.splice(2,0,10));
console.log(arr);
// (6) [2, 3, 10, 4, 5, 6]




//--------------insert more than 1 by splice-------------------

arr.splice(2,0,10,20,40);
console.log(arr);
// (9) [2, 3, 10, 20, 40, 10, 4, 5, 6]

//------------insertion deletion simultaneously--------------------

console.log(arr.splice(2,2,40,50));
// (2) [10, 20]

console.log(arr);
// (9) [2, 3, 40, 50, 40, 10, 4, 5, 6]
*/









/*------------------Iterating over arrays----------------------------------*/
/*
var arr = [2,3,4,5,6,7];
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//2,3,4,5,6,7
*/





//------------for each method---------------------------
/*
var arr = [2,3,4,5,6,7];
function print (element){
    console.log(element);
}
   arr.forEach(print) ;

//2,3,4,5,6,7
*/

/*
var arr = [2,3,4,5,6,7];
function print (element,index,array){
    console.log(element);
}
   arr.forEach(print) ;
//2,3,4,5,6,7
*/



















