/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    const queue = [[beginWord, 1]];
    while(queue.length > 0) {
        const [word, level] = queue.shift()

        for (let i = 0; i < word.length; i++) {
            for (let c= 97; c <= 122; c++) {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);

                if (newWord === endWord) return level + 1;
                if (wordSet.has(newWord)) {
                    wordSet.delete(newWord);
                    queue.push([newWord, level + 1]);
                }
            }
        }
    }

    return 0;
};