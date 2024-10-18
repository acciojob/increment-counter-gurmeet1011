//your JS code here. If required.
const countValue = document.getElementById('num');
function increment(){
    // get the vlue from UI
	
    let value = parseInt(countValue.innerText);
	alert("The current value is: " + value)
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
	
};