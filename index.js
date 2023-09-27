let myCaptures = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function() {
    // let newCapture = "www.awesomelead.com"
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    myCaptures.push(inputEl.value)
    console.log(myCaptures)
})