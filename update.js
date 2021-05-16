
function update(input1, input2, model){
    const {billAmount} = model
    const {tip} = model

    const NewbillAmount = input1
    const Newtipp = input2
    

    return {
        ...model,
        billAmount: NewbillAmount,
        tipp: Newtipp,
        tip: (NewbillAmount/100)*Newtipp,
        total: NewbillAmount+ ((NewbillAmount/100)*Newtipp),
    }
}

module.exports = {
    update
}
