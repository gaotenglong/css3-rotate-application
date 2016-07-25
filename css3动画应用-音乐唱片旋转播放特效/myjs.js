/**
 * Created by gao on 2016/7/25.
 */
window.onload=function(){
    var icon1 = document.getElementById("icon1");
    var icon2 = document.getElementById("icon2");
    var pic1 = document.getElementById("pic1");
    var pic2 = document.getElementById("pic2");
    var xuanzhuan = document.getElementById("xuanzhuan");
    var audio = document.getElementsByTagName("audio")[0];
    //当音乐播放完停止时，自动停止图片旋转
    audio.addEventListener("ended",function(event){
        xuanzhuan.setAttribute("id","");
        //xuanzhuan.style.animationPlayState = "paused";
    },false);
    //点击暂停播放时，音乐暂停，图片停止旋转
    icon1.onclick=function(){
        audio.pause();
        pic1.style.display="none";
        pic2.style.display = "block";
        //xuanzhuan.setAttribute("id","");
        xuanzhuan.style.animationPlayState = "paused";
    };
    //点击播放音乐时，音乐开始播放，图片开始旋转
    icon2.onclick=function(){
        audio.play();
        pic1.style.display="block";
        pic2.style.display = "none";
        //xuanzhuan.setAttribute("id","xuanzhuan");
        xuanzhuan.style.animationPlayState = "running";
    }
};
