function clear()
{
    number1.value = "";
    number2.value = "";
}
function clearresult()
{
    result.innerText = '';
}
function calc()
{
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let operator = document.getElementById('operators').value;
    if ( !isNaN(number1) && !isNaN(number2) )
    {
        if ( operator === '+' )
        {
            result.innerText = document.getElementById('result').value = parseFloat(number1) + parseFloat(number2);
        }
        if ( operator === '-' )
        {
            result.innerText = document.getElementById('result').value = parseFloat(number1) - parseFloat(number2);
        }
        if ( operator === '/' && number1 )
        {
            result.innerText = document.getElementById('result').value = parseFloat(number1) / parseFloat(number2);
        }
        if ( operator === '*' )
        {
            result.innerText = document.getElementById('result').value = parseFloat(number1) * parseFloat(number2);
        }
        clear();
        for (let i = 0; i < localStorage.length; i++)
        {
            localStorage.setItem('resultstorage', result.innerText);
            output.innerText = localStorage.getItem('resultstorage');
        }
    }
    else
    {
        alert("Цифры не введены!");
        clear();
        clearresult();
    }
}