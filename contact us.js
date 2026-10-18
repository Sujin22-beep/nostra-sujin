let sidenav = document.querySelector(".sidenav")
let sidenavbtn = document.getElementById("sidenavbtn")
let menu = document.getElementById("menu")
menu.addEventListener("click",function(){
    sidenav.style.right= 0
})
sidenavbtn.addEventListener("click",function(){
    sidenav.style.right= "-50%"
})

// form
let names = document.getElementById("name")
let email = document.getElementById("email")
let sub = document.getElementById("subject")
let msg = document.getElementById("message")
let btn = document.getElementById("btn")
 
let nameerror = document.getElementById("nameerror")
let emailerror = document.getElementById("emailerror")
let valid = true

btn.addEventListener("click",function(){
    event.preventDefault()
    let nameregex = /^[A-Z][a-z]+$/
    let emailregex = /^[a-zA-Z0-9]+@gmail\.com/
    if(nameregex.test(names.value) == false){
        nameerror.style.display="block"
        valid = false
    }
    else{
        nameerror.style.display="none"
        valid =true
    }

    if(emailregex.test(email.value) == false){
        emailerror.style.display = "block"
        valid = false
    }
    else{
        emailerror.style.display ="none"
        valid = true
    }
    let form = document.getElementById("form")
    let submit = document.getElementById("saved")
    if(valid){
        submit.style.display ="block"
        btn.requestFullscreen()
        
    }
})