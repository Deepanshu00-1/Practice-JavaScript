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
console.log(typeof myDate) // object
 
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 12:00:00 am

// Timestamps

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());