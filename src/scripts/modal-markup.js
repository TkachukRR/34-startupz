export function getModalMarkup(title, info, imgSrc) {
  return `
        <div id="modal" class="backdrop bg-complementary-gray bg-opacity-90 flex justify-center items-center">
          <div class="relative bg-bg-primary max-w-[600px] m-[40px] px-[40px] py-[20px] text-txt-primary rounded-[30px] shadow-[0px_8px_35px_0px_rgba(187,169,142,0.15)]">
            <button
              class="absolute top-[30px] right-[30px] h-[30px] w-[30px] hover:bg-bg-accent bg-bg-secondary rounded-full rotate-[45deg]"
              type="button"
              data-action="close-modal"
                aria-label="Close modal window"
            >
                <span class="not-sr-only text-m">+</span>
                <span class="sr-only">Close</span>
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
