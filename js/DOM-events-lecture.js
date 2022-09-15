//Three steps if handling events

//1. Get a reference to the element tht will trigger the event
// let theButton = document.querySelector("button");

//2.Write the function that will be triggered by the event
//a function is a set of instructions. This kind of function that is triggered by an event is called an event handler, or also called callback.
//The function contains the instructions tht will run when the event is triggered
//callback is the same as an eventHandler
// function eventHandler() {
//     alert("You clicked me!");
// }

//3. Register the handler
// We can use addEventListener with two arguments: the type of event adn the function that will be triggered
// theButton.addEventListener('click', eventHandler);
// theButton.onclick = eventHandler;

//How to do it all at once
document.querySelector("button").addEventListener('click', function() {
    alert("You clicked me!");
})

