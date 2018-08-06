$(document).ready(function () {
    //navbar and menu stick on scroll
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
    })
  
    //menu shows which section you're in based on scroll height
    $(window).scroll(function () {
        let distanceFromTop = $(document).scrollTop();
        if ((parseFloat(distanceFromTop) + 100) >= $('#member').offset().top) {
            $('#jump-community').removeClass('is-active');
            $('#jump-action').removeClass('is-active');
            $('#jump-member').addClass('is-active');
            $('.navbar-end').css('visibility', 'visible');
        }
        else if ((parseFloat(distanceFromTop) + 100) >= $('#community-projects').offset().top) {
            $('#jump-community').addClass('is-active');
            $('#jump-action').removeClass('is-active');
            $('#jump-member').removeClass('is-active');
            $('.navbar-end').css('visibility', 'visible');
        }
        else {
            $('#jump-community').removeClass('is-active');
            $('#jump-action').addClass('is-active');
            $('#jump-member').removeClass('is-active');
            $('.navbar-end').css('visibility', 'hidden');
        }
    })

    //form toggle
    $('.form-button').click(() => {
        $('#form-div').toggleClass('is-active');
    })

    //create new Project on form submission
    $("#add-project").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        $('#form-submit').addClass('is-loading');

        let newProject = {
            name: $("#title-input").val().trim(),
            hours: $("#duration-input").val().trim(),
            description: $("#description-input").val().trim()
        };


        // Send the POST request
        $.post("/project/create", newProject, function () {

            $('#form-submit').removeClass('is-loading').removeClass('is-danger').addClass('is-success');
            $('#form-submit').html('Success!');

            // clear input fields
            $("#duration-input").val('');
            $("#description-input").val('');
            $("#title-input").val('');
        });
    });

    $('#logout').on('click', () => {

        $.ajax({
            url: '/user/logout',
            type: 'POST',
            success: (result) => {
                   if(result=="OK"){
                       location.replace('/');
                   }
                   else{
                       console.log('error: ' + result);
                   }
            }
        });
    })


    //'show-more' logic for cards
    $('.show-more').on('submit', function (event) {
        event.preventDefault();
        $(this).parent().siblings('.card-content').toggleClass('open');
    })
