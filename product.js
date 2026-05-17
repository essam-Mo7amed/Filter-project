let filterButtons = document.querySelectorAll(".filter-btn");
let productCards = document.querySelectorAll(".product-card");
let searchInput = document.querySelector(".product-search-input");

let activeFilter = "all";

function updateProducts() {
  let query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  productCards.forEach((card) => {
    let title = card.querySelector("h3")?.textContent.toLowerCase() || "";
    let matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    let matchesSearch = !query || title.includes(query);

    card.hidden = !(matchesCategory && matchesSearch);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter || "all";
    updateProducts();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", updateProducts);
}
