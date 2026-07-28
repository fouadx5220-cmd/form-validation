var nameError = document.querySelector('.name-error');
var phoneError = document.querySelector('.phone-error');
var emailError = document.querySelector('.email-error');
var messageError = document.querySelector('.message-error');
var submitError = document.querySelector('.submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value.trim();

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:green"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value.trim();

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if (!phone.match(/^[0-9]+$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:green"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value.trim();
    console.log(email)
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:green"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value.trim();
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:green"></i>';
    return true;
}

function validateForm() {
    var isNameValid = validateName();
    var isPhoneValid = validatePhone();
    var isEmailValid = validateEmail();
    var isMessageValid = validateMessage();

    if (!isNameValid || !isPhoneValid || !isEmailValid || !isMessageValid) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        return false;
    }
    return true;
}