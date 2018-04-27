require(["config"],function(){
    require(["mock"],function(Mock){
        //模拟自定义对象
        var data = Mock.mock({
            "list|2-3":23,
            "name|1":"@cname",
            "age|1-88":100
        })
        console.log(JSON.stringify(data,null,4));
        //模拟ajax请求
        var data1 = Mock.mock("http://rich.cn",{
            "name":"@cname",
            "isTrue|1":true,
            "color":"@color"
        });
        $.ajax({
            url:'http://rich.cn',
            success:function(e){
                console.log(e)
            }
        });
        console.log(data1,null,4)
    })
});