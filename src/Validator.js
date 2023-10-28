import ArraySchema from "./ArraySchema.js";
import NumberSchema from "./NumberSchema.js";
import ObjectSchema from "./ObjectSchema.js";

export default class Validator {
  number() {
  return new NumberSchema([(value) => typeof value === 'number']);
  }
  array() {
    return new ArraySchema([(value) => Array.isArray(value)]);
  }
  object() {
    return new ObjectSchema();
  }
}