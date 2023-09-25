let error = true;

$('[name="user_login"]').blur(function() {
    let login_val = $(this).val(),
        login_reg = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

    if (!login_reg.test(login_val)) {
        $('[name="user_login"]').css({
            'border-color': 'var(--error-color)'
        });
        errorlogin = true;
    } else {
        $('[name="user_login"]').css({
            'border-color': 'var(--nuance-color-green)'
        });
        error_login = false;
    }
});

$('[name="gender"]').change(function() {
    error_gender = false;
});

$('[name="user_country"]').change(function() {
    let select_val = $(this).val();
    if (select_val == 'null') {
        error_country = true;
    } else {
        error_country = false;
    }
});

$('[name="privacy_check"]').change(function() {
    error_privacy_check = false;
});

$('[name="send_registration_data"]').click(function() {
    if (error === false) {
        $('.registration').submit();
    } else if (error === true) {
        alert('Data is incorrect!');
    }
});