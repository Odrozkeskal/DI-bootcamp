const myModule = require('lodash');
function add(a, b) {
  return myModule.add(a, b);
}

function multiply(a, b) {
  return myModule.multiply(a, b);
}
module.exports = {
  add,
  multiply
};