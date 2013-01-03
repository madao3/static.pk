Pianke.comment = {
  init : function(){
    this.bindEvent();
    if($('#comment_isdetail').length!=0){
      var contentid = $('#comment_contentid').val();
      var isdetail  = $('#comment_isdetail').val();
      this.getcomment($('.entry'),isdetail,1);
    }
  },
  bindEvent : function(){
    var that = this;
    $('.entry .send,.entry .sendn').live('click',function(){
      that.submitcomment($(this))
    });
    $('.close_comment_box').live('click',function(){
      $(this).hide().prev().hide()
    });
    $(".ajax_fenye a").live("click",function(e){
      e.preventDefault();
      e.cancelBubble=true;
      page = $(this).attr("href").match(/page=(\d+)/);
      el = $(this).parents('.entry');
      if(page){
        that.getcomment(el,1,page[1]);
        $(document).scrollTop(el.offset().top-80)
      }
      return false;
    });
    
    $('.comment_reply').live('click',function(){
      var el   = $(this)
         ,content  = el.parent()
         ,textarea = el.parents('.entry').find('textarea')
         ,uid  = el.attr('data-id')
         ,name = el.siblings('.comment_user_name').text()
         ,cid  = content.attr('data-id')
         ,pid  = textarea.attr('data-id');
      that.replycomment(pid,cid,uid,name,textarea);
    });
  },
  getcomment : function(el,isdetail,page) {
    var box   = el
       ,list  = box.find('.comment_list')
       ,textarea   = box.find('textarea')
       ,pagination = box.find('.pagination')
       ,contentid  = box.find('.send,.sendn').attr('data-id')
       ,arrow      = el.prev('.arrow_top')
    if('' == contentid || "undefined" == typeof(contentid)) {
      return false;
    }
    var type = $("#type_" + contentid).val()||1;
    if('' == type || "undefined" == typeof(type)) { return false;}
    if('' == page || "undefined" == typeof(page)) { page = 1;}
    if(isdetail != 1){
      var display = textarea.is(':visible')
      if(!display){
        box.show();
        box.next('.cl').show()
        arrow.show()
        textarea.focus()
      }else{
        box.hide();
        arrow.hide()
        box.next('.cl').hide()
      }
    }
    $.getJSON('/api/comment/get.php', {'contentid':contentid,'type':type,'page':page,'listtype':2},
    function (result){
      if(result.code != 'A00000'){
        return false;
      }else{
        list.show();
        list.html(result.data.list);
        if(result.data.pagehtml !='' ){
          pagination.show().html(result.data.pagehtml)
        }
      }
    });
    return true;
  },
  submitcomment : function(el){
    if (!addcommentswitch) {return false;}
    var id    = el.attr('data-id')
       ,box   = el.parent()
       ,textarea = box.find('textarea')
       ,content  = textarea.val()
       ,list     = box.find('.comment_list')
       ,number   = box.prev().find('.get_comment .number')
       ,recid = $("#recid_" + id).val()
       ,reuid = $("#reuid_" + id).val();
    if('' == id || "undefined" == typeof(id)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    if('' == content || "undefined" == typeof(content)) {
      showerrortip('抱歉，内容不能为空！');
      return false;
    }
    if(number.length==0){
      number = $(box).parents('.own').find('.get_comment .number');
    }
    var params = {
      'contentid':id,
      'content':content,
      'recid':recid,
      'reuid':reuid
    };
    addcommentswitch = false;
    $.post('/api/comment/add.php', params,
      function (result){
        addcommentswitch = true;
        switch(result.code){
          case 'A00001':
            openlogintip();
            return false;
          case 'A00000' :
            textarea.val('');
            list.show();
            if(result.data.data.num == 1){
              list.html(result.data.data.list);
            }else{
              list.find("li:first").before(result.data.data.list);
            }
            var num = number.html()
            if ('' == num || "undefined" == typeof(num)) {
              num = 0;
            }
            num = parseInt(num) + 1;
            number.html(num).removeClass("no")
            return true;
          default :
            showerrortip(result.data.msg);
            return false;	
        }
      },'json');
    return true;
  },
  replycomment : function(pid,cid,uid,name,textarea){
    $('#recid_'+pid).val(cid);
    $('#reuid_'+pid).val(uid);
    textarea.focus().val('回复 '+name);
    return false;
  }
  
}