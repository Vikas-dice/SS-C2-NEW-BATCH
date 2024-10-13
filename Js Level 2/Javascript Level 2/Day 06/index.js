// Doubt Session
// [2,11,7,15] k = 9
// [0,2] -> [2,0]


function twoSum(arr, k) {
    // let res = []
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] == k) {

    //             res.push(j)
    //             res.push(i)
    //             break;
    //         }

    //     }
    // }
    // return res;
    let obj = {}
    arr.forEach(item => {
        obj[item] = true
    })
    let newarr = Object.keys(obj)
    for (let i = 0; i < newarr.length; i++) {
        let result = k - newarr[i]
        if (obj[result] === true) {
            console.log(result, newarr[i])
            break;
        }
    }


}
//const res = twoSum([2, 11, 15, 7], 9)
// console.log(res)

// const obj = { 2: "steve", jobrole: "App Dev" }

// console.log(obj['2'])


function findDuplicate(arr) {
    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] === arr[j])
    //             return true
    //     }
    // }
    // return false;

    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            return true
        } else {
            obj[arr[i]] = true
        }
    }
    return false
    console.log(obj)
}
// console.log(findDuplicate([1, 2, 4, 9, 10]))

function firstNonrepeating(str) {
    for (let i = 0; i < str.length - 1; i++) {
        let flag = false
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                flag = true
                break;
            }
        }
        if (!flag) {
            return i;
        }
    }
}
console.log(firstNonrepeating("loveleetcode"))