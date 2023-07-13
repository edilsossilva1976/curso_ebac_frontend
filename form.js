const formulario = document.getElementsByTagName('form');
let formValid = 'Formulário validado com sucesso!!!';
let formInvalid = 'Formulário invalidado!!!';

let validaForm = document.addEventListener('submit', (e)=>{
    e.preventDefault();

    let campoA = document.getElementById('campoA').value;
    let campoB = document.getElementById('campoB').value;
    let message = document.querySelector("p")


    console.log(message)

    if(campoA < campoB){
        message.innerHTML = formValid
        document.getElementsByClassName('.message p').style.display = 'block';
    }else{
        message.innerHTML = formInvalid;
        document.getElementsByClassName('.message p').style.display = 'block';
    }
})
