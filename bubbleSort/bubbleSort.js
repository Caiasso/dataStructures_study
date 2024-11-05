"use strict";

const arr = [
  15, 16, 3, 18, 9, 0, 10, 23, 25, 2, 29, 13, 17, 27, 7, 19, 1, 24, 20, 26, 4,
  8, 14, 6, 22, 28, 12, 11, 5, 21,
];

const bubbleSort = (array) => {
  let changed = true;
  let totalChanges = 0;
  let temp;

  while (changed) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        changed = false;

        if (array[j] > array[j + 1]) {
          changed = true;
          totalChanges++;
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return array;
};

/* ----- How it Works ----- */
/* 
1 - The bubbleSort algorithm recieves the randomized array
2 - It then initializes the changed* variable, which indicates if there were any substitution, and also the totalChanges* that sums the total number of substitutions (just for visualization / not essential)
3 - It also creates de temp* variable, a memory space dedicated to holding the temporary variable amid substitutions
4 - Initially, the algorithm will begin a loop as far as the changed* variable indicates a true state
5 - Then it will start two loops, one inside another, the main loop goes from 0 to n (array's length) and the loop inside of it is responsible for exchanging the variables
inside the array in order to alway find out if the actual variable is *lower* than array[i](main loop). If the actual variable is lower, then the substitution is made and the
changed* variable becomes true. 
6 - Finally, when all the required substitutions are made, there is no reason for the changed* variable turn trully again, so it will remain falsy
7 - With no more substitutions left to make, the algorithm returns the ordenated array.
 */

console.log(bubbleSort(arr));
