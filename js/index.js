//解决移动的点击事件延迟问题

$(function() {    
  FastClick.attach(document.body);    
});  

//大标题动画
  
  $(function(){
    var tirge = $(".title_word");
    tirge.animate({top:"1.84rem"},1000,"swing",function(){
      tirge.addClass("shake")
     
    });

  })

  //背景音乐控制

  $(function(){
    var playbutton =$("#play");
    playbutton.on("click",function(){
      var player = $("#viewBgMusicId")[0]; /*jquery对象转换成js对象*/
      if (player.paused){ /*如果已经暂停*/
          player.play(); /*播放*/
            
          playbutton.addClass("music_on");
          playbutton.removeClass("music_off")

      }else {
          player.pause();/*暂停*/
         
          playbutton.addClass("music_off");
          playbutton.removeClass("music_on")
        
         
      }
    })

  })
