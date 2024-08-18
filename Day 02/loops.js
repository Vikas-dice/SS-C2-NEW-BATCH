

// console.log("vikas");

// console.log("vikas");
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");



/*
loops - init , cond/statment,update

for 
while
do while


syntax 
if(){
}
else if(){
}

switch(){
}

for(){
}

*/
// let i=1;
// for(;i<=10;){
//     console.log("vikas",i);
//     i=i+1;

    
// }

// for(let i=10;i<=15;i=i+2){
//     console.log("vikas",i);
    
// }
// console.log("loop k bahar aagya cz cond false hogyi upar");



/*

while(){
}


*/

// let i=1;
// while(i<=10){
//     console.log("vikas",i);
//     i=i+1;
    
// }


/*

do{
//kaam
}while(cond);




*/


// let i=1;
// do{
//     console.log("vikas",i);
//     i=i+1;
    
    
// }while(true);

/*
patterns 

table 
counting 
odd even 
2*1=2
2*2=4



*/

// console.log("vikas"+"chaudhary");
// console.log("vikas"+"***"+"chaudhary");





// for(let i=1;i<=10;i=i+1){
//     // console.log(2*i);
//     console.log("2"+"*"+i+"="+2*i);
    
    
// }

// let start=1;
// while(start<=100){
//     console.log(start);
//     start=start+1;
    
// }



// for(let start=1;start<=100;start=start+1){
//     console.log(start);
    
// }


// for(let start=1;start<=100;start=start+2){
//     console.log(start);
    
// }


// for(let start=1;start<=100;start++){
//     if(start%2==0){
//         console.log("even ",start);
        
//     }else{
//         console.log("odd ",start);
        
//     }
// }


// for(let row=1;row<=5;row++){

//     for(let star=1;star<=row;star++){
//         // console.log("*");
//         process.stdout.write("*"+" ");
        
//     }
//     console.log();
    

// }




// for(let row=1;row<=5;row++){
//     for(let star=1;star<=5-row+1;star++){
//        process.stdout.write("*"+" ")
        
//     }
//     console.log();
    
// }

// for(let row=1;row<=5;row++){
//     for(let star=5;star>=row;star--){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }
// let nsp=3;
// let nst=1;
// for(let row=1;row<=4;row++){
//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }
//     //star
//     for(let st=1;st<=nst;st++){
//         process.stdout.write(" "+"*")

//     }
//     //nl
//     console.log();
//     //UPDATE NSP NST
//     nsp=nsp-1;
//     nst=nst+2;
    


// }



// let nsp=0;
// let nst=7;
// for(let row=1;row<=4;row++){
//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }
//     //star
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")

//     }

//     //nl
//     console.log();
    

//     //update nsp nst
//     nsp=nsp+1;
//     nst=nst-2;

// }


// let nsp=2;
// let nst=1;
// for(let row=1;row<=5;row++){

//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")

//     }
    


//     //star
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*")

//     }


//     //nl
//     console.log();
    

//     //update nsp nst
//     if(row<3){
//         nsp=nsp-1;
//         nst=nst+2;
//     }else{
//         nsp=nsp+1;
//         nst=nst-2;
//     }
// }



// for(let row=1;row<=5;row++){
//     for(let col=1;col<=5;col++){
//         process.stdout.write("*  ")
//     }
//     console.log();
    
// }

// let nsp=4;

// for(let row=1;row<=5;row++){
//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }


//     //one star
//     process.stdout.write("*")


//     //nl
//     console.log();
    

//     //update nsp
//     nsp=nsp-1;
// }


// for(let row=1;row<=5;row++){
//     for(let col=1;col<=5;col++){
//        if(row+col==6){
//         process.stdout.write("*")
//        }else{
//         process.stdout.write(" ")

//        }
//     }
//     console.log();
    
// }

for(let row=1;row<=5;row++){
    for(let col=1;col<=5;col++){
       if(row==col || row+col==6){
        process.stdout.write("*")
       }else{
        process.stdout.write(" ")

       }
    }
    console.log();
    
}