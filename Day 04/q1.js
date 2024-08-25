
/*

num 4578
8
7
5
4

4568%10=8
4568%100=68
4568%1000=568

4568/10= 456.8 floor(456.8) 456

4568/100 45.68 ceil(45.68) 46






*/

let num=1234;
while(num>0){
    let ld=num%10;
    console.log(ld);
    num=Math.floor(num/10)
}

/*
l25 num=ram=1234
l26 num>0 1234>0 true
l27 ld=ram=num%10 1234%10=4
l28 4 
l29 num=num/10 1234/10 123.4 123
l26 num>0 123>0 true
l27 ld=num%10 123%10=3
l28 3
l29 num=num/10 123/10 12.3 12
l26 num>0 12>0 true
l27 ld=12%10 2
l28 2
l29 num=12/10 1.2 1
l26 num>0 1>0 true
l27 ld=1%10 1
l28 1
l29 num=num/10 1/10 0.1 0
l26 num>0 0>0 false





*/