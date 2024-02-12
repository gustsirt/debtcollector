export default class LastUpdateDTO {
  constructor(element) {
      Object.assign(this, element);
      this.lastupdate = Date();
    }

}