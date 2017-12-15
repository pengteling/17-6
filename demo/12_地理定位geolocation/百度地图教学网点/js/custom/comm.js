$(function() {
$(".nav ul.parentmenu>li").hover(function() {
    $(this).find("ul.submenu").show();
    $(this)
}, function() {
    $(this).find("ul.submenu").hide();
}
);

$('body').imagesLoaded(function() {
    $(".fullpage").slide({
        titCell: '.miaodian',
        mainCell: '.main',
        effect: "left",
        autoPlay: true,
        easing: "easeInOutQuart",
        autoPage: true,
        interTime: 6000,
        trigger: "click",
        defaultIndex: 0,
        mouseOverStop: true
    });

})

/*$(".fullpage").slide({
    titCell: '.miaodian',
    mainCell: '.main',
    effect: "left",
    autoPlay: true,
    easing: "easeInOutQuart",
    autoPage: true,
    interTime: 6000
});*/

$(window).resize(function() {
    window.location.reload();
})

})

$(function() {
if ($(".relate").length > 0) {
    $(".relate .btn").on("click", function() {
        if ($(this).hasClass("plus")) {
            $(this).removeClass("plus").addClass("minus");
            $(".relate ul").show();
        } else {
            $(this).removeClass("minus").addClass("plus");
            $(".relate ul").hide();
        }
    })
}
})

$(function() {

if ($(".writerlist").length > 0) {
    $(".writerlist ul li").hover(function() {
        $(this).find(".bluemb").stop(true, true).show().animate({
            "left": "0"
        }, 500);
    }, function() {
        $(this).find(".bluemb").stop(true, true).animate({
            "left": "-230px"
        }, 500).hide();
    })
}
})

$(function() {


if ($(".saixuan-index").length > 0) {
    $(".saixuan-index").hover(function() {
        $(this).stop(true, true).animate({
            left: "0px"
        }, 300, "linear");
    }, function() {});
    $(".fullpage").on("click", function() {
        //alert("e");
        $(".saixuan-index").stop(true, true).animate({
            left: "-567px"
        }, 300, "linear");
    });
}

if ($(".fullpage").length > 0) {
    $.imgpreload(['/images/pagethird/industry1_hover.jpg', '/images/pagethird/industry2_hover.jpg', '/images/pagethird/industry3_hover.jpg', '/images/pagethird/industry4_hover.jpg', '/images/pagethird/industry5_hover.jpg', '/images/pagethird/industry6_hover.jpg', '/images/pagethird/industry7_hover.jpg', '/images/pagethird/industry8_hover.jpg'], function() {
        // callback invoked when all images have loaded
        // this = array of dom image objects
        // check for success with: $(this[i]).data('loaded')
    });
}
})
