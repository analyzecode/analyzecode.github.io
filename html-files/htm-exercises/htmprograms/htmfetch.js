const htmcode1 = document.querySelector(".htmcode1");
const htmcode2 = document.querySelector(".htmcode2");
const htmcode3 = document.querySelector(".htmcode3");
const htmcode4 = document.querySelector(".htmcode4");
const htmcode5 = document.querySelector(".htmcode5");
const htmcode6 = document.querySelector(".htmcode6");
const htmcode7 = document.querySelector(".htmcode7");
const htmcode8 = document.querySelector(".htmcode8");
const htmcode9 = document.querySelector(".htmcode9");
const htmcode10 = document.querySelector(".htmcode10");
const htmcode11 = document.querySelector(".htmcode11");
const htmcode12 = document.querySelector(".htmcode12");
const htmcode13 = document.querySelector(".htmcode13");


// csscode1
fetch('/htm-txtfiles/htm-exer1.html')
  .then(res => res.text())
  .then(data => {
    htmcode1.innerText = data
  });


// csscode2
fetch('/htm-txtfiles/htm-exer2.html')
  .then(res => res.text())
  .then(data => {
    htmcode2.innerText = data
  });

// csscode3
fetch('/htm-txtfiles/htm-exer3.html')
  .then(res => res.text())
  .then(data => {
    htmcode3.innerText = data
  });

// csscode4
fetch('/htm-txtfiles/htm-exer4.html')
  .then(res => res.text())
  .then(data => {
    htmcode4.innerText = data
  });

// csscode5
fetch('/htm-txtfiles/htm-exer5.html')
  .then(res => res.text())
  .then(data => {
    htmcode5.innerText = data
  });

// csscode6
fetch('htm-txtfiles/htm-exer6.html')
  .then(res => res.text())
  .then(data => {
    htmcode6.innerText = data
  });

// csscode7
fetch('htm-txtfiles/htm-exer7.html')
  .then(res => res.text())
  .then(data => {
    htmcode7.innerText = data
  });

// csscode8
fetch('htm-txtfiles/htm-exer8.html')
  .then(res => res.text())
  .then(data => {
    htmcode8.innerText = data
  });

// csscode9
fetch('htm-txtfiles/htm-exer9.html')
  .then(res => res.text())
  .then(data => {
    htmcode9.innerText = data
  });

// csscode10
fetch('htm-txtfiles/htm-exer10.html')
  .then(res => res.text())
  .then(data => {
    htmcode10.innerText = data
  });

// csscode11
fetch('htm-txtfiles/htm-exer11.html')
  .then(res => res.text())
  .then(data => {
    htmcode11.innerText = data
  });

// csscode12
fetch('htm-txtfiles/htm-exer12.html')
  .then(res => res.text())
  .then(data => {
    htmcode12.innerText = data
  });

  // csscode13
fetch('htm-txtfiles/htm-exer13.html')
.then(res => res.text())
.then(data => {
  htmcode13.innerText = data
});