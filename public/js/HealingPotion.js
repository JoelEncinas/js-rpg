export class HealingPotion {
  constructor(id, name, namePlural, amountToHeal) {
    this._id = id;
    this._name = name;
    this._namePlural = namePlural;
    this._amountToHeal = amountToHeal;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get namePlural() {
    return this._namePlural;
  }

  set namePlural(namePlural) {
    this._namePlural = namePlural;
  }

  get amountToHeal() {
    return this._amountToHeal;
  }

  set amountToHeal(amountToHeal) {
    this._amountToHeal = amountToHeal;
  }
}
