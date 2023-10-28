export default class ArraySchema {
  constructor (validators) {
    this.validators = [...validators]
  }
   
  isValid(array){
    return this.validators.every((validator) => validator(array));
  }

  length(value) {
    const validator = (array) => array.length === value;
    return new ArraySchema([...this.validators, validator]);
  }
}
