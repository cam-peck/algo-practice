// eslint-disable-next-line no-unused-vars
function validAnagram(word1, word2) {
  const word1Obj = {};
  const word2Obj = {};
  for (let i = 0; i < word1.length; i++) {
    if (!word1Obj[word1[i]]) {
      word1Obj[word1[i]] = 1;
    } else word1Obj[word1[i]]++;
  }
  for (let i = 0; i < word2.length; i++) {
    if (!word2Obj[word2[i]]) {
      word2Obj[word2[i]] = 1;
    } else word2Obj[word2[i]]++;
  }
  for (const key in word1Obj) {
    if (!word2Obj[key]) { // key does not exist
      return false;
    }
    if (word2Obj[key] !== word1Obj[key]) { // key exists, but with a different value
      return false;
    }
  }
  return true;
}

// input: two strings (can be empty, only lowercase letters
// output: bool t / f

// iterate through the first word, storing each letter in an object with a counter
// iterate through the second word, storing each letter in an object with a counter
// compare the two objects
