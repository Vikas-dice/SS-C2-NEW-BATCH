/*

num 6785
6+7+8+5=26


q- 4553
frontend 
4
5
5
3


*/

let num=6785;
let sum=0;
while(num>0){
    let ld=num%10;
    sum=sum+ld;

    num=Math.floor(num/10);
}

console.log("sum --",sum);
