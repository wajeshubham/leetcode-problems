function romanToInt(s) {
  let obj = new Map();
  // initialize all possible and unit roman letters in the map
  obj.set("I", 1);
  obj.set("V", 5);
  obj.set("X", 10);
  obj.set("L", 50);
  obj.set("C", 100);
  obj.set("D", 500);
  obj.set("M", 1000);

  // if we have length as one we just return value associated with the single character in map
  if (s.length === 1) return obj.get(s);
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // get associated integer value for our current roman letter and it's next roman letter
    let current = obj.get(s[i]);
    let next = obj.get(s[i + 1]);
    if (current < next) {
      // according to rules if we have current roman letter value less than it's next roman letter value
      // we need to consider both the letters with combined value of (next - current)
      result += next - current;

      // as we are operating on two characters in a string
      // i.e. the current and next one which is one index ahead of current
      // we don't want to consider it in the next iteration
      // so we skip the next element by incrementing the i
      i++;
    } else {
      // if above case is false we just sum up the result with current
      result += current;
    }
  }
  return result;
}
