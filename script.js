document.addEventListener("DOMContentLoaded", function () {

    console.log("JS LOADED");

    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");

    // SAFETY CHECK
    if (!popup || !popupText) {
        console.error("Popup elements NOT FOUND");
        return;
    }

    function showPopup(message) {
        popupText.innerText = message;
        popup.classList.remove("hidden");
    }

    function hidePopup() {
        popup.classList.add("hidden");
    }

    // Close popup when clicking anywhere on overlay
    popup.addEventListener("click", hidePopup);

    // OVERLAP ZONES (popups)

    document.querySelector(".bio-tech")?.addEventListener("click", () => {
        showPopup("Biology and Technology must evolve together.");
    });

    document.querySelector(".tech-earth")?.addEventListener("click", () => {
        showPopup("Technology must operate within Earth's limits.");
    });

    document.querySelector(".bio-earth")?.addEventListener("click", () => {
        showPopup("Biological systems depend on Earth's stability.");
    });

    document.querySelector(".all-three")?.addEventListener("click", () => {
        showPopup("All three systems must remain in balance.");
    });

});