//Thinking Capalbility

function linearSearch(arr, target) {
    //Linear Search
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// console.log(linearSearch([1, 2, 5, 63, 2, 8, 65], 1))


function binarySearch(arr, target) {
    // 1. arr is sorted 

    let low = 0
    let high = arr.length - 1;
    let ans = -1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (arr[mid] == target) {
            ans = mid
            high = mid - 1
        }
        else if (arr[mid] < target) { //  5<7
            low = mid + 1
        } else {
            high = mid - 1
        }

    }
    // console.log({ low, high })

    return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 4, 4, 6, 7, 33, 55, 98], 4))


function firstOccurence(arr, target) {
    let low = 0;
    let high = arr.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        console.log({ low, high })
        if (arr[mid] >= target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return low;
}
console.log(firstOccurence([1, 2, 3, 4, 4, 4, 6, 7, 33, 55, 98], 4))
firstOccurence // 3
lastOccurence // 5
TotalOcc // last-first+1
// 5-3+1



