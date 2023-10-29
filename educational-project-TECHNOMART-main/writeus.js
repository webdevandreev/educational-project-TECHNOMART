const writeUs = document.querySelector(".write-link");
const writePopup = document.querySelector(".modal-write");
const writeClose = writePopup.querySelector(".modal-close");
const writeName = writePopup.querySelector("[name=name]");

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
  writeName.focus();
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
});

