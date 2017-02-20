// Number of Ones
// Given a sorted bit array (values of 0, and 1) determine the number of 1’s in the array.

// Input: Array of elements with values belong to the set S : { 0, 1 }
// Output: Integer
// Example
// Input: [0, 0, 0, 1, 1, 1] =>  Output: 3
// Input: [0, 0, 0, 0]   =>  Output: 0
// Constraints
// Time Complexity: O(logN)
// Auxiliary Space Complexity: O(1)


function ones(arr){
  var start = 0;
  var end = arr.length-1;
  var mid;

  while (start <=end){
    mid = Math.floor((start+end) / 2)
    if(arr[mid] === 1 ){
      end = mid -1
      if (arr[mid-1] === 0){
        return arr.length - mid;
      }
    }else{
      start = mid + 1
    }
  }
}


ones([0,1,1,1,1,1])

// Integer to Roman
// Given an integer from 1 to 3999, return the roman numeral equivalent

// Input:     Integer
// Output:  String

// M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1
// Example
// Input: 9      =>  Output: ‘IX’
// Input: 8      =>  Output: ‘VIII’
// Input: 49       =>  Output: ‘XLIX’
// Constraints
// Time Complexity: O(1)
// Auxiliary Space Complexity: O(1)

function convert(n){
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

  var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
  var result = "";

    for(var i = 0; i < values.length; i++){

      if (n>=values[i]) {

        while (n >= values[i]) {
          n = n - values[i]
          console.log(n)
          result += roman[i]
        }
      }

    }

  return result
}

// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

function max_consecutive_ones(input){
  var max = 0;
  var current = 0;

  for(var i=0; i<input.length; i++){
    if(input[i] === 1){
      current++;
      if (current > max) max = current;
    }else{
      current = 0
    }
  }
  return max;
}

// Given a base and an exponent, create a function to find the power using
//  *     Helper Method Recursion
//  *
//  * Input:   Two Integers, base and exponent
//  * Output:  Integer
//  *
//  * Example: power(3, 4) => 81
//  */
function power(a, b){
  result = 1;
  function helper(counter){
    if (counter === b){
      return

    }
     result = result * a
      helper(counter + 1)

  }
  helper(0)
  return result
}
