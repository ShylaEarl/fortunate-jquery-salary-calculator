console.log('js sourced');

$(document).ready(onReady);

function onReady(){
    console.log('jQ sourced');
    //clicking submit button runs corresponding fucntion to 
    //capture and add input values to the DOM
    $("#submitInput").on('click', submitEmployeeInfo);
}

//function captures values from DOM and displays them on DOM
function submitEmployeeInfo(){
    //variables to hold input values from DOM
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = Number($('#idInput').val());
    let title = $('#titleInput').val();
    let annualSalary = Number($('#annualSalaryInput').val());

    //appending input values to a table/form on the DOM
    $('.employeeInfoTable').append(
        `<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>$${annualSalary}</td>
            <td>
                <button class="deleteButton">Delete</button>
            </td>
        </tr>`
    );

    //clears inputs on DOM
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    Number($('#idInput').val(''));
    $('#titleInput').val('');
    Number($('#annualSalaryInput').val());
}



//[X]create an input form that collects first name, last name, 
//ID number, job title, annual salary.

//[X]create a 'Submit' button to collect form information, 
//[]store the information to calculate monthly costs, 
//[X]append information to the DOM and clear the input fields. 
//[]calculate monthly costs and append this to the to DOM. 
//[]If the total monthly cost exceeds $20,000, add a red background color.

//[X]Create a delete button that removes an employee from the DOM. 
//For Base mode, it does not need to remove that Employee's salary 
//from the reported total.

//STRETCH GOALS//
//Add styling or extra functionality that fits with the theme of this assignment.

//Once the employee is deleted, update the total spend on salaries account 
//for this employee's removal. This will require that the logic knows 
//which element was removed. You will need to use .text() as a getter 
//or look into jQuery's .data() function. This is tricky!

