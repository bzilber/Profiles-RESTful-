//var student = document.querySelector('#name');
var container = document.querySelector('.container');
var containerItem = document.querySelector('.container-item');
//var profilePic = document.querySelector('.img')
var studentSize = 24;

fetch('https://api.hatchways.io/assessment/students')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < studentSize; i++) {

            //for profile pic containers
            let containerized = document.createElement(`containerItem`);
            let imgValue = document.createElement(`img`);

            imgValue.setAttribute("width", "150");
            imgValue.setAttribute("class", "img-rounded-border");

            imgValue.src = data['students'][i]['pic'];
            containerized.appendChild(imgValue);
            container.appendChild(containerized);


            //for info containers
            let containerized1 = document.createElement(`containerItem`);
            container.appendChild(containerized1);
            let nameValue = document.createElement("h1");
            let companyValue = document.createElement("p");
            let skillValue = document.createElement("p");
            let emailValue = document.createElement("p");
            let averageValue = document.createElement("p");

            function average() {
                let total = 0;
                for (let j = 0; j < 8; j++) {
                    total = total + parseInt(data['students'][i]['grades'][j]);
                }
                return Math.floor(total / 8);
            }


            nameValue.innerHTML = data['students'][i]['firstName'].toUpperCase() + ' ' + data['students'][i]['lastName'].toUpperCase();
            skillValue.innerHTML = "Skill: " + data['students'][i]['skill'];
            companyValue.innerHTML = "Company: " + data['students'][i]['company'];
            emailValue.innerHTML = "Email: " + data['students'][i]['email'];
            averageValue.innerHTML = "Average: " + average() + "%";

            containerized1.appendChild(nameValue);
            containerized1.appendChild(emailValue);
            containerized1.appendChild(skillValue);
            containerized1.appendChild(companyValue);
            containerized1.appendChild(averageValue);


        }
    })
