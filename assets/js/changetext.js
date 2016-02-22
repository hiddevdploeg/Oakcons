var text = ["Web", "iOS", "App", "Android", "All your"];
var counter = 0;
var element = document.getElementById("types");
function changeText() {
  element.innerHTML = text[counter];
  counter++;
  if(counter >= text.length) { counter = 0; }
}
setInterval(changeText, 2500);
