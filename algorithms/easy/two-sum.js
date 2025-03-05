function twoSumSorted(arr, target) {
    let left = 0;
    let right = arr.length -1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === target) {
            return [left, right]
        }
        if (sum < target) {
            left++
        }
        else {
            right--
        }
    }
    return [-1, -1]
}

console.log(twoSumSorted([1, 2, 3, 4, 6], 9)); 
