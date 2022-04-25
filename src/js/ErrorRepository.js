export default class ErrorRepository {
  constructor() {
    this.errorLib = new Map([
      ['1', 'Что-то пошло не так'],
      ['2', 'Кто-то сделал не то'],
      ['3', 'Когда-нибудь но не сейчас'],
    ]);
  }

  translate(code) {
    if (this.errorLib.has(code)) {
      return this.errorLib.get(code);
    }
    return 'Unknown error';
  }
}
