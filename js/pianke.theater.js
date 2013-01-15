Pianke.theater = {
  init : function(){
    this.bindEvent();
  },
  'none_pic' : "/static/images/theater/none.jpg",
  bindEvent : function(){
    var that = this;
    $('#theater_title').bind('focus',function(){
      var el  = $(this)
         ,val = el.val();
      if(val=='请输入标题'){
        el.val('').removeClass('gray1')
      }
    }).bind('blur',function(){
      var el  = $(this)
         ,val = el.val();
         el.removeClass('gray1');
      if(val==''){
        $(this).val('请输入标题').addClass('gray1')
      }
    });
    $('.box textarea').bind('keydown',function(e){
      text = $(this).val()
      if( ((text.split("\n").length >= 10) && (e.keyCode == 13))){
        e.preventDefault();
      }
    })
    $('.newstyle .times a').bind('click',function(){
      $('.newstyle .times a').removeClass('on')
      $(this).addClass('on')
      that.renderTheater();
      that.subject_posts_pdata({
        type : 'tag',
        value: $(this).text()
      })
    });
    $('.newstyle .hour_new a').bind('click',function(){
      $('.newstyle .hour_new a').removeClass('on')
      $(this).addClass('on')
      that.renderTheater()
      that.subject_posts_pdata({
        type : 'hotitem',
        value: $(this).text()
      })
    })
    $('.theater_pagination a').live('click',function(e){
      e.preventDefault();
      var page = $(this)[0].href.split('page=')[1];
      that.renderTheater(page);
    });
    $('.send').bind('click',function(){
      if($(this).hasClass('sub_send')){return false;}
      that.theater_submit();
    });
    $('.sub_send').bind('click',function(){
      var id = $(this).attr('data-id');
      that.theater_submit(true,id);
    });
    $('.sendn').live('click',function(){
      Pianke.comment.submitcomment($(this),0,1);
    })
    $('.talk .like,.creation .like').live('click',function(){
      var el = $(this)
         ,id = el.parents('.icon').attr('data-id')||el.attr('data-id');
      that.submitlike(id,el);
    });
    $('.del_theater').live('click',function(){
      var el = $(this)
         ,id = el.attr('data-id');
      confirm("您确定要删除这个剧本？",function(){
        var params = {
          contentid : id
        };
        $.post('/api/subject/subject_posts_del',params,function(){
          if(/profile/.test(location.pathname)){
            el = el.parent();
            el.slideUp(200,function(){
              el.remove()
            })
          }else{
            location.href= '/subject/'
          }
        },'json');
      });
    });
    $('.direction .arrow').bind('click',function(){
      var img_list = $('.theater_img')
         ,hei = ($(this).hasClass('down'))?$('.theater .shadow ul').height()+75:260
      img_list.animate({height:hei},500);
      $('.arrow.down').hasClass('hide') && $('html,body').animate({scrollTop:0},500);
      $('.arrow.up,.arrow.down').toggleClass('hide');
    });
    $('.theater_img li').bind('click',function(){
      var el     = $(this)
         ,length = $('.theater_img li.selected').length;
      if(length>=3&&!el.hasClass('selected')){
        return false;
      }
      $('.arrow.up').hasClass('hide') && $('.arrow.down').trigger('click');
      el.toggleClass('selected');
      that.change_selector(el,length,el.find('span').length)
    });
    $('.essay a').bind('click',function(){$('.essay .pen').toggle()})
    $('.began').bind('click',function(){
      var el      = $(this)
         ,selector = $('.theater_img li.selected')
         ,length  = selector.length;
      if(el.hasClass('began_gray')){
        return false;
      }else{
        url = '/subject/publish?';
        $.each(selector,function(index){
          var el = $(this)
             ,num = parseInt(el.find('span').text(),10);
          url += 'img'+num+'='+(parseInt(el.index(),10)+1);
          url += (index!=length-1)?'&':'';
        });
        if(PKINFO.islogin){
          location.href = url;
        }else{
          openlogintip();
        }
      }
    });
    $('.path').bind('click',function(event){
      event.preventDefault();
      event.cancelBubble=true;
      $(this).parents('.box').toggleClass('right_box').toggleClass('left_box');
    });
    $('.own').hover(function(){
      $(this).addClass('zindex');
    },function(){
      $(this).removeClass('zindex');
    })
    $('.box .close').bind('click',function(){
      var img = $(this).parent('.img')
         ,id  = img.attr('data-id')
         ,choose = $('.choose li[data\-id='+id+']')
      setTimeout(function(){
        img.addClass('none_img');
      },50); 
      that.exchangeAnimate(choose.find('img'),img.find('img'),function(){
        choose.removeClass('selected')
        img.attr('data-id','00').fadeOut(100,function(){
          img.find('img').attr({
            src : that.none_pic
          }).end().fadeIn(100);
        });
      });
    });
    $('.storystyle a').bind('click',function(){
      var el = $(this);
      if( !el.hasClass('on') && $('.storystyle a.on').length < 3 ){
        el.addClass('on');
      }else{
        el.removeClass('on');
      }
    })
    $('.box .img').bind('click',function(){
      flag = $(this).hasClass('selected')?false:true;
      $('.box .img').removeClass('selected');
      flag?$(this).addClass('selected'):$(this).removeClass('selected');
    });
    $('.choose li').bind('click',function(){
      var el = $(this)
         ,none_el = $('.none_img:first')
         ,isnone = none_el.length 
         ,selected_el = $('.img.selected')
         ,is_selected = selected_el.length
      if(el.hasClass('selected')||(is_selected==0&&isnone==0)){return false;};
      var first = none_el
         ,url   = el.find('img').attr('src')
         ,s_id  = first.attr('data-id')
         ,id    = el.attr('data-id')
         if(is_selected){
           first = selected_el;
           s_id  = first.attr('data-id');
         }
      that.exchangeAnimate(first.find('img'),el.find('img'),function(){
        first.removeClass('selected none_img').attr('data-id',id).find('img').attr('src',url);
        el.addClass('selected');
        $(".choose li[data\-id="+s_id+"]").removeClass('selected');
      });
    });
    $('.times a').bind('click',function(){
      
    });
  },
  renderTheater : function(page){
    var  that = this
         ,bool  = page?true:false
         ,params = params || {
           page : page||1,
           hotitem : $('.hour_new a.on').attr('hotitem'),
           tag : $('.times a.on').text()
         }
    $.getJSON('/api/subject/subject_posts_get',params,function(data){
      if(data.code =='A00000'){
        $('.theater_inner').html(data.data.data);
        var top = $('.newstyle').offset().top - 70;
        bool&&$('html,body').animate({scrollTop:top},100);
      }else{
        alert(PKINFO.eCode[data.code]);
      }
    })
  },
  subject_posts_pdata : function(param){
    $.post('/api/subject/subject_posts_pdata',param,function(){
      return true;
    },'json')
  },
  change_selector : function(el,len,bool){
    var btn = $('.began');
    if(bool){
      var span = el.find('span')
      ,cur_num = parseInt((span.text()),10);
      btn.hasClass('began_gray') || btn.addClass('began_gray');
      span.remove();
      $.each($('.theater_img li span'),function(){
        var el  = $(this)
        ,num = parseInt((el.text()),10);
        num -= (cur_num<num)?1:0;
        el.text(num);
      });
    }else{
      len += 1;
      span = $('<span class="counter">'+len+'</span>');
      el.append(span);
      if(len==3){
        btn.removeClass('began_gray'),btn.next().hide();
        var top = btn.offset().top-$(window).height()/2;
        $('html,body').animate({scrollTop:top},300);
      }
    }
  },
  exchangeAnimate : function(first,second,callback){
    var userAgent = window.navigator.userAgent.toLowerCase()
       ,ie8 = $.browser.msie && /msie 8\.0/i.test(userAgent)
       ,ie7 = $.browser.msie && /msie 7\.0/i.test(userAgent)
       ,ie6 = !$.browser.msie8 && !$.browser.msie7 && $.browser.msie && /msie 6\.0/i.test(userAgent);
    if(ie6||ie7||ie8){
      callback();
    }else{
      clone = (second)?second.clone():first.clone()
      $('body').append(clone.hide());
      var begin_css = this.get_css(second)
         ,end_css   = this.get_css(first)
         ,animate_css = this.get_css(second);
      animate_css.top -= 200;
      animate_css.len -= 200;
      clone.show().css(begin_css).animate(animate_css,200,function(){
        clone.animate(end_css,400,function(){
          callback();
          clone.remove();
        });
      });
    }
  },
  submitlike : function(id,el){
    if('' == id || "undefined" == typeof(id)) {
      showerrortip('抱歉，缺少必要参数！');
      return false;
    };
    var params = {
      'id' : id,
      type : 8
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
        num = result.data.data.good;
        if(el.find('.number').length){
          el.find('.number').text(num).show();
        }
        return true;
        default:
        showerrortip(result.data.msg);
        return false;
      }
    },'json');
    return true;
  },
  get_css : function(el){
    return {
      position : 'absolute',
      top      : el.offset().top,
      left     : el.offset().left,
      width    : el.width(),
      height   : el.height(),
      'z-index': 999
    }
  },
  theater_submit : function(bool,id){
    var type   = ''
       ,s_type = $('.storystyle .on')
       ,url    = bool ? '/api/subject/subject_posts_edit' : '/api/subject/subject_posts_add'
       ,id     = id || '0'
    if(!this.check()){
      return false
    }
    s_type.each(function(index){
      type+=$(this).text()
      if(index!=s_type.length-1){
        type += ','
      }
    });
    params = {
      id       : id,
      title    : $.trim($('#theater_title').val()),
      type     : type,
      afterword: $.trim($('#afterword').val()),
      content  : {},
      subject_id: $('#subject_id').val()
    };
    $.each($('.content .box'),function(index){
      var el = $(this);
      params['content']['item'+index] = {
        style   : el.hasClass('left_box')?0:1,
        content : el.find('textarea').val(),
        img     : el.find('img').attr('src')
      };
    });
    $.post(url,params,function(data){
      if(data.code!='A00000'){
        alert(PKINFO.eCode[data.code]);
      }else{
        location.href = data.data.url;
      }
    },'json')
  },
  check : function(){
    var title = $('#theater_title').val()
       ,title_len = $.trim(title).length
       ,that = this
    if(title_len==0||title == '请输入标题'){
      that.error_text('请输入标题');
      return false;
    }
    if(title_len>30){
      that.error_text('标题长度不能超过30个字');
      return false;
    }
    if($('.choose .selected').length!=3 && !/edit/.test(location.pathname)){
      that.error_text('内容或图片不完整');
      return false;
    };
    bool = true;
    $.each($('.box textarea'),function(){
      if(this){
        var length = $.trim($(this).val()).length
        if(length==0){
          that.error_text('内容或图片不完整');
          bool = false;
        }
        if(length>300){
          that.error_text('每个场景的内容不能超过300字');
          bool = false;
        }
      }
    });
    if(!bool){ return false}
    if($('#afterword').val().length>140){
      that.error_text('后记内容不能超过140字');
      return false;
    }
    if($('.storystyle .on').length==0){
      that.error_text('请选择你的创作类型');
      return false;
    }
    return true;
  },
  error_text : function(text){
    var el = $('.storystyle .brown')
    el.show().text(text);
  }
}