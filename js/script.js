document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(link => {
    const target = link.getAttribute("href");
    if (target === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const button = document.querySelector(".back-to-top");
  if (button) {
    window.addEventListener("scroll", () => {
      button.classList.toggle("visible", window.scrollY > 500);
    });
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const form = document.querySelector("#bookingForm");
  const message = document.querySelector("#formMessage");
  if (form && message) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      message.hidden = false;
      message.textContent = "Thank you. Your enquiry has been captured for this website prototype. We will be in touch using the details you provided.";
      message.scrollIntoView({ behavior: "smooth", block: "center" });
      form.reset();
    });
  }
});
