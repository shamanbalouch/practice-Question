

// Q 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_color :string= 'green' ;

console.log(" \n 1st virsion of block")
if(alien_color==='green'){
    console.log("\n congatualtion ! you just earned 5 points for shooting the alien");

}else if (alien_color=== 'yellow'){
    console.log(" \n congatualtion ! you just earned 5 points for shooting the alien ");
} else {
    console.log(" \n congatualtion ! you just earned 15 points for shooting the alien ");
}

console.log("\n 2nd virsion of block")
    alien_color= 'blue' ;

if(alien_color==='blue'){
    console.log(" congatualtion ! you just earned 10 points for shooting the alien");

}else if(alien_color === 'green'){
    console.log(" \n congatualtion ! you just earned 5 points for shooting the alien ");
} else{
    console.log(" \n congatualtion ! you just earned 15 points for shooting the alien ");
}
console.log("\n 3nd virsion of block")
    alien_color= 'yellow' ;
if(alien_color==='yellow'){
    console.log(" congatualtion ! you just earned 15 points for shooting the alien");

}else if(alien_color === 'blue'){
    console.log(" \ncongatualtion ! you just earned 10 points for shooting the alien ");
} else{
    console.log(" \ncongatualtion ! you just earned 5 points for shooting the alien ");
}
