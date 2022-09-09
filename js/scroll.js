$(document).ready(function (){
    $("#menu-home").click(function (){
        $('html, body').animate({
            scrollTop: $("#section").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#menu-about").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#menu-edu").click(function (){
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#menu-prj").click(function (){
        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#menu-contact").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $(".btn-contact").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $(".mouse-scroll-down").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});