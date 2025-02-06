 // Popup Elements
 const rulesButton = document.getElementById("rulesButton");
 const rulesPopup = document.getElementById("rulesPopup");
 const overlay = document.getElementById("overlay");
 const closePopup = document.getElementById("closePopup");
 // Show Popup
 rulesButton.addEventListener("click", () => {
    rulesPopup.style.display = "block";
    overlay.style.display = "block";
});

// Close Popup
closePopup.addEventListener("click", () => {
    rulesPopup.style.display = "none";
    overlay.style.display = "none";
});