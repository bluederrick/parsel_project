
let firstname = document.querySelector('.firstname');
let lastname = document.querySelector('.lastname');
let btn = document.querySelector('#btn2');
let password = document.querySelector('#psswd');
let btnLogin = document.querySelector('#login');
// console.log(password)






btnLogin.addEventListener('click', (e) => {

    e.preventDefault


    if (lastname.value = "") {
        console.log("enter the fields")
    }

    // const { password } = password.value;
    // const { firstname } = firstname.value;
    // const { lastname } = lastname.value
    // object destructuring
    // console.log(password.value)
    data = {
        password: password.value,
        firstname: firstname.value,
        lastname: lastname.value
    }
    console.log(data)
    // baseUrl = 'https://localhost:3000';
    // console.log(fetch)
    fetch('https://localhost:3000', {

        method: "POST",
        headers: {
            'Content-type': 'application/json',


        },
        body: JSON.stringify(data)

    }).then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.log("Error:", error);
        });


})
















