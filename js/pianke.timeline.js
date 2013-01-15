Pianke.timeline = {
  init : function(){
    this.bindEvent();
  },
  bindEvent : function(){
    var that = this; 
    $('.model .cls,.model .big,.model .big1').live('click',function(){
      var model = $(this).parents('.model')
         ,block = model.parents('.block')
      model.toggleClass('zindex')
      .find('.item').toggleClass('layermo')
      .end().find('p').toggle()
      .end().find('.big,.big1').toggle();
      block.toggleClass('zindex');
    });
    $('.model').mouseleave(function(){
      $(this).find('.delete').hide();
    })
    $('.time_m .send').bind('click',function(){
      that.submittalk()
    })
    $('#content').bind('keyup',function(){
      var _length = $(this).val().length
      $('#contentnum').text(_length);
      if(_length > 140){
        $('#contentnum').parent().addClass('bold_red');
      }else{
        $('#contentnum').parent().removeClass('bold_red');
      }
    });
    $("#mood_list a.color").live("click", function(){
      $("#mood_list a.color").removeClass("current");
      $(this).addClass("current");
    });
    $('.timeline_loading').live('click',function(){that.loadmoretimeline('new');});
    $("#my_loading").live('click',function(){that.loadmoremytimeline('new');});
    $('#timelinelist .delete_item').live('click',function(){$(this).next().show()});
    $('#timelinelist .submit_del').live('click',function(){
      id = $(this).attr('data-id');
      that.deltalk(id,$(this));
    })
    $('#timelinelist .cancel').live('click',function(){
      $(this).parents('.radius').hide();
    })
  },
  submittalk : function(){
    if (!addtalkswitch) {
      return false;
    }
    var content = $("#content").val()
       ,color = $("#mood_list a.current").find("span").attr("class")
       ,firstid = $("#firstid").val()
       ,firstday = $("#firstday").val()
       ,color = color|| ''
    var params = {
      'content':content,
      'color':color,
      'firstid':firstid,
      'firstday':firstday
    };
    addtalkswitch = false;
    $.post('/api/timeline/addtalk.php', params,
    function (result){
      addtalkswitch = true;
      switch(result.code){
        case "A00001" :
          openlogintip();
          return false;
        case 'A00000' :
          $("#content").val('');
          if(result.data.data.list == ''){
            $("#timelinelist div.model").first().before(result.data.data.tmplist);
          }else if(result.data.data.tmplist == ''){
            $("#timelinelist").prepend(result.data.data.list);
          }
          $("#firstday").val(result.data.data.firstday);
          return true;
        default :
          showerrortip(result.data.msg);
          return false;	
      }
    },'json');
    return true;
  },
  loadmoretimeline : function(sort){
    ShareClickCount('timeline');
    var currenpage = $("#currenpageno").val()
        ,lastid = $("#lastid").val()
        ,page = Number(currenpage) + 1;
    if(('' == lastid || "undefined" == typeof(lastid)) && ('' == page || "undefined" == typeof(page)) && "undefined" == typeof(sort)){
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    $('#submore').hide();
    $('#loading').show();
    $.post('/api/timeline/gettalk.php', {'lastid':lastid,'page':page, 'sort':sort},
      function (result){
        if(result.code != 'A00000'){
          $("#submore").html('请重试，加载更多');
          $('#loading').hide();
          $('#submore').show();
          return false;
        }else{
          if (result.data.data.curtotal<1) {
            $("#submore").html('<span class="gray">抱歉，已经没有更多</span>');
            $('#loading').hide();
            $('#submore').show();
            return true;
          }else{
            $("#currenpageno").val(page);
            $("#lastid").val(result.data.data.lastid);
            if(result.data.data.list == ''){
              $("#timelinelist div.model").last().after(result.data.data.tmplist);
            }else if(result.data.data.tmplist == ''){
              $("#timelinelist").append(result.data.data.list);
            }else{
              $("#timelinelist div.model").last().after(result.data.data.tmplist);
              $("#timelinelist").append(result.data.data.list);
            }
            $('#loading').hide();
            $('#submore').show();
            if(result.data.data.curtotal < 16){
              $('#errormsg').hide();
            }else{
              $('#errormsg').show();
            }
          }
      }
    },'json');
    return true;
  },
  loadmoremytimeline : function(sort){
    var currenpage = $("#currenpageno").val()
       ,lastid = $("#lastid").val()
       ,uid = $("#uid").val()
       ,page = Number(currenpage) + 1;
    if('' == lastid || "undefined" == typeof(lastid) && '' == page || "undefined" == typeof(page)&&"undefined" == typeof(sort)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    $('#submore').hide();
    $('#loading').show();
    $.post('/api/timeline/gettalk.php', {'lastid':lastid,'uid':uid,'page':page, 'sort':sort},
    function (result){
      if(result.code != 'A00000'){
        $("#submore").html('请重试，加载更多');
        $('#loading').hide();
        $('#submore').show();
        return false;
      }else{
        if (result.data.data.curtotal<1) {
          $("#submore").html('<span class="gray">抱歉，已经没有更多</span>');
          $('#loading').hide();
          $('#submore').show();
          return true;
        }else{
          $("#currenpageno").val(page);
          $("#lastid").val(result.data.data.lastid);		
          if(result.data.data.list == '')
          {
            $("#timelinelist div.model").last().after(result.data.data.tmplist);
          }else if(result.data.data.tmplist == ''){
            $("#timelinelist").append(result.data.data.list);
          }else{
            $("#timelinelist div.model").last().after(result.data.data.tmplist);
            $("#timelinelist").append(result.data.data.list);
          }
          $('#loading').hide();
          $('#submore').show();
          if(result.data.data.curtotal < 16)
          {
            $('#errormsg').hide();
          }else{
            $('#errormsg').show();
          }
        }
      }
    },'json');

    return true;
  },
  deltalk : function(id,el){
    if('' == id || "undefined" == typeof(id)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    var itemnum = el.parents('.block').find('.model').length
       ,params = {
         'contentid':id
       };
    $.post('/api/timeline/deltalk.php', params,
      function (result){
        switch(result.code){
          case 'A00001':
            openlogintip();
            return false;
          case "A00000":
            if(itemnum - 1 == 0){
              el.parents("div.block").remove();
            }else{
              el.parents('.model').remove()
            }
            return true;
          default:
            showerrortip(result.data.msg);
            return false;	
        }
      },'json');
    return true;
  }
}