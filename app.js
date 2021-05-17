const {input1, input2} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView

        console.clear()
        console.log(title)
        printTable(table)

        const {billAmount} = await input1(model)
        const {tipp} = await input2(model)
        
        const updatedModel = update(billAmount, tipp, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
        
    }
}

module.exports = {
    app
}