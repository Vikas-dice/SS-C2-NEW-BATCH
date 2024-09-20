

function processNumbers(limit) {
    let result = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            continue; 
        }
        if (i > 10) {
            break; 
        }
        result += i; 

    }
    return result;
}

console.log(processNumbers(15));
/*
i=2 limit 15
l5 i<=limit 2<=15 true
l6 i%2==0 2%2==0 true
l7 continue i++ i=3
i<=limit 2<=15 true
l6 i%2==0 3%2==0 false
l5 i++ i=4
i<0limit 4<=15 true
l7 i%2==0 4%2==0 true
continue i++


odd number sum 
even

1-15
1
3
5
7
9
11
13











*/