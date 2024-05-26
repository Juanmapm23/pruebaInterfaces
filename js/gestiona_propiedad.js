document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var submitBtn = document.getElementById('submit-btn');
    var firstAttempt = true;

    function validateField(field) {
        if (!field.checkValidity()) {
            field.classList.add('is-invalid');
            return false;
        } else {
            field.classList.remove('is-invalid');
            return true;
        }
    }

    function validateForm() {
        var isValid = true;

        form.querySelectorAll('input, textarea').forEach(function(input) {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        submitBtn.disabled = !isValid;
    }

    form.querySelectorAll('input, textarea').forEach(function(input) {
        input.addEventListener('input', function() {
            if (!firstAttempt) {
                validateField(input);
                validateForm();
            }
        });
    });

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            firstAttempt = false;
            validateForm();
        } else {
            form.classList.add('was-validated');
        }
    }, false);
});
