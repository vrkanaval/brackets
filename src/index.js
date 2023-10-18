module.exports = function check(str, bracketsConfig) {
  const stack = []; 
  const bracketsMap = new Map(bracketsConfig);

  for (const char of str) {
    if (bracketsMap.has(char)) {
        if (bracketsMap.get(char) === char && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    } else {
        const lastBracket = stack.pop();
        if (char !== bracketsMap.get(lastBracket)) {
            return false;
        }
    }
}

return stack.length === 0;
}
