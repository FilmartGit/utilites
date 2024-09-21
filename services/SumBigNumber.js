// Функция складывает два сверх больших числа без использования BigInt
// The function adds two extra large numbers without using BigInt

// *
// * @param {number} num Первое число.
// * @param {number} set Второе число.
// *
// * @returns {string} Результат сложения двух чисел в виде строки.
// *

function convertAndSumLargeNumber(num, set) {
  const digits = num.toString().split("");
  const digits2 = set.toString().split("");
  let mass = [];

  // для расчетов, первым аргументом передаю самое большее число
  // for calculations, I pass the largest number as the first argument
  digits.length > digits2.length
    ? toNumberAndCalc(digits, digits2)
    : toNumberAndCalc(digits2, digits);

  // Функция разворачивает массивы чисел и складывает их с конца
  // The function expands arrays of numbers and adds them from the end
  // *
  // * @param {string} большая строка с числом
  // * @param {string} меньшая строка с числом
  // *
  // * @returns {array} Результат сложения по одному числу. 1+1; 9+7; ["2", "16",].
  // *
  function toNumberAndCalc(oneString, twoString) {
    let oneReverseString = [...oneString].reverse();
    let twoReverseString = [...twoString].reverse();
    oneReverseString.forEach((str, index) => {
      if (twoReverseString[index]) {
        let h = Number(str) + Number(twoReverseString[index]);
        mass.push(h);
      } else {
        mass.push(Number(str));
      }
    });
  }

  function arrayToDecimalSum(arr) {
    let newArr = [...arr];
    newArr.forEach((e, i) => {
      if (e > 10) {
        let numTwo = e.toString().split("");
        newArr[i] = Number(numTwo[1]);
        let k = i + 1;
        newArr[k] ? (newArr[k] += 1) : (newArr[k] = 1);
      } else if (e === 10) {
        newArr[i] = 0;
        let k = i + 1;
        newArr[k] ? (newArr[k] += 1) : (newArr[k] = 1);
      } else {
        newArr[i] = e;
      }
    });
    return newArr;
  }

  return arrayToDecimalSum(mass).reverse().join("");
}
