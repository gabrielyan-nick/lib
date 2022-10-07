import $ from "../core";

$.prototype.addAttr = function (attr, value) {
  for (let i = 0; i < this.length; i++) {
    if (arguments.length === 1) {
      this[i].setAttribute(attr, attr);
    }

    if (attr && value) {
      this[i].setAttribute(attr, value);
    } else {
      return this;
    }
  }
  return this;
};

$.prototype.removeAttr = function (attr) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attr);
  }
  return this;
};
