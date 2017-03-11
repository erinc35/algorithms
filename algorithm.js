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


// Given an array of integers, create an array of two-item arrays using
//  *     Helper Method Recursion
//  *
//  * Input:   Array of Integers
//  * Output:  Array of two-item Arrays
//  *
//  * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
//  * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
//  */

var arrayPairs = [1, 2, 3, 4, 5, 6]

function pair(arrayPairs){
  var result = [];
  function helper(ind){
    if (ind >= arrayPairs.length){
      return;
    }
    result.push([arrayPairs[ind],arrayPairs[ind + 1]])
    helper(ind + 2)
  }
  helper(0);
  return result
}


// *  Problem 1: Max Consecutive Sum
//  *
//  *  Prompt:    Given an array of integers find the sum of consecutive
//  *             values in the array that produces the maximum value.
//  *
//  *  Input:     Unsorted array of positive and negative integers
//  *  Output:    Integer (max consecutive sum)
//  *
//  *  Example:   input = [6, -1, 3, 5, -10]
//  *             output = 13 (6 + -1 + 3 + 5 = 13)
//  *
//  *  Time Complexity: O(n)
//  *  Auxiliary Space Complexity: O(1)


var maxSubArray = function(nums) {
    var current_max = 0;
    var max = Number.NEGATIVE_INFINITY;
    // if(nums.length ===1) return nums[0];

    for(var i=0;i<nums.length;i++){
        current_max += nums[i];
        max = Math.max(current_max, max)
        if(current_max<0) current_max = 0;

    }
    return max;
};

// *  Problem 2: Lattice Paths (Dynamic Programming Approach)
//  *
//  *  Prompt:    Count the number of unique paths to travel from the top left
//  *             to the bottom right of a lattice of squares.
//  *
//  *  Input:     An interger N (which is the size of the lattice)
//  *  Output:    An interger (which represents the number of unique paths)
//  *
//  *  Example:   input: 2
//  *
//  *             (2 x 2 lattice of squares)
//  *              __ __
//  *             |__|__|
//  *             |__|__|
//  *
//  *             output: 6 (number of unique paths from top left corner to bottom
//  *                     right)
//  *
//  *  Notes:     What is the time and auxilliary space complexity of your solution?
//  *
//  *             When moving through the lattice, you can only move either down or
//  *             to the left.
//  *
//  *             You did this problem before with recursion. Try implementing it
//  *             now with dynamic programming!

function latticePaths(a){
      if(a === 0){
        return 0;
    }

    var grids = [[1]];


    for(var i = 1; i < a; i++){
        grids[0][i] = 1;

    }

    for(var j = 1; j < a; j++){
       grids.push([]);
        grids[j][0] = 1;

    }

    for(i = 1; i < a; i++){
        for(j = 1; j < a; j++){
            grids[i][j] = grids[i-1][j] + grids[i][j-1];
        }
    }
    return grids[a-1][a-1];
}

// Two Sum
// Given an array of integers and a target, return a pair of indices where the corresponding values in the array add up to the target.

// Input: Array of Integers, Target Integer
// Output: Two element Array of Integers
// Example
// Input: [1, 6, -5, 7, 3], -2      => Output: [2,4]


function twoSum(numbers, target){
  var targetHash = {};

  for(var i=0; i<numbers.length; i++){
    if(targetHash[numbers[i]] !== undefined){
      return [targetHash[numbers[i]], i];
    } else {
      targetHash[target-numbers[i]] = i;
    }
  }
  return [-1,-1];
}

// Kth Largest in an Array
// Given an array of integers and a number K, find the Kth largest value in the array.

// Input: Array of integers and an Integer
// Output: Integer
// Example
// Input: [3, 1, 6, 4, 9, 8], 3     => Output: 6
// Input: [1, 9, 5, 3], 1    =>  Output: 9
// Constraints
// Time Complexity: Average O(N)
// Auxiliary Space Complexity: Average O(log(N))

//  use quick select
var findKthLargest = function(nums, k) {
    var smaller = [];
    var larger = [];
    var pivot = nums[parseInt(nums.length/2)];
    var pivotCnt = 0;

    for(var i = 0; i < nums.length; i++) {
        var num = nums[i];

        if(num > pivot) {
            larger.push(num);
        } else if(num < pivot) {
            smaller.push(num);
        } else {
            pivotCnt++;
        }
    }

    if(k <= larger.length) { // if larger includes k
        return findKthLargest(larger, k);
    } else if(k - larger.length - pivotCnt <= 0) { // k is part of pivot
        return pivot;
    } else { // if smaller inclues k
        return findKthLargest(smaller, k - larger.length - pivotCnt);
    }
};

// MAX DEPTH

var maxDepth = function(root) {
  if(root === null){
      return 0;
  }

  return 1+ Math.max(maxDepth(root.left), maxDepth(root.right));
};

// *
//  *  Homework IX
//  *
//  *  Problem: Lattice Paths
//  *
//  *  Prompt:  Count the number of unique paths to travel from the top left
//  *           corder to the bottom right corner of a lattice of N x N squares.
//  *
//  *           When moving through the lattice, one can only travel to the adjacent
//  *           corner on the right or down.
//  *
//  *  Input:   An integer N representing the size of the lattice
//  *  Output:  An integer representing the number of unique number of paths
//  *
//  *  Example: input: 2
//  *
//  *           (2 x 2 lattice of squares)
//  *            __ __
//  *           |__|__|
//  *           |__|__|
//  *
//  *           output: 6 (number of unique paths from top left corner to bottom right)
//  *
//  *  Notes:   What is the time and auxiliary space complexity of your solution?
//  *
//  *           Try implementing your solution using recursion with side effects.
//  *
//  *  Resource:
//  *             1) https://projecteuler.net/problem=15
//  *
//  */

function latticePaths(n, i, j) {
  if(i === undefined) { i = 0; }
  if(j === undefined) { j = 0; }
  if(i === n && j === n) { return 1; }
  if(i > n || j > n) { return 0; }
  return latticePaths(n, i + 1, j) + latticePaths(n, i, j + 1);
}

var selectionSort = function(array){

  for(var i = 0; i < array.length; i++){
    //set min to the current iteration of i
    var min = i;
    for(var j = i+1; j < array.length; j++){
      if(array[j] < array[min]){
       min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
};
var array = [3,2,10,1]

function palindrome(str){
  var len = Math.floor(str.length/2);
  for(var i = 0; i<len; i++){
    if(str[i] !== str[str.length - i - 1]){
      return false
    }
    return true
  }
}

var longestPalindrome = function(s) {

    var map = {};
    var sArray = s.split('');
    var result = 0;
    var n = 0;

    for(var i=0;i<sArray.length;i++){
      map[sArray[i]] = map[sArray[i]] + 1 || 1;
    }

    Object.keys(map).forEach(function(x){
        if(map[x]%2 === 0){
          result += map[x];
        }
        else{
            result += map[x]-1;
            //n for the one which we can put it in the middle
            n=1;
        }
    });

    return result+n;
};

var containsDuplicate = function(nums) {
    var dup = {};
    for(var i=0; i<nums.length; i++){
      if(dup[nums[i]]) return true;
      dup[nums[i]] = true;
    }
    return false;
};

// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital if it has more than one letter, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

var detectCapitalUse = function(word) {

  function cap(char){
    if (char === char.toUpperCase()) return true;
  }

  function lower(char){
    if (char === char.toLowerCase()) return true;
  }

  var chars = word.split("");
  for(var i=0; i<chars.length; i++){
    if (chars.every(cap) || chars.every(lower) || chars.slice(1,chars.length).every(lower)) return true
    return false
  }
}

//
var arr = [1,1,0,1,0,1,0]


function bitArraySort(arr){
  var left = 0;
  var right = arr.length - 1;

  while(left < right){
    while(arr[left] === 0) left++;
    while(arr[right] === 1) right--;

    if (left<right){
      [arr[left], arr[right]] = [arr[right], arr[left]];

    }
  }
  return arr;
}


bitArraySort(arr)


var arr1 = [1,3,5]
var arr2 = [2,4,6,8,10]


// MERGE AND SORT TWO SORTED ARRAYS

function merge(arr1, arr2){
  var i = 0;
  var j = 0;
  var new_arr = []

  while (i < arr1.length && j < arr2.length){
    if (arr1[i] > arr2[j]){
      new_arr.push(arr2[j]);
      j++;
    }else{
      new_arr.push(arr1[i]);
      i++;
    }
  }
  if(i < arr1.length){
    new_arr = new_arr.concat(arr1.slice(i,arr1.length))
  }else if (j < arr2.length){
    new_arr = new_arr.concat(arr2.slice(j,arr2.length))
  }
  return new_arr
}


merge(arr1, arr2)


// RECURSIVE FACTORIAL

function factorial(n){
  var result = 1;

  function multiplyInt(count){
    if(count>n){ return; }

    result *= count;
    multiplyInt(count+1)
  }
  multiplyInt(1);
  return result;
}

// *
// * Prompt:   Given a set S, return the power set P(S), which is
// *           a set of all subsets of S.
// *
// * Input:    A String
// * Output:   An Array of Strings representing the power set of the input
// *
// * Example:  S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']
// *
// * Note:     The input string will not contain duplicate characters
// *           The letters in the subset string must be in the same order
// *           as the original input.
// *
// */

function powerSet(str){
  var results = [];

  function traverse(build, depth){

    if (depth === str.length) {
      results.push(build);
      return;
    }

    traverse(build, depth + 1);
    traverse(build + str[depth], depth + 1);
  }

  traverse("", 0);
  return results;
}

console.log(powerSet('abc'));

//
function isPowerOfTwo(n){
  while (n % 2 === 0) {
      n /= 2;
  }
  return n === 1;
}
// more efficient
var isPowerOfTwo = function(n) {
    if(n<=0){
        return false;
    }else{
        return (n&(n-1)) === 0
    }
};
//recursive

function isPowerOfTwo(n){
  if(n===1) return true;
  if(n===0 || n%2 !== 0) return false;
  return isPowerOfTwo(n/2);
}


var isPowerOfThree = function(n) {
    while(n%3===0){
        n /= 3;
    }
    return n === 1;
};
//RECURSIVE

var isPowerOfThree = function(n) {
    if(n===1){
        return true;
    }
    if(n===0 || n%3 > 0){
        return false;
    }
    return isPowerOfThree(n/3);
};

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1

var nums = [1,3,5,6];

var searchInsert = function(nums, target) {
    for(var i=0; i<nums.length;i++){
      if(nums[i]===target){
        return i;
      }
    }
    for(var j=0; j<nums.length;j++){
      if(nums[j]> target){
        return j
        }else if(nums[nums.length-1] < target){
          return nums.length
        }
      }

};

searchInsert(nums, 3)

// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

// Note that 1 is typically treated as an ugly number.

var isUgly = function(num) {
    while(num >= 2) {
        if(num%2 === 0) {
            num /= 2;
        } else if(num%3 === 0) {
            num /= 3;
        } else if(num%5 === 0) {
            num /= 5;
        } else {
            return false;
        }
    }
    return num === 1;
};


// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

var isPerfectSquare = function(num) {
    var left = 0;
    var right = num;

    while(left <= right) {
        var mid = left + parseInt((right - left)/2);
        var pow = mid*mid;
        if(pow === num) {
            return true;
        } else if(pow < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

var candy = function(ratings) {
    let len = ratings.length;
    let candies = [];
    let sum = 1;

    candies[0] = 1;

    for (let i = 1; i < len; i++) {
        if (ratings[i] <= ratings[i - 1]) {
            if (candies[i - 1] > 1) {
                candies[i] = 1;
                sum++;
            } else {
                candies[i] = 1;
                sum++;
                let k = i;

                while (k > 0 && (ratings[k] < ratings[k - 1]) && (candies[k - 1] <= candies[k])) {
                    candies[k - 1]++;
                    sum++;
                    k--;
                }


            }
        } else {
            candies[i] = candies[i - 1] + 1;
            sum += candies[i];
        }
    }

    return sum;
};


var combine = function(n, k) {
    var result = [];

    helper(1, [], n, k, result);

    return result;
};

function helper(start, curArr, n, k, result) {
    if (curArr.length === k) {
        result.push(curArr);
        return;
    }

    var i,
        temp;

    for (i = start; i <= n; i++) {
        curArr.push(i);
        helper(i + 1, curArr.concat(), n, k, result);
        curArr.pop();
    }
}

var containsNearbyDuplicate = function(nums, k) {
    var map = {},
        len = nums.length,
        i;

    for (i = 0; i < len; i++) {
        if (map.hasOwnProperty(nums[i])) {
            if (i - map[nums[i]] <= k) {
                return true;
            }

            map[nums[i]] = i;
        } else {
            map[nums[i]] = i;
        }
    }
    return false;
};
var computeArea = function(A, B, C, D, E, F, G, H) {
    var area = (C-A)*(D-B) + (G-E)*(H-F);

    if((A > G || C < E) || (D < F || B > H)) {
        return area;
    }

    var left = Math.max(A,E);
    var top = Math.min(D,H);
    var right = Math.min(C,G);
    var bottom = Math.max(B,F);

    return area - (right - left)*(top - bottom);
};

