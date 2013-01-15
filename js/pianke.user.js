Pianke.user = {
  iconurl : "",
  ready : false,
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
    });
    $('.follow_btn').bind('click',function(){
      if(PKINFO.islogin != 1){
        openlogintip();
        return false;
      }
      var el = $(this)
         ,type = el.hasClass('follow')
         ,url  = '/api/attention/'+(type?'follow':'unfollow')
         ,param = {
           staruids : el.attr('data-id')
          }
         ,text = type?'取消关注':'关注';
       if(el.hasClass('gray')){return false;}
       el.addClass('gray');
       that.get_attention(el,url,param,function(){
         el.removeClass('gray').toggleClass('follow')
         .find('span').text(text)
         .end().find('strong').toggleClass('listen_a listen_c');
       });
    });
    $('.f_right .close,.f_right .closed').live('click',function(){
      var el = $(this)
         ,type = el.attr('data-type')
         ,id = el.attr('data-id')
         ,url = '';
         switch(type){
           case 'posts':
             url='/api/wordcard/delposts.php'
             text = '词卡'
             break;
           case 'subject':
             url='/api/subject/subject_posts_del'
             text = '剧场'
             break;
           case 'talk':
             url='/api/timeline/deltalk.php'
             text = '时间线'
             break;
           case 'topic':
             url='/api/topic/delposts'
             text = '知觉'
             break;
         }
         that.del_profile_item(url,el,{contentid:id},text)
    });
    $('.contact').find('.icon7,.icon8').live('click',function(){
      var el = $(this)
         ,type = el.is('.icon7')
         ,url  = '/api/attention/'+(type?'unfollow':'follow')
         ,param = {
           staruids : el.attr('data-id')
         }
         ,follow_count = $('.icon_name .icon4').next()
         ,follower_count = $('.icon_name .icon5').next()
         ,info = el.parents('.info')
         ,num  = parseInt(follow_count.text(),10) + (type?-1:1)
         ,text = type?"关注":"取消关注"
         ,is_me = (PKINFO.uinfo.uid==location.pathname.split('/')[2]);
      that.get_attention(el,url,param,function(){
        el.toggleClass('icon8 icon7').attr('title',text);
        info.find('.icon6').toggle();
        (is_me==true) && follow_count.text(num);
        if(/fan/.test(location.pathname)&& is_me==true ){
          var eath_other = '<a href="javascript:void(0);" class="ic icon6 curon" title="已互相关注"></a>';
          info.find('.icon6').length || info.append(eath_other);
        }
      })
    });
  },
  del_profile_item : function(url,el,params,text){
    if(PKINFO.islogin != 1){
      openlogintip();
      return false;
    }
    confirm('确定要删除这条'+text,function(){
      $.post(url,params,function(data){
        switch(data.code){
          case 'A00001':
            openlogintip();
            return false;
          case "A00000":
            el.parents('.model,.creation,.create_content').remove();
            return true;
          default:
            showerrortip(data.data.msg);
            return false;
        }
      },'json');
    },true,el);
  },
  get_attention : function(el,url,params,callback){
    $.post(url,params,function(data){
      switch(data.code){
        case 'A00001':
          openlogintip();
          return false;
        case "A00000":
          (callback)()
          return true;
        default:
          showerrortip(data.data.msg);
          return false;
      }
    },'json');
  },
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
  }
}
