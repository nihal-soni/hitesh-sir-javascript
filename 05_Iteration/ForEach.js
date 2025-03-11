const { ModuleResolutionKind } = require("typescript");

const coding = ["Javascript", "python" , "C++" , "Ruby", "Java"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })

// USIng arrow frunction 

// coding.forEach( (item) => {
//     console.log(item);
    
// })



coding.forEach ( (item, index, arr) => {
    console.log(item, index, arr);
    
})

// lets take another exmaple 

const myCoding  = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {

   console.log(item.languageName);
   
})



// this is Mostly used in database 
