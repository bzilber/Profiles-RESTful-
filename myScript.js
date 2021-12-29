var student = document.querySelector('#name');
var contents = document.querySelector('.container');
fetch('https://api.hatchways.io/assessment/students')
    .then(response => response.json())
    .then(data => {
        //student = data[0]['firstName'];
        var nameValue = data['students'][0]['firstName'];

        //console.log(student);

        student.innerHTML = nameValue;

    })
