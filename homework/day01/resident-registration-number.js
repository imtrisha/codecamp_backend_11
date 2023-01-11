function checkNumber(number) {
  if (!number.includes("-")) {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
}

function checkLength(number) {
  if (
    !(number.split("-")[0].length === 6 && number.split("-")[1].length === 7)
  ) {
    console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

function numberMasking(number) {
  let num = number.slice(0, 8) + "******";
  console.log(num);
}

//좋은 예
function customRegistrationNumber(number) {
  let isValid = checkNumber(number);
  if (isValid === false) return;

  isValid = checkLength(number);
  if (isValid === false) return;

  numberMasking(number);
}

customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");
