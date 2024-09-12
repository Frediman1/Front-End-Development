// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     // var email = document.getElementById('email').value;
//     // var confirmEmail = document.getElementById('confirmEmail').value;

//     // if (email !== confirmEmail) {
//     //     alert('Emails do not match!');
//     //     event.preventDefault();
//     // }

//     // Get email and confirm email field values
//     const email = document.getElementById('email').value;
//     const confirmEmail = document.getElementById('confirmEmail').value;

//     // Check if the email fields match
//     if (email !== confirmEmail) {
//         alert("Email addresses do not match. Please check again.");
//         // Prevent form submission
//         event.preventDefault();

//         // Show alert if emails do not match
//         //    alert("Email addresses do not match. Please check again.");
//     }

// });

const form = document.getElementById('contactForm');
form.addEventListener('click', checkEmail);
function checkEmail(event) {
    const email = document.getElementById('email').value;
    const confirm = document.getElementById('confirmEmail').value;

    if (email === '' || confirm === '') {
        return
    }

    if (email === confirm) {
        document.getElementById('form').onsubmit();
    }
    else {
        event.preventDefault();
        alert('Emails do not match');
    }
}
