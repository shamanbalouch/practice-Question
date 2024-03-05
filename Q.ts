// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
 let prson = 30;


  if(prson<2) {
    console.log(" teh person is baby ");
  }  else if (prson >= 2 || prson < 4) {
    console.log(" the person is a tooddler  ");
  }  else if ( prson > 4 || prson < 13 ){
  console.log( " the person is kids ");
  }  else if (prson > 13 || prson< 20 ){
     console.log(" the person is teenager ");

  } else if (prson >20 || prson<65){

    console.log("person is adult ");

  } else if (prson >65){
    console.log("the person is elder  ");
  } else {
    console.log("person is no more ");
  }