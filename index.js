function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  var list = document.getElementById('grand-node').querySelectorAll('div');
  var test;
  for (let i = 0; i < list.length-1; i++) {
    test = list[i].querySelector("div");
  }
return test;
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list');
  
  for (let i = 0; i < rankedlist.length; i++);
    var children = rankedList.children;
    
  for (let j = 0; j )
}