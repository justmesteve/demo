function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple check for demonstration purposes
    if (username === 'employee' && password === 'password') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}