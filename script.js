const $display = document.getElementById('display'),
$btn = document.querySelectorAll('.btn');

let calculation = []
let accumulate;
function calculate(btn) {
    let value = btn.innerText;
    if(value === 'AC'){
        calculation = [];
        $display.value = '';
    } else if (value === '←'){
        calculation.pop()
        $display.value = calculation.join('')
    } else if (value ==='='){
        $display.value = eval(accumulate)
    } else if (value ==='%'){
        $display.value = parseFloat(calculation.join(''))/100
        calculation = [];
    } else {
        calculation.push(value)
        accumulate = calculation.join('');
        $display.value = accumulate;  
    }
      
}



$btn.forEach(button => button.addEventListener('click', ()=>calculate(button)))

