document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...
  document.getElementById("btn-add-line").addEventListener("click", (evt) => {
    const grid = document.getElementById("grid");
    for (let index = 0; index < 10; index++) {
      grid.appendChild(document.createElement("div"));
    }
  });
});

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
