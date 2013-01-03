Pianke.wordcard = {
  CARD_MAX_LEN : 1000,
  init : function(){
    this.bindEvent()
  },
  bindEvent : function(){
    var that = this
    $('.enter .send').bind('click',function(){
      that.submitposts();
    });
    $('#content').bind('keyup',function(){
      var length = $(this).val().length;
      $('#contentlengthnum').text(length);
      if(length > that.CARD_MAX_LEN){
        $('#contentlengthnum').parent().addClass('bold_red')
      }else{
        $('#contentlengthnum').parent().removeClass('bold_red')
      }
    });
    $('.detailfav').live("click", function(){
      if(PKINFO.islogin != 1){
        openlogintip();
      }
      var butobj = $(this)
         ,textval = butobj.text()
         ,contentid = butobj.attr('data-id');
      if(textval == '收藏'){
        var paraobj = {'contentid':contentid};
        $.post('/api/fav/addfav.php', paraobj,
        function (ret){
          if(ret.code != 'A00000'){
            alert(ret.data.msg);
            return false;
          }else{
            butobj.text('取消收藏')
            return false;
          }
        },'json');
      }else{
        var paraobj = {'contentid':contentid};
        $.post('/api/fav/delfav.php', paraobj,
        function (ret){
          if(ret.code != 'A00000'){
            alert(ret.data.msg);
            return false;
          }else{
            butobj.text('收藏')
            return false;
          }
        },'json');
      }
    });
    $('.delcntcard').live("click", function(){
      if(PKINFO.islogin != 1){
        openlogintip();return false;
      }
      var contentid = $(this).attr('data-id');
      confirm("您确定要删除此张Card？",function(){
        var paraobj = {'contentid':contentid};
        $.post('/api/card/delcard.php', paraobj,
        function (ret){
          if(ret.code != 'A00000'){
            alert(ret.data.msg);
            return false;
          }else{
            window.location.href= ret.data.redirect;
            return false;
          }
        },'json');
        
      })
    });
    $("#posts_style a").live("click", function(){
      $("#posts_style a").removeClass("on");
      $(this).addClass("on");
    });
    $("#posts_style_list li a").live("click", function(){
      var key = $(this).attr("s-key");
      $("#posts_style_list li a").removeClass("on");
      $(this).addClass("on");
      $("#currentstyle").val(key);
      that.clickCardCount('style',key);
      that.loadselectposts();
      return false;
    });
    $(".contain .cardlist").hover(
      function (){
        $(this).find(".ico").show();
      },
      function () {
        $(this).find(".ico").hide();
        $('.icon6').removeClass('curon');
        $('.icon6').parents('.cont').removeAttr("style");
      });
        
    $(".icon6").live("mouseover", function(){
      $(this).parents('.cont').css('z-index','90');
      $(this).addClass('curon').css('z-index','99');
    });
    $(".cardxq .icon6").live("mouseout", function(){
      $(this).removeClass('curon').removeAttr("style");
      $(this).parents('.cont').removeAttr("style");
    });
     
    $(".cardxq_1 .icon6").live("mouseout", function(){
      $(this).removeClass('curon');
      $(this).parents('.cont').removeAttr("style");
      $(this).removeAttr("style");
    });
    $('.hour').hover(function(){
      $(this).find('ul').show().parents('.newstyle').addClass('zindex');
    },function(){
      $(this).find('ul').hide().parents('.newstyle').removeClass('zindex');
    })
    $('.hour_new a').bind('click',function(){
      hot = $(this).attr('hotitem');
      $('.hour_new a').removeClass('on');
      $(this).addClass('on');
      $('#currenthotitem').val(hot);
      that.clickCardCount('hotitem',hot);
      that.loadselectposts();
    });
    $('#tab_ab').bind('click',function(){that.openab()});
    $('#layer_content .both').live('click',function(){
      that.addab(2)
    });
    $('#layer_content .change').live('click',function(){
      that.addab(0)
    });
    $('.recommend_submit').live('click',function(){
      id = $(this).attr('data-id')
      that.addab(id)
    });
    $('.post_item .clo').live('click',function(){
      $(this).next().show()
    });
    $('.post_item .cancel').live('click',function(){
      $(this).parents('.delete').hide();
    });
    $('.post_item .submit_del').live('click',function(){
      var el = $(this)
         ,id = el.attr('data-id');
      that.delposts(id,el);
    });
    $('.op .open').live('click',function(){
      var el = $(this)
         ,content = el.parents('.content');
      if(el.text()=="展开"){
        text = "收起"
      }else{
        text = "展开"
      }
      content.find('.short,.long').toggle();
      el.toggleClass('down');
      $(this).text(text);
    });
    $('.post_item .like,.rbox .like,.icon .like').live('click',function(){
      var el = $(this)
         ,id = el.parents('.icon').attr('data-id') || el.attr('data-id');
      that.submitlike(id,el);
    });
    $('.post_item .get_comment').live('click',function(){
      el = $(this).parent().next();
      Pianke.comment.getcomment(el,0,1);
    });
    $('.card_load').live('click',function(){
      that.loadmorewordcard('new')
    });
    $('.wordcard_loading').live('click',function(){
      el = $(this)
      if(el.hasClass('card_load')){
        return false;
      }
      type = el.attr('data-type')||'';
      that.loadmoreposts(type);
    });
    $('.profile_card_load').live('click',function(){
      that.loadmoreprofileposts('new',$(this).attr('data-id'));
    })
  },
  clickCardCount : function(type,value){
    var params = {
      type :type,
      value:value
    }
    $.post('/api/pdata/addpostscount.php', params,
    function (result){
      if('A00000' == result.code){
         return true;
      }else{
        return false;
      }
    },'json');
  },
  submitlike : function(id,el){
    if('' == id || "undefined" == typeof(id)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    };
    var params = {
      'id':id,
      type : 1
    };
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
    return true;
  },
  delposts : function(postsid,el){
    if('' == postsid || "undefined" == typeof(postsid)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    var params = {
      'postsid':postsid
    };
    $.post('/api/wordcard/delposts.php', params,
    function (result){
      switch(result.code){
        case 'A00001':
        openlogintip();
        return false;
        case 'A00000':
        el.parents('.post_item').remove();
        return true;
        default:
        showerrortip(result.data.msg);
        return false;	
      }
    },'json');
    return true;
  },
  loadselectposts : function(){
    var currenpage = $("#currenpageno").val()
       ,wordcardid = $("#wordcardid").val()
       ,style = $("#currentstyle").val()
       ,hotitem = $("#currenthotitem").val()
       ,hascard = $("#currenthascard").val()
    ,params = {
      'wordcardid':wordcardid, 
      'page':1, 
      'style':style,
      'hotitem':hotitem,
      'hascard':hascard
    };
    $.get('/api/wordcard/getposts.php', params,
    function (result){
      if(result.code != 'A00000'){
        return false;
      }else{
        if (result.data.data.curtotal<1) {
          var str = '<div class="cont"><div class="none">本条标签暂时还没有内容！</div> <div class="clear"></div></div>';
          $("#posts_showlist").html(str);
          $("#errormsg").hide();
          return true;
        }else{
          if(result.data.data.curtotal<15){
            $("#errormsg").hide();
          }else{
            $("#errormsg").show();
          }
          $("#posts_showlist").html(result.data.data.html);
        }
      }	
    },'json');
    return true;
  },
  openab : function(){
    var wordcardid = $("#wordcardid").val();
    if('' == wordcardid || "undefined" == typeof(wordcardid)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    $('#ab_loading').show();
    $.getJSON('/api/wordcard/getab.php', {'wordcardid':wordcardid},
    function (result){
      $('#ab_loading').hide();
      switch(result.code){
        case 'A00001':
        openlogintip();
        return false;
        case 'A00000':
        if (result.data.data.list == '') {
          callBackInner = '<div class="nomore"><p>休息一下，已经没有记录了~</p></div>';
        }else{
          callBackInner = result.data.data.list;
        }
        $("#ab_content").html(callBackInner);
        tonewlayer_main('ab_pop','id','',630,460);
        break;
        default:
        $("#ab_content").html('<div class="nomore"><p>数据加载异常，请重试~</p></div>');
        tonewlayer_main('ab_pop','id','',630,460);
        break
      }
    });
    return true;
  },
  addab : function(addpostid){
    var wordcardid = $("#wordcardid").val()
    ,postid = $("#ab_ids").val()
    ,param = '';
    if('' == wordcardid || "undefined" == typeof(wordcardid)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    switch(addpostid){
      case 0 :
      param = {'wordcardid':wordcardid,'postid':postid,'addpostid':'','idnum':0};
      break;
      case 2 :
      param = {'wordcardid':wordcardid,'postid':postid,'addpostid':postid,'idnum':2};
      break;
      default :
      param = {'wordcardid':wordcardid,'postid':postid,'addpostid':addpostid,'idnum':1};
      break;
    }
    $.getJSON('/api/wordcard/addab.php', param,
    function (result){
      $('#ab_loading').hide();
      if(result.code != 'A00000'){
        $("#ab_content").html('<div class="nomore"><p>数据加载异常，请重试~</p></div>');
      }else{
        if (result.data.data.list == '') {
          $("#ab_content").html('<div class="nomore"><p>休息一下，已经没有记录了~</p></div>');
        }else{
          $("#ab_content").html(result.data.data.list);
        }
      }
    });
  },
  submitposts : function(){
    if (!addpostsswitch) {return false;}
    var sharetoweibo = $('#sharetoweibo').is(':checked')
       ,wordcardid = $("#wordcardid").val()
       ,content = $("#content").val()
       ,style = $("#posts_style a.on").attr("s-key")
       ,toweibo = 0
       ,that = this
    if('' == wordcardid) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    if('' == content) {
      showerrortip('抱歉，内容不能为空！');
      return false;
    }
    if('' == style) {
      style = 1;
    }
    if(sharetoweibo) {
      toweibo = 1
    }
    var params = {
      'wordcardid':wordcardid,
      'content':content,
      'style':style,	
      'toweibo':toweibo
    };
    addpostsswitch = false;
    $.post('/api/wordcard/addposts.php', params,
    function (result){
      addpostsswitch = true;
      if('A00001' == result.code){
        openlogintip();
        return false;
      }
      else if('A00000' == result.code) {
        $("#content").val('');
        $(".cont:first").before(result.data.data.html);
        return true;
      }
      else{
        showerrortip(result.data.msg);
        return false;	
      }
    },'json');
    return true;
  },
  opensharepage : function(id, type){
    if("" == id || "undefined" == typeof(id)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    if("" == type || "undefined" == typeof(type)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    var wheight = $(window).height();
    var wwidth = $(window).width();
    var top = 200;
    var left = 300;
    if(400 <= wheight) {
      top = (wheight - 400)/2;
    }
    if(680 <= wheight) {
      left = (wwidth - 680)/2;
    }
    top = Math.round(top);
    left = Math.round(left);
    closelogintip();
    window.open('/share/share.php?id=' + id + '&type=' + type, '', 'width=680,height=450,top=' + top + ',left=' + left + ',scrollbars=yes,status=yes');
    return true;
  },
  loadmoreposts : function(sort){
    ShareClickCount('wordcard');
    var currenpage = $("#currenpageno").val();
    var page = Number(currenpage) + 1;
    var wordcardid = $("#wordcardid").val();
    var style = $("#currentstyle").val();
    var hotitem = $("#currenthotitem").val();
    var hascard = $("#currenthascard").val();
    if('' == wordcardid || "undefined" == typeof(wordcardid)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    if('' == page || "undefined" == typeof(page)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    if("undefined" == typeof(sort)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    $('#submore').hide();
    $('#loading').show();
    var param = {
      'wordcardid':wordcardid, 
      'page':page, 
      'sort':sort,
      'style':style,
      'hotitem':hotitem,
      'hascard':hascard
    }
    $.get('/api/wordcard/getposts.php', param,
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
          $(".cont::last").after(result.data.data.html);
          $('#loading').hide();
          $('#submore').show();
          if(result.data.data.curtotal < 15)
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
  loadmorewordcard : function(sort){
    ShareClickCount('historyCard');
    var currenpage = $("#currenpageno").val();
    var page = Number(currenpage) + 1;
    $('#submore').hide();
    $('#loading').show();
    $.get('/api/wordcard/getwordcards.php', {'page':page,'sort':sort},
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
          $("#wordcardlist li:last").after(result.data.data.list);
          $('#loading').hide();
          $('#submore').show();
          if(result.data.data.curtotal < 21)
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
  loadmoreprofileposts : function(sort, uid){
    var currenpage = $("#currenpageno").val();
    var page = Number(currenpage) + 1;
    if('' == page || "undefined" == typeof(page)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    if("undefined" == typeof(sort)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    if('' == uid || "undefined" == typeof(uid)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    }
    $('#submore').hide();
    $('#loading').show();
    $.get('/api/wordcard/getuserposts.php', {'page':page, 'sort':sort, 'uid':uid, 'class':'posts'},
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
          $(".cont::last").after(result.data.data.html);
          $('#loading').hide();
          $('#submore').show();
          if(result.data.data.curtotal < 15)
          {
            $('#errormsg').hide();
          }else{
            $('#errormsg').show();
          }
        }
      }	
    },'json');
    return true;
  }
  
  
}