let value = document.getElementById("count-el");
let view = document.getElementById("view-el");
let count = 0;
let b = 0;
function increment() {
    count += 1;
    value.innerHTML = count;
    b = count
    return b;
}

function save() {
    let savedChar = count + " - ";
    view.textContent += savedChar;
    count = 0;
    value.textContent = 0;


}