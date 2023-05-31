const toggles = document.querySelectorAll('.icon')

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})