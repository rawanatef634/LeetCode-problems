/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxHeight = height[height.length -1]
    let minHeight = height[0]
    console.log(maxHeight);
    console.log(minHeight);
    
    let width = height.indexOf(maxHeight) - height.indexOf(minHeight)
    console.log(width);
    let maximumArea = width * minHeight
    console.log(maximumArea);
    
    for (let i = 0; i < height.length - 1; i++) {
        let width = Math.max(height.indexOf(maxHeight) - height.indexOf(height[i]))
        let maximumArea = width * height[i]
        if ( height[i] < height[i + 1])
    }
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
