const numberEquals = (x, y)  => {
  return Math.abs(x - y) < Number.EPSILON;
  }
  module.exports = numberEquals ;
