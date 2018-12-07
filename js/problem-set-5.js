/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  let div = document.getElementById("mario-easy-output");

  do{
    height = Number(prompt("Enter a height between 1 and 23."));
  } while (height < 1 || height > 23)

// the number of rows = the height
// the number of #s = 1 + row number (i.e. row 1, row 2, etc.)
// the number of spaces = (1 + height) - number of #s

  let numHash = 0;
  let numSpace = 0;
  let pyramid = "";

  for (i = 0; i < height; i++){
    numHash = 2 + i;
    numSpace = (1 + height) - numHash;
    for (i2 = 0; i2 < numSpace; i2++){
      pyramid = pyramid + "&nbsp;";
    }
    for (i3 = 0; i3 < numHash; i3++){
      pyramid = pyramid + "#";
    }
    pyramid = pyramid + "<br>";
  }

  div.innerHTML = "<pre><code>" + pyramid + "</code></pre>";

  // height = prompt("Enter a height between 1 and 23.");
  // while (height > 23){
  //   prompt("Please try again. Enter a height between 1 and 23.");
  // }
  // while (height < 1){
  //   prompt("Please try again. Enter a height between 1 and 23.");
  // }



  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  let div = document.getElementById("mario-hard-output");

  do{
    height = Number(prompt("Enter a height between 1 and 23."));
  } while (height < 1 || height > 23)

// the number of rows = the height
// the number of #s = 1 + row number (i.e. row 1, row 2, etc.)
// the number of spaces = (1 + height) - number of #s

  let numHash = 0;
  let numSpace = 0;
  let pyramid = "";

  for (i = 0; i < height; i++){
    numHash = 2 + i;
    numSpace = (1 + height) - numHash;
    for (i2 = 0; i2 < numSpace; i2++){
      pyramid = pyramid + "&nbsp;";
    }
    for (i3 = 0; i3 < numHash; i3++){
      pyramid = pyramid + "#";
    }
    pyramid = pyramid + "&nbsp;&nbsp;";
    for (i4 = 0; i4 < numHash; i4++){
      pyramid = pyramid + "#";
    }
    for (i5 = 0; i5 < numSpace; i5 ++){
      pyramid = pyramid + "&nbsp;";
    }
    pyramid = pyramid + "<br>";
  }

  div.innerHTML = "<pre><code>" + pyramid + "</code></pre>";

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY



  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  let p = document.getElementById("guess-output");
  let randomNumber = Math.floor(((Math.random() * 1001) + 1));
  let numberOfAttempts = 0;
  let attempt;

  while(attempt !== randomNumber){
      do{
        attempt = Number(prompt("Guess a number between 1 and 1000."));
      } while (attempt < 1 || attempt > 1000);

        // attempt = prompt("Please try again. Guess a number between 1 and 1000.")

      if(attempt > randomNumber){
        numberOfAttempts = numberOfAttempts + 1;
        alert(`That guess was too high. Number of guesses: ${numberOfAttempts}`);
    } else if (attempt < randomNumber){
        numberOfAttempts = numberOfAttempts + 1;
        alert(`That guess was too low. Number of guesses: ${numberOfAttempts}`);
    } else if (attempt == randomNumber){
        numberOfAttempts = numberOfAttempts + 1;
        alert(`You guessed it!`);
      p.innerHTML = `The number was ${randomNumber}!<br/>That took you ${numberOfAttempts} tries.`;
  }
}
  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  let p = document.getElementById('hurricane-output');

  do {
    windspeed = Number(prompt("Please enter a positive number."));
  } while(isNaN(windspeed) || windspeed < 0 || Number.isInteger(windspeed) == false);

  if(windspeed >= 157){
    p.innerHTML = "Category 5 Hurricane.";
  } else if(windspeed >= 130){
    p.innerHTML = "Category 4 Hurricane.";
  } else if (windspeed >= 111){
    p.innerHTML = "Category 3 Hurricane.";
  } else if(windspeed >= 96){
    p.innerHTML = "Category 2 Hurricane.";
  } else if(windspeed >= 74){
    p.innerHTML = "Category 1 Hurricane.";
  } else if (windspeed >= 39){
    p.innerHTML = "Tropical Storm.";
  } else {
    p.innerHTML = "The skies are calm...";
  }

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

   let input;
   let p = document.getElementById("gymnastics-output");

   for (let i = 0; i < 6; i++){
     do{
       input = Number(prompt("Please enter a number between 0.0 and 10.0."));
     } while(input < 0 || input > 10);
     scores.push(input);
   }

   let lowestScore = Math.min(...scores);
   let highestScore = Math.max(...scores);
   total = scores.reduce((a,b) => a + b, 0) - lowestScore - highestScore;
   let averageScore = (total/4).toFixed(2);

   p.innerHTML = `Discarded: ${lowestScore}, ${highestScore}<br/>Score: ${averageScore}`;

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}
/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

   let p = document.getElementById("report-card-output");
   let input = 0;

   let testScores = [];

   while (1){
     input = Number(prompt("Please enter a test score between 0.0 and 10.0. Enter -1 when you have finished."));
     if (input == -1){
       break;
     }
     if (input >= 0 && input <= 100){
       testScores.push(input);
     } else {
       alert("Invalid test score, please try again.");
     }
   }
   alert("You've entered all your test grades.");

   let quizScores = [];

   while (1){
     input = Number(prompt("Please enter a quiz score between 0.0 and 10.0. Enter -1 when you have finished."));
     if (input == -1){
       break;
     }
     if (input >= 0 && input <= 100){
       quizScores.push(input);
     } else {
       alert("Invalid quiz score, please try again.");
     }
   }
   alert("You've entered all your quiz grades.");

   let homeworkScores = [];

   while (1){
     input = Number(prompt("Please enter a homework score between 0.0 and 10.0. Enter -1 when you have finished."));
     if (input == -1){
       break;
     }
     if (input >= 0 && input <= 100){
       homeworkScores.push(input);
     } else {
       alert("Invalid homework score, please try again.");
     }
   }
   alert("You've entered all your homework scores.");

   testTotal = testScores.reduce((a,b) => a + b, 0);
   quizTotal = quizScores.reduce((a,b) => a + b, 0);
   homeworkTotal = homeworkScores.reduce((a,b) => a + b, 0);

   tests = testScores.length;
   quizzes = quizScores.length;
   homeworks = homeworkScores.length;

   let testAvg = testTotal/tests;
   let quizAvg = quizTotal/quizzes;
   let homeworkAvg = homeworkTotal/homeworks;

   let finalGrade = (testAvg * 0.6) + (quizAvg * 0.3) + (homeworkAvg * 0.1);

   p.innerHTML = "Tests: " + testAvg.toFixed(2) +"<br/>Quizzes: " + quizAvg.toFixed(2) +"<br/>Homework: " + homeworkAvg.toFixed(2) +"<br/>Grade: " + finalGrade.toFixed(2);


  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
