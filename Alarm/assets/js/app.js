const clock = document.querySelector(".clock")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const alarmBtn = document.querySelector("#alarmBtn")
const alarmClear = document.querySelector("#alarmClear")
const clockImg = document.querySelector(".clock-img")

setInterval(() => {
    const date = new Date()
    let alert = new Audio("assets/audio/ringtone.mp3")

    clock.innerHTML = date.toLocaleTimeString()

    if (hours.value == date.getHours() && minutes.value == date.getMinutes() && date.getSeconds() == 0) {
        alert.play()
        alert.loop = true
        clockImg.classList.add("vibrate")
    }
    alarmClear.addEventListener("click", () => {
        alert.pause()
        hours.disabled = false
        minutes.disabled = false
        alarmBtn.style.display = "block"
        alarmClear.classList.add("d-none")
        clockImg.classList.remove("vibrate")
    })
}, 1000)

for (let i = 1; i < 24; i++) {
    let option = document.createElement("option")
    option.innerHTML = i
    option.value = i
    hours.appendChild(option)
}
for (let i = 1; i <= 59; i++) {
    let option = document.createElement("option")
    option.innerHTML = i
    option.value = i
    minutes.appendChild(option)
}

function alarm() {
    hours.disabled = true
    minutes.disabled = true
    alarmBtn.style.display = "none"
    alarmClear.classList.remove("d-none")
}

