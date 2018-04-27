//创建require清单模块
define("config",[],function(){
    require.config({
        paths:{
            "mock":"http://mockjs.com/dist/mock"
        }
    })
});
