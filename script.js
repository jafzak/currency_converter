var Amount = document.getElementById("amount");
var button = document.getElementById("sub");


button.addEventListener('click', () => {
  var dolAmount = Amount.value * 415.19;
  document.getElementById("beg").innerText = Amount.value + " " + "united states dollar is";
  document.getElementById("end").innerText = dolAmount + " Nigerian Naira";
  
});