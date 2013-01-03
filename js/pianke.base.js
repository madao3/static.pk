/*
 * http://www.pianke.me
 * 
 * 核心函数
 * 
 * 声明Pianke这个核心方法变量
 *
 * Date: Mon Dec 10 16:55:29 +0800 2012
 */

var Pianke = {
  // 全局方法  初始化大部分函数
  baseInit : function(){
    backToTop();
    $('.e_close').click(function(){$("#errortip").hide();})
    $(document).click(function(e){
      if(!$(e.target).parents('.bq,.tjbq').length){
        $(".bq").hide();
      }
    });
    $('#fix_layer_login_form').submit(function(e){
      e.preventDefault();
      Pianke.LayerLogin.clickOnRegBtn();
    });
    Pianke.emotion.init();
  },
  wordcard : {},
  timeline : {},
  comment  : {},
  mail     : {},
  reg      : {},
  user     : {},
  messagebox : {}
};

$(function(){
  Pianke.baseInit();
  pageInit();
})

// 初始化页面
pageInit = function(){
  // 暂时这么用
  path = location.pathname.split('/')[1].toString();
  switch(path){
    case 'wordcard':
    case 'posts':
    case 'card':
    case 'cardrec':
      Pianke.wordcard.init();
      Pianke.comment.init();
      Pianke.slider.init();
      break;
    case 'timeline':
      Pianke.timeline.init();
      break;
    case 'reg':
    case 'user':
      Pianke.reg.init();
      Pianke.user.init();
      Pianke.changePwd.init();
      break;
    case 'bind':
      Pianke.Oauth.init();
      break;
    case 'profile':
      Pianke.user.init();
      Pianke.wordcard.init();
      Pianke.comment.init();
      Pianke.timeline.init();
      Pianke.theater.init();
      break;
    case 'theater':
    case 'subject':
      Pianke.theater.init();
      Pianke.comment.init();
      break;
    case 'public':
      Pianke.public.init();
    default:
      break;
  }
}

Pianke.SendEmail = function(email) {
  $.ajax({
    type: "POST",
    data: "email="+email,
    url: "../api/reg/resendemail",
    dataType:"json",
    success:function(data){
      if(data.code == "A00000"){
        alert('发送成功！');
      }else{
        alert(PKINFO.eCode[data.code]);
      }
    }
  })
}

if(!window.console){
  window.console = {log:function(){}};
}

window.alert = function(msg){
  var className = "poplayer";
  var poplayer = $("<div class='poplayer' style='left:50%;top:20%;'>"+msg+"</div>"),
  width = $(window).width(),
  height = $(window).height();
  var left = (width - poplayer.width()) /2-40-5,
  top = (height - poplayer.height())/2 + $(document.body).scrollTop();
  poplayer.css("left",left+"px").css("top",top+"px");
  $(document.body).append(poplayer);
  setTimeout(function(){
    $("body > .poplayer").remove();
  },2000);
}

window.confirm = function(msg,callback){
  var confirm = $('#fix_confirm');
  confirm.show().find('.inner').text(msg)
  .end().find('.cancel').unbind('click').bind('click',function(){confirm.hide();})
  .end().find('.primary').unbind('click').bind('click',function(){
    callback();
    confirm.hide();
  })  
}
