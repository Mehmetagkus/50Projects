let nav = document.querySelector("nav")

window.addEventListener("scroll", () => {
    if (nav.offsetHeight + 35 < window.scrollY) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
})