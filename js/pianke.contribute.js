Pianke.contribute = {
  init : function(){
    this.bindEvent();
  },
  bindEvent: function(){
    var that = this;
    $('input,textarea').bind('focus',function(){
      var el = $(this);
      el.data('text') || el.data('text',el.val());
      el.hasClass('gray') && el.val('').removeClass('gray')
    }).bind('blur',function(){
      var el = $(this)
      if(el.val()===''){
        el.val(el.data('text')).addClass('gray')
      }
    })
    $('#feeling_submit').bind('click',function(){
      var el = $('#feeling_title')
         ,title = el.val()
         ,textarea = $('.case textarea');
      if(el.hasClass('gray')){
        showerrortip('抱歉，请检查您的提交内容！');
        return false;
      }
      var params = {
            title : title,
            content : textarea.hasClass('gray')?'':textarea.val()
          };
      that.submit_contribute('feeling',params);
    });
    $('#wordcard_submit').bind('click',function(){
      var bool = false
         ,num  = 0;
      str = $('.case:first input').map(function() {
        var value = this.value
           ,is_disabled = /gray/.test(this.className);
        num += is_disabled?0:value.length;
        (value=='' && bool==false||is_disabled)&&(bool = true)
        return value.replace(/\s+/g,'');
      }).get().join(',');
      key = 'word';
      if(num>7){
        showerrortip('三个词总共不超过七个字！');
        return false;
      }
      if(bool){
        showerrortip('抱歉，请检查您的提交内容！');
        return false;
      }
      params = eval('({'+key+':"'+str+'"})');
      that.submit_contribute('wordcard',params);
    });
    $('#subject_submit').bind('click',function(){
      var img = $('.image img');
      if(!img.length){
        showerrortip('抱歉，请检查您的提交内容！');
        return false;
      }
      var imglist = img.map(function(){
        return this.src
      }).get().join(',')
      var params = {
        imglist : imglist
      };
      that.submit_contribute('subject',params);
    });
    $('.pic .close').live('click',function(){
      $(this).parent().remove();
    });
    $('#picfile').bind('click',function(){
      if(PKINFO.islogin == 0){
        openlogintip()
        return false;
      }
    }).live('change',function(){
      if(PKINFO.islogin == 0){
        openlogintip()
        return false;
      }
      if($('.pic li').length>=5){
        return false;
      }
      that.uploadImage()
    });
  },
  uploadImage : function(){
    var that = this
       ,loading_img  = $('.add_inst img')
    loading_img.show()
    $.ajaxFileUpload({
      url:'/api/contribute/uploadimg.php',
      secureuri:false,
      fileElementId:'picfile',
      dataType: 'json',
      type:'post',
      success: function (data, status){
        that.afterUpload(data);
        loading_img.hide();
      },
      error: function (data, status, e){
        that.afterUpload(data);
        loading_img.hide();
      }
    });
    
  },
  afterUpload : function(data){
    data = eval("("+data.responseText+")");
    if(data.code != "A00000"){
      alert(PKINFO.eCode[data.code]);
    }else{
      var src = data.data.picurl
         ,inner = '<a href="javascript:void(0);" class="close"></a><div class="image"><p><img src="'+src+'" /></p></div>'
         ,el = $('<li></li>').html(inner);
      $('ul.pic').append(el);
    }
  },
  submit_contribute : function(type,params){
    params.type = type;
    $.post('/api/contribute/add',params,function(data){
      switch(data.code){
        case 'A00001':
          openlogintip();
          return false;
        case 'A00000':
          alert('投稿成功，若被采用将另行通知您，谢谢您对片刻的支持！')
          setTimeout(function(){location.reload()},'2500')
          return true;
        default:
          showerrortip(data.data.msg);
        return false;
      }
    },'json')
  }
}