let expensesExamples = [
  {
    yearlyExpenses: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function calcExpenses(expenses) {
  expenses.forEach((expense) => {
    let sum = 0;
    expense.yearlyExpenses.forEach((value) => {
      if (value <= 1000) {
        return;
      } else {
        sum += value;
      }
    });
    console.log(sum);
    calcExpensesTest(sum);
  });
}

function calcExpensesTest(actualSum, expectedSum = [40590, 148200, 20709]) {
  if (expectedSum.includes(actualSum)) {
    console.log("Сумма расходов соответствует ожидаемому результату");
  } else {
    console.log("Произошла ошибка в расчётах");
  }
}

calcExpenses(expensesExamples);
