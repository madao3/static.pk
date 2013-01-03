Pianke.slider = {
  init : function(){
    var that = this
    if($('.card_list_slider').length){
      that.st = setInterval(function(){
        that.slider_move()
      },5000);
    }
    that.bindEvent();
  },
  bindEvent : function(){
    var that = this;
    $('.card_list_slider .down').bind('click',function(){
      // clearInterval(that.st);
      that.slider_move();
      // that.st = setInterval(function(){that.slider_move()},5000);
    });
    $('.card_list_slider .up').bind('click',function(){
      // clearInterval(that.st);
      that.slider_move('prev');
      // that.st = setInterval(function(){that.slider_move()},5000);
    });
    $('.card_list_slider .share').bind('click',function(){
      that.share_card($(this));
    });
    $('.area .box').hover(
      function(){clearInterval(that.st);},
      function(){that.st = setInterval(function(){that.slider_move()},5000);}
    );
    
  },
  slider_move : function(type){
    var list  = $('.card_list_slider .area')
       ,mover = $('.card_list_slider .area:visible')
       ,type  = type || 'next';
    if(type=='next'){
      next  = mover.next();
      if(!next.length){next = list.first();}
    }else{
      next  = mover.prev();
      if(!next.length){next = list.last();}
    }
    mover.hide();
    next.show()
  },
  share_card : function(el){
    var param = {
      url:el.attr("data-url")||location.href,
      type:'3',
      count:'',
      appkey:'2069323349',
      title:el.attr("data-content"),
      pic:el.attr("data-img_url"),
      ralateUid:'',
      language:'zh_cn',
      rnd:new Date().valueOf()
    }
    var temp = [];
    for( var p in param ){
      temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
    }
    var url = "http://service.weibo.com/share/share.php?"+temp.join("&");
    window.open(url);
    return false;
  }
  
}