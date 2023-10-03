let myCaptures = [];
//let myCaptures = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const capturesFromLocalStorage = JSON.parse(localStorage.getItem("myCaptures")) //doesn't change
if (capturesFromLocalStorage) { // if not empty
    myCaptures = capturesFromLocalStorage
    render(myCaptures)
}

//refactor renderList function by passing in a specific link list
function render(list) {
    // Dom manipulation comes with a cost on speed, try to miinimize document manipulatiosn
    let listItems = ""
    for (i = 0; i < list.length; i ++) {
        // Use `` backticks to make template literals, looks a lot cleaner
        listItems += `
            <li>
                <a target="_blank" href="${list[i]}">
                    ${list[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    // When double clicked, clears localStorage, myLeads, and the DOM
    console.log("delete")
    localStorage.clear();
    myCaptures = [];
    render(myCaptures)
})

inputBtn.addEventListener("click", function() {
    //Capture new input in array and store to local Storage
    myCaptures.push(inputEl.value)
    localStorage.setItem("myCaptures", JSON.stringify(myCaptures))
    // Clear input box
    inputEl.value = ""
    render(myCaptures)
})