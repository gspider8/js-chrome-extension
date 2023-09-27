// let myCaptures = [];
let myCaptures = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myCaptures.push(inputEl.value)
    console.log(myCaptures)
})

// Log out the items in the myLeads array using a for loop 
// Replace .textContent with .innerHTML and use <li> tags
for (i = 0; i < myCaptures.length; i ++) {
    ulEl.innerHTML += "<li>" + myCaptures[i] + "</li>"
}