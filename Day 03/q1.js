

/*

num%10= last digit 
567%10= 7
567%100=67

567/10= 56.7 Floor(56.7) =56
567/100 =5.67 ceil(5.67) 6



q1- Number 
7867 
7
6
8
7


*/

let num=1234;
while(num>0){
    let ld=num%10;
    console.log(ld)
    num=Math.floor(num/10);
}

/*

num=1234
num>0 1234>0 true
l26 ld=num%10 1234%10=4
l27 4
l28 num=num/10 1224/10 123.4 123

l25 num>0 123>0 true
l26 ld=123%10=3
l27 3
l28 num=num/10 123/10 12.3 12
l25 num>0 12>0 true
l26 ld=12%10 2
l27 2
l28 nium=num/10 12/10 1.2 1
l25 num>0 1>0 true
l26 ld-num%10 1%10=1
l27 1
l28 num=num/10 1/10 0.1 0
l25 num>0 0>0 false





*/
