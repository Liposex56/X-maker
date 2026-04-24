const currentPage = document.body.dataset.page;
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  const href = link.getAttribute("href") || "";
  const isIndex = currentPage === "inicio" && href === "index.html";
  const isMatch = href.includes(currentPage) && currentPage !== "inicio";

  if (isIndex || isMatch) {
    link.classList.add("active");
  }
});
