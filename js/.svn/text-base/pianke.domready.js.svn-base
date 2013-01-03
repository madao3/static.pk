$(document).ready(function(){
  $("#logininfobox .account").hover(function(e){
    e.preventDefault();
    e.stopPropagation();
    var ul = $("ul",$(this));
    ul.show();
    $("a",$(this)).get(0).className = "on";
  },function(event){
    $("a",$(this)).get(0).className = "off";
    var ul = $("ul",$(this));
    ul.hide()
  })
  $("#logininfobox .account > a").click(function(e){
    e.preventDefault();
  })

  $(document).click(function(event){
    $(".d_dropmenu").hide();
  })

  $(".dropmemu").parent().hover(function(){
    var ul = $("ul",$(this).parent());
    ul.css("display","block");
    $(".dropmemu",this).addClass("current");
  },function(){
    var ul = $("ul",$(this).parent());
    ul.css("display","none");
    $(".dropmemu",this).removeClass("current");
  })

  // 个人设置页面初始化

  if($("#user_setting") && $("#user_setting").size() == 1){
    (new Pianke.pSetting()).init();
  }

  if($("#fixedlogin") && $("#fixedlogin").size() ==1){
    Pianke.LayerLogin.init();
  }
})
