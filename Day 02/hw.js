
/*
odd even
+ve -ve zero
fizzbuzz



*/

let num=20;
if(num%2==0){
    console.log("even number-",num);
    
}else{
    console.log("odd number -",num);
    
}

let num2=false;
if(num2>0){
    console.log("+ve ",num2);
    
}else if(num2<0){
    console.log("-ve ",num2);
    
}else{
    console.log("zero",num2);
    
}

let num3=5;
if(num3%15==0){
    console.log("fizzbuzz");
    
}else if(num3%3==0){
    console.log("fizz");
    
}else if(num3%5==0){
    console.log("buzz");
    
}