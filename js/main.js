const menu = document.getElementById("menuToggle");
const nav = document.getElementById("primaryNav");
const icons = document.querySelector("#iconToggle");
const buttons = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".tab-grid figure");
const count = document.getElementById("count");
const link = document.querySelectorAll("#primaryNav li");

console.log(link);

function openNav() {
  if (!nav.classList.contains("open") && icons.classList.contains("fa-bars")) {
    nav.classList.add("open");
    icons.classList.remove("fa-bars");
    icons.classList.add("fa-times");
  } else {
    nav.classList.remove("open");
    icons.classList.add("fa-bars");
  }
}

menu.addEventListener("click", openNav);

function applyFilter(filter) {
  let visible = 0;

  items.forEach(function (item) {
    const categories = item.dataset.category.split(" ");

    const shouldShow = filter === "all" || categories.includes(filter);

    item.classList.toggle("is-hidden", !shouldShow);

    if (shouldShow) visible++;
  });

  count.textContent = "Showing " + visible + " of " + items.length;
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons.forEach(function (b) {
      b.classList.remove("active");
    });

    button.classList.add("active");

    applyFilter(button.dataset.filter);
  });
});

applyFilter("all");

link.forEach((links) => {
  links.addEventListener("click", () => {
    nav.classList.remove("open");
    icons.classList.add("fa-bars");
  });
});
