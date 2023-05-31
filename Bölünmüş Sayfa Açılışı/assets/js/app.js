let area = document.querySelectorAll(".area")

area.forEach(e => {
    e.addEventListener("mouseenter", () => {
        e.classList.add("active")
    })
});

area.forEach(e => {
    e.addEventListener("mouseleave", () => {
        e.classList.remove("active")
    })
});