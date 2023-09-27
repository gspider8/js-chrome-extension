let myCaptures = [];
//let myCaptures = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const capturesFromLocalStorage = JSON.parse(localStorage.getItem("myCaptures")) //doesn't change
if (capturesFromLocalStorage) { // if not empty
    myCaptures = capturesFromLocalStorage
    renderList()
}

deleteBtn.addEventListener("dblclick", function() {
    // When double clicked, clears localStorage, myLeads, and the DOM
    console.log("delete")
    localStorage.clear();
    myCaptures = [];
    renderList()
})

inputBtn.addEventListener("click", function() {
    //Capture new input in array and store to local Storage
    myCaptures.push(inputEl.value)
    localStorage.setItem("myCaptures", JSON.stringify(myCaptures))
    // Clear input box
    inputEl.value = ""
    renderList()
})

function renderList() {
    // Dom manipulation comes with a cost on speed, try to miinimize document manipulatiosn
    let listItems = ""
    for (i = 0; i < myCaptures.length; i ++) {
        // Use `` backticks to make template literals, looks a lot cleaner
        listItems += `
            <li>
                <a target="_blank" href="${myCaptures[i]}">
                    ${myCaptures[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
