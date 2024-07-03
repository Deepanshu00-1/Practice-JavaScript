// Date object in javascript represent a single moment in time in a platform-independent format.
// Date objects encapsulate an integral number that represents milliseconds since the midnight
// at the beginning of january 1, 1970, UTC

// This example takes 2 seconds to run
const start = Date.now();

console.log('starting timer...');
// Expected output: "starting timer..."

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 1000);

let myDate = new Date()
console.log(myDate.toString()) // Tue Jul 02 2024 23:49:18 GMT-0700(Pacific Daylight Time)
console.log(myDate.toDateString()) // Tue Jul 02 2024 
console.log(myDate.toLocaleString()) // 2/7/2024, 11:49:18 pm