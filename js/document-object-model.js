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

