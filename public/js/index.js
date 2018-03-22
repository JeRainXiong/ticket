

//num1 num2 分别取奇数和偶数
//php中随机取一个基数或者偶数1-4
//添加一个停止按钮

$(function(){
    var oBody1 = $('#bg1');//super
    var oBody2 = $('#bg2');//sub
    oBody1.animate({opacity: '1'},1000);
    var timer = null;
    function changeBackground(){
        var arrUrl = ['0','1','2','3'];
        var num = parseInt(oBody1.attr('defualt_img')) + 1;
        num%=arrUrl.length;
        // alert(num);
        var p = 0;//奇偶
        var css ={};
        clearInterval(timer);
        oBody2.css({"background-image": "url(/img/bodybg" + arrUrl[num] + ".jpg)"});
        timer = setInterval(function(){
            num++;
            num%=arrUrl.length;
            if(p == 1){//奇数周期显示1,隐藏2
                oBody1.animate({opacity: '1'},1000);
                oBody2.animate({opacity: '0'},1000,function(){
                css = {
                    "background-image": "url(/img/bodybg" + arrUrl[num] + ".jpg)"
                }
                oBody2.css(css);
                });
                p = 0;
            } else if (p == 0) {
                oBody2.animate({opacity: '1'},1000);
                oBody1.animate({opacity: '0'},1000,function(){
                css = {
                    "background-image": "url(/img/bodybg" + arrUrl[num] + ".jpg)"
                }                    
                oBody1.css(css);
                });
                p = 1;

            }

        }, 5000);  
    }
    changeBackground();
    $('.btn-default').unbind().click(function(){
        $(this).children("span").each(function(){
            if ($(this).hasClass("glyphicon-pause")) {
                $(this).removeClass("glyphicon-pause").addClass("glyphicon-play");
                clearInterval(timer);

            } else if ($(this).hasClass("glyphicon-play")) {
                $(this).removeClass("glyphicon-play").addClass("glyphicon-pause");
                changeBackground();
            }
        });
        return;//防止默认行为
    });
});
