//创建ajax核心对象
/**
 *
 * @returns {} ajax核心对象
 */
function createXHR(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest()
    }
    return new ActiveXObject("Msxml2.XMLHTTP")
};

/**
 *
 * @param json
 */
function ajax(json){
    var xhr = createXHR()
    json.type == undefined ? json.type = "post" : json.type;// 默认方式 post
    json.cync == undefined ? json.cync = true : json.cync;//默认 异步
    if(json.type == "get"){
        xhr.open("get", json.url + "?" + strData(json.data), json.cync);
        xhr.send();
    } else {
        console.log(strData(json.data));
        xhr.open("post", json.url, json.cync);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(strData(json.data));
    }

    if(json.cync){
        //异步
        var p = new Promise((success, error) =>{
            xhr.onreadystatechange = () =>{
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        success(xhr.responseText)
                    } else {
                        error(xhr.status)
                    }
                }
            }
        })
        return p;
    } else {
        //同步
        var p = new Promise((success, error) =>{
            if(xhr.status == 200){
                success(xhr.responseText)
            } else {
                error(xhr.status)
            }
        })
    }
}


function strData(obj){
    var str = JSON.stringify(obj);
    str = str.replace(/{/, "").replace(/}/, "").replace(/,/g, "&&").replace(/:/g, "=").replace(/"/g, "");
    return str
}