const password = document.getElementById("password");
const confirm_password =document.getElementById("confirm-password");


confirm_password.addEventListener('input', checkpassword(password,confirm_password));

function checkpassword(a,b){

    console.log(a.value);
    console.log(b.value);
    if (a.value==b.value){
        password.style.borderColor = "lightblue";
        confirm_password.style.borderColor = "lightblue";
    }
    else{
        password.style.borderColor = "red";
        confirm_password.style.borderColor = "red";
    }
}