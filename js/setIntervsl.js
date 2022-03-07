console.log("first");
setTimeout(()=>{
    console.log("ad");
},100)

let sec = 0;
const timeId = setInterval(() => {
  sec++;
  console.log(sec);
  if (sec >= 15) {
    clearInterval(timeId);
  }
}, 1000);

// setInterval(() => {
//   console.log("third");
// }, 3000);
console.log("second");
