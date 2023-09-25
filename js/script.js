$('.options-list')
    .hide()
    .slideUp()
    .css({
        'visibility': 'visible'
    });

$(document).ready(function() {
    // Radios --------------------------------------------
    
    $('input[type="radio"]').change(function() {
        let radio_value = $('input[type="radio"]:checked').val();
        $('span.radio_clon').removeClass('active');
        $('span.radio_clon[name="' + radio_value + '"]').addClass('active');
    });

    // Checkboxs --------------------------------------------

    $('input[type="checkbox"]').change(function() {
        let checkbox_value = $(this).val();
        console.log(checkbox_value);
        if ($(this).is(':checked')) {
            $('span.check_clon[name="' + checkbox_value + '"]').addClass('active');
        } else {
            $('span.check_clon[name="' + checkbox_value + '"]').removeClass('active');
        }
        
    });

    // Select places --------------------------------------------

    $('.select_clon').click(function() {
        if ($('.select_clon').hasClass('active')) {
            $(this).removeClass('active');
            $('.options-list').slideUp();
        } else {
            $(this).addClass('active');
            $('.options-list').slideDown();
        }
    });

    $('.option_clon:not(:first-child)').click(function() {
        let select_value = $(this).attr('name'),
            select_text = $(this).text();
        console.log(select_value);
        $('.value-select_clon').text(select_text);
        $('select[name="user_country"]').val(select_value);
    });
});