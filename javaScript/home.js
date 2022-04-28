function randomStr() {
  // get greeting
  const str = document.getElementById("greeting");
  const arr = ["🔶 FREECODECAMP CERTIFICATIONS",
    "🔶 LANDED UMUZI LEARNERSHIP",
    "🔶 VIEW MY HACKERRANK PROFILE",
    "🔶 VIEW MY CODEWARS PROFILE"]
  const num = getRandomNum(0, arr.length - 1);
  str.innerText = arr[num];
}
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
