document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    function handleScrollAnimation() {
        projectCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // Voer direct uit bij laden
});
