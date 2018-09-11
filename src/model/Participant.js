export default class Participant {
  constructor( name, phone) {
    this.name = name;
    this.phone = phone;
  }
  static fromString(str) {
    const array = str.split(/\t+|\s+/, 2);
    if(array[0] && array[1]) {
      if (!(/^[1][3-9][0-9]{9}$/.test(array[1]))) {
        throw new Error(`'${array[0]}'的手机号有误: 请输入11位数字`);
      }
      return new Participant(array[0], array[1]);
    }
    throw new Error(`'${str}' 无效: 姓名和手机号都需要`);
  }
  toString() {
    return `${this.name}\t${this.phone}`;
  }
}