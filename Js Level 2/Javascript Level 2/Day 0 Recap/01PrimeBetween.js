for(let num=1;num<=100;num++){
    if(num==1){
        continue;
    }
    let nof=0;
    for(let div=2;div*div<=num;div++){
        //2-10 =9 baar
        if(num%div==0){
            nof++;
            break;    
        }
    }
    if(nof==0){
        console.log(num,"  prime");
        
    }

}