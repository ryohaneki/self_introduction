var pics_src = new Array("ryo.jpg","ryo_s.jpg","ryo_t.jpg");
var num = -1;
 
slideshow_timer();

function slideshow_timer(){
    if (num == 2){
        num = 0;
    } 
    else {
        num ++;
    }
    document.getElementById("mypic").src=pics_src[num];
    setTimeout("slideshow_timer()",3000); 
}