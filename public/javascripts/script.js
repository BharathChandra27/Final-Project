// Nav bar menu icon in mobile view
function dropdownMenu() {
    var x = document.getElementById("onMenuClick");
    if(x.className === "navbar") {
        /* Changing nav to nav.responsive*/
        x.className += " responsive";
    }else {
        x.className = "navbar";
    }
}

// Alert method in profile page
function submitMethod() {
    alert("Thanks for your feedback! It will be considered.")
}

// Alert method for registration page
function registrationMethod() {
    alert("Thanks for registering with us. Please refer the email sent to you for further details")
}

// Logout verifier method
function logoutMethod() {
    alert(" LogIn First!!!");
}
