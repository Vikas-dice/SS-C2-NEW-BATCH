

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

let rv = anybasetodecimal(101,2);
console.log(rv);


/*

l15 right side 
num=101
base=2

l4 ans =0
l5 pow=1
l6 num>0 101>0 true
l7 ld=num%10 101%10=1
l8 num=num/10 101/10 10.1 10
l9 ans=0+(1*1)=0+1=1
l10 pow=1*2=2
l6 num>0 10>0 true
l7 ld=10%10=0
l8 num=10/10=1
l9 ans =1+(0*2)=1+0=1
l10 pow=2*2=4
l6 num>0 1>0 true
l7 ld=1%10=1
l8 num=1/10 0.1 0
l9 ans=1+(1*4)=1+4=5
l10 pow =4*2=8
l6 num>0 0>0 false
l12 ans =5
l17 left side 
rv=ans =5



*/