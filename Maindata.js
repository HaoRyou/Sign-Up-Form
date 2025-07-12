const password = document.getElementById("password");
const confirm_password =document.getElementById("confirm-password");


checkpassword(password,confirm_password);

function checkpassword(a,b){
    if (a==b){
        password.classList.remove('invalid');
        password.classList.add('valid');
        confirm_password.classList.remove('invalid');
        confirm_password.classList.add('valid');
    }
    else{
        password.classList.add('invalid');
        password.classList.remove('valid');
        confirm_password.classList.add('invalid');
        confirm_password.classList.remove('valid');;
    }
}