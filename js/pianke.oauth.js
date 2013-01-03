Pianke.Oauth = {
  init : function() {
    this.bindEvent();
  },
  bindEvent : function() {
    var that = this
    ,mainElement = ".registerform";
    $(mainElement + " input").bind('focus',function(){
      that.getFocus($(this))
    }).bind('blur',function(){
      that.loseFocus($(this))
    });
    $('#bindnew').bind('keydown',function(e){
      if(e.keyCode == 13){
        $(".away .login_but").trigger('click')
      }
    })
    $(".away .login_but").bind("click",that.clickOnRegBtn());
    $("#myTab").delegate("li","click",function(e){
      if($(this).hasClass("current")){
        return;
      }
      var old = $(".current",$(this).parent())
         ,oldTarget = $(old.attr("target"));
      old.removeClass("current");
      oldTarget.hide();
      $(this).addClass("current")
      $($(this).attr("target")).show();
      e.preventDefault();
    })
    $("#read").bind("click",function() {
      if($(this).attr("checked")){
        $("#register_btn").removeClass("login_gray");
      }else{
        $("#register_btn").addClass("login_gray");
      }
    })
  },

  clickOnRegBtn: function() {
    var that = this;
    return function(event) {
      event.preventDefault();
      if($(this).hasClass("login_gray")){ // 防止多次点击
        return;
      }
      if(that.checkAll() && this.id == "register_btn"){
        that.register(this);
        return;
      }
      if(this.id == "bind_btn" && ($("#pass2").val() == "" || $("#email2").val() == "")){
        return;
      }
      if(that.checkAllExt() && this.id == "bind_btn"){
        that.bindOauth(this);
        return;
      }
    }
  },
  getFocus: function(el) {
    var that = this;
    el.parent().prev().hide();
    var id = el.attr('id');
    switch(id) {
      case "uname":;
      case "nickname":
      that.msg("4-30位字符，中英文均可",id);
      break;
      //case "email2":;
      case "email":
      that.msg("很重要，用于登录片刻网站",id);
      break;
      //case "pass2":;
      case "password":
      that.msg("6-20位字符，区分大小写",id);
      break;
      default:break;
    }
  },
  loseFocus: function(el) {
    var that = this;
    if(that.id == "email2" || that.id == "pass2"){return}
    if($.trim(el.val()) == ""){
      el.parent().prev().show().val("");
    }
    setTimeout(function(){that.check(el)},100);
  },
  check: function(el){
    if(!el){
      return;
    }
    var that = this
       ,id = el.attr('id')
       ,value = $.trim(el.val());
    switch(id) {
      case "uname":
      if(value == "") {
        that.msg("昵称不能为空",id);
        return false;
      }
      that.name_isuniq(el)
      if(value.replace(/[^\x00-\xff]/g,"**").length < 4 || value.replace(/[^\x00-\xff]/g,"**").length > 30){
        that.msg("昵称长度为4-30位字符",id);
        return false;
      }
      break;
      case "email":
      var emailreg = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
      if(value.length == 0 || value == '常用邮箱'){
        that.msg("邮箱不能为空",id);
        return false;
      }
      if(!emailreg.test(value)){
        that.msg("邮箱格式错误",id);
        return false;
      }
      $.post('/api/reg/checkemail',{email:value},function(data){
        if(data.data.msg){
          that.msg(data.data.msg,id);
          return false;
        }
      },'json')
      break;
      case "password":
      if(value == "") {
        that.msg("密码不能为空",id);
        return false;
      }
      if(value.length < 6 || value.length > 20){
        that.msg("6-20位字符，区分大小写",id);
        return false;
      }
      that.msg("",id,true);
      break;
      default:
      return true;
    }
    that.msg("",id,true);
    return true;
  },
  msg: function(text,id,ifHide) {
    ifHide = ifHide || false;
    if(ifHide){
      $("#err_"+id).slideUp(200).html(text);
    }else{
      $("#err_"+id).slideDown(200).html(text);
    }
  },
  checkAll: function() {
    var that = this;
    var password = that.check($("#password")),
    email = that.check($("#email"));
    if(password && email){
      return true;
    }else{
      return false;
    }
  },
  checkAllExt: function() {
    var that = this;
    var password = that.check($("#pass2")),
    email = that.check($("#email2"));
    if(password && email){
      return true;
    }else{
      return false;
    }
  },
  register: function(that) {
    var that = this;
    if(!$("#read").attr("checked")){
      alert("请先阅读并同意使用协议");
      return;
    }
    var email = $.trim($("#email").val()),
    password = $.trim($("#password").val()),
    ouid = $("#ouid").val(),
    source = $("#oauthSource").val(),
    uname = $("#uname").val();
    $.ajax({
      url:"../../api/bind/bindnew",
      type:"POST",
      data:"email="+email+"&uname="+uname+"&passwd="+password+"&ouid="+ouid+"&source="+source,
      dataType:"json",
      success:function(data) {
        if(data.code != "A00000"){
          that.msg(PKINFO.eCode[data.code],"password");
        }else{
          window.location = data.data.redirect;
        }
      }
    })
  },
  bindOauth: function(that) {
    var that = this;
    $(that).addClass("login_gray");
    var email = $.trim($("#email2").val())
       ,password = $.trim($("#pass2").val())
       ,ouid = $("#ouid").val()
       ,source = $("#oauthSource").val();
    if(email == "" || password == ""){
      return;
    }
    $.ajax({
      url:"../../api/bind/bindexists",
      type:"POST",
      data:"email="+email+"&passwd="+password+"&ouid="+ouid+"&source="+source,
      dataType:"json",
      success:function(data) {
        if(data.code != "A00000"){
          that.msg(PKINFO.eCode[data.code],"pass2");
          $(that).removeClass("login_gray");
        }else{
          window.location = data.data.redirect;
        }
      }
    })
  },
  name_isuniq : function(el){
    var name = $.trim(el.val())
       ,that = this;
    $.post('/api/reg/checkuname',{uname:name},function(data){
      if(data.code == 'A00202'){
        that.msg(data.data.msg,'uname');
      }
    },'json');
  }
  
}
