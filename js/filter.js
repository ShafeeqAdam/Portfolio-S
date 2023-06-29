document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let filter = this.dataset.filter;
    document.querySelectorAll(".work-box").forEach((box) => {
      if (filter === "all" || box.dataset.category === filter) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
});
