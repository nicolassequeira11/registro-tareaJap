function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const idBtn= document.getElementById('regBtn');

const inputs= document.getElementsByTagName('input');

idBtn.addEventListener('click',function(){
    let contador = true;
    for(let i = 0; i< inputs.length; i++){
        if (inputs[i].value ===""){
            contador = false;
        }
    }    
    if (terminos.checked && contador && passwords()){
            showAlertSuccess();
        } else {
            showAlertError();
        }  
})

function passwords(){
    let pass1= document.getElementById('password1');
    let pass2= document.getElementById('password2');
    return (pass1.value.length>=6 && pass1.value === pass2.value)
}
