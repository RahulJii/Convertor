function convertToDecimal() {
  let decimal = document.getElementById("decimal").value;

  decimal = parseInt(decimal);
  binary = decimal.toString(2);

  if (isNaN(binary)) {
    document.getElementById("binaryResult").innerHTML =
      "Waiting to insert numbers ...";
  } else {
    document.getElementById("binaryResult").innerHTML = binary;
  }
}
