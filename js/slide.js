window.onload = function() {
    // 容器对象
    var box = document.getElementById("container");
    // 图片对象
    var imgs = box.getElementsByTagName('img');
    len = imgs.length;
    // 单张图片的宽度
    // 是指对象自身的宽度，整型，单位像素（含边线，如滚动条的占用的宽，值会随着内容的输入而不断改变）。
    var imgWidth = imgs[0].offsetWidth;
    // 设置掩藏门体露出的宽度
    var exposeWidth = 160;
    //设置容器总宽度
    var boxWidth = imgWidth + (len - 1) * exposeWidth;
    box.style.width = boxWidth + "px";
    // 设置每个图片的的初始位置
    function setImgsPos() {
        for (var i = 1; i < len; i++) {
            imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + "px";
        }
    }
    setImgsPos();
    //计算每道门打开时应移动的距离
    var translate = imgWidth - exposeWidth;
    //为每道门绑定事件
    for (var i = 0; i < len; i++) {
        // 使用立即调用的函数表达式，为了获得不同的i值
        (function(i) {
            imgs[i].onmouseover = function() {
                // 先将每道门复位
                setImgsPos();
                //打开门
                for (var j = 1; j <= i; j++) {
                    imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + "px";

                }
            }
        })(i);
        (function(i) {
            imgs[i].onmouseleave = function() {
                // 先将每道门复位
                setImgsPos();
            }
        })(i);
    }

}