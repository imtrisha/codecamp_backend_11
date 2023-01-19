// // 1. 일반변수 전달하기
// function zzz(aaa) {
//     console.log(aaa)
// }

// zzz("사과")

// 2. 객체 전달하기
function favorite({apple, banana}) {
    console.log(apple)
    console.log(banana)
}

const apple = 3
const banana = 10

// 바스켓 정보 추가
// const basket = {apple, banana}

favorite({banana,apple})