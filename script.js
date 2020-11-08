function play() {
    const overlay = document.querySelector('.overlay')
    overlay.style.opacity = 1

    let delay = 100
    let line = document.querySelector('.line')

    setTimeout(function() {
        line.classList.add('show')
    }, delay)


}

function stop() {
    const overlay = document.querySelector('.overlay')
    overlay.style.opacity = 0

    let line = document.querySelector('.line')
    line.classList.remove('show')
}

play()