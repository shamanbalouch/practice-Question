
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let Person:
{
    name:string;
    age : number ;
    isStudent : boolean;
    address : {city:string; countrey:string ;houseno:number};

} ={

    name : 'Shaman Baloch', 
    age:23 ,
    isStudent:true,
    address :{
        countrey:"pakistan",
        city:"karachi ",
        houseno:24
        
    }

}
console.log("\nperson name is : " ,Person.name);
console.log("\nperson age is :" ,Person.age);
console.log("\nperson is a tudent is :" ,Person.isStudent);
console.log(" \n person address is :" ,Person.address.countrey, Person.address.city, " Sachal goth block A house no is : " ,Person.address.houseno);