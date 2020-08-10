const constraints = {
    fname: {
        presence: { allowEmpty: false }
    },
    lname: {
        presence: { allowEmpty: false }
    },
    email: {
        presence: { allowEmpty: false },
        email: true
    },
    message: {
        presence: {allowEmpty: false}
    }
};

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    const formValues = {
        fname: form.elements.fname.value,
        lname: form.elements.lname.value,
        email: form.elements.email.value,
        message: form.elements.message.value
    };

    const errors = validate(formValues, constraints);

    if (errors) {
        event.preventDefault();
        const errorMessage = Object
            .values(errors)
            .map(function (fieldValues) { return fieldValues.join(', ')})
            .join("\n");

        alert(errorMessage);
    }
}, false);