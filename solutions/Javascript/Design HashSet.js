var MyHashSet = function () {
  this.hashset = [];
};

MyHashSet.prototype.add = function (key) {
  if (this.hashset.indexOf(key) < 0) {
    this.hashset.push(key);
  }
};

MyHashSet.prototype.remove = function (key) {
  this.hashset = this.hashset.filter((num) => num !== key);
  return this.hashset;
};

MyHashSet.prototype.contains = function (key) {
  if (this.hashset.indexOf(key) > -1) {
    return true;
  } else {
    return false;
  }
};
