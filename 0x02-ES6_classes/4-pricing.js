// Implement pricing
/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super();
    if (typeof amount !== 'number') throw new TypeError('amount must be a number');
    this._amount = amount;
    if (!(currency instanceof Currency)) throw new TypeError('currency must be an instance of Currency');
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw new TypeError('amount must be a number');
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') throw new TypeError('Both amount and conversionRate must be numbers');

    return amount * conversionRate;
  }
}
