import { render } from '@testing-library/react';
import App from '../App';

// complete the code for the outlined tests
//    you will need to define imports for this file
//    for some tests, you will first need to do some setup to get the application ready
// Add tests of your own for Calculator.js

describe("Layout.js displays in App.js", () => {

  test('renders title', () => {    

  });

  test('renders home link', () => {

  });

});

describe("Home.js displays in App.js", () => {
  
  test('renders "Calculator" button', () => {

  });

  test('renders "Dice" button', () => {
    
  });

});

describe("Dice.js displays in App.js", () => {
  
  test('renders title', () => {

  });

  test('renders input label', () => {
    
  });

  test('renders "Roll" button', () => {

  });

  test('renders "Die Size" text', () => {

  });

  test('renders "Result" text', () => {

  });

  test('renders default values', () => {
    // On page load:
    // > 6 appears in the input field
    // > Die Size: 6
    // > Result: 0
  });

});

describe("Dice.js functions correctly", () => {
  // you can either test this from App.js
  // or you can test Dice.js directly (put tests in Dice.test.js)
  
  test('Roll button (or function) returns a reasonable number', () => {
    //const testValues = [
      //die sizes 2-20
      //should return a number between 1 and the die size
    //];
  });

  test('Dice.js error messages are thrown appropriately', () => {

  });

  test('Hover text on input field displays when input value is not in range', () => {
    
  });

  test('Input field up/down arrows only produce values within range', () => {
    
  });

});