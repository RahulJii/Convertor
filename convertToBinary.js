function convertToBinary() {
  let binary = document.getElementById("binary").value;
  let decimal = parseInt(binary, 2);
  if (isNaN(decimal)) {
    document.getElementById("decimalResult").innerHTML =
      "Please enter values in 0 and 1 ...";
  } else {
    document.getElementById("decimalResult").innerHTML = decimal;
  }
}
