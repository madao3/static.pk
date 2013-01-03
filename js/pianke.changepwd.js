Pianke.changePwd = {
  init: function(){
    if(/changepwd/.test(location.pathname)){
      this.attachEvents();
    }
  },
  checkEmpty: function() {
    var mainElement = ".registerform";
    var inputs = $(mainElement + " input");
    for(var i = 0 ; i < inputs.length ; i++){
      if($(inputs[i]).val() != ""){
        $(".placehoder",$(inputs[i]).parent().parent()).hide();
      }
    }
  },
  attachEvents: function() {
    var that = this;
    var mainElement = ".registerform";
    $(mainElement + " input").focus(that.getFocus());
    $(".registerform .login_true").bind("click",function(e){
      that.clickOnRegBtn(e);
    });
  },
  clickOnRegBtn: function(e){
    var that = this;
    e.preventDefault();
    if($("#o_pass").val() == "" || $("#n_pass").val() == "" || $("#c_pass").val() == ""){
      $(".registerform .login_true").removeAttr("logining");
      return;
    }
    if($(this).attr("logining") == true){
      return;
    }
    if(that.checkAll()){
      that.register();
    }
  },
  getFocus: function() {
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
      that.check(this);
    }
  },
  check: function(obj){
    var that = this;
    if(!obj){
      return;
    }
    var id = obj.id,
    value = $.trim($(obj).val());

    if(value == "") {
      that.msg("密码不能为空");
      return false;
    }
    if(value.length < 6 || value.length > 20){
      that.msg("密码长度为6-20位字符");
      $(this).val("");
      return false;
    }
    that.msg("",id,true);
    return true;
  },
  msg: function(text,ifHide) {
    ifHide = ifHide || false;
    if(ifHide){
      $("#err_msg").html(text).css("display","none");
    }else{
      $("#err_msg").html(text).css("display","list-item");
    }
  },
  checkAll: function() {
    var that = this;
    var c_pass = that.check($("#c_pass")[0]);
    if(!c_pass){
      return false;
    }
    var n_pass = that.check($("#n_pass")[0]);
    if(!n_pass){
      return false;
    }
    var o_pass = that.check($("#o_pass")[0]);
    if(!o_pass){
      return false;
    }
    if(c_pass && n_pass && o_pass){
      if($("#c_pass").val() !== $("#n_pass").val()){
        that.msg("两次输入的密码不一致，请重试");
        $("#c_pass").val("");
        $("#n_pass").val("");
        return false;
      }
      return true;
    }else{
      return false;
    }
  },
  register: function() {
    var that = this;
    $(".registerform .login_true").attr("logining",true);
    var oldpwd = $.trim($("#o_pass").val()),
    newpwd  = $.trim($("#n_pass").val());
    $.ajax({
      url:"../api/user/changepwd",
      type:"POST",
      data:"oldpwd="+oldpwd+"&newpwd="+newpwd,
      dataType:"json",
      success:function(data) {
        if(data.code != "A00000"){
          that.msg(PKINFO.eCode[data.code]);
          $(".registerform .login_true").removeAttr("logining");
        }else{
          alert("密码修改成功");
        }
        $("#o_pass").val("");
        $("#n_pass").val("");
        $("#c_pass").val("");
      }
    })
  }
}
