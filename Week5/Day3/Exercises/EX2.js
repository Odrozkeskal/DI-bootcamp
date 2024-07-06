document.addEventListener("DOMContentLoaded", function(){
    let form = document.querySelector('form');
        console.log(form);

    let inputId1 = document.getElementById('fname');
    let inputId2 = document.getElementById('lname');

    console.log(inputId1.value);
    console.log(inputId2.value);

    let inputByName1 = document.getElementsByName('firstname')[0];
    let inputByName2 = document.getElementsByName('lastname')[0];

    console.log(inputByName1.value);
    console.log(inputByName2.value);

    let userAnser = document.querySelector('.usersAnswer');
    form.addEventListener('submit', function(e){
        e.preventDefault(); //preventing the default behavior associated with the event is prescribed using the preventDefault() method, by default, the submit event sends the form to the server.
        let inputId1 = document.getElementById('fname').value;
        let inputId2 = document.getElementById('lname').value;

        let liElement1 = document.createElement('li');
        let liElement2 = document.createElement('li');

      if(inputId1 && inputId2){
        console.log(`fname value is: ${inputId1}`);
        console.log(`lname value is: ${inputId2}`);

        
      liElement1.textContent = `first name of the user ${inputId1}`;
      liElement2.textContent = `last name of the user ${inputId2}`;

      userAnser.appendChild(liElement1);
      userAnser.appendChild(liElement2);
      }
      else {
        console.log("fname or lname are empty");
      }

      

    })
});