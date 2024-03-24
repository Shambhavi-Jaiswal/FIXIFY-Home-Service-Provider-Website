// JavaScript code goes here

document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay");
    var searchButton = document.getElementById("searchButton");

    // Display the form when the page loads
    overlay.style.display = "flex";

    // Hide the form when clicked outside of it
    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });

    // Function to handle search button click
    searchButton.addEventListener("click", function() {
        alert("Searching...");
    });
});






