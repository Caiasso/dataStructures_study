"use strict";

const arr = [
  15, 8, 18, 20, 13, 27, 16, 4, 17, 24, 7, 12, 1, 3, 9, 30, 21, 2, 6, 11, 14,
  28, 5, 10, 26, 29, 19, 23, 22, 25,
];

const bubbleSort = (array) => {
  let trocou = true;
  let changes = 0;
  let temp;

  while (trocou) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        trocou = false;

        if (array[j] > array[j + 1]) {
          trocou = true;
          changes++;
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  return array;
};

console.log(bubbleSort(arr));
