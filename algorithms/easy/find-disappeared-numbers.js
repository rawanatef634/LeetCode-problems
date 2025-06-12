/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const set = new Set(nums);
    const result = [];
    for (let i = 1; i <= nums.length; i++) {
        if (set.has(i)) result.push(i);
    }
    return result;
    
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
