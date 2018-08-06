$(function () {
    $(document).on('click', '.below button', function () {
        var belowCard = $('.below'),
            aboveCard = $('.above'),
            parent = $('.form-collection');
        parent.addClass('animation-state-1');
        setTimeout(function () {
            belowCard.removeClass('below');
            aboveCard.removeClass('above');
            belowCard.addClass('above');
            aboveCard.addClass('below');
            setTimeout(function () {
                parent.addClass('animation-state-finish');
                parent.removeClass('animation-state-1');
                setTimeout(function () {
                    aboveCard.addClass('turned');
                    belowCard.removeClass('turned');
                    parent.removeClass('animation-state-finish');
                }, 300)
            }, 10)
        }, 300);
    })



    $('.form-collection').on('click', '.above button', (event) => {

        if ($('#login').hasClass('above')) {

            let user = {
                email: $("#duration-input").val().trim(),
                password: $("#description-input").val(),
            }

            $.post("/user/login", user, function () {

              
               


            });

        }
        else {
            //
        }



    })
})