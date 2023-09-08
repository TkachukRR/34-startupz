import { interactHelper } from "./scripts/interactiveHelper.js";

const refs = {
  helper: document.querySelector("#helper"),
};

refs.helper.addEventListener("click", interactHelper);
