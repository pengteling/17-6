$(function() {
if ($(".stulist").length > 0) {
    jQuery(".stulist").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "leftLoop",
        autoPlay: true,
        vis: 4
    });
}
if ($(".selcourse").length > 0) {
    $(".selcourse").hover(function() {
        $(this).find("ul").stop(true, true).slideDown();
    }, function() {
        $(this).find("ul").stop(true, true).fadeOut();
    })

}

if ($("#tabbox").length > 0) {
    jQuery("#tabbox").slide({
        titCell: ".hd ul li",
        mainCell: ".bd",

        effect: "fold",
        autoPlay: false

    });
}
})


function valid_mobile(mobile) {
    var patten = new RegExp(/^1\d{10}$/g);
    return patten.test(mobile);
}

$("#applycourse").click(function(e) {
    e.preventDefault();
    if ($("#xm").val() == "") {
        ZENG.msgbox.show("请填写您的姓名！", 5, 2000);
        return false;
    }
    if (!valid_mobile($("#mobile").val())) {
        ZENG.msgbox.show("您的手机号码格式有误，请重新输入！", 5, 2000);
        return false;
    }
    if ($("#area").val() == "") {
        ZENG.msgbox.show("请选择校区！", 5, 2000);
        return false;
    }
    if ($("#course").val() == "") {
        ZENG.msgbox.show("请选择课程！", 5, 2000);
        return false;
    }
    ;
    ZENG.msgbox.show("正在提交", 6, 3000);
    $.post("apply.asp", $("#frmApply").serialize(), function(data, textStatus) {
        if (textStatus) {
            ZENG.msgbox.show("您的申请已经成功提交，稍候我们会与您联络", 4, 3000);
            $("#xm").val("");
            $("#mobile").val("");
            $("#course").val("");
            $("#area").val("");

        }
    });

})

$(function() {
$(".nav li").hover(function() {
    $(this).find(".xiala").show();
}
    , function() {
        $(this).find(".xiala").hide();
    })
})