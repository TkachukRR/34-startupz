import { interactHelper as onInteractiveHelper } from "./scripts/interactive-helper.js";
import { modal as onCardShowMore } from "./scripts/modal.js";

const refs = {
  body: document.querySelector("body"),
  helper: document.querySelector("#helper"),
  cards: document.querySelector("#cards"),
};

refs.helper.addEventListener("click", onInteractiveHelper);
refs.cards.addEventListener("click", onCardShowMore);
