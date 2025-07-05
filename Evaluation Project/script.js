document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll(".navbar-nav .nav-link").forEach((anchor) => {
    // Only apply to links that start with # (internal links)
    if (anchor.getAttribute("href").startsWith("#")) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });

          // If the navbar is collapsed, close it after clicking a link
          const navbarCollapse = document.getElementById("navbarNav");
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse); // Get Bootstrap's Collapse instance
          if (bsCollapse && navbarCollapse.classList.contains("show")) {
            bsCollapse.hide();
          }
        }
      });
    }
  });

  // Form Validation (Bootstrap's native validation)
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  // Optional: Animate progress bars on scroll if needed (more advanced)
  // For simpler animation, CSS 'animation' property is often enough.
  // The CSS @keyframes fillProgress already handles a basic animation on load.
});
