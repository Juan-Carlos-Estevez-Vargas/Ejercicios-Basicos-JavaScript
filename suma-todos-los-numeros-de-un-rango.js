function sumAll(arr) {
  let num1 = arr[0];
  let num2 = arr[1];
  let sumatoria = 0;

  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      sumatoria += i;
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      sumatoria += i;
    }
  }

  return sumatoria;
}

console.log(sumAll([1, 4]));
console.log(sumAll([7, 4]));
