document.addEventListener("DOMContentLoaded", function(){
    let allBoldItems = [];
    let paragraph = document.getElementsByTagName('p')[0];
    let strongFragments = paragraph.querySelectorAll('strong');

    function getBoldItems(){
        
       for(let i = 0; i < strongFragments.length; i++){
          allBoldItems.push(strongFragments[i].textContent)
        }
       console.log(allBoldItems);
        
        return allBoldItems;
    };
    function highlight(){
        for(let i = 0; i < strongFragments.length; i++){
            strongFragments[i].style.color = "blue"
        }
       
    };
    function returnItemsToDefault(){
        for(let i = 0; i < strongFragments.length; i++){
            strongFragments[i].style.color = "black"
        }
    }
  paragraph.addEventListener('mouseover', highlight);
  paragraph.addEventListener('mouseout', returnItemsToDefault);
    getBoldItems();
    // highlight();
    // returnItemsToDefault();

});
