function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Invalid arguments");
}

console.log(add(2, 3));      
console.log(add("Hello, ", "World!")); 
