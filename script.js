


document.addEventListener('keydown', addPressed);
document.addEventListener('keyup', removePressed);

function addPressed(e) {
    console.log(`${e.code}`)
    document.getElementById(`${e.code}`).classList.add("pressed");
}

// function removePressed(e) {
//     console.log(`${e.code}`)
//     document.getElementById(`${e.code}`).classList.remove("pressed");
// }
