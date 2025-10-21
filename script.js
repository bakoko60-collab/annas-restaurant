// Filter Buttons
const buttons = document.querySelectorAll("[data-filter]");
const items = document.querySelectorAll(".menu-item");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    items.forEach(item => {
      item.style.display =
        filter === "all" || item.dataset.category === filter ? "block" : "none";
    });
  });
});
