document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('input-withdraw');
    const withdrawValueString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawValueString)
    
    const withdraw = document.getElementById('withdraw-ammount');
    const withdrawTextString = withdraw.innerText;
    const withdrawText = parseFloat(withdrawTextString);
    
    withdraw.innerText = withdrawValue + withdrawText;


    const totalBalance = document.getElementById('total-ammount');
    const totalBalanceString = totalBalance.innerText;
    const currentBalance = parseFloat(totalBalanceString);

    if(withdrawValue > currentBalance){
        alert('tmr baper bank e eto taka nai.')
        return;
    }
    const totalWholeBalnce = currentBalance - withdrawValue;
    totalBalance.innerText = totalWholeBalnce;

    withdrawField.value = '';
    
    
})