function qqq(aaa) {
    console.log(aaa)
    console.log(aaa.name)
    console.log(aaa.age)
    console.log(aaa.school)
}

const name = "철수"
const age = 12
const school = "다람쥐초등학교"

// const profile = {
//     name: name,
//     age: age,
//     school: school
// }

const profile = {name, age, school}

qqq({name, age, school})