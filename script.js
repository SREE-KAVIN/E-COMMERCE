// Select the side navigation element
var sidenav = document.querySelector(".side-navbar");

// Function to show the side navigation
function shownav() {    
    sidenav.style.left = "0";  // Slide the side navigation into view
}

// Function to hide the side navigation
function closenav() {
    sidenav.style.left = "-60%";  // Slide the side navigation out of view
}

// Select the product container and search input elements
var productContainer = document.getElementById("products");
var search = document.getElementById("search");

// Get all product items within the product container
var productlist = productContainer.querySelectorAll("div");

// Add an event listener to the search input field to filter products on keyup
search.addEventListener("keyup", function(event) {
    // Get the value entered by the user and convert it to uppercase
    var enteredValue = event.target.value.toUpperCase();

    // Loop through each product item
    for (var count = 0; count < productlist.length; count++) {
        // Get the text content of the product name
        var productname = productlist[count].querySelector("p").textContent;

        // Check if the product name includes the entered value
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            // Hide product item if it does not match the search query
            productlist[count].style.display = "none";
        } else {
            // Show product item if it matches the search query
            productlist[count].style.display = "block";
        }
    }
});
