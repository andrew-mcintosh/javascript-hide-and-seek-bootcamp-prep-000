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
  var rankedList = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i = 0;i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}