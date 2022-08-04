// while
let i=1
let sum=0
while (i<=10) {
    sum=sum+(1/i**2)
    console.log(sum)
    i+=1
}

// for
for (let i=1; i<=10; i++){
console.log(i)
}

//배열 반복     for of
let arr=[1,0,1,0,3,0,4,5,6,9]
let j=0
for (let i of arr){
    console.log(`arr[${j}]=${i}`)
    j++
}

//객체 반복     for in
const object={
    o1:"si",
    o2:1,
    o3:"bal"
}
for (let i in object){
    console.log(i,':',object[i])
}