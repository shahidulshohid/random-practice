// const average = (...args) => args.reduce((a,b) => a + b, 0) / args.length

// console.log(average(2,3,4,2))
// console.log(average(2,3,87,5))

const average = (...args) => args.reduce((a, b) => a * b, 1) / args.length
console.log(average(3,5,3,7,8))