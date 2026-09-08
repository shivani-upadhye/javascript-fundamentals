function add(a, b) {
    return a + b;
}

// The above function adds only 2 values as we pass a,b only but what if we want to add multiple parameters
//like add(10, 20, 30, 40, 50); what if we dont know how many parameters we need to add beforehand
//so here we make the use of rest parameters

function add(...numbers) {
    console.log(numbers); // [10, 20, 30, 40] The ...numbers collects all the remaining arguments into an array.
}

add(10, 20, 30, 40);