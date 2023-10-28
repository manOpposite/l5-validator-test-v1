import Validator from "./Validator.js";

const validator = new Validator();
const someValue = validator.number();
console.log(someValue.isValid(NaN));
