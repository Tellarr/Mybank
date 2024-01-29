

document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to the mobile menu button
    document.getElementById('mobile-menu-btn').addEventListener('click', function () {
      // Toggle the visibility of the navigation links
      var navLinks = document.querySelector('nav ul');
      navLinks.classList.toggle('show');
    });
  });
  