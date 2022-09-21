$(function (){

    $('#clickMe').on('click', function(){
        alert("yo");
    });

    $("#create-an-element").on('click', function (){
        $(this).after("<button class='will-this-work'>Click Me</button>");
    });

    //This won't work bc we are trying to register an event handler with an element that does not exist yet
    // $(".will-this-work").on('click', function (){
    //     alert(":(This won't work");
    // });

    $(document).on('click', '.will-this-work', function (){
        alert("Ohhhhh yeahhhh");
    });

    $(".box").hover(function (){
       $(this).css('background-color', '#1969B2');
    },
        function(){
            $(this).css('background-color', 'unset');
    });

    $(document).keydown(function(e){
        console.log(e.originalEvent.key)
    });

    console.log($("div").text());
    console.log($("div").html());
    $("div").text("I can set the content like this");

    document.get
});