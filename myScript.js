var student = document.querySelector('#name');
var contents = document.querySelector('.container');
var studentSize = 24;

fetch('https://api.hatchways.io/assessment/students')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < studentSize; i++) {

            let nameValue = document.createElement("h1");
            let emailValue = document.createElement("p");
            let averageValue = document.createElement("p");

            function average() {
                let total = 0;
                for (let j = 0; j < 8; j++) {
                    total = total + parseInt(data['students'][i]['grades'][j]);
                }
                return Math.floor(total / 8);
            }

            nameValue.innerHTML = data['students'][i]['firstName'];
            emailValue.innerHTML = "Email: " + data['students'][i]['email'];
            averageValue.innerHTML = "Average: " + average() + "%";

            //console.log(nameValue);
            //student.innerHTML = nameValue;
            contents.appendChild(nameValue);
            contents.appendChild(emailValue);
            contents.appendChild(averageValue);


        }
    })
