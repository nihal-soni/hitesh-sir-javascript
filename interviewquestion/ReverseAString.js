function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

function reverseString1(str2){
    return str2.split("").reverse().join("");
}
console.log(reverseString1("Nihal"));

function reverseString2(str3){
    return str3.split("").reverse().join("");
}
console.log(reverseString2("Hello World"));

// this is the simple way of reversing a strings 




//2. Using a for Loop

function reverseString3(str3) {
    let reversed = "";
    for (let i = str3.length - 1; i >= 0; i--) {
        reversed += str3[i];
    }
    return reversed;
}

console.log(reverseString3("hello")); // "olleh"

function reverseString4(str4){
    let reversed = "";
    for(let i = str4.length - 1; i >= 0; i--){
        reversed += str4[i];
    }
    return reversed
}
console.log(reverseString4("Hello JI"));


/*
How It Works

We initialize an empty string reversed = "" to store the reversed string.
We use a for loop that starts at the last character (str.length - 1) and moves backward to the first character (i >= 0).
Inside the loop, each character from the original string (str[i]) is added to reversed.
After the loop finishes, reversed contains the reversed string, which is then returned.

Step-by-Step Execution for "hello"

Iteration	i	        str[i]	            reversed

1st	       4	         "o"	              "o"
2nd	       3	         "l"	              "ol"
3rd	       2	         "l"	              "oll"
4th	       1	         "e"	              "olle"
5th	       0	         "h"	              "olleh"

Time Complexity:

O(n) → The loop runs n times (where n is the length of the string).
*/

//We iterate backward from the last character to the first, appending each character to reversed.



//3. Using Recursion

function reverseString5(str5) {
    if (str5 === "") return "";
    return reverseString5(str5.substr(1)) + str5.charAt(0);
}

console.log(reverseString5("hello")); // "olleh"

/*
How It Works
Base Case: If the string is empty (""), return "".

Otherwise, take everything except the first character (str.substr(1)) and pass it into the function recursively.

Once recursion reaches the last character, it starts concatenating characters in reverse order
.
The function call stack unwinds, reversing the string.
Step-by-Step Execution for "hello"

Function Call       	str	          str.substr(1)	              str.charAt(0)	                     Returned Value
1st Call	            "hello" 	   "ello"	                       "h"	                                  "olleh"
2nd Call	            "ello"      	"llo"	                        "e"	                                   "olle"
3rd Call	            "llo"	        "lo"	                        "l"	                                   "oll"
4th Call	            "lo"	         "o"	                         "l"	                                "ol"
5th Call	            "o"	             ""                              "o"	                                 "o"
Base Case	            ""	             ""                               ""	                                 ""

When the recursion unwinds, the characters are added in reverse order.

Time Complexity:

O(n) → The function calls itself n times (where n is the length of the string). 
*/


//This method calls itself recursively, taking the substring from the second character onward (str.substr(1)) and adding the first character at the end.