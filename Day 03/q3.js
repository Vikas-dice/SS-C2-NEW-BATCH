
/*
num 24356798
oddnum= 4
evennum=4




*/

let num=23356798;
let oddcount=0;
let evencount=0;

while(num>0){
    let ld=num%10;
    if(ld%2==0){
        evencount++;
    }else{
        oddcount++;
    }

    num=Math.floor(num/10);

}

console.log("odd count",oddcount)
console.log("even count",evencount);

