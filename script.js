const user_email = document.getElementById('user_email');
const user_password = document.getElementById('user_password');

const login = document.getElementById('login');

login.addEventListener('click', () => {

    if(user_email.value == 'furqan@gmail.com' && user_password.value == 'furqan') {
        user_email.value = '';
        user_password.value = '';
        window.location.href="verify.html";
    }
    else {
        alert('Wrong Credentials');
        user_email.value = '';
        user_password.value = '';
    }
});

const signup = document.getElementById('signup');

signup.addEventListener('click', () => {
    window.location.href="signup.html";
})
