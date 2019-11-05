// const ageA = 18
// const ageB = 25


// if (ageA > ageB) {
//     console.log("You are right")
// } else if (ageA < ageB) {
//     console.log("you guessed is wrong")
// }else {
//     console.log("no in the both")
// }

// const personA = {
//     name: 'Zainal',
//     age: 20
//   }
  
//   const personB = {
//     name: 'Samsul',
//     age: 30
//   }
  
//   switch (personA.age > personB.age) {
//     case true:
//       console.log('your choose is right')
//       break
  
//     case false:
//       console.log('your choose is false')
//       break
  
//     default:
//       console.log('your choose not in the both')
//   }


// const rectangleWidth = 50
// const rectangleLength = 20

// const rectangleArea = rectangleWidth * rectangleLength

// console.log(`${rectangleArea} = ${rectangleWidth} * ${rectangleLength}`)

// let iteration = 1

// do {
//   console.log(iteration)
//   iteration += 5
// } while (iteration < 100)

// for (let index = 0; index <= 100; index += 10) {
//     console.log(index)
//   }

// const numbers = [4, 6, 5, 7, 11, 13, 17, 19, 23]

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index]
//   console.log(element)
// }

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorialize(4);

