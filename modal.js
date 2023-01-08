const refs = {
  openBtn: document.querySelector('[data-action="open-modal"]'),
  closeBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};
refs.openBtn.addEventListener("click", onOpenBtnClick);
refs.closeBtn.addEventListener("click", onCloseBtnClick);
refs.backdrop.addEventListener("click", onBackdropClick);
refs.backdrop.addEventListener("keydown", onEscPush);

function onOpenBtnClick() {
  document.body.classList.add("show-modal");
  window.addEventListener("keydown", onEscPush);
}
function onCloseBtnClick() {
  console.log("CAN'T DELETE THE LISTENER");
  window.removeEventListener("keydown", onEscPush);
  document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseBtnClick();
  }
}

function onEscPush(event) {
  console.log(event.code);
  const ESC_KEY_CODE = "Escape";
  if (event.code === ESC_KEY_CODE) {
    onCloseBtnClick();
  }
}
