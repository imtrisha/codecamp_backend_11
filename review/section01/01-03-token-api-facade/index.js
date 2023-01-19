function checkPhone(myphone) {
  //핸드폰 번호의 길이가 10보다 작거나 11보다 크다면
  if (myphone.length < 10 || myphone.length > 11) {
    // 에러 메세지를 콘솔에 출력
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

function sendTokenToSMS(myphone, mytoken) {
  console.log(myphone + "번호로 인증번호" + mytoken + "를 전송합니다!!!");
}

// API 만들기
function createTokenOfPhone(myphone) {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkPhone(myphone);
  if (isValid === false) return;
  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken);
}

// API 실행하기
createTokenOfPhone("01012345645");
