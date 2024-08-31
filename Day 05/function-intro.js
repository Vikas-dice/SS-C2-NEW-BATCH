

/*






*/

// console.log("breakfast")
// console.log("butter");
// console.log("spices");
// console.log("veggies");
// console.log("eat");
// console.log("dishes");


// console.log("lunch")
// console.log("butetr");
// console.log("spices");
// console.log("veggies");
// console.log("eat");
// console.log("dishes");


// console.log("dinner")
// console.log("butter");
// console.log("spices");
// console.log("veggies");
// console.log("eat");
// console.log("dishes");


// function dailyroutine(){
//     console.log("oil");
// console.log("spices");
// console.log("veggies");
// console.log("eat");
// console.log("dishes");

// } 

// dailyroutine();




//js - backward lang - purani kamiyo ko puri tarah hatya nahiu gya-- js =15-16 days 


// var name="dice ";

//let const 






//es5 - ecmascript 5

/*
1- function statement
2-function expression
3- anonymous func
4- funcwith with return 
5- function with params and arguments





*/


// function printmydetails(){
//     console.log("name-vikas");
//     console.log("age -28");
//     console.log("address - delhi");
//     console.log("ismarried -false");
//     console.log("salary -10000");  
// }

// printmydetails();


//2- function expression - js func- first class member - var

// let age=28;
// let name="vikas"



// let mydetail=function printmydetails(){
//     console.log("name-vikas");
//     console.log("age -28");
//     console.log("address - delhi");
//     console.log("ismarried -false");
//     console.log("salary -10000");  
// }

// mydetail();


//3- anonymous func- naam nahi h


// let mydetail=function(){
//     console.log("name-vikas");
//     console.log("age -28");
//     console.log("address - delhi");
//     console.log("ismarried -false");
//     console.log("salary -10000");  
// }

// mydetail();


//func with return 

/*

har func js k andrr kuch na kuch return krta - 

undefined




*/


// let rv=console.log("hello dunia");
// console.log(rv);





// function saymyname(){
//     console.log("hello");
    


//     return 12.45;
// }

// saymyname();


// function sum(){
//     return 10+20;
// }

// let ans=sum();
// console.log(ans);





// let fun=function sum(){
//     console.log("hello");
//     return 10+100;
//     console.log("dunia");
    
    
// }

// let ans=fun();
// console.log(ans);





// function fun(){
//     console.log("hello world");
//     return function(){
//         console.log("i am anonymous");
//         return "pawan";
        
//     }
    
// }

// let rv=fun();
// console.log(rv());




// function printdetails(name,age,salary,address){
//     console.log(name);
//     console.log(age);
//     console.log(salary);
//     console.log(address);
// }

// printdetails("vikas",28,10000,"delhi")
// printdetails("rohan",25,100000,"mumbai")
// printdetails(31,"puneet","lucknow",5000)
// printdetails("vikas",28,10000)
// printdetails("vikas",28,10000,"delhi",function(){})





// function sqr(num){
//     return num*num;
// }

// let ans=sqr(10);
// console.log(ans);
// let ans2=sqr(100);
// console.log(ans2);







function checkprime(numb){
    let nof=0;
    for(let div=2;div*div<=numb;div++){
        if(numb%div==0){
            nof=nof+1;
            break;
        }
    }
    if(nof>0){
        console.log("not prime");
        
    }else{
        console.log(" prime");
        
    }

}


checkprime(100);




