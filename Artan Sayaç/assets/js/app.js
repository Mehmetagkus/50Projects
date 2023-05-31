let counter = document.querySelectorAll(".counter")
let reset = document.querySelector(".btn")

counter.forEach((item) => {
    item.innerHTML = 0

    const updateCounter = () => {
        const target = Number(item.getAttribute("data-target"))
        const c = +item.innerHTML
        const increment = target / 150

        if (c < target) {
            item.innerHTML = Math.ceil(c + increment)
            setTimeout(updateCounter, 1)
        } else {
            item.innerHTML = target
        }

    }

    updateCounter()
})

reset.addEventListener("click", () => {
    window.location.reload()
})