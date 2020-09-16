const inputNumber = document.getElementById('number');
const generateButton = document.getElementById('generate');
const table = document.getElementById('table');
const header = document.getElementById('header');
const warning = document.getElementById('warning');

generateButton.addEventListener('click', ()=>{
    
    let number = parseInt(inputNumber.value);

    if(isNaN(number)){
        inputNumber.classList.add('error');
        warning.textContent = 'Por favor ingrese un valor válido';
    }
    else{
        table.classList.add('border', 'border-primary');
        header.textContent = 'Tabla del ' + number;
    
        for(let i=1; i<=10; i++){
            let row = document.getElementById('row-table-' + i);
            row.innerHTML= number + '<span>x</span>' + i + '<span>=</span>' + number*i;
        }
    }

    
});

inputNumber.addEventListener('focus', ()=>{
    inputNumber.classList.remove('error');
    warning.textContent = '';
});