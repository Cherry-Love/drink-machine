let drinkSize = '';
let drinkType = '';
let drinkIsReady = false;
//set output texts
let outputText = ["Make your order...", "Preparing...", "Your drink is ready. Enjoy!"];
const setOutputText = function(text) {
  document.getElementById("outputScreen").textContent = text;
  //console.log(document.getElementById("outputScreen").textContent);
}
setOutputText(outputText[0]);
// function in-out
const updateChoice = function() {
  //get size 
  if(document.querySelector('input[name="size"]:checked').value) {
  drinkSize = document.querySelector('input[name="size"]:checked').value;
  }
  //console.log(drinkSize);
  //get drink
  if (document.querySelector('input[name="drink"]:checked').value){
    drinkType = document.querySelector('input[name="drink"]:checked').value;
  }
  
  //console.log(drinkType);
  // give class of size
  if (drinkSize) {     document.getElementById('machineBottom').classList.add(drinkSize);
  }
  // give class of drink
 if (drinkType) {     document.getElementById('machineBottom').classList.add(drinkType);
  }
  // output choice
   if (drinkSize  && drinkType) {         document.getElementById("outputScreen").textContent = `You have ordered a ${drinkSize} glass of "${drinkType}"`;
  }
} 
// function animation
const makeDrinkAnimation = function() {
document.getElementById('machineBottom').classList.add('animation');
  setOutputText(outputText[1]);
  setTimeout(() => {
   setOutputText(outputText[2]);
    drinkIsReady = true;
  }, 5500);
}

// clear function on click Reset
  document.getElementById('drinkMachineScreen').addEventListener('reset', function(event) {
    // Reset form
    this.reset();
    setTimeout(function() {
           let selectedSize = document.querySelector('input[name="size"]:checked');
      if (selectedSize) {
        selectedSize.checked = false;
      }
          let selectedDrink =    document.querySelector('input[name="drink"]:checked');
      if (selectedDrink) {
        selectedDrink.checked = false;
      }
    }, 0);
    // call my clear function
    myClearFunction();

    event.preventDefault();
  });

  function myClearFunction() {
    // Reset all data and classes
    drinkSize = '';
    drinkType = '';   
    // Reset machineBottom classes
      document.getElementById("machineBottom").className = "";
  console.log('reset function machineBottom classes called');
   // reset checked radio 
    document.querySelector('input[name="size"]:checked').checked = false;
   document.querySelector('input[name="drink"]:checked').checked = false;
    //reset screen text
    setOutputText(outputText[0]);  
    drinkIsReady = false;
  }


   
// Submit function
document.getElementById('drinkMachineScreen').addEventListener('submit', function(event) {
  // Don't send form
    event.preventDefault();
   if (drinkSize  && drinkType) {    
    // call my function
    makeDrinkAnimation();
   }
  });

//reset machine when glass has been "taken" (click)
 const takeDrink = function() {
    if (drinkIsReady) {
      myClearFunction();
    }
  };

