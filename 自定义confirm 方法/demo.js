(function(){
    function con(title, msg, OK, NO, fn){
        var $box = $("<div></div>");
        $box.append($(`<div><p>${title}</p></div>`));
        $box.append($(`<div><p>${msg}</p></div>`));
        $box.append($(`<div><button data-info=true>${OK}</button><button data-info=false>${NO}</button></div>`));
        $box.appendTo($("body"));
        $box.css({
            position : "fixed",
            left : 0,
            top : 0,
            right : 0,
            bottom : 0,
            margin : "auto",
            width : "80%",
            height : "50%",
            backgroundColor : "#ccc",
            textAlign : "center"
        });
        $box.find("button").on("click", function(){
            $box.hide();
            fn($(this).data("info"))
        })
    }

    window.con = con
})();