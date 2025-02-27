document.querySelector("#add-money-select").addEventListener("click", function () {
  document.getElementById("add-money-section").classList.remove("hidden");
  document.getElementById("cashout").classList.add("hidden");
});
document.getElementById("cashout-select").addEventListener("click", function () {
  document.getElementById("cashout").classList.remove("hidden");
  document.getElementById("add-money-section").classList.add("hidden");
});
