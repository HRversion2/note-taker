console.log("Script is loading...");
var submitbutton = document.querySelector(".submit-btn");
submitbutton.addEventListener("click", function () {
  var title = document.querySelector("#title").value;
  var note = document.querySelector("#note").value;
  console.log(title);
  console.log(note);
  var obj = {
    title: title,
    note: note,
  };
  noteArray = [];
  console.log(obj);
});
