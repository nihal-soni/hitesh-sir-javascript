// const coding = ["Js", "Java", "Pyhton", "cpp"]

// coding.forEach((item) => {
//     console.log(item);
// });

// const coding = ["Js", "Java", "Pyhton", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// });

// console.log(values)

///////////////////////////---------------------------------------- Lets understand using Number ---------------------------------------------////////////////////////////////////////

const myNums = [1, ,2 ,3, 4, ,5 ,6, 7, 8 , 9 ,10]

 const newNum = myNums.filter ( (num) => num > 4)        // Implicit result
 console.log(newNum)

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNum1 = myNums.filter ((num) => {
    return num > 4
})                                          // Explicit result
console.log(newNum1)