"use strict";

const array = [
  15, 16, 3, 18, 9, 0, 10, 23, 25, 2, 29, 13, 17, 27, 7, 19, 1, 24, 20, 26, 4,
  8, 14, 6, 22, 28, 12, 11, 5, 21,
];

const bubbleSorting = (array) => {
  let changed = true;

  while (changed) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        changed = false;

        if (array[i] > array[j]) {
          [array[i], array[j]] = [array[j], array[i]];
          changed = true;
        }
      }
    }
  }
  return array;
};

const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  if (start > end) {
    return "Number not found";
  }

  const middle = Math.floor((start + end) / 2);

  if (array[middle] === target) {
    return `Number ${target} was found on index ${middle}`;
  }

  if (array[middle] > target) {
    return binarySearch(array, target, start, middle - 1);
  } else {
    return binarySearch(array, target, middle + 1, end);
  }
};

console.log(binarySearch(bubbleSorting(array), 9));
