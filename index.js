function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  return document.getElementById('grande-node').querySelector('div');
}