const search = document.querySelector('.container')
const btn = document.getElementById('btn')
const input = document.getElementById('input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})