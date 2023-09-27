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


for (i = 0; i < myCaptures.length; i ++) {
    ulEl.innerHTML += "<li>" + myCaptures[i] + "</li>"
    // Alternative method!
    // 1. create element 
    // const li = document.createElement("li")
    // 2. set text content
    // li.textContent = myCaptures[i]
    // 3. append to ul
    // ulEl.append(li)
}