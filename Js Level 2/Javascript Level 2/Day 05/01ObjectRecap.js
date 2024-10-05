

/*

problem statement 

dice - employee

30 employee



*/

let emp1={
    name:"vikas",
    age:27,
    salary:10000,
    education:["10th","12th","btech"],
    otherdetails:{
        ismarried:false,
        hometown:"meerut",
        bgroup:"b+"

    },
    task:function(){
        console.log("teaching");
        
    }
}

let emp2={
    name:"manas",
    age:18,
    salary:20000,
    education:["8th","10th"],
    otherdetails:{
        ismarried:true,
        hometown:"kolkata",
        bgroup:"a+",
    },
    task:function(){
        console.log("office boy");
        
    }
}

let emp3={
    name:"saviour",
    age:30,
    salary:30000,
    education:["10th","12th","bcom","mba"],
    otherdetails:{
        ismarried:false,
        hometown:"kolkata",
        bgroup:"o+"

    },
    task:function(){
        console.log("batch management");
        
    }

}

//jugaad - value - new new object 
//es5 - function constructor
//constructor - new object 

/*
syntax

function Employee(){
}


*/

// let age=28;
// console.log(age.__proto__);


// function Employees(){

// }
// let employee1=new Employees();
// console.log(employee1);


function DiceEmployees(name,age,salary,education,otherdetails,task){
    this.naam=name;
    this.umar=age;
    this.tankhuwa=salary;
    this.padhai=education;
    this.otherdetails=otherdetails;
    this.kaam=task;

}
let employee1=new DiceEmployees("vikas",27,10000,["10th","12th","btech"],{
    ismarried:false,
    hometown:"meerut",
    bgroup:"a+"
},function(){
    console.log("teaching");
    
})

let employee2=new DiceEmployees("manas",18,20000,["8th","10th"],{
    ismarried:true,
    hometown:"kolkata",
    bgroup:"b+"
},function(){
    console.log("office boy");
    
})

console.log(employee1);
console.log(employee2);
console.log(employee1.padhai);
console.log(employee1["naam"]);

for(const maal in employee1){
    console.log(maal);
    
}








// let employee1=new DiceEmployees();
// let employee2=new DiceEmployees();
// console.log(employee1);
// console.log(employee2);


