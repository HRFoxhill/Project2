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
    })


    $.ajax({

        type: 'GET',
        url: '/api/projects',
        success: function (projects) {
            $.each(projects, function (i, project) {
               //
            });
        },
        error: function () {
            alert('error loading projects');
            console.log(projects);
            
        }
    });




    //show-more logic for cards
    var content = document.getElementById("card");
    var button = document.getElementById("show-more");

    button.onclick = function () {
        
        if (content.className == "open") {
            //shrink the box
            content.className = "";
        } else {
            //expand the box
            content.className = "open";
        }

    }


})
