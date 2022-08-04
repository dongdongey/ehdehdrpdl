const ssr=[1,2,3,4,5,6,7,8,9,10]

const MMap=ssr.map(r=>r-1)
console.log(...MMap)

const FFilter=ssr.filter(r=>r<5)
console.log(FFilter)

const Reduse=ssr.reduce((a,b)=>{
    console.log(a,b)
    return a+b
},5)
console.log(Reduse)

