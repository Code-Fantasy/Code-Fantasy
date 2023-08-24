document.addEventListener("DOMContentLoaded", function() {
    const allSections = document.querySelectorAll(".crystal-section");

    allSections.forEach(function(section) {
        const crystals = section.querySelectorAll(".crystal");
        const firstCrystal = crystals[0];
        const otherCrystals = Array.from(crystals).slice(1);

        const firstCrystalDull = firstCrystal.querySelector(".dull");
        const firstCrystalColor = firstCrystal.querySelector(".color");

        firstCrystalColor.style.display = "block";
        firstCrystal.classList.add("active");

        otherCrystals.forEach(function(crystal) {
            const dullCrystal = crystal.querySelector(".dull");
            const colorCrystal = crystal.querySelector(".color");

            crystal.addEventListener("click", function() {
                toggleCrystals(crystal, firstCrystal, otherCrystals);
            });
        });
    });
});

function toggleCrystals(clickedCrystal, firstCrystal, otherCrystals) {
    if (clickedCrystal.classList.contains("active")) {
        clickedCrystal.classList.remove("active");
    } else {
        otherCrystals.forEach(function(crystal) {
            crystal.classList.remove("active");
        });
        clickedCrystal.classList.add("active");
    }

    firstCrystal.classList.remove("active");
}
