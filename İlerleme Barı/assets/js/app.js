const progress = document.querySelector(".progress")
const circle = document.querySelectorAll(".circle")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

let counter = 0
let progressWidth = 0
prev.addEventListener("click", () => {
    counter--
    progressWidth -= 33
    if (progressWidth < 101) {
        progress.style.width = progressWidth + "%"
    }

    progress.classList.remove("progressNext")
    circle[counter].classList.remove("active")
})

next.addEventListener("click", () => {
    progress.classList.add("progressNext")
    progressWidth += 33
    if (progressWidth < 101) {
        progress.style.width = progressWidth + "%"
    }
    circle[counter].classList.add("active")
    counter++

})