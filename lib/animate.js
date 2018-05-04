/**
 *
 * @param {Object} ele
 * @param {String} attr
 * @returns {*}
 */
function getStyle(ele,attr){
    if(window.getComputedStyle){
        //兼容 GOOGLE 火狐
        return window.getComputedStyle(ele,null)[attr];
    }
    //兼容 ie
    return ele.currentStyle[attr];
}

/**
 *
 * @param obj
 * @param json
 */
function animate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var bflag=true;//默认所有属性的动画都执行完
        for (var key in json) {
            var target = json[key]; //目标位置;
            var current = parseFloat(getStyle(obj,key));//当前位置
            var step = (target-current)/30; //步长
            step = step>0?Math.ceil(step):Math.floor(step);
            if(key=="opacity"||key=="zIndex"){
                target = json[key]*100;
                current =parseFloat(getStyle(obj,key))*100
            }
            if(key=="opacity"||key=="zIndex"){
                obj.style[key]=(current+step)/100;
            }else{
                obj.style[key]=current+step+"px";
            };
            //判断当前属性的动画是否执行完
            if(current!=target){
                //条件满足，说明动画没完成
                bflag=false;
            };
        };
        if(bflag){
            clearInterval(obj.timer);
            if(typeof(fn)=="function"){
                fn.call(obj,obj);
            }
        }
    },30)
};

/**
 *
 * @returns {*}
 */
function getScroll(){
    if(window.pageYOffset!=null){
        return {
            "top":window.pageYOffset,
            "left":window.pageXOffset
        }
    }
    if(document.compatMode=="CSS1compat"){
        return {
            "top":document.documentElement.scrollTop,
            "left":document.documentElement.scrollLeft
        }
    }
    return {
        "top":document.body.scrollTop,
        "left":document.body.scrollLeft
    }

}