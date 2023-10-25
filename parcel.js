let balance = 500;
const packagePrice = 100;
const sms = `Посылка находится в ячейке код для получения A001DFX0`;
const packageId = "1432HGF";
const correctCode = "A001DFX0";
const boxes = [null, null, null, "1432HGF", null];

function getParcel(code, id, price) {
  if (sms === `Посылка находится в ячейке код для получения ${code}`) {
    balance -= price;
    const index = boxes.indexOf(id);
    console.log(
      `Заберите посылку ${id} из ячейки №${
        index + 1
      }. Ваш счет составляет: ${balance}`
    );
  } else {
    console.log("Вы ввели неверный код");
  }
}

getParcel(correctCode, packageId, packagePrice);
