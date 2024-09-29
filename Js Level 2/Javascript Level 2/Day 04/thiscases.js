
/*

case 1 - this access - global - window object

local - scope - {}
{} x =


case 2 -object - function - method - parent - es5 , child func - es5 - this ? - window object

case 3 - object - function - method - parent -es5 and child func- es6 - this - ? - parent object

case 4 - object-function - method - parent -es6 and child es6 - this -? window object

case 5- 

*/




// console.log(this);


// let obj={
//     name:"vikas",
//     age:27,
//     address:"delhi",
//     occupation:"masterji",
//     salary:10000,

//     fun:function parent(){//es5
//         console.log("i am parent function");

//         function child(){//es5
//             console.log(this);
            
//         }

//         child();

        
//     }
// }



// console.log(obj.fun());



// let obj={
//     name:"vikas",
//     age:27,
//     salary:10000,

//     fun:function parent(){//es5

//         child=()=>{//es6
//             console.log(this);
            
//         }
//         child();

//     }
// }

// console.log(obj.fun());





// let obj={
//     name:"vikas",
//     age:27,
//     addres:"delhi",
//     salary:10000,

//     fun:parent=()=>{//es6
//         child=()=>{//es6
//             console.log(this);
            
//         }
//         child();
//     }



// }

// console.log(obj.fun());



let obj={
   name:"vikas",
    age:28,
    address:"delhi",
    salary:10000,

    fun:parent=()=>{

        function child(){
            console.log(this);
            
        }

        child();

    }
}


console.log(obj.fun());

