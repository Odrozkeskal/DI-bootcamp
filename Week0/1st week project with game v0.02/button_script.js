btnHome = document.getElementById("home");
btnBiography = document.getElementById("biography");
btnHisPath = document.getElementById("hisPath");
btnGames = document.getElementById("games");
btnConcerts = document.getElementById("concerts");
btnAwards = document.getElementById("awards");
btnBackToTop = document.getElementById("backToTop");
btnBonus = document.getElementById("bonus");


btnHome.addEventListener("click", function(){
                        const aboutSection = document.querySelector("h1:first-of-type + p");
                        aboutSection.scrollIntoView({behavior: "smooth"});
});

btnBiography.addEventListener("click", function(){
                         const contactSection = document.querySelector("h2:first-of-type + p");
                        contactSection.scrollIntoView({behavior: "smooth"});
 
});

btnHisPath.addEventListener("click", function(){
                         const contactSection = document.querySelector("h2:nth-of-type(2) + p");
                         contactSection.scrollIntoView({behavior: "smooth"});
});

btnGames.addEventListener("click", function(){
                        const contactSection = document.querySelector("h2:nth-of-type(3) + p");
                        contactSection.scrollIntoView({behavior: "smooth"});
});


btnConcerts.addEventListener("click", function(){
                        const contactSection = document.querySelector("h2:nth-of-type(4) + p");
                        contactSection.scrollIntoView({behavior: "smooth"});
});

btnAwards.addEventListener("click", function(){
                        const addressSection = document.querySelector("h2:nth-of-type(5) + p");
                        addressSection.scrollIntoView({behavior: "smooth"});
});

btnBonus.addEventListener("click", function(){
  const addressSection = document.querySelector("h2:last-of-type + p");
  addressSection.scrollIntoView({behavior: "smooth"});
});

btnBackToTop.addEventListener("click", function(){
                         window.scrollTo({top: 0, behavior: "smooth"});
                              
                              });



                              
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
        fullWidth:true,
        indicators: true,
        duration: 500,
      });
 
});