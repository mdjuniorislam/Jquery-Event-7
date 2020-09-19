$(document).ready(function(){
    $(".left button").click(function(){
        $('span').parent().css({
            "color":"red",
            "border":"1px solid #000"
        });
    });

});

$(document).ready(function(){
    $(".right button").click(function(){
        $('span').parents().css({
            "color":"red",
            "border":"2px solid #000"
        });
    });

});

$(document).ready(function(){
    $(".last button").click(function(){
        $('span').parentsUntil().css({
            "color":"red",
            "border":"3px solid #000"
        });2
    });

});

$(document).ready(function(){
    $(".last1 button").click(function(){
        $('span').span().css({
            "color":"red",
            "border":"3px solid #000"
        });
    });

});

$(document).ready(function(){
    $(".home button").click(function(){
        $('span').parent().css({
            "color":"#000",
            "border":"none"
    
        });
    });

});

$(document).ready(function(){
    $(".home button").click(function(){
        $('span').parents().css({
            "color":"#000",
            "border":"none"
    
        });
    });

});

$(document).ready(function(){
    $(".home button").click(function(){
        $('span').parentsUntil().css({
            "color":"#000",
            "border":"none"
    
        });
    });

});




