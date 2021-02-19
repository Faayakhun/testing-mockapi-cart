function register (){
    let nameInput = document.querySelector("#name").value
    let emailInput = document.querySelector("#email").value
    let passwordInput = document.querySelector("#password").value
    let confirmPasswordInput = document.querySelector("#confirmPass").value
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (reg.test(emailInput) == false) {
        alert ("You have entered invalid email")
    } else if (passwordInput.length < 8) {
        alert ("Password must be at least 8 characters long")
    } else if (passwordInput !== confirmPasswordInput) {
        alert ("Password do not match")
    } else {
        regisData()
        alert("Registration Success, Please click login")
    }
}

const regisData = async () => {
    let emailInput = document.getElementById('email').value
    let passwordInput =  document.getElementById('password').value
    let nameInput = document.getElementById('name').value

    let userData = {
        name: nameInput,
        email: emailInput,
        password: passwordInput,
    }
    let response = await fetch ('https://6029dac76c995100176edb9a.mockapi.io/user', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })

    const fetchResponse = await response.json()
    console.log(fetchResponse)
}