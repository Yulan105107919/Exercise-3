document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");

  // Highlight active page
  links.forEach(link => {
      if (link.href === window.location.href) {
          link.classList.add("active");
      }
  });
});
