const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.magenta(
        figlet.textSync(
            'Tip Calculator',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    const {tipp} = model
    const {tip} = model
    const {total} = model
    return [
        {"Bill Amount": billAmount,
            "Tip (%)": tipp,
            "Tip (%)": tipp,
            Tip: tip,
            total: total
        }
    ]
}




// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 

}