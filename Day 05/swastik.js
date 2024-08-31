

for(let row=1;row<=7;row++){
    for(let col=1;col<=7;col++){
        if(row==1){
            if(col==1 || col>=4)
            {
                process.stdout.write("*")
            }else{
               process.stdout.write(" ")
 
            }


        }else if(row>1 && row<=3){
            if(col==1 || col==4){
                process.stdout.write("*")

            }else{
                process.stdout.write(" ")

            }


        }else if(row==4){
            process.stdout.write("*")


        }else if(row>4 && row<=6){
            if(col==4 || col==7){
                process.stdout.write("*")

            }else{
                process.stdout.write(" ")

            }


        }else if(row==7) {
            if(col<=4 || col==7){
                process.stdout.write("*")

            }else{
                process.stdout.write(" ")


            }


        }
       
    }
    console.log();
    
}