document.addEventListener('DOMContentLoaded', function(){
    let form = document.getElementById('MyForm');
    let inputVolume = document.getElementById('volume');
    

    function calculeteSphereVolume(radius){
       
        let volume = (4/3) * Math.PI * Math.pow(radius, 3);

        return volume;
    }

    form.addEventListener('submit', function(e){
        e.preventDefault();
        let radius = parseFloat(document.getElementById('radius').value);
        let volume = calculeteSphereVolume(radius);
        inputVolume.value = volume.toFixed(2);
    
     })
});