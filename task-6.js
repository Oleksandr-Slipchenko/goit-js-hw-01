// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
//   пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет
// кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel,
//   показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число,
//   а не произвольный набор символов, не нужно.Если хочешь, в случае некорректного ввода,
//   показывай alert с текстом 'Было введено не число, попробуйте еще раз',
//   при этом результат prompt плюсовать к общей сумме не нужно, после чего
// снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

// 1. Предложить ввести число
// 2. Ввод добавляется к значению переменной total.
// 3. Ввод продолжать до нажатия клавиши Cancel в prompt.
// 4. После нажатия отмены через alert вывести: 'Общая сумма чисел равна [сумма]'.
// 5. Если вводиться не число, показывать текст через alert: 'Было введено не число,
// попробуйте еще раз', после этого снова предложить ввеси число.

let input;
let total = 0;

if ((input = String())) {
  alert('Было введено не число, попробуйте еще раз');
}

while ((input = prompt('Введите число'))) {
  input = Number(input);
  total += input;
  console.log('total: ', total);
}

if (input === null) {
  alert(`Общая сумма чисел равна ${total}`);
}
