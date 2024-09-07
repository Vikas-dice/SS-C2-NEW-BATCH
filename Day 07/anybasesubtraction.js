

function anybasesubtarction(num1,num2,base){

    let ans =0;
    let pow=1;
    let c=0;

    while(num2>0){

        let num1ld =num1%10;
        let num2ld=num2%10;
        num1=Math.floor(num1/10)
        num2=Math.floor(num2/10)

        let d=0;
        num2ld=num2ld+c;
        if(num2ld>=num1ld){
            c=0;
            d=num2ld-num1ld;
        }else{
            c=-1;
            d=num2ld+base-num1ld;
        }

        d=d*pow;
        pow=pow*10;
        ans=ans+d;
        





    }

    return ans;



}

let rv=anybasesubtarction(343,67,8)
console.log(rv);

