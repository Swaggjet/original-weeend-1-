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
   
};

function activation() {
    console.log('In activation');
    readyNow();

}



// array for employees
const employees = [];




/**
 * Gathers input data for employee object
 * Calls createEmployee with input data
 * Clears input fields
 * Appends employee data to table
 * Updates total monthly cost
 * @returns An alert if conditions are met
 */
function addEmployee(event) {
    event.preventDefault();
    employeeFirstName = $('#employeeFirstName').val();
    employeeLastName = $('#employeeLastName').val();
    employeeID = $('#employeeID').val();
    employeeTitle = $('#employeeTitle').val();
    employeeAnnualSalary = $('#employeeAnnualSalary').val();
    if (employeeFirstName === '' || employeeLastName === '' || employeeID === '' || employeeTitle === '' || employeeAnnualSalary === '') {
        alert('Please fill out all fields');
    } else {
        createEmployee(employeeFirstName, employeeLastName, employeeID, employeeTitle, employeeAnnualSalary);
        $('#employeeFirstName').val('');
        $('#employeeLastName').val('');
        $('#employeeID').val('');
        $('#employeeTitle').val('');
        $('#employeeAnnualSalary').val('');
    }
}


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
        ID: ID,
        title: title,
        annualSalary: annualSalary,
        monthlySalary: annualSalary / 12,
        totalCost: annualSalary / 12,
        deleteButton: '<button class="delete-employee">Delete</button>'
    };
    employees.push(employee);
    appendEmployee(employee);
    updateTotalMonthlyCost();
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
 * 
 * 
 */

function removeEmployee(event) {
    console.log('In removeEmployee');
    event.preventDefault();
    let employee = $(this).closest('tr');
    employee.remove();
}


 */
