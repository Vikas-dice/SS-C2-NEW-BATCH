/*
num 786 
output 3



*/

let num=78655;
let nod=0;
while(num>0){
    num=Math.floor(num/10);
    nod=nod+1;
}
console.log("nod are --",nod);
