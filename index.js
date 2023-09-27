// let myCaptures = [];
let myCaptures = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myCaptures.push(inputEl.value)
    console.log(myCaptures)
    renderLeads()
})

// Create function renderLeads to list out newly added inputs
function renderLeads() {
    // Dom manipulation comes with a cost on speed, try to miinimize document manipulatiosn
    let listItems = ""
    for (i = 0; i < myCaptures.length; i ++) {
        listItems += "<li>" + myCaptures[i] + "</li>"
    }
    ulEl.innerHTML = listItems
    console.log(listItems)
}

renderLeads()