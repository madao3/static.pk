Pianke.topic = {
  init : function(){
    this.bindEvent();
  },
  text_tips : '说点什么吧！',
  bindEvent : function(){
    var that = this;
    $('.fake_enter').bind('click',function(){
      $('.fake_enter').hide();
      $('.true_enter').slideDown(50);
      $('.true_enter textarea').focus();
    });
    $('.true_enter textarea').bind('focus',function(){
      var el = $(this)
         ,text = el.val();
      if(that.text_tips == text){
        el.val('').removeClass('gray');
      }
    }).bind('blur',function(){
      var el = $(this)
         ,text = el.val();
      if('' == text){
        el.val(that.text_tips).addClass('gray');
      }
    });
    $('.open').live('click',function(){
      var el = $(this)
         ,box = el.parents('.create_content')
         ,text = el.hasClass('down')?'展开':'收起'
      el.toggleClass('down').text(text);
      box.find('.short,.long').toggle();
    });
    $('.say_but').bind('click',function(){
      var textarea = $('.true_enter textarea')
      ,text = textarea.val();
      if(text.length==0||(text==that.text_tips&&textarea.hasClass('gray'))){
        $('.true_enter .red').show();
      }else{
        var url = '/api/topic/addposts'
        ,param = {
          topicid : $('#topic_id').val(),
          content : text
        };
        $.post(url,param,function(data){
          $('.true_enter .red').hide();
          switch(data.code){
            case 'A00001':
            openlogintip();
            return false;
            case 'A00000':
            html = data.data.data.html
            $('.topic_list').prepend(html)
            textarea.val('')
            return true;
            default:
            showerrortip(data.data.msg);
            return false;
          }
        },'json')
      }
    });
    $('.create_content .like').live('click',function(){
      var el = $(this)
      ,id = el.parents('.icon').attr('data-id')
      ,params = {
        'id':id
      };
      that.submitLike(el,params)
    });
    $('.del_topic').live('click',function(){
      var el  = $(this)
         ,id  = el.attr('data-id')
         ,box = el.parents('.create_content')
         ,className = (box.hasClass('first'))?'first':'';
      confirm("您确定要删除此条内容？",function(){
        var params = {'id':id};
        $.post("/api/topic/delposts",params,function(data){
          if(data.code==="A00000"){
            if(/fposts/.test(location.pathname)){
              location.href='/feeling/'
            }else{
              box.remove();
              $('.create_content:first').addClass(className);
            }
          }else{
            showerrortip(data.data.msg);
          }
        },'json');
      })
    });
  },
  submitLike : function(el,params){
    $.post('/api/attitude/like.php', params,
    function (result){
      addlikeswitch = true;
      switch(result.code){
        case 'A00001':
        openlogintip();
        return false;
        case 'A00000':
        if (0 == result.data.data.good) {
          result.data.data.good = '';
        }
        el.find('.number').text(result.data.data.good).show();
        return true;
        default:
        showerrortip(result.data.msg);
        return false;
      }
    },'json');
  }
}