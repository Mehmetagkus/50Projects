let inputkey = document.getElementById("inputkey")
let keycode = document.getElementById("keycode")
let value = document.getElementById("value")

window.addEventListener("keydown", (e) => {

    inputkey.innerHTML = e.key == " " ? "Space" : e.key
    keycode.innerHTML = e.keyCode
    value.innerHTML = e.code
})