const arr = [23, 45, 52, 34, 56, 98]

let result = []



//Operations

// for (let i = 0; i < arr.length; i++) {
//     if (isEven(arr[i])) {
//         result.push(arr[i])
//     }
// }

// console.log(result)


// function isEven(num) {
//     if (num % 2 == 0) return true
//     else return false
// }



function giveArr(arr, result) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i])
        }
    }
}

// giveArr(arr, result)

// console.log(result)
// result.pop()
// console.log(result)

// let str = "Test "
// console.log(str.length)

let names = ["Saksham", "Anurag", "Lokesh", "Raj", "Jar"]

for (let i = 0; i < names.length; i++) {
    if (names[i].length == 3) {
        console.log(names[i])
    }
}


