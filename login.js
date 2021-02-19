function login() {
    signin()

}

const signin = () => {
    let emailInput = document.getElementById('emailLogin').value
    let passwordInput =  document.getElementById('passwordLogin').value
    

    fetch("https://6029dac76c995100176edb9a.mockapi.io/user")
    .then((response) => response.json())
    .then((result) => {
        const user = result.filter((user)=>user.email === emailInput);
        let {password, ...restUser} = user[0]
        if (user.length > 0 ) {
            if (user[0].password === passwordInput) {
                localStorage.setItem("user", JSON.stringify(restUser))
                alert("login berhasil")
                // displayName.innerHTML = `Hi, ${user[0].name}`
                showName()
                closeLogin()
                openLogout()
                closeCart()
                closeForm()
                
            } else {
                alert("password anda salah")
            }
        } else {
            alert("user tidak ditemukan")
        }
    })
}

function openLogout() {
    document.getElementById("hiddenLogout").style.display = "block";
    localStorage.setItem('openLogout',true)
  }

if (localStorage.getItem("openLogout")) {
    openLogout()
}

  function closeLogin() {
    document.getElementById("loginNav").style.display = "none";
    localStorage.setItem('closeLogin',true)
  }
  
if (localStorage.getItem("closeLogin")) {
    closeLogin()
}

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  function logout() {
    localStorage.clear()
    window.location.href="index.html"
}

function closeCart () {
    document.getElementById("emptyCart").style.display = "none";
    localStorage.setItem('closeCart',true)
}

if (localStorage.getItem("closeCart")) {
    closeCart()
}


// const showName = () => {
//     let emailInput = document.getElementById('emailLogin').value
//     let passwordInput =  document.getElementById('passwordLogin').value
//     let displayName = document.getElementById('namaUser')
    

//     fetch("https://6029dac76c995100176edb9a.mockapi.io/user")
//     .then((response) => response.json())
//     .then((result) => {
//         const user = result.filter((user)=>user.email === emailInput);
//             if (user.length > 0 ) {
//                 if (user[0].password === passwordInput) {
//                     displayName.innerHTML = `Hi, ${user[0].name}`
//                     localStorage.setItem("showName", true)
//                 }  
//         }
        
//     })
// }

function showName() {
    let dataUserJson = localStorage.getItem("user")
    let dataUserObj = JSON.parse(dataUserJson);
    let displayNama = document.querySelector("#namaUser")
    displayNama.innerHTML = `Hallo, ${dataUserObj.name}`
    localStorage.setItem("showName",true)
}

if (localStorage.getItem("showName")){
    showName()
}