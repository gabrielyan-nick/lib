import $ from "../core";

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

$.prototype.elemByIndex = function (index) {
  const elem = this[index];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = elem;
  this.length = 1;
  return this;
};

$.prototype.index = function () {
  const parent = this[0].parentNode;
  const elems = [...parent.children];

  return elems.findIndex((item) => {
    return item == this[0];
  });
};

$.prototype.find = function (selector) {
  let numOfItems = 0,
    counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length == 0) {
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }
    numOfItems += arr.length;
  }
  this.length = numOfItems;
  const objLength = Object.keys(this).length;

  for (; numOfItems < objLength; numOfItems++) {  // Удаляем не перезаписанные значения.
    delete this[numOfItems];
  }

  return this;
};

$.prototype.closest = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);
    if (this[i] === null) {
      this[i] = "";
    }
    counter++;
  }

  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

$.prototype.siblings = function () {
  let numOfItems = 0,
    counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }
    numOfItems += arr.length - 1;
  }
  this.length = numOfItems;
  const objLength = Object.keys(this).length;

  for (; numOfItems < objLength; numOfItems++) {
    delete this[numOfItems];
  }

  return this;
};
