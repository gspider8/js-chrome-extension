// let myCaptures = [];
let myCaptures = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myCaptures.push(inputEl.value)
    // Added functionality of clearing input box after input button press
    inputEl.value = ""
    console.log(myCaptures)
    renderLeads()
})

function renderLeads() {
    // Dom manipulation comes with a cost on speed, try to miinimize document manipulatiosn
    let listItems = ""
    for (i = 0; i < myCaptures.length; i ++) {
        // Added functionality of being able to click links with <a> tag
        // listItems += '<li><a target="_blank" href="'+ myCaptures[i] + '">' + myCaptures[i] + "</a></li>"
        // Use `` backticks to make template strings, looks a lot cleaner
            // or template literals
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

renderLeads()