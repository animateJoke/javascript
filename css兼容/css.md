# 兼容

1.position:relative;在ie下滚动条滚动时会有抖动问题；
    解决：用position:fixed；

2.兼容ie下隐藏滚动条；
    解决：给外层加个div,固定宽度overflow:hidden;