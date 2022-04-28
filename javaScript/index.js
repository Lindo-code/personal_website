function randomStr() {
  // get greeting
  const str = document.getElementById("greeting");
  const arr = ["🔶 WELCOME TO MY WEBSITE :)"]
  const num = getRandomNum(0, arr.length - 1);
  str.innerText = arr[num];
}
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function delay(url) {
  setTimeout(function() {
    window.open(url, "_blank")
  }, 300);
}