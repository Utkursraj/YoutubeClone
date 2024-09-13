var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var mainContainer = document.querySelector(".mainContainer");
var cards = document.querySelectorAll(".card"); // Select all card elements

menuIcon.onclick = function() {
    sidebar.classList.toggle("smaller-sidebar");
    mainContainer.classList.toggle("larger-maincontainer");

    cards.forEach(card => {
        card.classList.toggle("larger-card"); // Toggle class for each card
    });

    console.log("menu icon clicked");
}
