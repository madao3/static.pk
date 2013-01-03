Pianke.LayerLogin = {
  init: function() {
    this.checkEmpty();
    this.attachEvents();
  },
  checkEmpty: function() {
    var mainElement = ".registerform"
    ,inputs = $(mainElement + " input");
    for(var i = 0 ; i < inputs.length ; i++){
      if($(inputs[i]).val() != ""){
        $(".placehoder",$(inputs[i]).parent().parent()).hide();
      }
    }
  },
  attachEvents: function() {
    var that = this
    ,mainElement = "#fixedlogin .registerform";
    $(mainElement + " input").focus(that.getFocus()).blur(that.loseFocus());
    $(".away .loginw").bind("click",function(){
      that.clickOnRegBtn()
    });
  },
  clickOnRegBtn: function(event) {
    var that = this;
    event&&event.preventDefault&&event.preventDefault();
    if($(this).attr("logining")){
      return;
    }
    $(this).attr("logining",true);
    that.login(this);
  },
  getFocus: function() {
    var that = this;
    return function(event) {
      $(".placehoder",$(this).parent().parent()).hide();
    }
  },
  loseFocus: function() {
    var that = this;
    return function(event) {
      if($.trim($(this).val()) == ""){
        $(".placehoder",$(this).parent().parent()).show();
        $(this).val("");
      }
    }
  },
  login: function(that) {
    var that = this;
    var email = $.trim($("#layer_email").val()),
    password = $.trim($("#layer_pass").val()),
    fromurl = $("#fixedlogin .fromurl").val();
    if(email == "" || password == ""){
      $(that).removeAttr("logining");
      return;
    }
    $.ajax({
      url:"../../api/user/login",
      type:"POST",
      data:"email="+email+"&fromurl="+fromurl+"&passwd="+password,
      dataType:"json",
      success:function(data) {
        if(data.code != "A00000"){
          $(".registerform .ts").html(PKINFO.eCode[data.code]).show();
          $(that).removeAttr("logining");
        }else{
          that.updateUser(data);
        }
      }
    })
  },
  updateUser : function(data){
    el  = '<a class="name_pic" href="/profile/"><img src="'+data.data.icon+'"></a><div class="account"><a href="#" class="off">帐号<span class="xia"></span></a><ul class="xl radius shadow1" style="display: none;"><li><a href="/user/setinfo.php">帐号设置</a></li><li><a href="/commentbox/inbox">消息中心</a></li><li><a href="/user/logout.php">退出</a></li></ul></div>';
    $('.weibo:first').html(el).attr('id',"logininfobox");
    $('.head').append('<div class="new_idea" id="newunread" style="display: none;"><div class="box"></div></div>');
    window.PKINFO ={
      islogin:1,
      uinfo:{
        uid:data.data.uid, 
        uname:data.data.uname,
        icon:data.data.icon
      }
    };
    $('#fixedlogin').slideDown(200,function(){$(this).remove()});
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
    });
    $("#logininfobox .account > a").click(function(e){
      e.preventDefault();
    });
    
  }
}
