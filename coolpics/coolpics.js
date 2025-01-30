const menuButton = document.getElementById('menu');
const navLinks = document.querySelector('nav');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

  function viewHandler(event) {
    const clickedElement = event.target
    if (clickedElement.tagName !== "IMG") return;

    const srcParts = clickedElement.src.split("-");

    const newImageSrc = srcParts[0] + "-full.jpeg"

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImageSrc, clickedElement.alt));
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

// Function to close and remove the modal
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove(); // Remove the modal from the page
    }
}

// Attach event listener to the gallery section
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery"); // Select the gallery container
    if (gallery) {
        gallery.addEventListener("click", viewHandler); // Attach click event listener
    }
});

function handleResize() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

handleResize();
window.addEventListener('resize', handleResize);