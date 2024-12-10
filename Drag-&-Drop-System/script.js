const draggables = document.querySelectorAll(".draggable");
const dropZones = document.querySelectorAll(".drop-zone");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", (e) => {
    draggable.classList.add("dragging");
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

dropZones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const afterElement = getDragAfterElement(zone, e.clientX, e.clientY);
    const draggable = document.querySelector(".dragging");

    if (!afterElement) {
      zone.appendChild(draggable);
    } else {
      zone.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, x, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
