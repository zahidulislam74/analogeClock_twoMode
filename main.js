function toggleClass() {
  const body = document.querySelector("body");
  body.classList.toggle("light");
}

let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");

setInterval(() => {
  const d = new Date();
  let h = d.getHours() * 30;
  let m = d.getMinutes() * 6;
  let s = d.getSeconds() * 6;

  hr.style.transform = `rotateZ(${h + m / 12}deg)`;
  mn.style.transform = `rotateZ(${m}deg)`;
  sc.style.transform = `rotateZ(${s}deg)`;
});
