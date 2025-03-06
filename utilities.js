const BALANCE_VALUE_ID="balance-value";
function getValueById(id){
    console.log(id)
    const valueById = document.getElementById(id).value;

    const valueByIdInt = parseInt(valueById);

    return valueByIdInt
    

}

function balanceValue(){
    const balanceValue = document.getElementById(BALANCE_VALUE_ID).innerText;
    const balanceValueInt = parseInt(balanceValue);
    return balanceValueInt;
}

function balanceUpdate(value){
    document.getElementById(BALANCE_VALUE_ID).innerText = value;
}


function wholeDonateNow(donationInputId){
    const donationAmount = getValueById(donationInputId);
    const balance = balanceValue();
    const updatedBalance = balance - donationAmount;
    balanceUpdate(updatedBalance);
}