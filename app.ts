#! /usr/bin/env node
///   ATM_Project   ///

import inquirer from "inquirer";
interface ansType {
    userID: string,
    userPIN: number,
    accountType: string,
    transactionType: string
    WidrawMethod: number,
    FastCash: string,
    amount:number
}



const answers: ansType = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter your userID : "
    },
    {
        type: "password",
        name: "userPIN",
        message: "Enter your userPIN : "
    },
    {
        type: "list",
        name: "accountType",
        message: "Select your accountType : ",
        choices: ["Current", "Savings"]
    },
    {
        type: "list",
        name: "transactionType",
        message: "Select your transactionType : ",
        choices: ["FastCash", "CashWidraw"],
        when(answers) {
            return answers.accountType
        },
    },
    {
        type: "list",
        name: "amount",
        message: "Select your Amount : ",
        choices: [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000],
        when(answers) {
            return answers.transactionType == "FastCash"
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your desired Amount : ",
        when(answers) {
            return answers.transactionType == "CashWidraw"
        },

    },

])
if (answers.userID && answers.userPIN){
 const Balance = Math.floor(Math.random()*100000);
 console.log(Balance);
 const EnteredAmount = answers.amount;
 if(Balance >= EnteredAmount){
    const remaining = Balance - EnteredAmount;
    console.log("Your remaining balance is ", remaining)
 }else{
    console.log("Insufficient Balance")
 }
}