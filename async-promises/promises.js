// resolve = return
// reject = error

async function calculateSomething(amount) {
    const myArray = [];

    for (let i = 0; i < amount*2; i++) {
        if (i % 2 == 0) myArray.push(i);
    }
    
    return myArray;
}

const hej = calculateSomething(1000);
console.log(hej);

calculateSomething(1000).then(function(data) {
    console.log("Using .then");
    console.log(data);
})

async function main() {
    console.log("Using await");
    const data = await calculateSomething(1000);

    console.log(data);
}
main();