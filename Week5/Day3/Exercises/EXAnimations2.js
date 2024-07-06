document.addEventListener("DOMContentLoaded", function(){

    let button = document.getElementsByTagName('button')[0];
    let redSquare = document.getElementById('animate');
    let container = document.getElementById('container').offsetWidth;//getting Width of container where red square is located

    function squareMoving(){
        let currentLeft = parseInt(redSquare.style.left) || 0; /**getting a current zero-position of red square as an integer, If redSquare.style.left are empty or undefined,
        by default it's equal 0*/
        if(currentLeft < container - redSquare.offsetWidth){
        redSquare.style.left = (currentLeft + 1) + "px";
        }
    }
    button.addEventListener('click', function(e){
        setInterval(squareMoving, 1);
    })
    
});