// console.log('client.js sourced');
// call readyNow after document is ready
$(document).ready(readyNow);
/**
 * Runs when document is ready, prepares click handlers
 */
function readyNow() {
    // console.log('jQuery sourced');
    // click handlers
    $('#add-employee-submit').on('click', addEmployee);
    $('body').on('click', '.delete-employee', deleteEmployee);
    $('#submit-monthly-budget').on('click', updateMonthlyBudget);
};
// array for employees
const employees = [];
let employeeFirstName;
let employeeLastName;
let employeeID;
let employeeTitle;
let employeeAnnualSalary;
let monthlyBudget = 20000;
