#! /usr/bin/env node
import inquirer from "inquirer";
let exchangeRates = {
    USD: 1,
    PKR: 277.30,
    YEN: 153.28,
    RIYAL: 3.75,
    EURO: 0.94,
    INR: 83.61
};
let answer = await inquirer.prompt([{
        message: `What is your "from" currency`,
        type: "list",
        choices: ["USD", "PKR", "YEN", "RIYAL", "EURO", "INR"],
        name: "from"
    },
    {
        message: `What is your "to" currency`,
        type: "list",
        choices: ["USD", "PKR", "YEN", "RIYAL", "EURO", "INR"],
        name: "to"
    },
    {
        message: "What is your amount?",
        name: "amount",
        type: "number"
    }]);
let fromCurrency = exchangeRates[answer.from];
let toCurrency = exchangeRates[answer.to];
let Amount = answer.amount;
let calculation = Amount / fromCurrency;
let finalCalculation = calculation * toCurrency;
let roundedResult = Math.round(finalCalculation);
console.log(roundedResult);
