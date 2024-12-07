const titles = ["💕"]; 
let index = 0;

function change() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}

setInterval(change, 9);

const body = document.getElementsByTagName('body')[0];

window.addEventListener("keydown", (event) => {
  if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
    event.preventDefault();
    window.location.href = "https://bloody.bio/consist";
  }

  if (event.ctrlKey && (event.key === "C")) {
    event.preventDefault();
    window.location.href = "https://bloody.bio/consist";
  }

  if (event.ctrlKey && (event.key === "E" || event.key === "e")) {
    event.preventDefault();
    window.location.href = "https://bloody.bio/consist";
  }

  if (event.ctrlKey && (event.key === "U" || event.key === "u")) {
    event.preventDefault();
    window.location.href = "https://bloody.bio/consist";
  }
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});