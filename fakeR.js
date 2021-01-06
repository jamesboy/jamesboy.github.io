var timer = setTimeout(doIt, 10000);
function doIt() {
  var prix = document.getElementsByClassName("ui large header")[0];
  prix.innerHTML = "$405.99<span>*</span>";
  console.log("done");
}
