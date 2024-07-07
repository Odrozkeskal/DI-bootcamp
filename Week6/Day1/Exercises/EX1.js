// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// funcOne()
// will return "inside the funcOne function 3"
// with const instead of let it will be "Type Error: Assignment to constant variable"

//#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// funcThree()
// funcTwo()
// funcThree()
//will return:
//
//     inside the funcThree function 0
// 

/**ƒ funcTwo() {
    inside the funcThree function 5
} */

    /**ƒ funcThree() {
    inside the funcThree function 0
} 
    
With const inside the funcThree function 0
TypeError: Assignment to constant variable.*/

//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// funcFour()
// funcFive()
// will return: inside the funcThree function 0
//TypeError: Assignment to constant variable.

//#4
// const a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// funcSix()
// will return inside the funcSix function test. same with const instead let

//#5
// const a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

//will return: in the if block 5
//             outside of the if block 2
//same with const instead let