export default class Participant {
  constructor( name, phone) {
    this.name = name;
    this.phone = phone;
  }
  static fromString(str) {
    const array = str.split(/\t+|\s+/, 3);
    if(array[0] && array[1]) {
      return new Participant(array[0], array[1]);
    }
    throw new Error(`'${str}' is invalid: name and phone are both required`);
  }
  toString() {
    return `${this.name}\t${this.phone}`;
  }
}