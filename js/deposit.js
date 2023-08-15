//step 1: add event listener to the deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  //step 2: get the deposit amount from the deposit input field
  // for input field use .value to get the value inside the input field
  const depositUser = document.getElementById("user-deposit");
  const newDepositAmountString = depositUser.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  if (isNaN(newDepositAmount)) {
    alert("শুধু নাম্বার সাপোর্ট হবে😂খালি রাখলে হবেনা😎");
    return;
  }
  //   step 3: get the current deposit total
  // for non-Input (element other than input, textarea) use innerText to get the text
  const depositTotalelement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalelement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  //   step 4:  add numbers to set the total deposit
  const currentdepositTotal = previousDepositTotal + newDepositAmount;
  // set the deposit total
  depositTotalelement.innerText = currentdepositTotal;

  //   step 5: get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //   step 6: calculate current total balance
  const currentTotalBalance = previousBalanceTotal + newDepositAmount;
  // set the balance total
  balanceTotalElement.innerText = currentTotalBalance;
  //   step 7: clear the deposit field
  depositUser.value = "";
});
