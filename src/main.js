import { interactHelper } from "./scripts/interactiveHelper.js";
import { modal as onCardShowMore } from "./scripts/modal.js";

const refs = {
  body: document.querySelector("body"),
  helper: document.querySelector("#helper"),
  cards: document.querySelector("#cards"),
};

refs.helper.addEventListener("click", interactHelper);
refs.cards.addEventListener("click", onCardShowMore);
