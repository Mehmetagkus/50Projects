let content = document.querySelectorAll(".content")
let btns = document.querySelectorAll("nav ul li")

btns.forEach((btn, id) => {
    btn.addEventListener("click", () => {
        hiddenContent()
        hiddenBtn()
        content[id].classList.add("show")
        btn.classList.add("active")
    })
})

function hiddenContent() {
    content.forEach(item => {
        item.classList.remove("show")
    })
}

function hiddenBtn() {
    btns.forEach(item => {
        item.classList.remove("active")
    })
}