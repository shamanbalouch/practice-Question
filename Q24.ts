// Q 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let car = 'civic';
console.log("\n Is car == 'civic I preduct True ");
console.log(car === 'civic'); //True

console.log("\n Is car is !== 'civic  I preduct Flase ");
console.log(car !== 'civic');  //False


console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
let a=4
let b=5
if(a>b){

    console.log("\na is equal to be ")
} 
else if(a<b){
    console.log("\na is less then b ")

} else if(a!==b){
    console.log("\na is not equal to b ")

} else {
    console.log("\nboth are equal ")
}


console.log(" \\n Tests using  'and'  and  'or'  operators")

console.log(" \n and operators ")
if(a> 4 && b >4){
     console.log(" \nany oen of them  greater then 4 or (both) ")
}else {
    console.log("\nany of then not greater then 4 or (both )")
}


console.log(" \n OR operators ")
if(a> 4 || b >4){
    console.log(" \n may be a or may be b graeter then 4 or  (both) ")
}else {
   console.log(" \n neithr a nor b greater then 4 ")
}


console.log(" Test whether an item is in a array  ")

// let Name:string[] = ["shaman " ," ali "];

// let personTocheck :string = "shaman";
// console.log(Name.find(personTocheck)? )