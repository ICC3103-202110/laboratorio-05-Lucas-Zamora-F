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
        {'Bill Amount ($)': billAmount,
            'Tip (%)': tipp,
            'Tip ($)': tip,
            'total ($)': total
        }
    ]
}

function input1(model){
    const {billAmount} = model

    const message = 'Bill Amount?'
    return inquirer.prompt([
        {
            name: 'billAmount',
            type: 'billAmount',
            message: message,
            default: billAmount,

            validate: function(value){
                if(value > 0 ){
                    return true
                } else {
                    return 'Enter a valid number'
                }
            }
                
    
        }
    ])
}

function input2(model){
    const {tipp} = model

    const message = 'tip(%)?'
    return inquirer.prompt([
        {
            name: 'tipp',
            type: 'tipp',
            message: message,
            default: tipp,

            validate: function(value){
                if(value >= 0 ){
                    if (value <=100){
                        return true
                    } else {
                        return 'Enter a valid number'
                    }
                }
                 else {
                    return 'Enter a valid number'
                }
            }
  
        }
    ])
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
    input1,
    input2,

}