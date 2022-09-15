var btn = document.querySelector('#eye_btn');
var change = document.querySelector('#user_password');
var valor = change.value;
var state = true;

btn.addEventListener('click', () => {
    console.log('password functional!');
    console.log(valor);
    
    if (state) {
        change.setAttribute('type', 'text');
        state = false;
    } else if (!state) {
        change.setAttribute('type', 'password');
        state = true;
    }
})