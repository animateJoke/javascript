/**
 *
 * @param {String} key
 * @param {String} value
 * @param {Number} days
 * @param {String} path
 * @param {String} domain
 * @param {Boolean} secure
 * @returns {string}
 */
function setCookie(key,value,days,path,domain,secure){
    var strCookie ="";
    if(key&&value){
        strCookie+=encodeURIComponent(key)+"="+encodeURIComponent(value);
        if((typeof days)=="number"){
            var date = new Date();
            date.setDate(date.getDate()+days);
            strCookie+=";expires="+date;
        }
        if(path){
            strCookie+=";path="+path;
        }
        if(domain){
            strCookie+=";domain"+domain;
        }
        if(secure){
            strCookie+=";secure";
        }

    }else {
        alert("name和value必须填写");
        return;

    }
    document.cookie=strCookie;
    return strCookie;

}


/**
 *
 * @param {String}key
 */
function charCookie(key){
    var str = document.cookie;
    var arr =str.split(";");
    for(var i=0; i<arr.length; i++){
        var tempstr = arr[i].trim();
        var temparr = tempstr.split("=")
        if(decodeURIComponent(temparr[0])==key){
            return decodeURIComponent(temparr[1]);
        }
    }
    return ""
}

/**
 *
 * @param {String} key
 */
function deleteCookie(key){
    setCookie(key,null,-1)
}