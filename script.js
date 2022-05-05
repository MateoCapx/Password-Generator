// Assignment code here
passwordLength = "8 "; 
let choiceArr =[ ]; 
//                               ---------- Arrays -----------

let specialCharacterArr = [ '!', '@', '#', '$','%', ' ^ ','*', '&','(', ')','_', '-','=', '+' , '\ ', '| ', '[  ', ']  ',  ];
let upperCaseArr =[ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',  ];
let lowerCaseArr =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',  ];
let numberArr =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',  ];


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    let correctPassword = promptQuestions();
    let passwordText = document.querySelector("#password");
   

    if (correctPassword){
        let password = generatePassword();
        passwordText.value = password;// This code allows the password to be displayed on the page!
        
    }
    else {
        passwordText.value =" ";

    }
  
}

 function generatePassword() {
        let password = " ";
        for (let i = 0; i < passwordLength; i++) {
            let randomIndex = Math.floor(Math.random( ) * choiceArr.length);
            password = password + choiceArr[randomIndex];
        }
      return password;
    }
   


//parseInt - converts the string into an actually number for passwordLength prompt. 
function promptQuestions() {
 
   
    // // What the user input is store into the varible i set. 
    
        console.log (" Character Length", passwordLength)
        console.log (" Character Type Selected", specialCharacterArr)
        console.log (" Add Number ?", numberArr)
        console.log (" Add UPPERCASE ?", upperCaseArr)

     passwordLength = parseInt( window.prompt("How many Character Do you Want in Your Password?  Password must be at least 8 characters and no more than 128 characters "));


// Loop to check if Password is more than 8 characters but less than 128 characters
    if ( passwordLength > 8 && passwordLength < 128){
      console.log(" Password Meets Criteria")
    } 

    else if ( isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128  )  {
     window.alert("Password Length doesnt Meet Criteria. Try Again !")
        promptQuestions(passwordLength );  //  return false; 
    }

        if ( confirm ( "Would you like to add Special Character to your password  ?  "))
                choiceArr =choiceArr .concat(specialCharacterArr);


        if ( confirm ( "Would you like to add lowercase Letters to your password ? "))
                choiceArr =choiceArr .concat(lowerCaseArr);


        if ( confirm ( "Would you like to add UPPERcase Letters to your password ?"))
                 choiceArr =choiceArr .concat(upperCaseArr);


        if ( confirm ( "Would you like to add numbers to your password ?  "))
                choiceArr =choiceArr .concat(numberArr);

        return true;
}   
 


// writePassword();
// promptQuestions();
// generatePassword();



















//                         ------ NOTES -------
  //                    ------- DISREGARD ----------


// let generatePass = generatePassword();

// window.alert = ("generatePass"); 





// const displayPassword = (" Display Password !")



// USER CAN'T ENTER STRINGS WHEN PROMPTED FOR PASSWORD LENGTH 

// WHEN USER IS PROMPTED FOR SPECIAL CHARACTERS -  ONLY SPECIAL CHARACTERS ARE ACCEPTED AS INPUT 
    // LOOP UNTIL A SPEICAL CHARACTERS ARE ADDED


//     1. create the confirm variables you need
// 2. create if statements for your confirms
// 3. inside your if statements, console log “___ is true” just to make sure they’re working
// 4. create arrays for the different character options
// 5. use your if statements to add to a list of possible characters for your final password