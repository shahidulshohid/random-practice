// const uniqueArray = (arr) => [...new Set(arr)]
// const result = uniqueArray([1,1,2,3,4,5,-1,0])
// console.log(result)

const uniqueArray = [1,1,2,3,4,5,-1,0]
const result = [...new Set(uniqueArray)]
console.log(result)

const friends = ['shahidul', 'alamin', 'mukter', 'alamin', 'shahidul']
const result1 = [...new Set(friends)]
console.log(result1)