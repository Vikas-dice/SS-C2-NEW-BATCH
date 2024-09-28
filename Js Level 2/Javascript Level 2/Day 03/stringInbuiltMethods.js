

/*
slice



*/

let name ="vikas";


console.log(name.slice(1,5));
console.log(name.slice(0));
console.log(name.slice(4,1));
console.log(name.slice(-1,-4)); 
console.log(name.slice(-4,-1));

//split

console.log("---------------------------");


// let ar=["vikas","dice","academy","fullstack"]
let str="vik$as$cha$ uid$hary di$ce academy";

// console.log(str.split(" "));

//split - return - new array return


let rv=str.split("$");
console.log(rv.length);


/*

"my name is vikas and dice academy vikas full stack vikas rohan pawan vikas laptop vikas"

function(str,target)
vikas - 5


hint - string - split(" ")



*/



function counttraget(str,target){

let count=0;
    let arr=str.split(" ");
    // console.log(arr);
    for(const maal of arr){
        if(maal==target){
            count++;
        }

    }
    return count;
    // console.log("no of times",count);
    
}


let ans=counttraget("my name is vikas and dice academy vikas full stack vikas rohan pawan vikas laptop vikas","vikas")

// console.log(ans);



/*

rohan
nahor


*/

function reverseName(naam){
    let arr=naam.split("");
    console.log(arr);

    let st=0;
    let end=arr.length-1;
    while(st<end){
        let temp=arr[st];
        arr[st]=arr[end]
        arr[end]=temp;

        st++;
        end--;

     

    }

    // console.log(arr);
console.log(arr.join(""));


  
    
    

}

/*

my name is pawan

q1- pawan is name my
q2- nawap si eman ym 




*/


reverseName("rohan")



function reversesentense(str){
    let arr=str.split(" ");

    let st=0;
    let end =arr.length-1;
    while(st<end){
        let temp=arr[st]
        arr[st]=arr[end]
        arr[end]=temp;

        st++;
        end--;
    }

    console.log(arr.join(" "));
    
}

reversesentense("my name is pawan")


function reverseeverything(str){

    let arr=str.split(" ");
    // console.log(arr);
    for(let idx=0;idx<arr.length;idx++){
        // console.log(arr[idx]);
        let splittedarr=arr[idx].split("");
        // console.log(splittedarr);

        let st=0;
        let end=splittedarr.length-1;

        while(st<end){
            let temp=splittedarr[st]
            splittedarr[st]=splittedarr[end]
            splittedarr[end]=temp;

            st++;
            end--;
        }

        // console.log(splittedarr.join(""));
        let finalans=splittedarr.join("")
        // console.log(finalans.join(" "));
        
        // console.log(finalans.join(" "));
        console.log(finalans);
        
        
        
        
    }
    
}

reverseeverything("my name is pawan")


