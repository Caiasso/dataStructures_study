"use strict";

const array = [
  15, 16, 3, 18, 9, 0, 10, 23, 25, 2, 29, 13, 17, 27, 7, 19, 1, 24, 20, 26, 4,
  8, 14, 6, 22, 28, 12, 11, 5, 21,
];

const insertionSort = (arr) => {
  let smallest;

  for (let i = 1; i < arr.length; i++) {
    smallest = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > smallest) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = smallest;
  }

  return arr;
};

console.log(insertionSort(array));
