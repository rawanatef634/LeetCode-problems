/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();    
    for (let num of nums) {
        if (map.has(num)) return true;
        map.set(num, true);
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));