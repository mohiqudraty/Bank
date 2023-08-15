/*
1. add event handler with the withdraw button
2. get the withdraw amount fro the withdraw input field
2-5. also make sure to convert the input int to number
3. get previous withdraw total
4. calculate total withdraw total
4-5. set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6-5. set the new balance total
7. clear the input field
*/

// step 1:
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // step 2:
  const userWithdraw = document.getElementById("user-withdraw");
  const withdrawMoneyString = userWithdraw.value;
  const newWithdrawMoney = parseFloat(withdrawMoneyString);
  // step 7:
  userWithdraw.value = "";

  if (isNaN(newWithdrawMoney)) {
    alert("শুধু নাম্বার সাপোর্ট হবে😂খালি রাখলে হবেনা😎");
    return;
  }
  //   step 3:
  const totalWithdrawElement = document.getElementById("withdraw-total");
  const totalWithdrawstring = totalWithdrawElement.innerText;
  const previousTotalWithdraw = parseFloat(totalWithdrawstring);

  // step 5:
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawMoney > previousBalanceTotal) {
    alert("তোমার বাপের এতো টাকা নাই!");
    return;
  }
  // step 4
  const totalWithdraw = previousTotalWithdraw + newWithdrawMoney;
  totalWithdrawElement.innerText = totalWithdraw;
  // step 6:
  const currentTotalBalance = previousBalanceTotal - newWithdrawMoney;
  balanceTotalElement.innerText = currentTotalBalance;
});
