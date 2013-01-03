Pianke.reg = {
  init: function() {
    if(/changepwd/.test(location.pathname)){
      return
    }
    this.bindEvent();
  },
  bindEvent : function() {
    var that = this
       ,mainElement = ".registerform";
    $(mainElement + " input").focus(function(){
      that.getFocus(this);
    }).live('blur',function(){
      that.loseFocus(this)
    });
    $('form').bind('submit',function(e){
      e.preventDefault();
      if(that.checkAll()){
        that.register();
      }
    });
    $('#submit_find_pwd').click(function(e){
      e.preventDefault();
      var el = $('#email');
      if(!that.emailTest()){
        $('#nobody').slideDown(200).text('邮件格式错误')
        return false;
      }
      if($.trim(el.val())=="" || $.trim(el.val()) == "请输入您注册时填写的邮箱"){
        $('#nobody').slideDown(200).text('邮箱不能为空')
        return false;
      }else{
        that.submitData();
      }
    });
    $("#resend").click(function(event){
      Pianke.SendEmail($(this).attr("data"));
      event.preventDefault();
    })
        
    $("#register_btn").bind("click",function(){
      if($(this).hasClass('login_gray')){return false}
      that.clickOnRegBtn()
    });
    $("#read").bind("click",function(e) {
      if($("#read").attr("checked")){
        $("#register_btn").removeClass("login_gray");
      }else{
        $("#register_btn").addClass("login_gray");
      }
    });
    $('input:password').dPassword();
    $(':input[name="password_"]').hide();
    $('#email').focus(function(){
      var el = $(this)
         ,val = el.val()
      el.removeClass('gray1');
      if(val == PKINFO.defText.email||el.val()=='常用邮箱'||val == '请输入您注册时填写的邮箱'){
        el.val('');
      }
    })
    .blur(function(){
      el = $(this)
      el.addClass('gray1');
      if(el.val() == ''){
        text = $('.wrapper').hasClass('resetx')?PKINFO.defText.find_password:PKINFO.defText.email;
        if(/reg/.test(location.pathname)&&text=="邮箱"){text="常用邮箱"}
        el.val(text);
      }
    });
    $('#n_password').focus(function(){
      $(':input[name="password_"]').removeClass('gray1');
      if($(this).val() == PKINFO.defText.password || $(this).val()==''){
        $(this).val('').hide();
        $(':input[name="password_"]').show().focus();
      }
    });
    $(':input[name="password_"]').focus(function(){
      $(this).removeClass('gray1');
    })
    .blur(function(){
      $(this).addClass('gray1');
      if($(this).val() == ''){
        $(this).hide();
        $('#n_password').show(); 
        $('#n_password').val(PKINFO.defText.password);
      }
    });
    $('#login_btn').bind('click',function(e){
      e.preventDefault();
      var email  = $.trim($('#email').val())
         ,passwd = $.trim($('#password').val())
         ,fromurl = $('#fromurl').val() || '';
      if(email==''||email==PKINFO.defText.email || passwd==''){
        return;
      }
      $.ajax({
        url:"../api/user/login",
        type:"POST",
        data:{
          passwd:passwd,
          email : email,
          fromurl : fromurl
        },
        dataType:"json",
        success:function(data) {
          if(data.code != "A00000"){
            $('#err_password').html(PKINFO.eCode[data.code]);
            $('#err_password').fadeIn();
          }else{
            window.location = data.data.redirect;
          }
        }
      })
    });
  },
  clickOnRegBtn: function() {
    var that = this;
    return function(event) {
      event.preventDefault();
      event.stopPropagation();
      if($(this).hasClass("login_gray")){
        return;
      }
      if(that.checkAll()){
        that.register();
      }
    }
  },
  getFocus: function(el) {
    var that = this
       ,el = $(el)
       ,id = el.attr('id');
    el.parent().prev().hide();
    switch(id) {
      case "nickname":
        that.msg("4-30位字符，中英文均可",id);
        break;
      case "email":
        that.msg("很重要，验证后方可登录片刻",id);
        break;
      case "password":
      case "n_password":
        that.msg("6-20位字符，区分大小写",'password');
        break;
      default:break;
    }
  },
  loseFocus: function(el) {
    var that = this
       ,el   = $(el)
    setTimeout(function(){
      if($.trim(el.val()).length == 0){
        el.parent().prev().show();
        el.val("");
      }
      that.check(el);
    },100);
  },
  check: function(el){
    if(!el){
      return;
    }
    var that = this
       ,id = el.attr('id')
       ,value = $.trim(el.val());
    switch(id) {
      case "nickname":
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
      case "password_password":
      id = 'password'
      if(value == "") {
        that.msg("密码不能为空",id);
        return false;
      }
      if(value.length < 6 || value.length > 20){
        that.msg("密码长度为6-20位字符",id);
        $(this).val("");
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
      $("#err_"+id).html(text).slideUp(200);
    }else{
      $("#err_"+id).html(text).slideDown(200);
    }
  },
  checkAll: function() {
    var that = this;
    var nickname = that.check($("#nickname")),
    password = that.check($("#password")),
    email = that.check($("#email"));
    if(nickname && password && email){
      return true;
    }else{
      return false;
    }
  },
  register: function() {
    var that = this
       ,nickname = $.trim($("#nickname").val())
       ,email = $.trim($("#email").val())
       ,password = $.trim($("#password").val());
    if(!$("#read").attr("checked")){
      alert("请先阅读并同意使用协议");
      return;
    }
    $("#register_btn").addClass("login_gray");
    $.ajax({
      url:"../api/reg/reg",
      type:"POST",
      data:"email="+email+"&uname="+nickname+"&passwd="+password,
      dataType:"json",
      success:function(data) {
        if(data.code != "A00000"){
          that.msg(PKINFO.eCode[data.code],"password");
          $("#register_btn").removeClass("login_gray");
        }else{
          window.location = "gotoemail.php?email="+email;
        }
      }
    })
  },
  submitData: function(){
    var el = $('#email')
       ,error = $('#nobody');
    if($.trim(el.val())==""){return;}
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "/api/user/findpwd",
      data: "email="+$.trim(el.val()),
      success: function(data){
        if(data.code != "A00000"){
          error.show().html(PKINFO.eCode[data.code]);
        }else{
          window.location = data.data.redirect;
        }
      }
    });
  },
  emailTest : function(){
    var curElement = $('#email')
       ,errVal     = $('nobody')
       ,emailReg   = /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i
       ,text       = curElement.val();
    if (!emailReg.test(text) && $.trim(text) != "" && $.trim(text) != "请输入您注册时填写的邮箱") {
      errVal.show().html('邮箱格式错误');
      return false;
    } else {
      errVal.hide();
      return true;
    }
  },
  name_isuniq : function(el){
    var name = $.trim(el.val())
       ,that = this;
    $.post('/api/reg/checkuname',{uname:name},function(data){
      if(data.code == 'A00202'){
        that.msg(data.data.msg,'nickname');
      }
    },'json')
  }
}

