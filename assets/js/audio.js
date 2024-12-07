var audio = document.getElementById("audio")
document.getElementById("enter").addEventListener("click", function() {
  const x = document.getElementById("enter")
  x.style.opacity = "0"
  x.addEventListener("transitionend", () => x.remove())
  typeof window.orientation == "undefined" && audio.play()
})
audio.onended = function() {
  audio.play()
}
let volume = document.querySelector("#volume")
volume.addEventListener("change", function(y) {
  audio.volume = y.currentTarget.value / 100
})
var domain = window.location.hostname
if (domain != "bloody.bio") {
  var vol = document.getElementById("volume")
  vol.parentNode.removeChild(vol)
}