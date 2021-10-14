function playMusic() {
        var audioEle = document.getElementById("audio");
      if (audioEle.paused){
        audioEle.play();
      }else {
        audioEle.pause();
      }
    }
    
    $("#music").click(function(){
      play();
    });

    var player = document.getElementById("audio");
    play();
    function play(){
    swal("--------------------------公------告--------------------------\n\n微信公众号：白何吖\n\n我们更换了全新的页面,\n\n[新增]：\n\n[新增VIP视频解析]\n\n--(优酷VIP视频,爱奇艺VIP视频,腾讯VIP视频,乐视VIP视频,芒果VIP视频,所有需要VIP会员或超前点播的的视频都能解析观看,全能VIP视频解析)\n\n[新增日记系统]\n\n--记录点滴过程\n\n[新增壁纸下载]\n\n--全部壁纸免费下载，快去看看有没有你喜欢的吧\n\n[修复问题]：\n\n--修复了QQ查绑数据异常问题\n\n--修复了部分手机出现字体错位问题", {
            buttons: {
                /*cancel: "开启",*/
                allow: "朕已阅"
            }
        }).then(function(value) {
            if (value == "allow") {
                player.pause()
            } else {
                player.play();
            }
        });
    }
