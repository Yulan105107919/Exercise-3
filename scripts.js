document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");

  // Get current page path
  const currentPath = window.location.pathname.split("/").pop();

  links.forEach(link => {
      const linkPath = link.getAttribute("href").split("/").pop();

      // Compare file names to highlight the active link
      if (linkPath === currentPath) {
          link.classList.add("active");
      }
  });
});
