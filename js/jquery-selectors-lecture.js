//The new $(document).ready
$(function() {
    // id selector to alter content
    //cpmst refToLibrary = $("#library");
    $("#library").text("jQuery makes life easier");
    //get reference to content
    //you can also use refToLibrary instead of #library
    console.log($("#library").text());


    //You can use this to manipulate your CSS
    // $(".framework").css('border', '1px solid black');
    //To do more than one property at a time, it stays CSS like such as
    $(".framework").css({
        'border': '1px solid black',
        'width': 'fit-content'
    });

    //Selected all paragraphs and list items on the page
    // $("p, li").text("I've taken over.")

    //You can also chain selectors such as
    $("p, li").text("I've taken over.").css("color", "maroon");

});

