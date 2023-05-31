let btn = document.querySelector(".btn")
let notification = document.querySelector(".notification")

const notif = ["İnstagram Bildirimi", "Facebook Bildirimi", "LinkedIn Bildirimi", "Google Bildirimi", "GitHub Bildirimi", "WhatsApp Bildirimi"]
const colors = ["red", "green", "purple", "skyblue", "grey", "black", "orange","darkgoldenrod","darkviolet"]

btn.addEventListener("click", () => createNotif())

function createNotif() {
    let newNotif = document.createElement("div")
    newNotif.innerHTML = getRandomNotif()
    newNotif.classList.add("notif",getRandomColor())
    notification.append(newNotif)
    setTimeout(() => newNotif.remove(),3000)
}

function getRandomNotif() {
    return notif[Math.floor(Math.random() * notif.length)]
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
