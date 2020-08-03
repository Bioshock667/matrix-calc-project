// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const calc = window.mainCalc;
var displayValue = "0";
console.log(window.mainCalc);
function updateDisplay(value){
  if(value.match(/[0-9\.]+/)){
    displayValue = displayValue + value;
    if(displayValue.startsWith("0") && !displayValue.includes("."))
      displayValue = displayValue.substring(1);
  } else if(value.match(/^[\+\-\*\/]$/) !== null){
    calc.addValue(displayValue);
    console.log(calc.hasOperator());
    if(calc.hasOperator()){
      displayValue = calc.calculate();
    }
    calc.addOperator(value);
    displayValue = 0;
  } else if(value === "Enter"){
    calc.addValue(displayValue);
    displayValue = calc.calculate();
  } else if(value === "C"){
    calc.clearAll();
    displayValue = "0";
  } else if( value === "CE"){
    calc.clearCurrent();
    displayValue = "0";
  } else if (value === "+/-"){
    if(displayValue.startsWith("-")){
        displayValue = displayValue.substring(1);
    } else {
        displayValue = "-" + displayValue;
    }
  } else if (value == "inv"){
    var edit = window.open('./matrixEditor.html',null,"preload=./mEditor.js");
  } 
  console.log("current value "+ calc._accum);
  console.log("current second "+ calc._second);
  console.log("current op "+ calc._operator);
  document.getElementById("display").innerHTML = displayValue;

}
window.addEventListener('DOMContentLoaded', () => {
  // const replaceText = (selector, text) => {
  //   const element = document.getElementById(selector)
  //   if (element) element.innerText = text
  // }

  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type])
  // }
  var calculator = document.getElementById("calculator");
  if(!calculator) return;
  var buttons = calculator.getElementsByTagName("td");
  for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", (event)=>{
      console.log("\"" + event.currentTarget.innerHTML + "\" is clicked");
      updateDisplay(event.currentTarget.innerHTML);
    });
  }
})
