Pianke.emotion = {
  EMOTION_BASE_URL : 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/',
  init: function(el){
    this.bindEvent();
  },
  bindEvent : function(){
    var that = this;
    $('.tjbq').live('click',function(){
      var el = $(this)
      ,box = el.find('.emotionlist');
      if(box.length){
        box.fadeIn();
      }else{
        that.createBox(el);
      }
    })
    $('.emotionlist li a').live('click',function(){
      var el  = $(this)
      ,val = el.find('img')[0].title;
      that.commentinsertemotion(el,val);
    });
    $('.emotionlist .closed').live('click',function(){
      el = $(this);
      el.parents('.emotionlist').hide();
      el.parents('.post_item').removeClass('zindex')
      if(/commentbox/.test(location.pathname)){
        el.parents('li').removeClass('zindex')
      }
    })
  },
  createBox : function(el){
    var htmlstr = ''
       ,box = el.parent();
    $.each(this.lists,function(){
      var text = this.name
      ,url  = Pianke.emotion.EMOTION_BASE_URL + this.url;
      htmlstr += '<li><a href="javascript:void();" ><img title="'+text+'" alt="'+text+'" src="'+url+'"></a></li>';
    });
    list = $("<div class='bq emotionlist'></div>").html('<div class="jt"></div><div class="detailbox"><div class="closed"><a href="javascript:void(0);"></a></div><div class="detail"><ul node-type="inner" class="faces_list clearfix"></ul></div></div>')
    list.find('ul').html(htmlstr);
    box.find('.emotionlist').remove()
    box.append(list);
    list.fadeIn(100,function(){box.find('.emotionlist').show();list.show();})
    el.parents('.post_item,.create_content').addClass('zindex');
    if(/commentbox/.test(location.pathname)){
      el.parents('li').addClass('zindex');
    }
  },
  commentinsertemotion : function(el, val) {
    el.parents('.entry,.enter').find('textarea').insertAtCaret('['+val+']');
    $('.emotionlist').remove()
    return true;
  },
  
  
  
  
  lists :{   smilea:{name:"\u5475\u5475",url:"ac/smilea_thumb.gif"},tootha:{name:"\u563b\u563b",url:"0b/tootha_thumb.gif"},laugh:{name:"\u54c8\u54c8",url:"6a/laugh.gif"},tza:{name:"\u53ef\u7231",url:"14/tza_thumb.gif"},kl:{name:"\u53ef\u601c",url:"af/kl_thumb.gif"},kbsa:{name:"\u6316\u9f3b\u5c4e",url:"a0/kbsa_thumb.gif"},cj:{name:"\u5403\u60ca",url:"f4/cj_thumb.gif"},shamea:{name:"\u5bb3\u7f9e",url:"6e/shamea_thumb.gif"},zy:{name:"\u6324\u773c",url:"c3/zy_thumb.gif"},bz:{name:"\u95ed\u5634",url:"29/bz_thumb.gif"},bs2:{name:"\u9119\u89c6",url:"71/bs2_thumb.gif"},lovea:{name:"\u7231\u4f60",url:"6d/lovea_thumb.gif"},sada:{name:"\u6cea",url:"9d/sada_thumb.gif"},heia:{name:"\u5077\u7b11",url:"19/heia_thumb.gif"},qq:{name:"\u4eb2\u4eb2",url:"8f/qq_thumb.gif"},sb:{name:"\u751f\u75c5",url:"b6/sb_thumb.gif"},mb:{name:"\u592a\u5f00\u5fc3",url:"58/mb_thumb.gif"},ldln:{name:"\u61d2\u5f97\u7406\u4f60",url:"17/ldln_thumb.gif"},yhh:{name:"\u53f3\u54fc\u54fc",url:"98/yhh_thumb.gif"},zhh:{name:"\u5de6\u54fc\u54fc",url:"6d/zhh_thumb.gif"},x:{name:"\u5618",url:"a6/x_thumb.gif"},cry:{name:"\u8870",url:"af/cry.gif"},wq:{name:"\u59d4\u5c48",url:"73/wq_thumb.gif"},t:{name:"\u5410",url:"9e/t_thumb.gif"},k:{name:"\u6253\u54c8\u6b20",url:"f3/k_thumb.gif"},bba:{name:"\u62b1\u62b1",url:"27/bba_thumb.gif"},angrya:{name:"\u6012",url:"7c/angrya_thumb.gif"},yw:{name:"\u7591\u95ee",url:"5c/yw_thumb.gif"},cza:{name:"\u998b\u5634",url:"a5/cza_thumb.gif"},88:{name:"\u62dc\u62dc",url:"70/88_thumb.gif"},sk:{name:"\u601d\u8003",url:"e9/sk_thumb.gif"},sweata:{name:"\u6c57",url:"24/sweata_thumb.gif"},sleepya:{name:"\u56f0",url:"7f/sleepya_thumb.gif"},sleepa:{name:"\u7761\u89c9",url:"6b/sleepa_thumb.gif"},money:{name:"\u94b1",url:"90/money_thumb.gif"},sw:{name:"\u5931\u671b",url:"0c/sw_thumb.gif"},cool:{name:"\u9177",url:"40/cool_thumb.gif"},hsa:{name:"\u82b1\u5fc3",url:"8c/hsa_thumb.gif"},hatea:{name:"\u54fc",url:"49/hatea_thumb.gif"},gza:{name:"\u9f13\u638c",url:"36/gza_thumb.gif"},dizzya:{name:"\u6655",url:"d9/dizzya_thumb.gif"},bs:{name:"\u60b2\u4f24",url:"1a/bs_thumb.gif"},crazya:{name:"\u6293\u72c2",url:"62/crazya_thumb.gif"},h:{name:"\u9ed1\u7ebf",url:"91/h_thumb.gif"},yx:{name:"\u9634\u9669",url:"6d/yx_thumb.gif"},nm:{name:"\u6012\u9a82",url:"89/nm_thumb.gif"},hearta:{name:"\u5fc3",url:"40/hearta_thumb.gif"},unheart:{name:"\u4f24\u5fc3",url:"ea/unheart.gif"},pig:{name:"\u732a\u5934",url:"58/pig.gif"},ok:{name:"ok",url:"d6/ok_thumb.gif"},ye:{name:"\u8036",url:"d9/ye_thumb.gif"},good:{name:"good",url:"d8/good_thumb.gif"},no:{name:"\u4e0d\u8981",url:"c7/no_thumb.gif"},z2:{name:"\u8d5e",url:"d0/z2_thumb.gif"},come:{name:"\u6765",url:"40/come_thumb.gif"},sad:{name:"\u5f31",url:"d8/sad_thumb.gif"},lazu:{name:"\u8721\u70db",url:"91/lazu_thumb.gif"},cake:{name:"\u86cb\u7cd5",url:"6a/cake.gif"},clock:{name:"\u949f",url:"d3/clock_thumb.gif"},m:{name:"\u8bdd\u7b52",url:"1b/m_thumb.gif"}}
}