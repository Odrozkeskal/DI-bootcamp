document.addEventListener("DOMContentLoaded", function(){
    let article = document.querySelector('article');
    let h1 = document.getElementsByTagName('h1');
    console.log(h1);
    let allP = article.querySelectorAll('p');
    let lastP = allP[allP.length -1];
    lastP.remove();
    
    let h2Elements = document.getElementsByTagName('h2');
    for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].addEventListener('click', function(e) {
            e.target.style.backgroundColor = "red";
        });

    let h3Elements = document.getElementsByTagName('h3');
    for(let i = 0; i < h3Elements.length; i++) {
        h3Elements[i].addEventListener('click', function(e){
            e.target.style.display = "none";
        });

    let body = document.getElementsByTagName('body')[0];
    let button = document.createElement('btn');
    body.appendChild(button);
    }
    let h1Elements = document.getElementsByTagName('h1');
    for(let i = 0; i < h1Elements.length; i++){
        h1Elements[i].addEventListener('mouseover', function(e){
            e.target.style.fontSize = `${Math.random() * 100}px`;
        })
    }
}
});

