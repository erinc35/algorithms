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


function maxConsecutiveSum(arr){
  var current_max = 0;
  var max_sofar = 0;

  for(var i=0; i<arr.length; i++){
   current_max += arr[i];
   if (current_max < 0){
     current_max = 0;
   }else if(max_sofar < current_max){
     max_sofar = current_max
   }
  }
  return max_sofar
}

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

// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time
// Each intermediate word must exist in the word list
// For example,

// Given:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
// As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Note:
// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// Amazon LinkedIn Snapchat Facebook Yelp


// Leetcode 127
// Language: Javascript
// Problem: https://leetcode.com/problems/word-ladder/
// Author: Chihung Yu

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var visited = new Set();
    var queue = [];
    var level = 1;
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    queue.push(beginWord);
    visited.add(beginWord);

    while(queue.length > 0) {

        var len = queue.length;

        for(var i = 0; i < len; i++) {
            var word = queue.shift();

            for(var j = 0; j < word.length; j++) {
                for(var k = 0; k < letters.length; k++) {
                    var newWord = word.substring(0, j) + letters[k] + word.substring(j + 1);

                    if(newWord === endWord) {
                        return level + 1;
                    }
                    if(wordList.has(newWord) && !visited.has(newWord)) {
                        queue.push(newWord);
                        visited.add(newWord);
                    }
                }
            }
        }

        level++;
    }

    return 0;
};

// will time exceeded. javascript hash is slower than set
var ladderLength = function(beginWord, endWord, wordList) {
    if(beginWord === endWord) {
        return 0;
    }

    var queue = [];
    var visited = {};
    var count = 1;
    var baseCharCode = 'a'.charCodeAt(0);

    queue.push(beginWord);

    while(queue.length) {
        var len = queue.length;

        for(var i = 0; i < len; i++) {
            var word = queue.shift();

            for(var j = 0; j < word.length; j++) {
                for(var k = 0; k < 26; k++) {
                    var newChar = String.fromCharCode(baseCharCode + k);
                    var newWord = word.substring(0, j) + newChar + word.substring(j + 1);

                    if(newWord === endWord) {
                        return count + 1;
                    }

                    if(!visited[newWord] && wordList.has(newWord)) {
                        visited[newWord] = true;
                        queue.push(newWord);
                    }
                }
            }
        }

        count++;
    }

    return 0;
};

