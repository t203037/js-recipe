const display = document.getElementById("display")
const plusButton = document.getElmentById("plus-button")

let count = 0

plusButton.onclick = function () {
  // eslint-disable-next-line no-undef
  count += 1

  display.textContent = count
}
