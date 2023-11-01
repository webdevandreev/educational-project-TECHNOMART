const writeUs = document.querySelector(".write-link");
const writePopup = document.querySelector(".modal-write");
const writeClose = writePopup.querySelector(".modal-close");
const writeName = writePopup.querySelector("[name=name]");
const modalForm = writePopup.querySelector(".modal-form");
const writeEmail = writePopup.querySelector(".write-mail");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
  
   if (storage) {
    writeName.value = storage;
     writeEmail.focus();
  } else {
    writeName.focus();
  }
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!writeName.value || !writeEmail.value) {
    writePopup.classList.remove("modal-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("modal-error");
    evt.preventDefault();
  } else {
    localStorage.setItem("login", writeName.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writePopup.classList.remove("modal-show");
      writePopup.classList.remove("modal-error");
    }
  }
});