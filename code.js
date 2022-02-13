document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...
  document.getElementById("btn-add-line").addEventListener("click", (evt) => {
    const grid = document.getElementById("grid");
    for (let index = 0; index < 10; index++) {
      const div = document.createElement("div")
      div.addEventListener("click", squareClicked);
      grid.appendChild(div);
    }
  });

  document.getElementById("grid").childNodes.forEach((value) =>
    value.addEventListener("click", squareClicked)
  );
});

function squareClicked(evt) {
  evt.target.style.backgroundColor = "#" + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
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
