"use strict";

const arr = [
  15, 16, 3, 18, 9, 0, 10, 23, 25, 2, 29, 13, 17, 27, 7, 19, 1, 24, 20, 26, 4,
  8, 14, 6, 22, 28, 12, 11, 5, 21,
];

const bubbleSort = (array) => {
  let trocou = true;
  let changes = 0;
  let temp;

  while (trocou) {
    for (let i = 0; i < array.length - 2; i++) {
      for (let j = i + 1; j < array.length - 1; j++) {
        trocou = false;

        if (array[i] > array[j]) {
          trocou = true;
          changes++;
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return array;
};

console.log(bubbleSort(arr));
