// const date = new Date().getDate()
// const date = new Date().toLocaleString()
// console.log(date)
//===============================
// const year = new Date().getFullYear()
// console.log(year)
//=====================================
// const month = new Date().getMonth() + 1
// console.log(month)
//==========================
// const day = new Date().getDay()
// const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"]
// console.log(dayOfWeek[day])
//==============================
// const time = new Date().getTime()
// console.log(time)
//============================
// const startTime = new Date().getTime()
// const endTime = new Date().getTime()
// const timeElapsed = endTime - startTime;
// console.log(timeElapsed)
//================================
// const hours = new Date().getHours() 
// console.log(hours)
//===================================
// const minutes = new Date().getMinutes()
// console.log(minutes)
//=========================

let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0')
let yyy = today.getFullYear()
today = dd + '/' + mm + '/' + yyy
console.log(today)
