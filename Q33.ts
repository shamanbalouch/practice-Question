// Q33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.

let Natural_number =[1 ,2 ,3, ,4, ,5, ,6, ,7, 8 ,9 ] ;

for(let i=0;i<Natural_number.length;i++){
    if(Natural_number[i]==1){
        console.log("\n st position ");

    }
    else if(Natural_number[i]==2){
        console.log("\n 2nd position ");

    }
    else if(Natural_number[i]==3){
        console.log("\n 3rd position ");

    }
    else if(Natural_number[i]==4){
        console.log("\n 4th position ");

    }
    else if(Natural_number[i]==5){
        console.log("\n 5th position ");

    }
    else if(Natural_number[i]==6){
        console.log("\n 6th position ");

    }
    else if(Natural_number[i]==7){
        console.log("7th position ");

    }
    else if(Natural_number[i]==8){
        console.log(" \n 8th position ");

    }
    else if(Natural_number[i]==29){
        console.log("\n 9th position ");

    }
    else {
        console.log("\n  number is greater then 10 ")
    }
      
}