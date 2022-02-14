document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  document.getElementById('btn-add-line').addEventListener(
    'click', addLine)

  for (const div of document.querySelectorAll('#grid>div')) {
    initDiv(div)
  }
  updateTotals()
});

function initDiv(div) {
  div.addEventListener('click',
    () => {setRandomColor(div); updateTotals(); })
  div.addEventListener('mouseenter',
    () => {setHoverColor(div); updateTotals(); })
}

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}

function addLine() {
  let grid = document.getElementById('grid')

  for (let i = 0; i < 10; i++) {
    let div = document.createElement('div')
    grid.append(div)
    initDiv(div)
  }
  updateTotals()
}

function setRandomColor(element) {
  element.style.backgroundColor = randomColor()
  element.classList.remove('hovered')
}

function setHoverColor(element) {
//  console.log('hover')
  element.style.backgroundColor = ''
  element.classList.add('hovered')
}

function randomColor() {
  // a random (float) number between 0 and 2**24-1
  const F = (1 << 24 - 1) * Math.random()
  // floor it to an int
  const N = Math.floor(F)
  // convert to hexa and build a color
  return `#${N.toString(16)}`
}

function updateTotals() {
  //  console.log('totals')
  const total = document.querySelectorAll("#grid>div").length
  const clicked = document.querySelectorAll('#grid div[style*="background-color"]').length
  const blue = document.querySelectorAll('#grid div.hovered').length
  const original = total - clicked - blue
  document.querySelector("#totals #original").innerHTML = original.toString()
  document.querySelector("#totals #clicked").innerHTML = clicked.toString()
  document.querySelector("#totals #blue").innerHTML = blue.toString()
  document.querySelector("#totals #total").innerHTML = total.toString()
}
