$(window).on("load", function() {
    menuToggle();
});


$(window).on("scroll", function() {
   showContent();
});


$(window).on("resize", function() {
   showContent();

});


var menuToggle = function () {
    $(".nav .menu .menu-toggle").on("click", function() {
        $(this).parent().toggleClass("active");
    });
}

var showContent = function () {
    let vh = $(window).height();
    var pos = $(window).scrollTop();

    $('[class*="animate__"]').each(function(){
        let limit = 50;
        $(this).toggleClass('visible', pos + vh >= $(this).offset().top + limit);
    });
}