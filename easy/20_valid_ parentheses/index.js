function isValid(str) {
  const obj = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    // if current char is an opening parentheses (one of the keys in obj)
    if (obj[currentChar]) {
      // We push it into stack unless we find it's pair parentheses
      stack.push(currentChar);
    } else {
      // if it is not the key in obj
      // then it is a closing bracket
      // now to make it valid the last pushed opening bracket in stack should be the pair of this closing brcaket
      // so we pop the last opening bracket
      let leftBracket = stack.pop();
      // suppose opening bracket is "{" the expectedBracket will be "}"
      let expectedBracket = obj[leftBracket];
      // if our currentChart is not expectedBracket it means we have a wrong bracket closing
      if (currentChar !== expectedBracket) return false;
    }
  }
  return stack.length === 0;
}
