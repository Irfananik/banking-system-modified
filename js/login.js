//login submit button
document.getElementById('login-btn').addEventListener('click', function() {
    // get user email
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value

    // get user password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value


    // condition
    if (userEmail == 'anik.cse10@gmail.com' && userPassword == 'anik') {
        window.location.href = 'banking.html'
    } else {
        alert('Please enter valid email or password')
    }
})