function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
        },

        decrement: function () {
            count--;
        },

        getCount: function () {
            return count;
        }
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment(); //1
counter1.increment(); //2
counter2.increment(); //1
counter1.decrement(); //1

console.log(counter1.getCount()); //1
console.log(counter2.getCount()); //1


//everytime createCounter is called a new count is created for counter1 and counter2 separately