
let currentPage = 1;
const PASSWORD = "4 years"; // 🔐 PASSWORD WITH SPACE

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === PASSWORD) {
    document.getElementById("passwordPage").classList.remove("active");
    document.getElementById("page1").classList.add("active");

    document.getElementById("bgMusic").play();
  } else {
    document.getElementById("error").style.display = "block";
  }
}

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.add("active");
}

function correct() {
  nextPage();
}

function wrong() {
  alert("Hehe 🤭 try again ❤️");
}

function moveButton(btn) {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}
