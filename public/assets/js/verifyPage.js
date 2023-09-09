const otpForm = document.getElementById('otpForm');
const otpInputs = document.querySelectorAll('.otp-input');
const otpInputField = document.getElementById('otpInput');
const errorText = document.getElementById('errorText');

otpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let otp = '';
    otpInputs.forEach(input => {
        otp += input.value;
    });

    if (otp.length !== 4) {
        errorText.textContent = 'Please enter a 4-digit OTP';
    } else {
        errorText.textContent = '';
        otpInputField.value = otp;
        otpForm.submit();
    }
});

// move between inputs
otpInputs.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            if (index !== 0) {
                otpInputs[index - 1].focus();
            }
        } else if (event.key === 'ArrowRight') {
            if (index !== otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        } else if (event.key === 'ArrowLeft') {
            if (index !== 0) {
                otpInputs[index - 1].focus();
            }
        }
    });

});