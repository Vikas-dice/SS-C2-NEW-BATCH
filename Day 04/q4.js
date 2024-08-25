

/*

786

7
8
6


786/100 7.86 floor 7 output
86/10 8.6 floor 8 -output
6/1 6 output






*/


let num=78624;
//step 1 nod
let temp=num;
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}
console.log("num bacha hua ",num);
// console.log(nod);
let div=Math.pow(10,nod-1);
console.log(div);
while(num>0){
    let fd=Math.floor(num/div);
    console.log(fd);
    num=num%div;
    div=div/10;
    
}




// console.log(7);
// console.log(8);
// console.log(6);



