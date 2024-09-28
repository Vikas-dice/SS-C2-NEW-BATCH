

/*
string - seq of chars

vikas 
v
i 
k 
a 
s


ram - array - index 




*/

let name="vikas";


//traverse -access
console.log(name[0]);
console.log(name[8]);
console.log(name.length);

console.log(name.__proto__);

//traverse =- length 

//for loop


for(let idx=0;idx<name.length;idx++){
    console.log(name[idx]);
    
}

//while

let idx=0;
while(idx<name.length){
    console.log(name[idx]);
    idx++;
    
}



//do while 

let idxx=0;
do{
    console.log(name[idxx]);
    idxx++;
    

}while(idxx<name.length);

//foreach
console.log("-----------------------------");

// name.forEach(function(maal){
//     console.log(maal);
    
// })

//for of loop

// for(const maal of name){
//     console.log(maal);
    
// }






