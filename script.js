function firstNonRepeatedChar(str) {
  // If string is empty
  if (!str || str.length === 0) {
    return null;
  }

	
  // Step 1: Create frequency map
  let freq = {};
	
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Step 2: Find first character with frequency 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character found
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));