setTimeout(function(){
    console.log("hello world!")
},5000)

let interval = setInterval(function(){
    console.log('hello world!')
},1000)

setTimeout(function(){
    clearInterval(interval)
},7001)