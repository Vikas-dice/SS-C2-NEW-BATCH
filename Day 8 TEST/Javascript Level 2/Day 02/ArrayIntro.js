
/*
syntax 



*/

let marks=[40,55,65,37,23];

//access - index 
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);

// proto

// console.log(marks.__proto__);

console.log(marks.length);
console.log(marks[marks.length-1]);
console.log(marks[marks.length]);

//array - hetro - diff data 

let arr=["vikas","dice",10,20,30,40,'v','z',[100,200,300],function(){
    console.log("i am a function");
    
}]


console.log(arr.length);

console.log(arr[8]);
console.log(arr[8][2]);

console.log(arr[9]());

//traversal 

/*
loops - length 
for
while 
do while


for of loop
forEach loop 



*/

// for(let idx=0;idx<arr.length;idx++){
//     console.log(arr[idx]);
    
// }
console.log("--------------------------------");


// let idx=0;
// while(idx<arr.length){
//     console.log(arr[idx]);
//     idx++;
    
// }


// console.log("---do while==-----------");

// let idx=0;
// do{
//     console.log(arr[idx]);
//     idx++;
    
// }while(idx<arr.length)






// for(let maal of arr){
//     console.log(maal);
    
// }


// for(let elements of arr){
//     console.log(elements);
    
// }










// arr.forEach(function(elements){
// console.log(elements);

// })

// arr.forEach((element)=>{
//     console.log(element);
    
// })



/*

push  - add -last
pop - remove - last
shift 
unshift 
indexof
includes 





*/

let names=["vikas","rohan","puneet","deepak"]
//push

names.push("pankaj")
console.log(names);
//pop

// names.pop();
// names.pop();
// console.log(names);

// for(let i=0;i<names.length;i++){
//     names.pop()
// }


//shift 

// names.shift()
// names.shift()
// let rv=names.shift()
// console.log(rv);



// console.log(names);

// //unshift - push 
// names.unshift("academy")

// console.log(names);




// let rv=names.pop()
// console.log(rv);

//includes - true/false

// let rv=names.includes("pankaj")
// console.log(rv);


//indexof 




console.log(names.indexOf("pankaj"));
console.log(names.indexOf("js"));



//slice splice 

let newarr=[1,2,3,4,5,6,7,8,9,10]
console.log(newarr.slice(2,74));

//starting - inclusive 
//end -exclusive 

console.log(newarr.slice(3));
console.log(newarr.slice(0));

console.log(newarr.slice(7,2));

console.log(newarr.slice(2,-3));

console.log(newarr.slice(-2,-8));
console.log(newarr.slice(-8,-2));



//splice 




