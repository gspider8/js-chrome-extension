let myCaptures = [];
//let myCaptures = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")

const capturesFromLocalStorage = JSON.parse(localStorage.getItem("myCaptures")) //doesn't change
if (capturesFromLocalStorage) { // if not empty
    myCaptures = capturesFromLocalStorage
    render(myCaptures)
}

// outdated - stand in

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function() {
    // Grab the URL from the chrome browser 
    // chrome.tabs is an api that only works in a chrome browser
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myCaptures.push(tabs[0].url)
        localStorage.setItem("myCaptures", JSON.stringify(myCaptures))
        render(myCaptures)
    })    
})


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