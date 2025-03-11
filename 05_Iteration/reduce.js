// const myNums = [1, 2 ,3 ,4 , 5, 6];

// const myTotal = myNums.reduce

const shoppingCart = [
  { product: "phone", qty: 1, price: 64499 },
  { product: "Screen Protector", qty: 1, price: 94.98 },
  { product: "Memory Card", qty: 2, price: 2440.99 },
];

const priceToPay =  shoppingCart.reduce((acc, item) => acc + item.price , 0);
console.log(priceToPay)