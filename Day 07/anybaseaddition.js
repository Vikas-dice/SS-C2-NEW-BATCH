

function anybaseaddition(num1,num2,base){
    let ans =0;
    let pow=1;
    let c=0;
    while(num1>0 || num2>0  || c>0 ){
        let num1ld=num1%10;
        let num2ld=num2%10;
        num1=Math.floor(num1/10);
        num2=Math.floor(num2/10)

        let d=num1ld+num2ld+c;
      
        c=Math.floor(d/base);
        d=d%base;


        d=d*pow;
        ans=ans+d;

        pow=pow*10;


    }
    return ans ;


    }


    let sum=anybaseaddition(110011,1001,2)
    console.log(sum);

    
    