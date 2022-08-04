function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
  } // 함수정의
   
   
  ;(async () => {
    console.log('tlqkf')
    await sleep(2); // 2초대기
    console.log('이게 뭐야')
  })();

//   const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('foo');

//     }, 500);
//   });
  
//   promise1.then((value) => {
//     console.log(value);
//     console.log(promise1);
//     // expected output: "foo"
//   });
  
//   console.log(promise1);
//   // expected output: [object Promise]
  