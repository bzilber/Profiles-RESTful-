fetch('https://api.hatchways.io/assessment/students')
    .then(response => response.json())
    .then(data => console.log(data))
