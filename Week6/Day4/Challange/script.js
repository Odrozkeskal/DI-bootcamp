document.addEventListener("DOMContentLoaded", function(){
const form = document.getElementsByTagName('form')[0];
const output = document.getElementById('output');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    const formData = {
        name: name,
        lastname: lastName 
      };
  
     
      const jsonData = JSON.stringify(formData);
  
    
      output.textContent = jsonData;
});
});