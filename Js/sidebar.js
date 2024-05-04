const toggleBtn = document.querySelector(".sidebar-toggle");
const closeToggle = document.querySelector(".close-sidebar");
let sidebar = document.querySelector(".sidebar");


toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-active");
})

  closeToggle.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-active")
  });