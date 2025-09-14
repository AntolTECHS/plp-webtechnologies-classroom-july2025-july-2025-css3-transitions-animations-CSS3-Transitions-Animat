// 1. Button triggers box animation
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  document.getElementById("clickBox").classList.toggle("active");
});

// 2. Card flip works on hover via CSS only

// 3. Start/Stop Loader
const loader = document.getElementById("loader");
document.getElementById("toggleLoaderBtn").addEventListener("click", () => {
  loader.classList.toggle("active");
});

// 4. Popup Modal
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Close modal if user clicks outside content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});
