/*
{
url:"",
data:{},

}
 */
function JSONP(json){
    var fnName = "jp_"+parseInt(Math.random()*10000);
    window[fnName]=json.callback;
    // 处理数据  拼接成src 地址
    var strUrl = json.url+"?"+para(json.data)+json.cbName+"="+fnName;
    // 创建script标签
    var oScript =document.createElement("script");
    oScript.src=strUrl;
    document.body.appendChild(oScript);
    // 利用script标签的onload事件 在完成时移除script标签
    oScript.onload=function(){
        this.remove();
        delete window[fnName];
    };


    function para(obj){
        var str ="";
        for (var key in obj) {
            str+=key+"="+obj[key]+"&&"
        }
        return str;
    }
}