$(function(){

   //.each gives you a little more control of your code because you can pass something through the function
   // $("li").each(function(index) {
   //     if (index % 2 !== 0) {
   //         $(this).css("font-style", "italic");
   //     }
   // });

    const listItems = $("li");
    //does the same when you add element to the function
    listItems.each(function(index, element) {
       if (index % 2 !== 0) {
           $(element).css("font-style", "italic");
       }
   });

   // $("li").css

    //how to target the last item of the list
    // $("li").last().css("font-style", "italic");

    listItems.first().css("font-size", "larger");

    $("li a").last().css("text-decoration", "underline dotted");

    $("button").on('click', function (){
        // $("main").children().css("font-family", "sans-serif");
        // $("main").toggleClass("sansSerif")
        $("ul").last().children().children().css("text-decoration", "underline dotted");
    });

    $("h2").css({
        "color": "blue",
        "text-decoration": "underline",
        "cursor": "pointer"
    }).on('click', function(){
        $(this).next().slideToggle();
    });
});