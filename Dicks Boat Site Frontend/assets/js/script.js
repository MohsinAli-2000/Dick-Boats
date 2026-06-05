/* ============================================================================
   DICK'S BOAT SHOP — site scripts
   ========================================================================== */
(function () {
    "use strict";

    /* ---- Mobile navigation toggle ---- */
    var navToggle = document.getElementById("navToggle");
    var navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("isOpen");
        });

        // Close the menu when a link is tapped (mobile)
        navMenu.querySelectorAll(".navLink").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("isOpen");
            });
        });
    }


})();
