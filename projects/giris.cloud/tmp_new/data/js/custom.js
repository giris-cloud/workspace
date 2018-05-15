$(window).scroll(function () {
    var scrollPos = $(document).scrollTop();
    if (scrollPos > 0)
    {
        $("#header").css({"position": "fixed", "top": "0px", "left": "0px"});
        $("#content").css({"margin-top": "61.5px"});
    } else
    {
        $("#header").css({"position": "static"});
        $("#content").css({"margin-top": "15px"});
    }
});

$(function () {

    menu_opend = false;

    $("button#gc_login").click(function () {
        $("#header_bar #default").fadeOut(400, function () {
            $("#header_bar #login").fadeIn(400);
        });
    });
    
    $("button#button_functions").click(function () {
        window.location.href = "functions.html";
    });

    $("button#gc_register").click(function () {
        window.location.href = "register.html";
    });

    $("#mobile_bar_button").click(function () {
        $("body").css({"overflow-x": "hidden", "overflow-y": "hidden"});
        if (!menu_opend)
        {
            menu_opend = true;
            $("body").css({"overflow-x": "hidden", "overflow-y": "hidden"});
        } else
        {
            menu_opend = false;
            $("body").css({"overflow-x": "auto", "overflow-y": "auto"});
        }
        $("div#mobile_nav").animate({height: "toggle"}, 1000, function () { });
    });

    var gc_footer_changer_count = 0;
    gc_footer_changer();

    setInterval(function () {
        gc_footer_changer();
    }, 5000);

    function gc_footer_changer() {
        $(".footer_changer_text").hide();

        gc_footer_changer_count = gc_footer_changer_count + 1;
        if (gc_footer_changer_count === ($(".footer_changer_text").length + 1))
        {
            gc_footer_changer_count = 1;
        }
        $(".footer_changer_text:nth-child(" + gc_footer_changer_count + ")").fadeIn(800);
    }
});