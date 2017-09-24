function displayLogin() {
    $(".mai-signup-wrapper").fadeOut(200);
    $(".mai-login-wrapper").fadeIn(1000);
}

function displaySignup() {
    $(".mai-login-wrapper").fadeOut(200);
    $(".mai-signup-wrapper").fadeIn(1000);
}

$("#mai-form-signup").submit(event => {
    event.preventDefault();

    const data = {
        "fullname": $("#mai-fullname").val().trim(),
        "email"   : $("#mai-email").val().trim(),
        "username": $("#mai-username").val().trim(),
        "password": $("#mai-password").val().trim()
    };
});

$(document).ready(function() {
    displaySignup();

    // Navbar for mobile
    $(".button-collapse").sideNav();
});