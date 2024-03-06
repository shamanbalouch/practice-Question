//Q 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

interface Shirt {
    
}

function makeShirt( size:string, message:string ) {
    console.log(` Making a ${size} and shirt with the message: '${message}'`);
}

// Making a shirt' of any size with a different message

makeShirt(  " large" ," I love TypeScript " );

makeShirt(  " medium" ," I love TypeScript " );
