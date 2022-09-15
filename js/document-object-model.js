let accessTheDOM = document.getElementById("dc");
let showMe = accessTheDOM.innerHTML;
console.log(showMe);

let marvel = document.getElementById("marvel");

let preference = "dc";

let like = document.getElementById("like");
let dontLike = document.getElementById("dontLike");
let output = `${dontLike.innerHTML} ${showMe} ${document.getElementById(preference).innerHTML} movies`;
console.log(output);

// // accessTheDOM.innerHTML += " Animated Universe";
// accessTheDOM.innerHTML = marvel.innerHTML;
//
// marvel.setAttribute('class', 'hotpink');
//
// let hotPinks = document.getElementsByClassName('hotpink');
//
// for (let i=0; i < hotPinks.length; i++) {
//     hotPinks[i].style.color = 'red';
// }

let submitButton = document.getElementById("colorSubmission");
submitButton.onclick = function () {
    let colorInput = document.getElementById("colorPreference");
    let paragraphs = document.getElementsByTagName("p");
    for (let i=0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = colorInput.value;
    }
}

//placing a <div> with the DOM model in js//
const body = document.body
const div = document.createElement("div")
div.innerText = "Hi Valeria"
body.appendChild(div)

//the DATA attribute//
let theHulk = document.getElementById("hulk");
// let hulkState = theHulk.getAttribute("data-state");
// theHulk.innerText += " is in " + hulkState + " state";
//following are data attributes of the hulk
let hulkState = theHulk.dataset.state;
let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The Hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`
// theHulk.innerText += ` is in ${hulkState} state`;
theHulk.innerText = hulkSummary ;

//reference to transformation button
let transformButton = document.getElementById("transformHulk");
//get a click event
transformButton.onclick = function() {
    let theHulk = document.getElementById("hulk");
    let hulkState = theHulk.dataset.state;
    let hulkStrength = theHulk.dataset.strength;
    let hulkIntelligence = theHulk.dataset.intelligence;
    //re-assign his state
    if (hulkState === "hulk") {
        theHulk.dataset.state = "Bruce Banner";
    } else {
        theHulk.dataset.state = "hulk";
    }
    theHulk.innerText = `The hulk is in ${hulkState} state.`
}
