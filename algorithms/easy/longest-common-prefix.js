function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefix = strs[0]; // Start with the first word

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // Keep trimming the prefix
            prefix = prefix.slice(0, -1);
            if (!prefix) return ""; // If no prefix remains, return ""
        }
    }

    return prefix;
}

// Example Usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
