class Stack<T> {
    private items: T[] = [];

    public push(item: T): void {
        this.items.push(item);
    }

    public pop(): T | undefined {
        return this.items.pop();
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }
}


const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());    
console.log(numberStack.isEmpty()); 

const stringStack = new Stack<string>();
stringStack.push('hello');
console.log(stringStack.pop());    
