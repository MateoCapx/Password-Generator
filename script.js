// Assignment code here

// Special Character Varible
let specialCcharacter = " '!', '@', '#', '$','%', '^','*', '&','(', ')','_', '-','=', '+' "

function promptQuestions() {
    
    // What the user input is store into the varible i set. 
    const passwordLength = window.prompt("How many Character Do you Want in Your Password?  Password must be at least 8 characters and no more than 128 characters ")
    const characterType = window.prompt("Which Special Character Types Do you Want to Include ? ")
    const characterConfrim = window.confirm (" Would you like to add Numbers ?   ")
    const characterConfrim2 = window.confirm("Would you like to add UPPERCASE Letters ? ")


        console.log (" Character Length", passwordLength)
        console.log (" Character Type Selected", characterType)
        console.log (" Add Number ?", characterConfrim)
        console.log (" Add UPPERCASE ?", characterConfrim2)



// Loop to check if Password is more than 8 characters but less than 128 characters
    if ( passwordLength > 8 && passwordLength < 128){
      console.log(" Password Meets Criteria")
    } 

    else if ( passwordLength < 8 || passwordLength > 128  )  {
     window.alert("Password Length doesnt Meet Criteria. Try Again !")
         promptQuestions(passwordLength );
    }

       


// Loop to make sure a Special character is inputted 
    if (specialCcharacter != specialCcharacter ) {
        window.alert ("Character Type doesnt Meet Criteria. Try Again !")
        promptQuestions(characterType )
        }

}
 




// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let password = promptQuestions ();
    
    let passwordText = document.querySelector("#password");
   
  
    passwordText.value = password;  // This code allows the password to be displayed on the page!

   return "Password";
   // promptQuestions ();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











//                         ------ NOTES -------
  //                    ------- DISREGARD ----------


// let generatePass = generatePassword();

// window.alert = ("generatePass"); 





// const displayPassword = (" Display Password !")



// USER CAN'T ENTER STRINGS WHEN PROMPTED FOR PASSWORD LENGTH 

// WHEN USER IS PROMPTED FOR SPECIAL CHARACTERS -  ONLY SPECIAL CHARACTERS ARE ACCEPTED AS INPUT 
    // LOOP UNTIL A SPEICAL CHARACTERS ARE ADDED