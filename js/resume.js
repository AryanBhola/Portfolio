function loadContent() {
  var projectsSection = document.querySelector('.section.projects');
  var projectsCards = document.querySelector('.section.projects .cards');

  // Check if the projects section is in view
  if (isElementInViewport(projectsSection)) {
    // Perform actions to load content for the projects section
    var projectCards = Array.from(document.querySelectorAll('.section.projects .card'));

    // Append the project cards to the projects cards container
    projectCards.forEach(card => {
      projectsCards.appendChild(card);
    });

    // Once the content is loaded, remove the event listener
    window.removeEventListener('scroll', loadContent);
  }
}

// Helper function to check if an element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add the scroll event listener to trigger loading content
window.addEventListener('scroll', loadContent);
