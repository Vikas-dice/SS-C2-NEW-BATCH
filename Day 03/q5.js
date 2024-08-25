/*


*/

let num=5687;
let temp=num;
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}
// console.log(num);


let div=Math.pow(10,nod-1);

// console.log(div);

while(num>0){
    let fd=Math.floor(num/div);
    console.log(fd);
    num=num%div;

    div=Math.floor(div/10);
    
}



