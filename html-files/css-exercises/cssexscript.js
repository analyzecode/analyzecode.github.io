
const searchwarning = document.querySelector(".search-bar");
searchwarning.addEventListener("click", () =>{
  alert("Sorry for the inconvenience, searching is under development");
});


// ok tested
const editor = document.querySelector(".codeeditor");
const iframe = document.querySelector(".codegetoutput");
const btn = document.querySelector(".getresult");

btn.addEventListener("click", () => {
  var html = editor.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});


editor.addEventListener("keyup",()=>{
  var html = editor.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

editor.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    });
