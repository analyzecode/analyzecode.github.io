const tutdrop = document.querySelector(".dropbtn1");
const exerdrop = document.querySelector(".dropbtn2");
const showtutcon = document.querySelector(".drop-down-content-tut");
const showexercon = document.querySelector(".drop-down-content-exer");
const hidecontent = document.querySelector(".top-area");
const droparrow = document.querySelector(".droparrow");
const droparrow2 = document.querySelector(".droparrow2");


tutdrop.addEventListener("mouseover", function() {
    showtutcon.setAttribute("style","display: flex;");
    droparrow.setAttribute("style","transform: rotate(-180deg);");
    showexercon.setAttribute("style","display:none;");
  });
exerdrop.addEventListener("mouseover", function() {
    showexercon.setAttribute("style","display: flex;");
    droparrow2.setAttribute("style","transform: rotate(-180deg);");
    showtutcon.setAttribute("style","display:none;");
    });
hidecontent.addEventListener("mouseout", function() {
    showtutcon.setAttribute("style","display: none;");
    droparrow.setAttribute("style","transform: rotate(360deg);");
    droparrow2.setAttribute("style","transform: rotate(360deg);");
    showexercon.setAttribute("style","display:none;");
  }); 
// for tutorial dropdown
const leftmenubtna = document.querySelector(".leftmenu-btns1");
leftmenubtna.setAttribute("style","color: #256af0;border-right: 4px solid blue;background-color: #e5eeff;");
const leftmenubtnb = document.querySelector(".leftmenu-btns2");
const leftmenubtnc = document.querySelector(".leftmenu-btns3");
const leftmenubtnd = document.querySelector(".leftmenu-btns4");
let rightmenu = document.querySelector(".right-menu");
const dropdownc1 = document.querySelector(".getdescdd1");
const dropdownc2 = document.querySelector(".getdescdd2");
const dropdownc3 = document.querySelector(".getdescdd3");
const dropdownc4 = document.querySelector(".getdescdd4");


leftmenubtna.addEventListener("click", function(){
  leftmenubtna.setAttribute("style","color: #256af0;border-right: 4px solid blue;background-color: #e5eeff;");
  leftmenubtnb.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  leftmenubtnc.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  leftmenubtnd.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  rightmenu.innerHTML = document.querySelector(".getdescdd1").innerHTML;
});

leftmenubtnb.addEventListener("click", function(){
  leftmenubtna.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  leftmenubtnb.setAttribute("style","color: #256af0;border-right: 4px solid blue;background-color: #e5eeff;");
  leftmenubtnc.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  leftmenubtnd.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  rightmenu.innerHTML = document.querySelector(".getdescdd2").innerHTML;
});

leftmenubtnc.addEventListener("click",function(){
  leftmenubtna.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  leftmenubtnb.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  leftmenubtnc.setAttribute("style","color: #256af0;border-right: 4px solid blue;background-color: #e5eeff;");
  leftmenubtnd.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  rightmenu.innerHTML = document.querySelector(".getdescdd3").innerHTML;
});

leftmenubtnd.addEventListener("click",function(){
  leftmenubtna.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  leftmenubtnb.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  leftmenubtnc.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  leftmenubtnd.setAttribute("style","color: #256af0;border-right: 4px solid blue;background-color: #e5eeff;");
  rightmenu.innerHTML = document.querySelector(".getdescdd4").innerHTML;
});
// for exercises dropdown
const exleftmenubtna = document.querySelector(".exleftmenu-btns1");
exleftmenubtna.setAttribute("style","color: #256af0;border-right: 4px solid blue;background-color: #e5eeff;");
const exleftmenubtnb = document.querySelector(".exleftmenu-btns2");
const exleftmenubtnc = document.querySelector(".exleftmenu-btns3");
let exrightmenu = document.querySelector(".exright-menu");



exleftmenubtna.addEventListener("click", function(){
  exleftmenubtna.setAttribute("style","color: #256af0;border-right: 4px solid blue;background-color: #e5eeff;");
  exleftmenubtnb.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  exleftmenubtnc.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  exrightmenu.innerHTML = document.querySelector(".getexdd1").innerHTML;
});

exleftmenubtnb.addEventListener("click", function(){
  exleftmenubtna.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  exleftmenubtnb.setAttribute("style","color: #256af0;border-right: 4px solid blue;background-color: #e5eeff;");
  exleftmenubtnc.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  exrightmenu.innerHTML = document.querySelector(".getexdd2").innerHTML;
});

exleftmenubtnc.addEventListener("click",function(){
  exleftmenubtna.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  exleftmenubtnb.setAttribute("style","color 3b3b3b;border-right: 4px solid #ffffff");
  exleftmenubtnc.setAttribute("style","color: #256af0;border-right: 4px solid blue;background-color: #e5eeff;");
  exrightmenu.innerHTML = document.querySelector(".getexdd3").innerHTML;
});

// temporary alert for search icon
const searchwarning = document.querySelector(".search-bar");
searchwarning.addEventListener("click", () =>{
  alert("Sorry for the inconvenience, searching is under development");
});



// coding for online editor (css)
// const editor = document.querySelector(".editor");
// const iframe = document.querySelector("iframe");
// const btn = document.querySelector("button");
// cssprog1()
// function cssprog1(){
//   URL = "helllo.txt";
//   fetch(URL).then((response)=>{
//     return response.text();
//   }).then((data)=>{
//    data = editor;
//   })
// }

// getdata();

// fetch('/html-files/hello.txt')
// .then(res => res.text())
// .then(data=>{
//   editor.innerText = data
// })
// try it editor code

// for run button
// btn.addEventListener("click", () => {
//   var html = editor.textContent;
//   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
// });


// editor.addEventListener('keyup',()=>{
//   var html = editor.textContent;
//   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
// });

// editor.addEventListener("paste", function(e) {
//         e.preventDefault();
//         var text = e.clipboardData.getData("text/plain");
//         document.execCommand("insertText", false, text);
// });



// const editor = document.querySelector(".codeeditor");
// const iframe = document.querySelector(".codegetoutput");
// const btn = document.querySelector(".getresult");



// btn.addEventListener("click", () => {
//   var html = editor.textContent;
//   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
// });


// editor.addEventListener("keyup",()=>{
//   var html = editor.textContent;
//   iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
// })

// editor.addEventListener("paste", function(e) {
//         e.preventDefault();
//         var text = e.clipboardData.getData("text/plain");
//         document.execCommand("insertText", false, text);
//     });