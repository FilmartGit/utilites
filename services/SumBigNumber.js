// Функция складывает два сверх больших числа без использования BigInt

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
    ? calc(digits, digits2)
    : calc(digits2, digits);

  // Функция разворачивает массивы чисел и складывает их с конца
  // The function expands arrays of numbers and adds them from the end
  function calc(one, two) {
    let ch = one.reverse();
    let es = two.reverse();
    ch.forEach((el, index) => {
      if (es[index]) {
        let h = Number(el) + Number(es[index]);
        mass.push(h);
      } else {
        mass.push(Number(el));
      }
    });
  }

  function calcResult(arr) {
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

  return calcResult(mass).reverse().join("");
}
