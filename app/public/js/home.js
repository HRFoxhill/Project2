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

    var $tasks = $('#tasks');
    var $name = $('#name');
   

    $.ajax({

        type: 'GET',
        url: '/api/tasks',
        success: function (orders) {
            console.log("orders from database", orders)
            $.each(tasks, function (i, task) {
                $tasks.append('<li>name: '+ task.name +', task:  '</li>');
            });
        },
        error: function () {
            alert('error loading tasks');
        }
    });

$('#add-task').on('click', function(){



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

    };
})
// code for adding multi-color volunteer buttons
        // let colorCounter=0; 
    
        // //changes button color to rainbow spectrum
        // let rainbowColors= ()=>{
        //    let color = rainbowArray[colorCounter];
        //     colorCounter++;
        //     if (colorCounter===9){
        //         colorCounter=0;
        //     }
        //     return color;
        // }
        let colorArray=["#8a128a", "#4e8a12","#128a4e","#128a8a","#12128a"];

});