/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   const set = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) return i;
    }
    return -1;
};

console.log(missingNumber([3, 0, 1]));
