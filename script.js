document.getElementById("login-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const accountNumber = document.getElementById("account-number").value;
  const pin = document.getElementById("pin").value;
  if (accountNumber.length === 11) {
    if (pin === "1234") {
      window.location.href = "./main.html";
    } else {
      alert("Wrong PIN");
    }
  } else {
    alert("Provide a valid account number");
  }
});

