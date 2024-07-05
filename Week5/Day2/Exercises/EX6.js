//Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('navBar').id = 'socialNetworkNavigation';
   
});
//First, create a new <li> tag (use the createElement method).
//Create a new text node with “Logout” as its specified text.
//Append the text node to the newly created list node (<li>).
//Append this updated list node to the unordered list (<ul>), using the appendChild method.
document.addEventListener("DOMContentLoaded", function(){
    let divContainer = document.getElementById('socialNetworkNavigation');
    let list = divContainer.querySelector('ul');
    let element = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = 'Logout';
    a.href = "#";
    element.appendChild(a);
    list.appendChild(element);
});
//Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link.
document.addEventListener("DOMContentLoaded", function(){
    let divContainer = document.getElementById('socialNetworkNavigation');
    let list = divContainer.querySelector('ul');
    let firstElem = list.firstElementChild;
    let lastElem = list.lastElementChild;
    if (firstElem) {
        let firstLink = firstElem.querySelector('a');
        if (firstLink) {
            console.log("Text of first link:", firstLink.textContent);
        }
    }

    if (lastElem) {
        let lastLink = lastElem.querySelector('a');
        if (lastLink) {
            console.log("Text of last link:", lastLink.textContent);
        }
    }
});