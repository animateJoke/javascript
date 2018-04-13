(function($){
    $(function(){
        var num =$(".main ul li").length;

        //动态生成轮播小图标
        for(var i=0; i<num; i++){
            i==0?$(".main ol").append($("<li class='active'></li>")):$(".main ol").append($("<li></li>"))
        }
        var index=0;//记录轮播图当前的位置

        // 触摸事件
        $(".main")[0].ontouchstart=function(evt){
            var e = evt || window.event;
            var disx=e.touches[0].clientX;
            var disX = disx-parseFloat($(this).find("ul").css("left"));
            $(".main")[0].ontouchmove=function(evt){
                var e = evt || window.event;
                var x=e.touches[0].clientX-disX;
                console.log($(this).find("ul").width() * -1);
                //判断是否超出轮播页面
                if(x>=0){
                    x=0
                }else if(x<=-2000){
                    x=-2000
                }
                $(this).find("ul").css({
                    left:x
                });

            }
            $(".main")[0].ontouchend=function(evt){
                var e = evt || window.event;
                var x = e.changedTouches[0].clientX-disx;
                //判断是往前还是往后
                if(x<0){
                    //判断是否超出轮播页面
                    index==4?index=4:index++
                }else {
                    index==0?index=0:index--
                }
                $(this).find("ul").animate({'left':-500*index},500);
                $(this).find("ol li").eq(index).addClass("active").siblings().removeClass("active")
            }
        }

       /* $(".main").on("touchstart",function(evt){
            // var disX=evt.touches
            console.log($(".main").offset().left);
            var e=evt ||window.event;
            console.log(e.target.x);
        }).on("touchend",function(evt){
            var e=evt ||window.event;
            console.log(e);
        })*/
    })
})($)

