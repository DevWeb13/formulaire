/**
 * @const {} inputs Tous les inputs sauf le bouton submit
 */
const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password']"
);

const pseudoChecker = () => {};

const emailChecker = () => {};

const passwordChecker = () => {};

const confirmChecker = () => {};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    console.log(e.target.id);
  });
});
