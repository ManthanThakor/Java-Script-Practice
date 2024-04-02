

// https://youtu.be/oQbDKJ3WXZg?si=NRsDhs_Kipo93Ce_ 


const form = document.getElementById('myForm');
    
// onchange event
form.username.addEventListener('change', function() {
    console.log('Username changed:', this.value);
});

// onsubmit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    console.log('Form submitted');
    console.log('Username:', form.username.value);
    console.log('Password:', form.password.value);

    // You can perform form validation or other tasks here
});

// onreset event
form.addEventListener('reset', function() {
    console.log('Form reset');
});