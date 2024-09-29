
/*

nitin 



*/

function checkPalindrome(str){
    let ar=str.split("");
    let st=0;
    let end =ar.length-1;
    while(st<end){
        if(ar[st]==ar[end]){
            return true;
        }
        st++;
        end--;
    }
    return false;
}

let rv=checkPalindrome("vikas")
console.log(rv);

