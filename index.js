let myCaptures = [];
//let myCaptures = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

let capturesFromLocalStorage = JSON.parse(localStorage.getItem("myCaptures"))
// 1. Check if capturesFromLocalStorage is truthy
// 2. If so, set myCaptures to its value and call renderLeads()
if (capturesFromLocalStorage) {
    myCaptures = capturesFromLocalStorage
    renderLeads()
}

console.log("leadsFromLocalStorage: " + capturesFromLocalStorage)

inputBtn.addEventListener("click", function() {+
    //Capture new input in array and store to local Storage
    myCaptures.push(inputEl.value)
    localStorage.setItem("myCaptures", JSON.stringify(myCaptures))

    inputEl.value = "" // Clear input box 
    renderLeads()

    // To verify that localStorage works:
    console.log( localStorage.getItem("myCaptures") )
})

function renderLeads() {
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
    console.log(listItems)
}

//moved up to if statement determing if localStorage is not empty