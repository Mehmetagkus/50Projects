const container = document.querySelector(".container")
const COLORS = ["#FB1F6E", "#DF3884", "#C1559C", "#987CBD", "#789AD6", "#4EC1F7"]

for (let i = 0; i < 572; i++) {
    let square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = `${randomColor()}`
    })
    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = `#111`
    })
    container.append(square)
}

function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
}