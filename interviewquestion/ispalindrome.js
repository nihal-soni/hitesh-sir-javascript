function isPalindrome(str){
      let reversed = str.split("").reverse().join("");
      return str === reversed;
}
console.log(isPalindrome("MADAM"));

function isPalindrome1(str2){
      let reversed = str2.split("").reverse().join("");
      return str2 === reversed;
}

console.log(isPalindrome1("Nihal"))