var student = document.querySelector('#name');
var container = document.querySelector('.container');
var containerItem = document.querySelector('.container-item');
var studentSize = 24;

fetch('https://api.hatchways.io/assessment/students')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < studentSize; i++) {

            let containerized = document.createElement(`containerItem`);
            container.appendChild(containerized);

            let imgValue = document.createElement("img");
            let containerized1 = document.createElement(`containerItem`);
            container.appendChild(containerized1);
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

            imgValue.src = data['students'][i]['pic'];
            nameValue.innerHTML = data['students'][i]['firstName'];
            emailValue.innerHTML = "Email: " + data['students'][i]['email'];
            averageValue.innerHTML = "Average: " + average() + "%";

            containerized.appendChild(imgValue);
            containerized.appendChild(nameValue);
            containerized.appendChild(emailValue);
            containerized.appendChild(averageValue);

        }
    })
//container.appendChild(container);
