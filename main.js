(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Get modal container and register button
    var modalContainer = document.getElementById("modal-container");
    var registerButton = document.getElementById("toggle-registration-btn");
    var closeModalButton = document.getElementById("close-modal-btn");

    // Function to toggle modal visibility
    function toggleModal() {
        modalContainer.style.display = (modalContainer.style.display === "block") ? "none" : "block";
        // Blur out the main page when modal is open
        document.querySelector('.dashboard').classList.toggle('blurred');
    }

    // Event listener for register button click
    registerButton.addEventListener("click", function() {
        toggleModal();
    });

    // Event listener for close modal button click
    closeModalButton.addEventListener("click", function() {
        toggleModal();
    });
});

})();