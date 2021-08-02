export const isInputNumber = (event, maxLength) => {
  let input = String.fromCharCode(event.which);
  if (!/[0-9]/.test(input)) {
    event.preventDefault();
  }
  if (event.target.value === "0000") {
    event.preventDefault();
  }
  if (event.target.value.length >= maxLength) {
    event.preventDefault();
  }
};
