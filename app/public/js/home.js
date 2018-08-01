$(document).ready(function () {
    $(window).scroll(function () {
        let distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.hero').height()) {
            $('#navbar').addClass('sticky');
            $('.menu').addClass('sticky-menu');
        }
        else {
            $('#navbar').removeClass('sticky');
            $('.menu').removeClass('sticky-menu');

        }
    });
});
