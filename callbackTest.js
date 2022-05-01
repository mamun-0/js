// function add(a,b,callback){
//   console.log(callback);
//   callback(a+b);
// }

// function x(y){
//  console.log(y);
// }

// add(10,20,x)

// function changeCorlor(color, delay, callback) {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     if (callback) {
//       callback();
//     }
//   }, delay);
// }

let changeColor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      if (resolve) resolve();
    }, delay);
  });
};

let asyncFunction = async () => {
  await changeColor("red", 1000);
  await changeColor("green", 1000);
  await changeColor("black", 1000);
  await changeColor("white", 1000);
  return "Resolved with async return value";
};

asyncFunction().then((res)=>{
  console.log(res);
});
console.log('after the async function')
// changeColor("red", 1000)
//   .then(() => changeColor("green", 1000))
//   .then(() => changeColor("black", 1000))
//   .then(() => changeColor("white", 1000));

// changeColor("red", 1000).then(() => {
//   changeColor("green", 1000).then(() => {
//     changeColor("black", 1000).then(() => {
//       changeColor("white", 1000).then(() => {});
//     });
//   });
// });

// changeCorlor("red", 1000, () => {
//   changeCorlor("green", 2000, () => {
//     changeCorlor("black", 2000, () => {
//       changeCorlor("white", 2000);
//       console.log("Third callback");
//     });
//     console.log("Second callback");
//   });
//   console.log("First callback");
// });

// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "green";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "black";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "white";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
