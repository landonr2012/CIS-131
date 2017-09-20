/*
Looping terms and definitions 

Author: Sheldon C. Wright
Date: 9/18/17
Filename: displayDefs.js
*/


      function displayDefs() {
      // loop through list items and add array item to corresponsing list item
        for(var i = 0; i < 10; i++){
          var listItem = "item" + (i + 1);
          document.getElementById(listItem).innerHTML = htmlTerms[i] + " - " + htmlDefs[i];
        }
     }
     // event listener to call function on loading of the page 
     if (window.addEventListener) {
        window.addEventListener("load", displayDefs, false);} 
      else if (window.attachEvent){
        window.attachEvent("onload", displayDefs);}