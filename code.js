document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...
  document.getElementById("btn-add-line").addEventListener("click", (evt) => {
    const grid = document.getElementById("grid");
    for (let index = 0; index < 10; index++) {
      const div = document.createElement("div");
      div.addEventListener("click", squareClicked);
      div.addEventListener("mouseenter", squareHovered);
      grid.appendChild(div);
    }
    updateCounts();
  });

  document
    .getElementById("btn-remove-line")
    .addEventListener("click", (evt) => {
      const grid = document.getElementById("grid");
      const total = grid.childElementCount;
      const toRemove = [];
      grid.childNodes.forEach((element, index) => {
        if (index >= total - 10) {
          toRemove.push(element);
        }
      });
      for (const node of toRemove) {
        node.remove();
      }
      updateCounts();
    });

  document.getElementById("grid").childNodes.forEach((value) => {
    value.addEventListener("click", squareClicked);
    value.addEventListener("mouseenter", squareHovered);
  });
});

function squareClicked(evt) {
  evt.target.style.backgroundColor =
    "#" + ("00000" + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
  evt.target.classList.add("clicked");
  updateCounts();
}

function squareHovered(evt) {
  evt.target.classList.add("hovered");
  updateCounts();
}

function updateCounts() {
  const total = document.getElementById("grid").childElementCount;
  const blue = document.querySelectorAll(".hovered").length;
  const clicked = document.querySelectorAll(".clicked").length;
  document.getElementById("original").textContent = total - blue - clicked;
  document.getElementById("clicked").textContent = clicked;
  document.getElementById("blue").textContent = blue;
  document.getElementById("total").textContent = total;
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
