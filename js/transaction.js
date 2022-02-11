function getInputValue(inputId) {
    const InputField = document.getElementById(inputId)
    const inputAmount = InputField.value

    // clear input field
    InputField.value = ''
    return inputAmount
}

function inputUpdate(totalFieldId, amount) {
    const totalElements = document.getElementById(totalFieldId)
    const totalElementsText = totalElements.innerText
    totalElements.innerText = parseFloat(totalElementsText) + parseFloat(amount)
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(amount)
    } else {
        balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(amount)
    }
}


// deposit part
document.getElementById('deposit-btn').addEventListener('click', function() {
    /* const depositInput = document.getElementById('deposit-input')
    const depositAmount = depositInput.value */

    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        inputUpdate('deposit-total', depositAmount)
        updateBalance(depositAmount, true)
    } else {
        alert('Please enter valid amount')
    }

    // get current deposit Amount
    /* const totalElements = document.getElementById('deposit-total')
    const totalElementsText = totalElements.innerText
    totalElements.innerText = parseFloat(totalElementsText) + parseFloat(depositAmount) */



    // balance count
    /* const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmount) */



    /* // clear input field
    depositInput.value = '' */
})


// withdraw part
document.getElementById('withdraw-btn').addEventListener('click', function() {
    /* const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value */

    const withdrawAmount = getInputValue('withdraw-input')
    if (withdrawAmount > 0) {
        inputUpdate("withdraw-total", withdrawAmount)
        updateBalance(withdrawAmount, false)
    } else {
        alert('Please enter valid amount')
    }

    // get current withdraw amount
    /* const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText

    withdrawTotal.innerText = parseFloat(withdrawTotalText) + parseFloat(withdrawAmount) */



    // update balance
    /* const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(withdrawAmount) */



})