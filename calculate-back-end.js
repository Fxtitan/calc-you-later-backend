/******************
 * YOUR CODE HERE *
 ******************/
const calculate = (num1, num2, num3) => {
  if (num3 === '+' || num3 === 'added to' || num3 === 'plus') {
    return Number(num1) + Number(num2);
  } else if (num3 === '-' || num3 === 'subtracted from' || num3 === 'minus') {
    return Number(num1) - Number(num2);
  } else if (num3 === 'X' || num3 === 'multiplied by' ||  num3 === 'x' || num3 === 'times') {
    return Number(num1) * Number(num2);
  } else if (num3 === '/' || num3 === 'divided by') {
    return Number(num1) / Number(num2); 
  } else if (num3 === '%' || num3 === 'mod' ||  num3 === 'modulus') {
    return Number(num1) % Number(num2);
  } 
  return "Sorry, that's not a mathematical operation!";
}

 

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;