export default class ObjectSchema {
  shape(fields) {
    this.fields = fields;
    return this;
  }

  isValid(value) {
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.fields).length) {
        return false;
    }
    return keys.every((key) => this.fields[key].isValid(value[key]));
  }
}
