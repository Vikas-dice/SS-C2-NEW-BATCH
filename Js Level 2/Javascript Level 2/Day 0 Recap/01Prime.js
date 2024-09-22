


// let num=100;
// let nof=0;

// for(let div=1;div<=num;div++){ //app 1 - loop 7 baar //100
    
//     if(num%div==0){
//         nof++;
//     }
// }

// if(nof>2){
//     console.log(num,"not prime")
// }else{
//     console.log(num,"prime")
// }



// let num=100;
// let nof=0;
// for(let div=2;div<=num-1;div++){ //98 times
//     if(num%div==0){
//         nof++;
//         break;

//     }
// }
// if(nof==0){
//     console.log(num,"prime")
// }else{
//     console.log(num,"not prikme")
// }


let num=100;
let nof=0;

for(let div=2;div*div<=num;div++){ //2-10 =9 baar
    if(num%div==0){
        nof++;
        break;    
    }
}
if(nof>0){
    console.log(num," not prime");
    
}else{
    console.log(num," prime");   
}

