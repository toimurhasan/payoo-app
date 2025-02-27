document.getElementById("add-money").addEventListener("click", function (event) {
  event.preventDefault();

  const amount = parseInt(document.getElementById("amount").value);
  const tempAmount = parseInt(document.getElementById("temp-amount").innerText);
  const newAmount = amount + tempAmount;

  const pin = document.querySelector("#pin").value;
  const convertedPin = parseInt(pin);

  if (amount && pin) {
    if (convertedPin === 1234) {
      document.getElementById("temp-amount").innerText = newAmount;
    } else {
      alert("wrong pin");
    }
  } else {
    alert("enter amount & pin");
  }
});
