const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger;
  //Выполняется сумма значений аргументов функции a и b и результат присваивается переменной sum;
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;
  /*Выполняется тернарный оператор, который работает аналогично условию if..else.
  Проверяется условие sum > 50, если условие истинно, то переменной bonus присваивается значение 50, 
  если условие ложно, то bonus = sum*/

  return bonus;
};
calculateBonus(25, 15);
