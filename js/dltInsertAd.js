var times = 400;//检查滚动条高度的时间间隔
var myTimer =null;
var myTop = -1;
var currentTop = 0;
var allImgObjs;
$(document).ready(function () {
    myLazyImg();
});
function myLazyImg(){
    allImgObjs = $("img[name='lazyImg']");
    LazyImg();
}

function LazyImg() {
    var scrollsTop =$(document).scrollTop();// document.body.scrollTop;
    var winTop = $(window).height();
    currentTop = scrollsTop-(-winTop);

    if(myTop != currentTop ){
        clearInterval(myTimer);     
        myTop = currentTop;
    

        for(var i=0;i<allImgObjs.length;i++) {
            var elementTop = $(allImgObjs[i]).offset().top;
            if(elementTop == 0){
                if($($(allImgObjs[i]).parents('a')).css("display") == "none"){
                    $(allImgObjs[i]).parents('a').show();
                    elementTop = $(allImgObjs[i]).offset().top;
                    $(allImgObjs[i]).parents('a').hide();
                }else if($(allImgObjs[i]).css("display") == "none"){
                    $(allImgObjs[i]).show();
                    elementTop = $(allImgObjs[i]).offset().top;
                    $(allImgObjs[i]).hide();
                }               
            }   
            if(currentTop > elementTop){
                if($(allImgObjs[i]).attr("src") == null || $(allImgObjs[i]).attr("src").length < 1){
                    //$(allImgObjs[i]).hide();
                    $(allImgObjs[i]).attr("src",$(allImgObjs[i]).attr("lazy_src"));
                    //$(allImgObjs[i]).fadeIn(500);
                }               
            }           
        }       
        var banner16Top = $("#index-banner-16").offset().top;
        if((currentTop > banner16Top) && $("#index-banner-16").html().length == 0){
            $.get($("#index-banner-16").attr("lazy_src"),function(res){
                $("#index-banner-16").html(res);
            })
        }
        myTimer = setInterval(function(){LazyImg()},times);
    }else{
        clearInterval(myTimer);
        myTimer = setInterval(function(){LazyImg()},times);
    }
}