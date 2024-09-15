

/*

es5 
es6 

es5 - ecamscript version 5

1- function statement
2-function expression
3-anaonymous
4-function with params and args
5-function with return 

-- first class memeber - variable store
-- return - undefined




*/

//es5 function statement

let myfun=function sayHello(){
    console.log("hello good night");
    

}

// sayHello();
// sayHello();
// sayHello();

// for(let i=1;i<=10;i++){
//     sayHello();
// }


function printtemtimes(fname){
    for(let i=1;i<=10;i++){
            fname();
         }

}

printtemtimes(myfun);

//2 anymous func

// let fun=function(){
//     console.log("hello dice ");
    
// }

// fun();


//funcwith with params and args

// function printdetails(name,age,education,salary,ismarried){
//     console.log("name -",name);
//     console.log("age-",age);
//     console.log("education -",education);
//     console.log("salary-",salary);
//     console.log("ismarried - ",ismarried);
    
// }

// printdetails("rohan",27,"MBA",100000,true);
// printdetails("MANOJ",30,"MTECH",10000);


//FUNCTION WITH RETURN - js 

//()- js har function kuch na kluch return krta h ,a gr wo kuch return nhi krra to wo undefiend retuern krega



// function printmyage(){
//     return function(){
//         console.log("i am an anymous func");
//         return "dice"
        
//     }
    
// }

// let rv=printmyage();
// console.log(rv());


console.log("--------------------------------------");


// function parent(){
//     return function child(){
//         return function children(){
//             console.log("i am children");
//             return 100; 
//         }
//     }
// }

// let rv=parent();
// console.log(rv()());


//es6 function - syntax change - this keyword - es5 vs es6 



//es6 - fat arrow function

/*
1- fat arrow func
2- fat arrow with params and args
3- fat arrow with return 
4- fat arrow with implicit return 

syntax


()=>{
    
    }



    first class member - variable store 
    return - undefined , custom return




*/

//1 fat arrow function
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

let sayHello=()=>{
    console.log("hello good morning");
    
}

sayHello();


//2- fat arrow with parms and argss


let mydetails=(name,age,salary,education)=>{
    console.log(name,age,salary,education);
    
}

mydetails(28,"vikas","btech",10000)
mydetails("rohan",27,1000000,"mba")


//func - 1 param -( )X

let saygoodmorning=name=>console.log("good morning",name);
    


saygoodmorning("puneet")


//fat arrow with return 


// let parent=()=>{
//     return function child(){
//         console.log("i am child");
//         return 100;
        
//     }
// }

// let rv=parent();
// console.log(rv());


//fat arrow with implicit return
let age=()=>function somefun(){
    console.log("i am a returned function");
    return 10;
    
};
let ans=age();
console.log(ans());






