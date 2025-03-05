var twoSum = function(nums, target) {
    let map = {}; // Store seen numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.hasOwnProperty(complement)) {
            console.log(`output: [${map[complement]}, ${i}]`);
            return [map[complement], i];
        }

        map[nums[i]] = i; // Store current number in map
    }
};
