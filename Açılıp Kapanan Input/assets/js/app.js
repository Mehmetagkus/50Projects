const searchBtn = document.querySelector(".search-btn")
const input = document.querySelector(".input")

searchBtn.addEventListener("click", () => {
    input.classList.toggle("active")
    input.focus()
})

