document.addEventListener("DOMContentLoaded", function() {
    function greetings(){
        alert("Hello world")
    }
    setTimeout(greetings, 2000);

    let div = document.getElementById('container');

    let divArray = [];
    var divGreetingsCounter = 0;
    var maxDivGreetingsCounter = 5;

    function divGreetings(){
        if(divGreetingsCounter < maxDivGreetingsCounter){
        let pHello = document.createElement('p');
        pHello.textContent = "Hello world";
        div.appendChild(pHello);
        divArray.push(pHello);
        divGreetingsCounter ++;}

        else
        {
            clearInterval(divGreetingsTimer)
        }
        // second way to stop function after 5 iterations
    }
    
    var divGreetingsTimer = setInterval(divGreetings, 2000);

    

    // var button = document.getElementsByTagName('button')[0];
   
    
    // function stopFunction(){
    //     clearInterval(divGreetingsTimer)
    // }
    // button.addEventListener('click', function(e){
    //      stopFunction();
    // });
    
    // var stopCoroutine = setInterval(stopFunction, 10000); //first way to stop function after 5 iterations

});