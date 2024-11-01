"use strict";

const arr = [1, 5, 2, 7, 3, 8, 9, 4, 6, 10];

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

export { bubbleSort };
