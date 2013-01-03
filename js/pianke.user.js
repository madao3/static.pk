Pianke.user = {
  init : function(){
    document.domain = "pianke.me";
    this.bindEvent();
  },
  bindEvent : function(){
    var that = this;
    $('#picfile').bind('change',function(){
      that.uploadImage(this)
    });
    $('.edit_avatar .login_true').bind('click',function(){
      that.saveImage(this)
    })
  },
  iconurl : "",
  ready : false,
  uploadImage : function(obj){
    var that = this
    $.ajaxFileUpload({
      url:'http://img.pianke.me/uploadicon', 
      secureuri:false,
      fileElementId:'picfile',
      dataType: 'json',
      type:"post",
      success: function (data, status){
        if(data.code != "A00000"){
          alert(PKINFO.eCode[data.code]);
          that.ready = false;
        }else{
          that.iconurl = data.data.icon_m;
          $(".img1 img").attr("src",data.data.icon_l+"?"+(new Date()).getTime());
          $(".img2 img").attr("src",data.data.icon_m+"?"+(new Date()).getTime());
          $(".img3 img").attr("src",data.data.icon_s+"?"+(new Date()).getTime());
          that.ready = true;
        }
      },
      error: function (data, status, e){
        that.ready = false;
        alert(e);
      }
    });
    return false;
  },
  saveImage : function(obj){
    var that = this
    if(that.iconurl == ""){
      alert("请先选择图片");
      return;
    }
    if(that.ready == false){
      return;
    }
    $.ajax({
      url: "/api/user/seticon",
      type:"post",
      dataType:"json",
      data:"icon="+that.iconurl,
      success:function(s){
        if(s.code == "A00000"){
          alert("修改成功");
          //window.location.reload();
        }else{
          alert(PKINFO.eCode[data.code]);
        }
      }
    })
    return false;
  }}