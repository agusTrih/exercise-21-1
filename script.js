var input = document.createElement("input");
input.setAttribute("type", "search");
input.setAttribute("class", "search-input");
input.setAttribute("id", "search");
// button
let button = document.createElement("button");
let buttonText = document.createTextNode("Search");
button.setAttribute("class", "search-button");
button.appendChild(buttonText);
// ambil section form
const divCheck = document.querySelector(".search-form");
divCheck.appendChild(input);
divCheck.appendChild(button);

// buat event di button
button.addEventListener("click", myCheckWord);
// regex
function myCheckWord() {
    // ambil value input
    let inputValue = input.value;
    // buat hasil
    const show = document.querySelector(".show");
    let regex1 = /[A-Z]/;
    if (inputValue[0].match(regex1)) {
        show.innerHTML = `<span id="coloring">${inputValue}</span> --- diawali dengan huruf Kapital </br> Congratulation...`;
    } else {
        show.innerHTML = `<span id="coloring">${inputValue}</span> --- Tidak di awali dengan huruf kapital </br> Coba lagi Yaa...`;
    }
    return;
}
