export function interactHelper(event) {
  const targetElement = event.target;
  const currentTarget = event.currentTarget;

  if (targetElement.id === "ben") {
    toggleDialogVisibility();
  }

  if (targetElement.parentElement.getAttribute("data-action") === "close") {
    toggleDialogVisibility();
  }

  if (targetElement.parentElement.id === "answers") {
    showAskField();
  }

  function toggleDialogVisibility() {
    const dialogWindow = currentTarget.querySelector("#dialog");
    dialogWindow.classList.toggle("hidden");
  }

  function showAskField() {
    const askInput = currentTarget.querySelector("#question");
    askInput.classList.remove("hidden");
  }
}
