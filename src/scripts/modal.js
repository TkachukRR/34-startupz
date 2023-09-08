import { getModalMarkup } from "./modal-markup.js";

export function modal(e) {
  const target = e.target;
  if (target.getAttribute("data-action") !== "showFullCardInfo") return;

  const title = target.parentNode.querySelector("h4").textContent;
  const info = target.parentNode.querySelector("p").textContent;
  const imgSrc = target.parentNode.querySelector("img").getAttribute("src");

  document.body.insertAdjacentHTML(
    "beforeend",
    getModalMarkup(title, info, imgSrc)
  );

  const modalWindow = document.querySelector("#modal");
  const modalCloseBtn = modalWindow.querySelector(
    "[data-action='close-modal']"
  );

  modalCloseBtn.addEventListener("click", onCloseModal);
  document.addEventListener("keydown", onEscKeydown);
  modalWindow.addEventListener("click", onBackdropClick);

  function onCloseModal() {
    modalCloseBtn.removeEventListener("click", onCloseModal);
    document.removeEventListener("keydown", onEscKeydown);
    modalWindow.removeEventListener("click", onBackdropClick);

    modalWindow.remove();
  }

  function onEscKeydown(e) {
    if (e.code === "Escape") {
      onCloseModal();
    }
  }

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  }
}
