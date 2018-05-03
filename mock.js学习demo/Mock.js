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
            "name":"@name",//随机生成中文名字   @name之前如果有@cname也只会生成中文名字
            "name1":"@cname",//随机生成英文名字
            "isTrue|1":true,//随机生成Boolean值
            "isTrue1|1-9":true,//随机生成Boolean值  1/10的几率位true,9/10的几率为false
            "color":"@color",//随机生成16进制颜色值
            'name2|1-3': '重复内容',//通过重复 'value' 生成一个字符串，重复次数大于等于 min，小于等于 max。
            'name3|4': '重复内容',//固定重复次数
            'number1|1-100.1-10': 1.2222,//整数（1,100]随机，小数1-10位随机
            'number2|123.1-10': 1.3333,//整数位123固定，小数1-10位随机
            'number3|123.3': 2.111,//整数位123固定，小数3位随机
            'number4|123.10': 1.123,//属性值小数点后的数值会在结果中固定显示
            //对象  随机在对象中抽取固定数量的属性
            'obj|1':{
                "name":"@name",
                "isTrue|1":true
            },
            //对象  随机在对象中抽取1-3条属性
            'obj1|1-3':{
                "name":"@name",
                "isTrue|1":true,
                'number1|1-100.1-10': 1.2222,
                'number2|123.1-10': 1.3333
            },
            // |后为1时，随机抽取一个元素返回，不为1时把当前数组重复N次合并
            'arr|2':[1,2],
            //数组重复次数在[2,3]之间
            'arr1|2-3':[1,2]
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