const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];
// WITH forEach metod
//   function getCarHonda(carInventory){
//     let firstHonda;
//     inventory.forEach((car)=>{
//         if(car.car_make === "Honda" && !firstHonda){
       
//         firstHonda = car
        
//         };
        
//     })
//     return console.log(`This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}`)
//   };

//   getCarHonda(inventory);
//
//WITH SOME method

function getCarHonda(carInventory) {
    let firstHonda;

    const hondaExists = carInventory.some((car) => {
        if (car.car_make === "Honda") {
            firstHonda = car;  
            return true;  
        }
        return false;  
    });

    if (hondaExists) {
        console.log(`This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}`);
    } else {
        console.log("No Honda car found in inventory.");
    }
}

getCarHonda(inventory);

function sortCarInventoryByYear(carInventory){
    let carYearSoring = inventory.sort((a, b) => a.car_year - b.car_year);
    
    return console.log(carInventory);
  
}
sortCarInventoryByYear(inventory)