// // generate a random color

// const randomColor = function () {
//   const hex = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
// let intervalId;

// const startChangingColor = function () {
//   intervalId = setInterval(changeBgColor, 1000);
//   function changeBgColor() {
//     document.body.style.backgroundColor = randomColor();
//   }
// };
// const stopChangingColor = function () {
//   clearInterval(intervalId);
//   intervalId = null;
// };

// document.querySelector("#start").addEventListener("click", startChangingColor);

// document.querySelector("#stop").addEventListener("click", stopChangingColor);



// Generate a random color  
// this is the good format of writing this code 



const randomColor = function () {
    const hex = "0123456789ABCDEF"; 
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId = null;
  
  // Start Changing Background Color
  const startChangingColor = function () {
    if (!intervalId) { // Prevent multiple intervals
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  // Stop Changing Background Color
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // Reset to prevent multiple intervals
  };
  

  document.querySelector("#start").addEventListener("click", startChangingColor);
  document.querySelector("#stop").addEventListener("click", stopChangingColor);
  



// // Generate a random color
// const randomColor = function () {
//     const hex = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };
  
//   // Function to check if the color is light or dark
//   const isLightColor = (hexColor) => {
//     // Convert hex to RGB
//     const r = parseInt(hexColor.substring(1, 3), 16);
//     const g = parseInt(hexColor.substring(3, 5), 16);
//     const b = parseInt(hexColor.substring(5, 7), 16);
  
//     // Calculate luminance (Perceived brightness formula)
//     const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
//     return brightness > 128; // If brightness > 128, it's a light color
//   };
  
//   let intervalId = null;
  
//   // Start Changing Background and Text Color
//   const startChangingColor = function () {
//     if (!intervalId) {
//       intervalId = setInterval(changeColors, 1000);
//     }
  
//     function changeColors() {
//       const newColor = randomColor();
//       document.body.style.backgroundColor = newColor;
  
//       // Adjust text color for better contrast
//       document.body.style.color = isLightColor(newColor) ? "#000" : "#fff";
//     }
//   };
  
//   // Stop Changing Background Color
//   const stopChangingColor = function () {
//     clearInterval(intervalId);
//     intervalId = null;
//   };
  
//   // Attach event listeners
//   document.querySelector("#start").addEventListener("click", startChangingColor);
//   document.querySelector("#stop").addEventListener("click", stopChangingColor);
  