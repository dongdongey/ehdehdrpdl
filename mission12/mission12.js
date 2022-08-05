const date = new Date();

const year = date.getFullYear()
const month = date.getMonth()+1
const day= date.getDay()
const hour= date.getHours()
const minute = date.getMinutes()
const sec= date.getSeconds()


console.log('date',date.toLocaleString())
console.log('time',date.toLocaleTimeString())

console.log(`${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${sec}초`)