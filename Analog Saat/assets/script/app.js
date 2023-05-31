let secounds = document.querySelector(".secounds")
let minutes = document.querySelector(".minutes")
let hours = document.querySelector(".hours")
let text = document.querySelector(".text")

setInterval(() => {
    let date = new Date()
    secounds.style.transform = `translate(-50%) rotate(${180 + (date.getSeconds() * 6)}deg)`
    minutes.style.transform = `translate(-50%) rotate(${180 + (date.getMinutes() * 6)}deg)`
    hours.style.transform = `translate(-50%) rotate(${180 + (date.getHours() * 30)}deg)`

    if (date.getHours() == 9 && date.getMinutes() == 5 && date.getSeconds() == 0) {
        text.innerHTML = "Atatürk ölmedi kalbimizde yaşıyor ❤"
        setTimeout(() => {
            text.innerHTML = `"Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet
            payidar kalacaktır."<br>
            <span class="signature">M.Kemal Atatürk</span>`
        }, 60000)
    }
}, 1000)
