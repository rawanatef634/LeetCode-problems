/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const freq = {}
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1             
    }
    
    const values = Object.values(freq);    
    return values.every(val => val === values[0]);
    
};

