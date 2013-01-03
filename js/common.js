/*
 * 开关
 */
var addtalkswitch = true;
var addpostsswitch = true;
var addcommentswitch = true;
var addfeedbackswitch = true;
var addlikeswitch = true;
var addshareswitch = true;
var commonpagesize = 15;


showerrortip = function(msg){
  if("" == msg || "undefined" == typeof(msg)) {
    msg = '抱歉，系统繁忙！';
  }
  $("#errortiptext").html(msg);
  $("#errortip").show();
  return true;
}

function backToTop(){
  var $btn = $('#goTopBtn'),
  $win = $(window),
  $body = $('html,body')
  limitTop = 260;
  $win.bind('scroll',function() {
    if($win.scrollTop()>limitTop){
      $btn.show();
    }else{
      $btn.hide();
    }
  });
  $btn.bind('click',function(){
    $body.animate({scrollTop:0},500)
  })
}




/*
* 我的片刻-加载更多段子
*/

/**
 * 往期词卡-加载更多
 */

/**
 * 时间线-加载更多
 */

/**
 * 我的时间线-加载更多
 */

/**
 * 评论-展开
 */

/**
 * 喜欢
 */

/**
 * 顶
 */
function submitup(postsid, classval, type) {
	if('' == postsid || "undefined" == typeof(postsid) && '' == classval || "undefined" == typeof(classval) && '' == type || "undefined" == typeof(type)) {
		showerrortip('抱歉，缺少必要参数！');
		return false;
	}
	
	var wordcardid = $("#wordcardid").val();
	
	if('' == wordcardid || "undefined" == typeof(wordcardid)) {
		wordcardid = $("#wordcardid_" + postsid).val();
	}
	
	if('' == wordcardid || "undefined" == typeof(wordcardid)) {
		showerrortip('抱歉，缺少必要参数！');
		return false;
	}
	
	var params = {
			'wordcardid':wordcardid,
			'postsid':postsid,
			'class':classval,
			'type':type
	};
	
	$.post('/api/attitude/up.php', params,
		function (result){
			if('A00001' == result.code){
				openlogintip();
				return false;
			}
			else if('A00000' == result.code) {
				$("#" + postsid + '_up').html(result.data.data.up);
				if (0 == result.data.data.down) {
					result.data.data.down = '';
				}
				$("#" + postsid + '_down').html(result.data.data.down);
				return true;
			}else{
				showerrortip(result.data.msg);
				return false;
			}
	},'json');
	
	return true;
}

/**
 * 踩
 */
function submitdown(postsid, classval, type) {
	if('' == postsid || "undefined" == typeof(postsid)) {
		showerrortip('抱歉，缺少必要参数！');
		return false;
	}
	
	if('' == classval || "undefined" == typeof(classval)) {
		showerrortip('抱歉，缺少必要参数！');
		return false;
	}
	
	if('' == type || "undefined" == typeof(type)) {
		showerrortip('抱歉，缺少必要参数！');
		return false;
	}
	
	var wordcardid = $("#wordcardid").val();
	
	if('' == wordcardid || "undefined" == typeof(wordcardid)) {
		wordcardid = $("#wordcardid_" + postsid).val();
	}
	
	if('' == wordcardid || "undefined" == typeof(wordcardid)) {
		showerrortip('抱歉，缺少必要参数！');
		return false;
	}	
	
	var params = {
			'wordcardid':wordcardid,
			'postsid':postsid,
			'class':classval,
			'type':type
	};
	
	$.post('/api/attitude/down.php', params,
		function (result){
			if('A00001' == result.code){
				openlogintip();
				return false;
			}
			else if('A00000' == result.code) {
				if (0 == result.data.data.up) {
					result.data.data.up = '';
				}
				$("#" + postsid + '_up').html(result.data.data.up);
				$("#" + postsid + '_down').html(result.data.data.down);
				return true;
			}else{
				showerrortip(result.data.msg);
				return false;
			}
	},'json');
	
	return true;
}

/**
 * 提交评论
 */

 function deletecntcomment(contentid,cid,ctype,el){
   confirm("您确定要删除此条评论？",function(){
     if('' == contentid || "undefined" == typeof(contentid) &&'' == cid || "undefined" == typeof(cid) &&'' == ctype || "undefined" == typeof(ctype)) {
       showerrortip('抱歉，缺少必要参数！');
       return false;
     }
     var params = {
       'contentid':contentid,
       'commentid':cid,
       'type':ctype
     };
     $.post('/api/comment/delcmt.php', params,
     function (result){
       if('A00001' == result.code){
         openlogintip();
         return false;
       }else if('A00000' == result.code) {
         $(el).parents('li').remove()
         return true;
       }else{
         showerrortip(result.data.msg);
         return false;
       }
     },'json');
   });
 }

/**
 * 词卡-提交段子
 */

/**
 * 意见反馈-提交
 */
function submitfeedback() {
	if (!addfeedbackswitch) {
		return false;
	}
	var feedback = $("#feedback").val();
	
	if('' == feedback) {
		showerrortip('抱歉，内容不能为空！');
		
		return false;
	}
	
	var params = {
			'feedback':feedback
	};
	addfeedbackswitch = false;
	$.post('/api/feedback/addfeedback.php', params,
		function (result){
			addfeedbackswitch = true;
			if('A00001' == result.code){
				openlogintip();
				return false;
			}
			else if('A00000' == result.code) {
				$("#feedback").val('');
				$("#feedbackpub").hide();
				$("#feedbacksucess").show();				
				return true;
			}
			else{
				showerrortip(result.data.msg);
				return false;	
			}
	},'json');
	
	return true;
}

/**
 * 词卡-删除
 * @param wordcardid
 * @returns
 */

/**
 * 分享-删除
 * @param wordcardid
 * @returns
 */
 function delshare(id) {
   confirm("您确定要删除此条内容？",function(){
     if('' == id || "undefined" == typeof(id)) {
       showerrortip('抱歉，缺少必要参数！');
       return false;
     }
     var params = {
       'id':id
     };
     $.post('/api/share/delshare.php', params,
     function (result){
       if('A00001' == result.code){
         openlogintip();
         return false;
       }
       else if('A00000' == result.code) {
         $("#posts_" + id).remove();
         return true;
       }
       else{
         showerrortip(result.data.msg);
         return false;	
       }
     },'json');
     
   });
   return true;
 }

 /**
 * 时间线-删除
 * @param id
 * @returns
 */


 /**
 * 提交
 */
 function submitshare() {
   if(!addshareswitch) {
     return false;
   }
   var id = $("#id").val();
   var type = $("#type").val();
   var content = $("#content").val();
   var pic = $("#pic").val();
   if('' == id || "undefined" == typeof(id)) {
     alert('抱歉，缺少必要参数！');
     return false;
   }
	
   if('' == type || "undefined" == typeof(type)) {
     alert('抱歉，缺少必要参数！');
     return false;
   }
	
   if('' == content || "undefined" == typeof(content)) {
     alert('抱歉，缺少必要参数！');
     return false;
   }
	
   if("undefined" == typeof(pic)) {
     pic = '';
   }
	
   var params = {
     'id':id,
     'type':type,
     'pic':pic,
     'content':content
   };
   addshareswitch = false;
   $.post('/api/share/addshare.php', params,
   function (result){
     addshareswitch = true;
     if('A00000' == result.code) {
       window.close();
       return true;
     }
     else{
       alert(result.data.msg);
       return false;	
     }
   },'json');
	
   return true;
 }

 /**
 * 插入表情
 */
 function insertemotion(val) {
   $("#content").insertAtCaret(val);
   closeemotion();
	
   return true;
 }

 /**
 * 打开表情浮层
 */

 /**
 * 关闭表情浮层
 */

 /**
 * 插入表情
 */
 function commentinsertemotion(el, val) {
   $(el).parents('.entry').find('textarea').insertAtCaret(val);
   $(el).parents('.bq').hide();
   return true;
 }

 /**
 * 打开表情浮层
 */
 function commentopenemotion(event,id,el) {
 }

 /**
 * 关闭表情浮层
 */

 /**
 * 打开登录浮层
 */
 function openlogintip() {
   $("#fixedlogin").show();
   $("#fixedlogin .mask").css("height",$(document.body).height());
   return true;
 }

 /**
 * 关闭登录浮层
 */
 function closelogintip(e) {
   e&&e.preventDefault&&e.preventDefault();
   $("#fixedlogin .ts").hide();
   $("#fixedlogin .placehoder").show();
   $("#layer_email").val("");
   $("#layer_pass").val("");
   $("#fixedlogin").hide();
   return true;
 }

 /**
 * 显示错误浮层
 */

 /**
 * 隐藏错误浮层
 */



 /**
 * 打开登录页面
 */
 function openloginpage() {
   var wheight = $(window).height();
   var wwidth = $(window).width();
   var top = 0;
   var left = 0
   if(400 <= wheight) {
     top = (wheight - 400)/2;
   }
   if(600 <= wheight) {
     left = (wwidth - 600)/2;
   }
   closelogintip();
   window.open('/user/login.php?js=yes', '', 'width=600,height=400,top=' + top + ',left=' + left + ',scrollbars=yes,status =yes');
	
   return true;
 }

 /*
 * 打开分享浮层
 */

 /**
 * 关闭回复框
 */

 /**
 * 关闭删除确认框
 */
 /**
 * 登录信息
 */
 function refreshlogininfo(uname) {
   if('' == uname || "undefined" == typeof(uname)) {
     return false;
   }
   $("#logininfobox").html('<a class="name" href="/profile/">' + uname + '</a><a href="/user/logout.php">退出</a>');
   return true;
 }

 /**
 * 检测文本框长度
 * @returns {Boolean}
 */



 function changetag() {
   var display = $("#scoreuser").css('display');
   if('none' == display) {
     $('#me').attr('class','current');
     $('#time').attr('class','');
   }
   else {
     $('#time').attr('class','current');
     $('#me').attr('class','');
   }
   return false;
 }

 function changejob(id) {
   var joblist = new Array('job_php','job_js','job_weibo');
   for(var i=0;i<joblist.length;i++)
   {
     if(id == joblist[i]){
       $("#"+id).show();
       $("#nav"+id).addClass("on");
     }else{
       $("#"+joblist[i]).hide();
       $("#nav"+joblist[i]).removeClass("on");
     }
   }
   return false;
 }

 function addattention(suid) {
   if('' == suid || "undefined" == typeof(suid)){
     showerrortip('抱歉，缺少必要参数！');
     return false;
   }
   var params = {
     'suid':suid
   };
   $.post('/api/attention/addattention.php', params,
   function (result){
     if('A00001' == result.code){
       openlogintip();
       return false;
     }else if('A00000' == result.code) {
       return true;
     }else{
       showerrortip(result.data.msg);
       return false;	
     }
   },'json');
   return true;
 }

 function setCookie(name,value,days){
   var exp = new Date();    
   exp.setTime(exp.getTime() + days*24*60*60*1000);
   document.cookie = name + "="+ escape (value) + ";domain=.pianke.me;path=/;expires=" + exp.toGMTString();
 }

 function getCookie(name){
   cookies = document.cookie.split("; ");
   for(i=0;i<cookies.length;i++){
     kv = cookies[i].split("=");
     if($.trim(kv[0])==name){
       return $.trim(kv[1]);
     }
   }
 }

 function getlatestnews(){
   var latestnewsid = $("#latestnewsid").val();
   var hascookie = getCookie(latestnewsid);
   if(hascookie == 1)
   {
     $("#latestnews").hide();
   }else{
     $("#latestnews").show();
   }
   return false;
 }


 $(function(){ 
  if(PKINFO.uinfo){
    msg_list_init()
  }
   $("#notice_box").find("span:first>a").click(function(){
     $("#notice_box").remove();
     return false;
   });
   $("#notice_box").find("span:first").click(function(){
     if($("#notice_box").find("#feedbackpub").get(0).style.display==='none'){
       $("#feedbackbox").attr('class', 'layer_word');
       $("#notice_box").find("#feedbackpub").show();
       $("#notice_box").find("#feedbacksucess").hide();
     }else{
       $("#feedbackbox").attr('class', '');
       $("#notice_box").find("#feedbackpub").hide();
     }
     return false;
   });
    
   $("#latestnews span.cl").live("click", function(){
     var latestnewsid = $("#latestnewsid").val();
     setCookie(latestnewsid,1,30);
     $("#latestnews").hide();
     return false;
   });

   $("ul.cntcmtlist li").hover(
     function () {
       $(this).find("a.out").show();
     },
     function () {
       $(this).find("a.out").hide();
     }
   );
    
   $("span.cardiconfav").live("click",function(){
     if(PKINFO.islogin != 1){
       openlogintip();return false;
     }
     var iconobj = $(this).find("a");
     var classval = iconobj.attr("class");
     var contentid = iconobj.attr("f-contentid");
     if(classval == "sc"){
       var paraobj = {'contentid':contentid};
       $.post('/api/fav/addfav.php', paraobj,
       function (ret){
         if(ret.code != 'A00000'){
           alert(ret.data.msg);
           return false;
         }else{
           iconobj.attr("class","sced");
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
           iconobj.attr("class","sc");
           return false;
         }
       },'json');
     }
   });

   $(".share .xl,.ico .xl,.icon6 .xl").live("click", function(){
     _shareJump(this,'sina',$(this).attr('ref'));
   });
     
     
   $(".kj").live("click", function(){
     _shareJump(this,'qzone',$(this).attr('ref'));
         
   });
   $(".rr").live("click", function(){
         
     _shareJump(this,'renren',$(this).attr('ref'));

   });
   $(".tx").live("click", function(){
     _shareJump(this,'tengxun',$(this).attr('ref'));
        
   });
 });
 function ShareClickCount(type){
   var params = {
     'type':type
   }
   $.post('/api/share/clickcount.php', params,
   function (result){
     if('A00000' == result.code){
       return true;
     }else{
       return false;
     }
   },'json');
 }
 function _shareJump(obj,type,flag){
   ShareClickCount(type);
   var cont_id;
   var card_id;
   var content;
   var img;
   if(!flag){
     var bool = /subject/.test(location.pathname)
        ,el = bool?$(obj).parents('.icon').prev().find('.contents:first'):$('.card_inner')
        ,img = bool?el.parents('.content').find('img')[0].src:"http://www.pianke.me" + el.attr('data-url')
        ,card_text = "...”  ——发现中文的更多可能，我在片刻"
        ,theater_text = "...”  --用文字讲述剧情，用图片传递镜头，我在片刻剧场，好戏正在上映。"
        ,content = "“"+subString($.trim(el.text()),80) + (bool?theater_text:card_text)
        ,s_type = bool?"?r=subjectshare":"?r=postshare"
        ,local_url = "http://pianke.me"
        local_url += bool?'/subject/'+$(obj).parents('.icon').attr('data-id'):location.pathname;
        local_url  += s_type;
   }else if(flag == 'card'){
     local_url = "http://pianke.me"+$(obj).parents('.inclode').find('a').attr('href');
     content = '我在片刻发现了一张不错的词卡，你也来看看。';
     img = $(obj).parents('.inclode').find('img').attr('src').replace('/s/','/m/');
   }else if(flag == 'detail'){
     local_url = location.href;
     content = '我在片刻发现了一张不错的词卡，你也来看看。';
     img = $(obj).parents('.area').find('img').attr('src');
   }else if(flag == 'fav'){
     local_url = "http://pianke.me"+$(obj).parents('.inclode').find('a').attr('href');
     content = '我在片刻发现了一张不错的词卡，你也来看看。';
     img = $(obj).parents('.inclode').find('img').attr('src').replace('/s/','/m/');
   }
    
   if(type == 'sina'){
     var param = {
       url:local_url,
       type:'3',
       count:'1',
       appkey:'2069323349',
       title:content,
       pic:img,
       ralateUid:'',
       language:'zh_cn',
       rnd:new Date().valueOf()
     }
     var temp = [];
     for( var p in param ){
       temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
     }

     var url = "http://service.weibo.com/share/share.php?"+temp.join("&");

     window.open(url,'_blank');
     return false;
   }else if(type == 'renren'){
     var rrShareParam = {
       resourceUrl : local_url,
       srcUrl : local_url,
       pic : img,
       title : '发现中文的更多可能，我在片刻 http://www.pianke.me',
       description : content
     };
     var s=[];
     for (var i in rrShareParam) {
       if (rrShareParam[i])
       s.push(i + '=' + encodeURIComponent(rrShareParam[i]));
     }
     var url = "http://widget.renren.com/dialog/share?" + s.join('&');
     window.open(url, '_blank');
   }else if(type == 'tengxun'){
     window.open('http://v.t.qq.com/share/share.php?title='+encodeURIComponent(content)+'&url='+encodeURIComponent(local_url)+'&source=bookmark&pic='+img,'_blank');
   }else if(type == 'qzone'){
     var p = {
       url:local_url,
       showcount:'1',/*是否显示分享总数,显示：'1'，不显示：'0' */
       desc:"",/*默认分享理由(可选)*/
       summary:content,/*分享摘要(可选)*/
       title:"发现中文的更多可能，我在片刻 ",/*分享标题(可选)*/
       site:'片刻网',/*分享来源 如：腾讯网(可选)*/
       pics:img, /*分享图片的路径(可选)*/
       style:'101',
       width:199,
       height:30
     };
     var s = [];
     for(var i in p){
       s.push(i + '=' + encodeURIComponent(p[i]||''));
     }
     var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+s.join('&');
     window.open(url,'_blank');
   }
 }


 function subString(str, len, hasDot)
 {
   var newLength = 0;
   var newStr = "";
   var chineseRegex = /[^\x00-\xff]/g;
   var singleChar = "";
   var strLength = str.replace(chineseRegex,"**").length;
   for(var i = 0;i < strLength;i++)
   {
     singleChar = str.charAt(i).toString();
     if(singleChar.match(chineseRegex) != null)
     {
       newLength += 2;
     }   
     else
     {
       newLength++;
     }
     if(newLength > len)
     {
       break;
     }
     newStr += singleChar;
   }
   
   if(hasDot && strLength > len){
     newStr += "...";
   }
   return newStr;
 }

 var msg_list_init = function(){
   if(!PKINFO.uinfo || !PKINFO.uinfo.uid){//登陆了，才会获取消息
     return ;
   }
   if(!PKINFO.msglist){
     if($(".new_idea").length>0){
       PKINFO.msglist = $(".new_idea:first");
     }else{
       PKINFO.msglist =$('<div class="new_idea" id="newunread"><div class="box"></div></div> ');
       PKINFO.msglist.appendTo(".head:first");
     }
   }
   PKINFO.msglist.hide();
   msg_list_round();
   PKINFO.ePublicWord.id = setInterval("msg_list_round()",15000);//30秒检查一遍新通知
 }

 PKINFO.ePublicWord = {
   comment:["条新评论","commentbox/inbox","查看评论"],
   attitude:["个新推荐","likebox/inbox","查看推荐"],
   notice:["条新通知","notify/inbox","查看通知"],
   card:["张新卡片","cardbox/inbox","查看Card"],	
   a:"abc",
   close:false,
   id:0
 }
 var closeunread = function(){
   $("#newunread").remove();
   PKINFO.ePublicWord.close = true;
   clearInterval(PKINFO.ePublicWord.id);
   return false;
 }
 var msg_list_show = function(data){
   if(!data||(!data.comment&& !data.attitude&&!data.notice&&!data.card)){
     $(".new_idea").hide();
     return false;
   }
   var content = [];
   for(var k in data){
     if(data[k]){
       content.push('<p>'+data[k]+PKINFO.ePublicWord[k][0]+'，<a href="/'+PKINFO.ePublicWord[k][1]+'" title="">'+PKINFO.ePublicWord[k][2]+'</a></p>')
     }
   }
   $(".new_idea").find("div.box").html(content.join("")+'<a href="javascript:void(0);" onclick="javascript:closeunread();" class="cl"></a>').end().show();
 }
 var msg_list_round = function(){
   $.get("/api/common/unreadmsg.php?r="+Math.floor(Math.random()*999999999999),function(rs){
     if(rs.code==='A00000'){
       //rs.data = {comment:1,attitude:2,notice:5};
       if(!PKINFO.public_msg){//首次，初始化
         PKINFO.public_msg = rs.data.list;
         msg_list_show(rs.data.list);
       }else{//查看是否需要更新
         if(rs.data.list.comment>PKINFO.public_msg.comment ||
           rs.data.list.attitude>PKINFO.public_msg.attitude ||
           rs.data.list.card>PKINFO.public_msg.card ||
           rs.data.list.notice>PKINFO.public_msg.notice ){//有变化了，在去修改msg_list
             msg_list_show(rs.data.list);
           }
         }
       }else{
       }
     },'json');
   }



   function removeNotify(id){
     confirm("您确定要删除此条通知？",function(){
       var params = {'id':id};
       $.post("/api/notify/del.php",params,function(rs){
         if(rs.code==="A00000"){
           $("#item_"+id).remove();
         }else{
           showerrortip(rs.data.msg);
         }
       },'json');
     });
   }


   function openOauth(){
     setcookie("is_weibo",null);
     var o = window.open ('', 'newwindow', 'height=450, width=600, top=0, left=0, toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no');
     var host = "http://"+window.location.host;
     o.location = host+"/user/syncoauthurl.php?source=1";
     st = setInterval(function(){
       if(getSpecificCookie('is_weibo').toString()=='true'){
         location.reload();
         clearInterval(st)
       }
     },100)
   }
   function delsync(el){
     type = $(el).attr('data-type')||""
     confirm("您确定要取消绑定"+type+"？",function(){
       $.ajax({
         type: 'POST',
         url: '/api/user/delsync.php',
         data: {'source':1},
         success: function(res){
           if(res.code == 'A00000'){
             location.reload();
           }else{
             alert($res.msg);
           } 
         },
         dataType: 'json'
       });
     })
   }

   $(function(){ 
     $("#fb_email").focus(function(){
       if($(this).val()==='QQ/Email'){
         $(this).val('').removeClass('gray1');
       }
     }).blur(function(){
       if($(this).val()===''){
         $(this).val('QQ/Email').addClass('gray1');
       }
     }).addClass('gray1').val('QQ/Email');
     $("#fb_title").focus(function(){
       if($(this).val()==='(6-20字)'){
         $(this).val('').removeClass('gray1');
       }
     }).blur(function(){
       if($(this).val()===''){
         $(this).val('(6-20字)').addClass('gray1');
       }
     }).addClass('gray1').val('(6-20字)');
   });	
   function addfeedback(){
     var fb_email = $("#fb_email").val();
     var fb_title = $("#fb_title").val();
     var fb_cnt = $("#fb_cnt").val();
     if("" == fb_cnt || "undefined" == typeof(fb_cnt))
     {
       showerrortip('亲，还没写内容哦~');
       return false;
     }
     var params = {
       'fb_email':fb_email,'fb_title':fb_title,'feedback':fb_cnt
     };
     $.post('/api/feedback/addfeedback.php', params,
     function (result){
       if('A00002' == result.code){
         openlogintip();
         return false;
       }else if('A00000' == result.code) {
         showerrortip('非常感谢您的反馈意见~');
         $("#fb_cnt").val('');
         $("#fb_title").val('');
         $("#fb_email").val('');			
         return true;
       }else{
         showerrortip(result.data.msg);
         return false;	
       }
     },'json');
     return true;	
   }
   function cancelfeedback(){
     $("#fb_cnt").val('');
     $("#fb_title").val('');
     $("#fb_email").val('');
     return true;
   }
   function addcard() {
     var contentid = $('#postsid').val();
     var pid = $('#cardpid').val();
     if('' == contentid || "undefined" == typeof(contentid)) {
       showerrortip('操作失败，请重试~');
       return false;
     }
     if('' == pid || "undefined" == typeof(pid)) {
       showerrortip('您还没有上传卡片呢~');
       return false;
     }
     var params = {'contentid':contentid,'pid':pid};
     $.post("/api/card/addcard.php",params,function(rs){
       if(rs.code==="A00000"){
         window.location.href= '/card/'+rs.data.data.contentid;
       }else{
         showerrortip(rs.data.msg);
       }
     },'json');
   }
   function _loading(r){
     if(r==true){
       $('#_loading').show();
     }else{
       $('#_loading').hide();
     }
   }
   function uploadImage(obj) {
     if(PKINFO.islogin != 1)
     {
       openlogintip();return false;
     }
     var tmpFilePath = obj.value;
     document.domain = 'pianke.me';
     if(validateImage(obj)) {
       _loading(true);
       $.ajaxFileUpload({
         url:'http://img.pianke.me/uploadcard',
         secureuri:false,
         fileElementId:'picfile',
         dataType: 'json',
         type:'post',
         success: function (data, status){
           _loading(false);
           if(data.code == 'A00000'){
             var picurl = data.data.url + data.data.pid;
             $("#showpic").attr('src',picurl);
             $("#cardpid").val(data.data.pid);
           }else{
             if(data.code == 'D10088'){
               alert('图片尺寸不对，请核实');
             }
           }
         },
         error: function (data, status, e){
           $('#picfile').val('');
         }
       });
     }
   }
   function validateImage(obj) {
     var file = obj;
     var tmpFileValue = file.value;
     //校验图片格式
     if(/^.*?\.(gif|png|jpg|jpeg)$/.test(tmpFileValue.toLowerCase())){
       return true;
     }else{
       alert("图片格式有误！");
       return false;
     }

     if(file.value != ""){
     }else{
       alert("请选择上传的文件!");
       return false;
     }
   }


   var zeroize = function (value, length) { 
     if (!length) {
       length = 2;
     }
     value = String(value);
     for (var i = 0, zeros = ''; i < (length - value.length); i++) { 
       zeros += '0';
     }
     return zeros + value;     
   };

   function showtime() {
     var date = new Date();
     var year = date.getFullYear();
     var month = date.getMonth();
     month = month + 1;
     var day = date.getDate();
     var hour = date.getHours();
     var minute = date.getMinutes();
     var second = date.getSeconds();
     $("#time_date").html(year + '-' + zeroize(month) + '-' + zeroize(day));
     $("#time_hour").html(zeroize(hour));
     $("#time_minute").html(zeroize(minute));
     $("#time_second").html(zeroize(second));
     return true;
   }

   
   var st = setInterval("showtime();", 1000);

   function openusercomment(el){
     $(el).parent().next().show()
     return false;
   }
   function delusercomment(contentid){
     confirm("您确定要删除此条评论？",function(){
       var params = {'commentid':contentid};
       $.post("/api/comment/delusercmt.php",params,function(rs){
         if(rs.code==="A00000"){
           $("#item_"+contentid).remove();
         }else{
           showerrortip(rs.data.msg);
         }
       },'json');
     });
   }
   function submitusercomment(el) {
     box = $(el).parents('.entry');
     contentid = box.attr('data-id');
     if('' == contentid || "undefined" == typeof(contentid)) {
       showerrortip('抱歉，缺少必要参数！');
       return false;
     }
     var id = $("#id_" + contentid).val();
     var type = $("#type_" + contentid).val();
     var content = $("#content_" + contentid).val();
     var reuid = $("#reuid_" + contentid).val();
     if('' == type || "undefined" == typeof(type)) {
       showerrortip('抱歉，缺少必要参数！');
       return false;
     }
     if('' == content || "undefined" == typeof(content)) {
       showerrortip('抱歉，内容不能为空！');
       return false;
     }
     var params = {
       'contentid':id,
       'type':type,
       'content':content,
       'recid':contentid,
       'reuid':reuid
     };
     $.post('/api/comment/add.php', params,
     function (result){
       if('A00002' == result.code){
         openlogintip();
         return false;
       }else if('A00000' == result.code) {
         box.find('test').val('');
         box.hide();
         //toolTipDialog("发布成功",$(this).parents("li:first").find(".mcmIntro"));
         return true;
       }else{
         showerrortip(result.data.msg);
         return false;	
       }
     },'json');
	
     return true;
   }

   function toolTipDialog(msg,dom,callback){
     var tip = $('<div class="delete radius" id="succ_pop"><div class="box"><p class="p">'+msg+'</p></div></div>');
     if($("#succ_pop").length){
       $("#succ_pop").stop().remove();
     }
     var pos;
     if(!dom){
       pos = {top:($(window).scrollTop()+$(window).height()/2),left:($(window).width()/2-180)}
     }else if(dom.top&& dom.left){
       pos = dom;
     }else{
       pos = dom.position();
     }
     tip.css({"top":(pos.top-10),"left":(pos.left+150)});
     tip.appendTo("body").fadeOut(3000);
     if(typeof callback!=='undefined'){
       setTimeout(callback,3000);
     }
   }
   function getSpecificCookie(name) { 
     if(document.cookie.length > 0) { 
       start = document.cookie.indexOf(name + "="); 
       if( start != -1) { 
         start = start + name.length + 1; 
         end = document.cookie.indexOf(";",start); 
         if( end == -1) {
           end = document.cookie.length;
         } 
       }
       return decodeURI(document.cookie.substring(start,end));
     }
     return "";
   }
   function setcookie(name, value) { 
     var curcookie = name + "=" + encodeURI(value);
     document.cookie = curcookie; 
   } 