var btn = document.querySelector('#eye_btn');
var change = document.querySelector('#user_password');
var state = true;

btn.addEventListener('click', () => {
    console.log('password functional!');
    
    if (state) {
        change.setAttribute('type', 'text');
        state = false;
    } else if (!state) {
        change.setAttribute('type', 'password');
        state = true;
    }
})