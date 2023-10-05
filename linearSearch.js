
// Write a function `linearSearch` that takes two arguments: the object (i.e., string or number) you are searching for, and the array you're searching in.

// It should return an integer representing the (first) index of the search term in the array by going through each element in sequence and returning the index of the first instance of the object.

// If the object searched for does not exist in the array, it should return `undefined`.


function linearSearch(searchTerm, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchTerm) {
      return arr.indexOf(searchTerm)
    } 
  }
}

// ### Step 2 : Global linear search

// Write a new function `globalLinearSearch` that returns an array of _all the indices_ that match the search term. In other words, if the string `x` is in more than one place in the array, `globalLinearSearch` will return an array containing the index of each occurrence of `x`.

// Here's an example of what that might look like.

// ```js
// bananaList = "bananas".split(""); // ["b", "a", "n", "a", "n", "a", "s"]
// globalLinearSearch("a", bananaList); // [ 1, 3, 5 ]
// ```

// Once again you might want to write your own tests to confirm your function works in all cases


function globalLinearSearch(searchTerm, arr) {
  let numArr = []
  for (let i = 0; i < arr.length;i++) {
    if (searchTerm === arr[i]) {
      numArr.push(i)
    }
  }
  
  return numArr
}


module.exports = { linearSearch, globalLinearSearch };
