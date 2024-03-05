//const shoppingCart = [
//  'Meat',
//  'Milk', 
//  'Coffee', 
//  'Green Tea', 
//  'Honey',
//  'Sugar',
//];



const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey',];
console.log(shoppingCart);

// add 'meat' at the start

shoppingCart.splice(0, 0, 'Meat');
console.log(shoppingCart);

// add 'sugar' at the end

shoppingCart.push('Sugar');
console.log(shoppingCart);

// i'm not alergic to honey, but if I was i will use:

const startList = shoppingCart.slice(0, 3);
console.log(startList);
const endList =shoppingCart.slice(5);
console.log(endList);

// modify 'Tea' to 'Green tea'
const changeTea = ['Green Tea'];
console.log(changeTea);


// console.log(newList); to see updated list

newList = startList.concat(changeTea, endList);
console.log(newList);











