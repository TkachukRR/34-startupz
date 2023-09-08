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

  function getModalMarkup(title, info, imgSrc) {
    return `
        <div id="modal" class="backdrop bg-complementary-gray bg-opacity-90 flex justify-center items-center">
          <div class="relative bg-bg-primary max-w-[600px] m-[40px] px-[40px] py-[20px] text-txt-primary rounded-[30px] shadow-[0px_8px_35px_0px_rgba(187,169,142,0.15)]">
            <button
              class="absolute top-[30px] right-[30px]"
              type="button"
              data-action="close-modal"
            >
              X
            </button>
            <div class="overflow-hidden mb-[25px]">
              <img
                src=".${imgSrc}"
                alt="work"
                height="244"
                class="mx-auto"
              />
            </div>
            <h2 class="text-center text-l mb-[20px]">${title}</h2>
            <p class="text-m ">${info}</p>
          </div>
        </div>
    `;
  }
}
