const numElement = document.querySelectorAll('.col')
let num = 1

const prev = document.getElementById('Prev')
const next = document.getElementById('Next')

// console.log(numElement.length)
prev.addEventListener('click', () => {
    num--
    if (num < 1) {
        num = 1
    }
    transition()
})

next.addEventListener('click', () => {
    num++
    if (num > numElement.length) {
        num = numElement.length
    }
    transition()
})

function transition() {
    numElement.forEach((ele, idx) => {
        if (idx < num) {
            ele.classList.add('activate')
        }
        else {
            ele.classList.remove('activate')
        }
    })
    const actives = document.querySelectorAll('.activate')
    progress.style.width = (actives.length - 1) / (numElement.length - 1) * 100 + '%'
    if (num === 1) {
        prev.disabled = true
    }
    else if (num === numElement.length) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }

}
