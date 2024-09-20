 
   
// for(let row=0;row<=5;row++){
//     // let ans="";
//     let val=1;
//     for(let col=0;col<=row;col++){
//         let valm1=val*((row-col)/(col+1));
//         val=valm1;
//         // ans=ans+val;
//         // console.log(val);
      
//     }
//     console.log(val);
    
    
   
    
// }
let n=5;
for(let row=1;row<n;row++){
    let ans ="";
    let val=1;
    for(let col=0;col<=row;col++){
        // console.log(val);
        ans=ans+val+" "
        let valm1=val*(row-col)/(col+1)
        val=valm1
        // valm1=val;
        // console.log(val);
        // ans=ans+val+" ";

    }
    console.log(ans);
    
   
    
}


