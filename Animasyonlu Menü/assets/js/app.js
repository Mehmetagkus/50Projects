const container = document.querySelector(".container")
const menu = document.querySelector(".menu")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")
const nav = document.querySelector(".nav")

menuIcon.addEventListener("click", () => {
    menu.style.transform = "rotate(-90deg)"
    container.style.transform = "rotate(-20deg)"
    nav.style.left = "0"
})

closeIcon.addEventListener("click", () => {
    menu.style.transform = "rotate(0deg)"
    container.style.transform = "rotate(0deg)"
    nav.style.left = "-50%"

})