function isValid(s) {
    const bracketMap = { '(': ')', '{': '}', '[': ']' };
    const stack = [];

    for (let char of s) {
        if (bracketMap[char]) {            
            stack.push(char);                
        } else { 
            const lastOpening = stack.pop();
            
            if (bracketMap[lastOpening] !== char) { 
                return false; 
            }
        }
    }
    return stack.length === 0;     
}

