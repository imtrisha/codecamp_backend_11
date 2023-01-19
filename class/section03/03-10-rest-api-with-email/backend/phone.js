import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;

export function checkPhone(myphone) {
  if (myphone.length < 10 || myphone.length > 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

export function sendTokenToSMS(myphone, result) {
  const messgeService = new mysms("", "");
  messgeService.sendOne({
    to: myphone,
    from: "01075876257",
    text: `[코드캠프] 안녕하세요?! 요청하신 인증번호는 ${result} 입니다.`,
  });
}
