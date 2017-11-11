// TODO: typed arrays
module.exports = Object.freeze({
  buffer (x) {
    return Buffer.isBuffer(x)
  },
  boolean (x) {
    return x !== undefined && x !== null &&
           Object.getPrototypeOf(x) === Boolean.prototype
  },
  number (x) {
    return x !== undefined && x !== null &&
           Object.getPrototypeOf(x) === Number.prototype
  },
  string (x) {
    return x !== undefined && x !== null &&
           Object.getPrototypeOf(x) === String.prototype
  },
  function: function (x) {
    return x && Object.getPrototypeOf(x) === Function.prototype
  },
  plainObject (x) {
    return x && Object.getPrototypeOf(x) === Object.prototype
  },
  array (x) {
    return Array.isArray(x)
  },
  map (x) {
    return x && Object.getPrototypeOf(x) === Map.prototype
  },
  set (x) {
    return x && Object.getPrototypeOf(x) === Set.prototype
  },
  weakMap (x) {
    return x && Object.getPrototypeOf(x) === WeakMap.prototype
  },
  weakSet (x) {
    return x && Object.getPrototypeOf(x) === WeakSet.prototype
  }
})
