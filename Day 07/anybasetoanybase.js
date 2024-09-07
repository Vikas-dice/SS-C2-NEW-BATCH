/*

base 8 - base 2
step 1- base 8-base10 (any base to decimal)
step 2 - convted base(10)- base 2 (decimal to any base)




*/
 //step 1 anybase to decimal

 function anybasetodecimal(num,base){
    let ans =0;
    let pow=1;
    while(num>0){
        let ld =num%10;
        num=Math.floor(num/10)
        ans=ans+(ld*pow)
        pow=pow*base;
    }
    return ans ;
}

//step 2 -decimal to anybase 

function decimaltoanybase(num,base){
    let ans =0;
    let pow=1;
    while(num>0){
        let rem=num%base;
        num=Math.floor(num/base);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*10;
    }
    return ans ;
}

function anybasetoanybase(num1,base1,base2){

//step1 - abtodecimal
let decimalconvertednumber=anybasetodecimal(num1,base1)
    //step 2 - decimal to any abse
 let finalans= decimaltoanybase(decimalconvertednumber,base2)
 return finalans;

}

let rv=anybasetoanybase(343,8,2)
console.log(rv);
