$(document).ready(function() {
    $('a').on('click', function(event) {
        event.preventDefault();

        var href =  $(this).attr('href');
        var getID = href.match(/\#\w+/);
            
        console.log(getID);            
        if (getID) {
            $(this).attr('href', getID[0]);

            $('body, html').animate({
                scrollTop: $(href).offset().top - $('.nav').outerHeight()
            }, 1);
        }
    });

    menuToggle();
    animateContent();
});


$(window).on("scroll", function() {
   animateContent();
});


$(window).on("resize", function() {
   animateContent();

});


var menuToggle = function () {
    $(".nav .menu .menu-toggle").on("click", function() {
        $(this).parent().toggleClass("active");
    });
}

var animateContent = function () {
    let vh = $(window).height();
    var pos = $(window).scrollTop();

    $('[class*="animate__"]').each(function(){
        let limit = 50;
        $(this).toggleClass('visible', pos + vh >= $(this).offset().top + limit);
    });
}
