document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
    const userPassword = document.getElementById('user-pass');
    const passValue = userPassword.value;
    
    if (emailValue === 'nhnayeem@gmail.com' && passValue === 'nayeem'){
        window.location.href = 'secondPage.html'
    }
    else {
        alert('please enter valid email or password');
    }
})