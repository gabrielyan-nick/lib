import $ from "../core";

$.prototype.on = function (event, func) {
  if (!event || !func) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(event, func);
  }
  return this;
};

$.prototype.off = function (event, func) {
  if (!event || !func) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(event, func);
  }
  return this;
};

$.prototype.click = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func) {
      this[i].addEventListener("click", func);
    } else {
        this[i].click();
    }
  }
  return this;
};
