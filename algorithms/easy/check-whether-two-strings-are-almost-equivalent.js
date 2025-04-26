/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const freq1 = {};
    const freq2 = {};
  
    for (let char of word1) {
      freq1[char] = (freq1[char] || 0) + 1;
    }
  
    for (let char of word2) {
      freq2[char] = (freq2[char] || 0) + 1;
    }
  
    const allChars = new Set([...word1, ...word2]);
    console.log(allChars);
    
    for (let char of allChars) {
      const count1 = freq1[char] || 0;
      const count2 = freq2[char] || 0;
  
      if (Math.abs(count1 - count2) > 3) {
        return false;
      }
    }
  
    return true;
}


  