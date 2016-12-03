$(function(){
    function resise(designSize,type) {
        var type= type || "x";
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        if(type == "x"){
            var scale = width/designSize*100+"px";
        }else if(type == "y"){
            var scale = height/designSize*100+"px";
        }
        document.getElementsByTagName("html")[0].style.fontSize = scale;
    }
    resise(750);
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
        // onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        //     swiperAnimateCache(swiper); //隐藏动画元素
        //     swiperAnimate(swiper); //初始化完成开始动画
        // },
        // onSlideChangeEnd: function(swiper){
        //     swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        // }
    });
});