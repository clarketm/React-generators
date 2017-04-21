let last;

function getLast() {
  return last
}

function setLast(v) {
  last = `/${v.toLowerCase()}`;
  return last
}

module.exports = {
  getLast: getLast,
  setLast: setLast
};
