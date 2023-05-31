let passwordInput = document.getElementById("password")
let passwordLabel = document.querySelector("#passwordLabel")
let bg = document.querySelector(".background")

passwordInput.addEventListener("input", (e) => {
    let blur = 10 - e.target.value.length
    bg.style.filter = `blur(${blur}px)`

    if (e.target.value.length > 10) {
        passwordLabel.innerHTML = "<b style='color:green'>Strong Password:</b>"
        passwordInput.style.borderColor = "green"
        passwordInput.style.color = "green"
    } else {
        passwordLabel.innerHTML = "Password:"
        passwordInput.style.borderColor = "initial"
        passwordInput.style.color = "initial"

    }
})