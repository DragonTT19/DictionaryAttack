var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;


function checkPassword() {
  // Get user-entered password from input box
  var pw = document.getElementById("pw").value.toLowerCase();
  if (pw) {
    pw = getVariations(pw); // Convert any letter-to-number substitutions

    // If this gets set to true, then the password variant was found
    // in the dicitonary word list, and this isn't a secure password
    var isSecure = true;
    var matchingWord = "";

    // Make a list of alternate versions of the string to check

    // Iterate over the list of words to see if the password is contained in the dictionary word list

    /* ADD YOUR CODE BELOW  - to add a for loop to iterate wordsList */
    for ( /* Put your loop statement here. */ ) {
      /* ADD YOUR CODE BELOW - If the password variation matches the dictionary word, it's not a secure password */
      /* Put your conditional here. */
    }

    printResults(isSecure, matchingWord);
  }
}

function getVariations(pw) {
  // Check and convert common letter-to-number substitutions
  //   (e.g. "3" -> "e", "@4" -> "a")
  pw = pw.replace(/[1!]/g, "i"); //g -> global replacement 1! is replaced with i
  pw = pw.replace(/2/g, "z");
  /* ADD YOUR CODE BELOW FOR THE OTHER NUMBERS OR CHARACHTERS */







  return pw;
}

function printResults(isSecure, word) {
  // Print the results
  // if "isSecure" is true, then...
  if ( ) {
    document.getElementById("results").style.color = // Put your own code style here
    document.getElementById("results").innerHTML = // Put your own message here
  }
  else {
    // if "isSecure" is NOT true, then...
    document.getElementById("results").style.color =
    var resultsStr =   // add the "word" you received as a parameter to your error message here
    document.getElementById("results").innerHTML = resultsStr;
  }

}
