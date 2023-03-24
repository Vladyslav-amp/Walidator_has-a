const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

// funkcja do sprawdzania naszego inputa(naszego hasłą)
const showMsg = () => {
    if (pass.value.length > minValue && pass.value.match(letters)
        && pass.value.match(numbers) && pass.value.match(special)) {
        p.textContent = 'Masz mocne hasło'
        p.style.color = 'lime'
    } else if (pass.value.length > minValue && pass.value.match(letters)
        && pass.value.match(numbers)) {
        p.textContent = 'Masz dobre hasło'
        p.style.color = 'orange'
    } else {
        p.textContent = 'Masz słabe hasło'
        p.style.color = 'red'
    }
}

// funkcja sprawdza czy pole input zawiera jakies litery, jezeli tak - wykona sie funkcja showMsg,
// w przeciwnym wypadku wywola sie napis nie podales hasla
const checkPass = () => {
    if(pass.value !== ''){
        showMsg()
    } else {
        p.textContent = 'Nie wpisałeś hasłą'
        p.style.color = ''
    }
}

//Listenery
pass.addEventListener('keyup', checkPass)
