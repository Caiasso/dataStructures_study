"use strict";

const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const findIndex = (array, target, start = 0, end = array.length - 1) => {
  if (start > end) {
    return `Number not found`;
  }

  const middle = Math.floor((start + end) / 2);

  if (target === array[middle]) {
    return `Number found at index ${middle}`;
  }

  if (array[middle] > target) {
    return findIndex(array, target, start, middle - 1);
  } else {
    return findIndex(array, target, middle + 1, end);
  }
};

console.log(findIndex(arr, 12));
