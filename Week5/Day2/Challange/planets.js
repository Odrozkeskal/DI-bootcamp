let solarSystem = [
    {name: "Mercury", moon: 0, color:"orange"},
    {name: "Venus", moon: 0, color:"grey"},
    {name: "Earth", moon: 1, color:"blue"},
    {name: "Mars", moon: 2, color:"red"},
    {name: "Jupiter", moon: 7, color:"brown"},
    {name: "Satturan", moon: 8, color:"yellow"},
    {name: "Uranus", moon: 2, color:"lightblue"},
    {name: "Neptune", moon: 1, color:"darkblue"},
   ];

   function createSolarSystem(){
    var planetSection = document.querySelector('.listPlanets');
    for(let i = 0; i < solarSystem.length; i++){

    let div = document.createElement('div');
    div.classList.add('planet');
    div.innerText = solarSystem[i].name;
    div.style.backgroundColor = solarSystem[i].color;
    planetSection.appendChild(div);

    let moonList = solarSystem[i].moon;
    for(let j = 0; j < moonList; j++){
        let moon = document.createElement('div');
        moon.classList.add('moon');
        moon.style.left = (j * 20) + "px";
        div.appendChild(moon);
    }
   }
};

document.addEventListener("DOMContentLoaded", function(){
    createSolarSystem();
});






