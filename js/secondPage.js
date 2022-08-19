document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputField = document.getElementById('deposit-ammount');
    const newDepositAmmountString = inputField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    

    const depositTotalElement = document.getElementById('deposit-total');
    previousDepositAmmountString = depositTotalElement.innerText;
    previousDepositAmmount = parseFloat(previousDepositAmmountString);


    currentDepositAmmount = previousDepositAmmount+newDepositAmmount;
    depositTotalElement.innerText = currentDepositAmmount;

    const totalBalance = document.getElementById('total-ammount');
    const totalBalanceValueString = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueString);
    const currentTotalBalance = totalBalanceValue+ newDepositAmmount;
    totalBalance.innerText = currentTotalBalance;
    inputField.value = '';
})