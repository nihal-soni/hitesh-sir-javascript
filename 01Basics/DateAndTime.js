// Dates 

let myDate = new Date()
console.log(myDate)

let myDate2 = new Date();
console.log(myDate2.toString());
console.log(myDate2.toDateString());
console.log(myDate2.toLocaleString());
console.log(typeof myDate2);


let myCreateDate = new Date(2025, 0, 2)
console.log(myCreateDate.toDateString());



// 1. Get Current Date and Time
// You can create a Date object to get the current date and time.

const now = new Date();
console.log(now); // Example output: 2025-03-02T10:30:00.123Z

// 2. Get Individual Date and Time Components
// we can extract specific components from a Date object:

const now1 = new Date();
console.log(now1.getFullYear()); // 2025
console.log(now1.getMonth());    // 2 (March, because months are zero-based)
console.log(now1.getDate());     // 2
console.log(now1.getDay());      // 0 (Sunday, because Sunday = 0, Monday = 1, etc.)
console.log(now1.getHours());    // Current hour
console.log(now1.getMinutes());  // Current minute
console.log(now1.getSeconds());  // Current second
console.log(now1.getMilliseconds()); // Current millisecond

/*
3. Format Date and Time
Using toLocaleString()
Format date and time based on the user's locale.
*/

const now2 = new Date();
console.log(now2.toLocaleString());     // Example: "3/2/2025, 1:09:00 PM"
console.log(now2.toLocaleDateString()); // Example: "3/2/2025"
console.log(now2.toLocaleTimeString()); // Example: "1:09:00 PM"



// 4. Create a Custom Date
// we can create a Date object for a specific date and time.

const customDate = new Date(2025, 2, 2, 13, 30, 0); // Year, Month (0-based), Day, Hour, Minute, Second    
console.log(customDate.toLocaleTimeString()); // Example: 2025-03-02T15:30:00.000Z


// 5. Convert Date to Timestamp (Milliseconds Since Epoch)
// You can get the timestamp (number of milliseconds since January 1, 1970).


const now3 = new Date();
console.log(now3.getTime()); // Example: 1743600000000 (milliseconds)
console.log(Date.now3());    // Current timestamp without creating a new Date object

// 6. Convert Timestamp to Date
// You can convert a timestamp back to a date.


const timestamp = 1743600000000;
const date = new Date(timestamp);
console.log(date.toLocaleString()); // Example: "3/2/2025, 3:45:00 PM"


// 7. Date Arithmetic (Add or Subtract Days, Months, etc.)
// You can manipulate dates by adding or subtracting time.


const now4 = new Date();

// Add 7 days
now.setDate(now4.getDate() + 7);
console.log(now4.toLocaleString()); // New date after adding 7 days

// Subtract 3 months
now.setMonth(now4.getMonth() - 3);
console.log(now4.toLocaleString()); // New date after subtracting 3 months


// 8. Comparing Dates
// You can compare dates using comparison operators.


const date1 = new Date("2025-03-01");
const date2 = new Date("2025-03-02");

console.log(date1 < date2);  // true
console.log(date1 > date2);  // false
console.log(date1.getTime() === date2.getTime()); // false



// 9. Calculate Time Difference Between Two Dates
// You can calculate the difference in milliseconds and convert it to days, hours, or minutes.

const startDate = new Date("2025-03-01");
const endDate = new Date("2025-03-10");

const diffInMs = endDate - startDate; // Difference in milliseconds
const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // Convert to days

console.log(diffInDays); // Output: 9



// 10. Using External Libraries (Moment.js, date-fns)
// For better date manipulation, you can use date-fns or Moment.js.

// Using date-fns

// import { format } from 'date-fns';

// console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss')); // "2025-03-02 15:45:00"

// // Using Moment.js

// import moment from 'moment';

// console.log(moment().format('YYYY-MM-DD HH:mm:ss')); // "2025-03-02 15:45:00"











// Method	                                                  Description                                             	Example Output

// new Date()	                                         Get the current date & time	                                          Sun Mar 02 2025 15:45:00 GMT+0000 (UTC)

// getFullYear()	                                       Get the year	                                                                       2025

// getMonth()	                                          Get the month                                                                 (0-based)	2 (March)

// getDate()	                                       Get the day of the month	                                                                  2

// getDay()	                                         Get the day of the week                                                           (0-Sunday, 6-Saturday)	0

// toLocaleString()	                                  Get localized date & time	                                                         "3/2/2025, 3:45:00 PM"

// setDate(), setMonth(), setFullYear()	                  Modify the date	                                                         now.setDate(now.getDate() + 7) (add 7 days)

// getTime()	                                     Get timestamp in milliseconds	                                                   1743600000000

// Date.now()	                                       Get current timestamp                                                          	1743600000000
 
// date1 - date2	                                Get difference in milliseconds                                                         	86400000 (1 day)