const cells = document.querySelectorAll('.cell')

function checkWin() {
    if (cells[0].innerHTML && cells[0].innerHTML == cells[1].innerHTML &&
        cells[1].innerHTML == cells[2].innerHTML) {
        winResult(0, 1, 2)

    } else if (cells[3].innerHTML && cells[3].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[5].innerHTML) {
        winResult(3, 4, 5)

    } else if (cells[6].innerHTML && cells[6].innerHTML == cells[7].innerHTML &&
        cells[7].innerHTML == cells[8].innerHTML) {
        winResult(6, 7, 8)

    } else if (cells[0].innerHTML && cells[0].innerHTML == cells[3].innerHTML &&
        cells[3].innerHTML == cells[6].innerHTML) {
        winResult(0, 3, 6)

    } else if (cells[1].innerHTML && cells[1].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[7].innerHTML) {
        winResult(1, 4, 7)


    } else if (cells[2].innerHTML && cells[2].innerHTML == cells[5].innerHTML &&
        cells[5].innerHTML == cells[8].innerHTML) {
        winResult(2, 5, 8)

    } else if (cells[0].innerHTML && cells[0].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[8].innerHTML) {
        winResult(0, 4, 8)


    } else if (cells[6].innerHTML && cells[6].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[2].innerHTML) {
        winResult(6, 4, 2)

    } else if (cells[0].innerHTML && cells[1].innerHTML && cells[2].innerHTML &&
        cells[3].innerHTML && cells[4].innerHTML && cells[5].innerHTML && cells[6].innerHTML &&
        cells[7].innerHTML && cells[8].innerHTML) {

        cells.forEach((item) => {
            item.style.backgroundColor = 'yellow'
        })

    }

}

function winResult(i1, i2, i3) {
    cells[i1].style.backgroundColor = 'red';
    cells[i2].style.backgroundColor = 'red';
    cells[i3].style.backgroundColor = 'red';
    isPlaying = false
    setTimeout(() => {
        document.location.reload()
    }, 500)
}

function cellHandler(event) {
    if (isPlaying) {
        if (isx) {
            event.target.innerHTML = 'X'
        } else {
            event.target.innerHTML = '0'
        }
        isx = !isx
        checkWin()
        event.target.removeEventListener('click', cellHandler)
    }
}

let isx = true
let isPlaying = true
cells.forEach((item) => {
    item.addEventListener('click', cellHandler)
})