


document.addEventListener('keydown', addPressed);
document.addEventListener('keyup', removePressed);

function addPressed(e) {
    if ((document.getElementById(`${e.code}`)) === 'Tab') {
        console.log(`${e.code}`)
        e.preventDefault() } 
    if ((document.getElementById(`${e.code}`)) === 'Qoute') {
        e.preventDefault()
    } 
    if ((document.getElementById(`${e.code}`)) === 'Slash') {
        e.preventDefault()
    }
    document.getElementById(`${e.code}`).classList.add("pressed");
}

function removePressed(e) {
    document.getElementById(`${e.code}`).classList.remove("pressed");
}
