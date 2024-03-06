//Q 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function makeShirt(size, message) {
    console.log(" Making a ".concat(size, " and shirt with the message: '").concat(message, "'"));
}
// Making a shirt' of any size with a different message
makeShirt(" large", " I love TypeScript ");
console.log("\n ");
makeShirt(" medium", " I love TypeScript ");
