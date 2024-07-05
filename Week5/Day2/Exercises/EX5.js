//Retrieve the div and console.log it
document.addEventListener("DOMContentLoaded", function() {
    let containerDiv = document.getElementById("container");
    console.log(containerDiv); 
    
});

//Change the name “Pete” to “Richard”.
document.addEventListener("DOMContentLoaded", function() {
  
    let list = document.querySelector('.list');
    let peteElem = list.querySelector('li:nth-child(2)'); 

    peteElem.textContent = 'Richard';

 });
// Delete the second <li> of the second <ul>. <-- (conflict with "Do not display the <li> that contains the text node “Dan” task)
//  document.addEventListener("DOMContentLoaded", function(){
//     let secondList = document.querySelectorAll('.list')[1];
//     let secondElem = secondList.querySelector('li:nth-child(2)');
//     secondElem.remove();
//  });
//Change the name of the first <li> of each <ul> to your name.
 document.addEventListener("DOMContentLoaded", function(){

    let allLists = document.querySelectorAll('.list');

    for(let el = 0; el < allLists.length; el++){
        let myNameElem = allLists[el].querySelector('li:nth-child(1)');
        myNameElem.textContent = 'Paul';
    }
 });
//Add a class called student_list to both of the <ul>'s.
 document.addEventListener("DOMContentLoaded", function(){
      let allLists = document.querySelectorAll('.list');

      for(let ul = 0; ul < allLists.length; ul++){
        allLists[ul].classList.add('student_list'); 
      }
 });
//Add the classes university and attendance to the first <ul>.
document.addEventListener("DOMContentLoaded", function(){
    let firstList = document.querySelector('.student_list');
    firstList.classList.add('university', 'attendance');
    
});
//Add a “light blue” background color and some padding to the <div>.
 document.addEventListener("DOMContentLoaded", function(){
    let containerDiv = document.getElementById("container");
    containerDiv.style.backgroundColor = "lightblue";
    containerDiv.style.padding = "10px";
 });
//Do not display the <li> that contains the text node “Dan”.
document.addEventListener("DOMContentLoaded", function(){
    let secondList = document.querySelectorAll('.student_list')[1];
    let thirdElem = secondList.querySelector('li:nth-child(3)');
    thirdElem.style.display = "none";
});
//Add a border to the <li> that contains the text node “Richard”
document.addEventListener("DOMContentLoaded", function(){
    let firstList = document.querySelector('.student_list');
    let secondElem = firstList.querySelector('li:nth-child(2)');
    secondElem.style.border = "solid red","1px";
});
//Change the font size of the whole body.
document.addEventListener("DOMContentLoaded", function(){
    let body = document.getElementsByTagName('body')[0];
    body.style.fontSize = "20px";
});
// If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
document.addEventListener("DOMContentLoaded", function(){
    let containerDiv = document.getElementById("container");
    let firstList = document.querySelector('.student_list');
    let user1 = firstList.querySelector('li:nth-child(1)').textContent;
    let user2 = firstList.querySelector('li:nth-child(2)').textContent;

    if(containerDiv.style.backgroundColor === "lightblue"){
        alert(`Hello ${user1} and ${user2}`);
    }
});