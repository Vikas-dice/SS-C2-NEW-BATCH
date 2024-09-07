


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

let rv=decimaltoanybase(65,5)
console.log(rv);

/*
l17 right side 
num=65
base =2
l5 ans=0
l6 pow=1
l7 num>0 65>0 true
l8 rem=num%base 65%2=1
l9 num=num/base 65/2 32.5 32
l10 rem=rem*pow 1*1=1
l11 ans=ans+rem 0+1=1
l12 pow=pow*10 1*10=10
l7 num>0 32>0 true
l8 rem=32%2=0
l9 num=32/2=16
l10 rem=0*10=0
l11 ans=ans+rem 1+0=1
l12 pow=10*10=100
l7 num>0 16>0 true
l8 rem=16%2=0
l9 num=16/2=8
l10 rem=0*100=0
l11 ans=1+0=1
l12 pow=100*10=1000
l7 num>0 8>0 true






*/

