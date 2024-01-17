var Amount = document.getElementById("amount");
var button = document.getElementById("sub");


button.addEventListener('click', () => {
  var dolAmount = Amount.value * 895.50;
  document.getElementById("beg").innerText = Amount.value + " " + "united states dollar is";
  document.getElementById("end").innerText = dolAmount + " Nigerian Naira";
  
});