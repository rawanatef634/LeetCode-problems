/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.includes(needle)) {
        let firstIndex =  haystack.indexOf(needle)
        return (firstIndex);
    } else return -1;
}
