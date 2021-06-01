/*
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
*/

let employees = [];
// example {employeeId: 0001, fullName: "Oliver Løvlien", email: "oliverlovlien@gp.no",...}
const addemployee = (ev) => {
    ev.preventDefault(); //to stop the form submitting
    let employee = [{
            employeeId: 0001,
            fullName: "Oliver Løvlien",
            email: "oliverlovlien@gp.no",
            pwd: 0001,
            telNbr: 90050001,
            hourlyWage: 350,
            percentagePositions: 100,
            restaurants: "Oslo",
            //        upload: "",
            personalNumber: 00000000001
        },
        {
            employeeId: 0002,
            fullName: "Ollibolly Løvlien",
            email: "ollibollylovlien@gp.no",
            pwd: 0002,
            telNbr: 90050002,
            hourlyWage: 173,
            percentagePositions: 50,
            restaurants: "Oslo",
            //        upload: "",
            personalNumber: 00000000002
        },
        {
            employeeId: 0003,
            fullName: "Oliver Columbus",
            email: "olc@gp.no",
            pwd: 0003,
            telNbr: 90050003,
            hourlyWage: 350,
            percentagePositions: 100,
            restaurants: "Moss",
            //        upload: "",
            personalNumber: 00000000003
        },
        {
            employeeId: 0004,
            fullName: "Oliver Conya",
            email: "oc@gp.no",
            pwd: 0004,
            telNbr: 90050004,
            hourlyWage: 350,
            percentagePositions: 100,
            restaurants: "Hadeland",
            //        upload: "",
            personalNumber: 00000000004
        },
        {
            employeeId: 000,
            fullName: "Oliver Farmer",
            email: "of@gp.no",
            pwd: 0005,
            telNbr: 90050005,
            hourlyWage: 173,
            percentagePositions: 50,
            restaurants: "Hadeland",
            //        upload: "",
            personalNumber: 00000000005
        },
        {
            employeeId: 0006,
            fullName: "Oliver Bonde",
            email: "ob@gp.no",
            pwd: 0006,
            telNbr: 90050006,
            hourlyWage: 350,
            percentagePositions: 100,
            restaurants: "Bergen",
            //        upload: "",
            personalNumber: 00000000006
        },
        {
            employeeId: 0007,
            fullName: "Oliver Choudhary",
            email: "oliverchoudhary@gp.no",
            pwd: 0007,
            telNbr: 90050007,
            hourlyWage: 150,
            percentagePositions: 50,
            restaurants: "Bergen",
            //        upload: "",
            personalNumber: 00000000007
        },
        {
            employeeId: Date.now(),
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            pwd: document.getElementById('pwd').value,
            telNbr: document.getElementById('telNbr').value,
            hourlyWage: document.getElementById('hourlyWage').value,
            percentagePositions: document.getElementById('percentagePosition').value,
            restaurants: document.getElementById('restaurants').value,
            upload: "",
            personalNumber: document.getElementById('personalNumber').value
        }
    ];
    employees.push(employee);
    //    document.forms[0].reset(); // to clear the form for the next entries

    window.location.href = "employees.html";
    //for display purposes only
    console.warn('added', { employees });
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(employees, '\t', 2);

    //saving to localStorage
    localStorage.setItem('GoldenPizzaEmployeeList', JSON.stringify(employees));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addBtn').addEventListener('click', addLi);
});

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function addLi(ev) {
    ev.preventDefault();
    document.getElementById("id01").classList.toggle("is-active");


    let fullName = document.querySelector('#fullName');
    let list = document.querySelector('#myUL');

    let item = document.createElement('li'); // create li node
    let itemText = document.createElement('a'); // create text node

    itemText.innerHTML = fullName.value;
    itemText.setAttribute("href", "firstName.value");

    item.appendChild(itemText); // append text node to li node
    list.appendChild(item); // append li node to list


}
oliverL.onclick = buttonPressed;

function buttonPressed() {
    let displayEmployeeDiv = document.getElementById("displayEmployeeDiv");
    for (let i = 0; i < employees.length; i++) {
        displayEmployeeDiv.innerHTML += `
                
                <h3>Navn: + ${employees[i].fullName}</h3>
                <p>e-post: + ${employees[i].email}</p>
                <p>Mobil: + ${employees[i].telNbr}</p>
                <hr>
                <br><br><br>`
    }


}