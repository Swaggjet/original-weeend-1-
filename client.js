// console.log('client.js sourced');
// call readyNow after document is ready
$(document).ready(readyNow);

/**
 * Runs when document is ready, prepares click handlers
 */
function readyNow() {
     console.log('jQuery sourced');
    // click handlers
    $('#employeeForm-header').on('click', addEmployee);
    $('body').on('click', '.delete-employee', deleteEmployee);
    $('#monthly-budget').on('click', updateMonthlyBudget);
};

function activation() {
    console.log('In activation');
    readyNow();

}



// array for employees
const employees = [];
let employeeFirstName;
let employeeLastName;
let employeeID;
let employeeTitle;
let employeeAnnualSalary;
let monthlyBudget = 20000;
/**
 * Gathers input data for employee object
 * Calls createEmployee with input data
 * Clears input fields
 * Appends employee data to table
 * Updates total monthly cost
 * @returns An alert if conditions are met
 */
function addEmployee(event) {
    console.log(event, 'event');
    event.preventDefault();

    // console.log('In addEmployee');
    employeeFirstName = $('#firstNameInput').val();
    // console.log(employeeFirstName);
    employeeLastName = $('#lastNameInput').val();
    // console.log(employeeLastName);
    employeeID = $('#idInput').val();
    // console.log(employeeID);
    employeeTitle = $('#titleInput').val();
    // console.log(employeeTitle);
    employeeAnnualSalary = $('annualSalary').val();
    // console.log(employeeAnnualSalary);
    if (employeeFirstName === '' || employeeLastName === '' || employeeID === '' || employeeTitle === '' || employeeAnnualSalary === '') {
        alert('Please fill out all employee fields!');
        return;
    };
    if (isNaN(employeeAnnualSalary)) {
        alert('Please enter only numbers for employee salary!');
        return;
    };
    createEmployee(employeeFirstName, employeeLastName, employeeID, employeeTitle, employeeAnnualSalary);
    clearInputFields();
    employeeTable();

};
/**
 * Takes employee input data, creates an object, pushes object to array
 * @param {string} firstName - is for employee first name
 * @param {string} lastName - is for employee last name
 * @param {string} ID - is for employee ID
 * @param {string} title - is for employee title
 * @param {number} annualSalary - is for employee annual salary
 */
function createEmployee(firstName, lastName, ID, title, annualSalary) {
    // console.log('In createEmployee');
    let employee = {
        firstName: firstName,
        lastName: lastName,
        id: ID,
        title: title,
        salary: annualSalary,
    };
    // console.log(employee);
    employees.push(employee);
    // console.log(employees);
};

/**
 * Clears input fields
 */
function clearInputFields(){
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('annualSalary').val('');
}
    // console.log('In clearInputFields');

    console.log(employees);

    $('#employeeTable').append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>$${employee.salary}</td>
        <td><button id= "deleteButton">Delete</button></td>
    </tr>`);

    function deleteButton() {
        console.log('In deleteButton');
        $(this).closest('tr').remove();
    }
    // console.log('In appendEmployeeTable');

    

/**
 * Empties table, loops employees array and appends info to DOM along with a delete button
 */

/**
 * Sets totalMonthly to 0, then loops through employees array and updates salary cost and appends to DOM
 * Will also add or remove .red-background based on conditional
 */



/**
 * Removes employee from array when clicking the delete button
 * Updates total monthly and appends the table
 */

    // console.log('In deleteEmployee');
   
    // console.log('This is the employee you clicked', employee);
    // console.log('This is the array before removing', employees);
   
    // console.log('This is the array after removing', employees);
    
    // $(this).parent().parent().remove();

/**
 * Removes employee from the array
 * @param {Object[]} array - Is for the employees array
 * @param {number} search - is for the index of the employee to remove
 */

    // console.log('In removeFromArray');
    

/**
 * Updates the monthly budget
 * @returns an alert if conditions are met
 */
