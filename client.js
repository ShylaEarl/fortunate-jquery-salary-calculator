console.log('js sourced');

//declaring variable employees with a value of an empty array to hold employee objects
let employees = [];

$(document).ready(onReady);

function onReady(){
    console.log('jQ sourced');
    //clicking submit button captures and renders input values to DOM
    $('#submitButton').on('click', addEmployee); 
    //clicking this delete button erases this row/employee info from DOM
    $('#employeeInfoTable').on('click', '.deleteButton', deleteTableRow)
}

function addEmployee(){
    //conditional requires that all feilds are filled and id is unique. 
    //if not, alerts user
    for(let i = 0; i <employees.length; i++){
        if(Number($('#idInput').val()) == employees[i].id){
            alert ('You must enter a unique id for each employee'); 
            Number($('#idInput').val('')); 
        }//end unique id check
    }//end for loop
    
    if($('#firstNameInput').val() === '' || 
        $('#lastNameInput').val() === '' ||
        Number($('#idInput').val()) == '' || 
        $('#titleInput').val() === '' ||
        Number($('#annualSalaryInput').val()) == ''){
        alert ('Please fill all fields');
    } else {
        submitEmployeeInfo(
        $('#firstNameInput').val(), 
        $('#lastNameInput').val(), 
        Number($('#idInput').val()), 
        $('#titleInput').val(), 
        Number($('#annualSalaryInput').val()),
        );
    }//end fill all feilds conditional
}//end addEmployee function

//function captures values from DOM and renders them to DOM table
function submitEmployeeInfo(){
    //object to hold input values from DOM
    let employeeInput = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: Number($('#idInput').val()),
        title: $('#titleInput').val(),
        annualSalary: Number($('#annualSalaryInput').val()),
    }
        
    //adds employeeInput objects to employees array for calculation
    employees.push(employeeInput);
        
    //appending input values to a table/form on the DOM
    $('#employeeInfoTable').append(
        `<tr>
            <td>${employeeInput.firstName}</td>
            <td>${employeeInput.lastName}</td>
            <td>${employeeInput.id}</td>
            <td>${employeeInput.title}</td>
            <td>$${employeeInput.annualSalary}</td>
            <td>
                <button class="deleteButton">Delete</button>
            </td>
        </tr>`
    );

    //calls function to clear DOM inputs
    clearInputs();
    //calls function to calculate total monthly salary of all employees
    calculateMonthlySalary();
}

//function to calculate monthly salary of all employees
function calculateMonthlySalary(){
    //variable to store total annual salary of all employees
    let totalAnnualSalary = 0;
    
    //loop to get values of each employee annual salary
    for (let person of employees){
        totalAnnualSalary += person.annualSalary
    }
    
    //total monthly salary of all employees
    let totalMonthlySalary = totalAnnualSalary / 12;

    //element targets DOM location to render total monthly salary
    let el = $('#totalMonthlySalary');
    //empties value to prevent repeating
    el.empty();
    //renders updated total monthly salary value to DOM
    el.append(totalMonthlySalary);

    //conditional statment highlights DOM at totalMonthlySalary if over 20000
    if(totalMonthlySalary > 20000){
        el.addClass('redColor');
    }
}

//function to delete a specific row when its delete button is clicked
function deleteTableRow(){
    //this clicked button, remove the closest parent row to it
    $(this).closest('tr').remove();

    //add logic here for deleting salary from total and 
    //update monthly salary on DOM ( .text() or .data() )
}

function clearInputs(){
     //clears inputs on DOM
     $('#firstNameInput').val('');
     $('#lastNameInput').val('');
     Number($('#idInput').val(''));
     $('#titleInput').val('');
     Number($('#annualSalaryInput').val(''));
}


////TODO/////

//[X]create an input form that collects first name, last name, 
//ID number, job title, annual salary.

//[X]create a 'Submit' button to collect form information, 
//[X]store the information to calculate monthly costs, (variable? or array?)
//[X]append information to the DOM and clear the input fields. 
//[X]calculate monthly costs and append this to the to DOM. 
//[X]If the total monthly cost exceeds $20,000, add a red background color.

//[X]Create a delete button that removes an employee from the DOM. 
//For Base mode, it does not need to remove that Employee's salary 
//from the reported total.

//STRETCH GOALS//
//[X]Add styling or extra functionality that fits with the theme of this assignment.
//[X]--CSS 
//[X]--all inputs need to be filled w alert
//[X]--all ID inputs need to be unique

//[]Once the employee is deleted, update the total spend on salaries account 
//for this employee's removal. This will require that the logic knows 
//which element was removed. You will need to use .text() as a getter 
//or look into jQuery's .data() function. This is tricky!

