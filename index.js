// let myCaptures = [];
let myCaptures = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myCaptures.push(inputEl.value)
    inputEl.value = ""
    // Save the myCaptures array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myCaptures", JSON.stringify(myCaptures))

    renderLeads()

    // To verify that it works:
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

renderLeads()