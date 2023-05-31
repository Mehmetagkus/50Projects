let textArea = document.querySelector(".text")

let text = textArea.innerHTML
let progress = 1


setInterval(() => {
    textArea.innerHTML = text.slice(0, progress)
    progress++
    if (progress > text.length) {
        progress = 1
    }
}, 100)
