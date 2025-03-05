function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    strs.sort();

    let first = strs[0]; // First word (smallest in lexicographic order)
    let last = strs[strs.length - 1]; // Last word (largest in lexicographic order)
    let prefix = "";

    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            prefix += first[i]; 
        } else {
            break;
        }
    }

    return prefix;
}

// Example Usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));  
console.log(longestCommonPrefix(["apple", "app", "apricot"])); 
