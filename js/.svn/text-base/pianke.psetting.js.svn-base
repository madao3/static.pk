/**
 * @file pSetting
 * @desc 设置页面内容
 */

Pianke.pSetting = function() {
	var province = $("#province"),
		provinceCode = province.attr("data"),
		city     = $("#city"),
		cityCode = city.attr("data"),
		allCityInfo  = CITYINFO;
	
	return {
		init: function() {
			var me = this;
			me.initList();
			me.bindEvents();
		},
		
		/**
		 * 页面初始化的时候初始化省列表和城市列表
		 */
		initList: function() {
			var provincelist = [];
			for(var key in allCityInfo.province){
				provincelist.push("<li data='"+key+"'>"+allCityInfo.province[key]+"</li>");
			}
			$("ul",province.parent().parent()).html(provincelist.join(""));
			var citylist = [];
			for(var key in allCityInfo.city[''+provinceCode]) {
				citylist.push("<li data='"+key+"'>"+allCityInfo.city[''+provinceCode][key]+"</li>");
			}
			$("ul",city.parent().parent()).html(citylist.join(""));
		},
		bindEvents: function() {
			var me = this;
			province.bind("click",me.showMenu());
			city.bind("click",me.showMenu());
			$("ul",province.parent().parent()).delegate("li","click",me.clickProvince());
			$("ul",city.parent().parent()).delegate("li","click",me.clickCity());
			$(".setbut a").bind("click",me.post());
			$("#desc").focus(function(){
				$(this).removeClass("gray");
				$("label",$(this).parent().parent()).hide();
			}).blur(function(){
				if($(this).val() == ""){
					$("label",$(this).parent().parent()).show();
				}
			}).keyup(function(){
				
				if($.trim($(this).val()).replace(/[^\x00-\xff]/g,"**").length > 200){
					$("p",$(this).parent().parent()).show();
				}else{
					$("p",$(this).parent().parent()).hide();
				}
			})
			
			$("#uname").focus(function(){
        $(this).parent().next().text('4-30位字符，中英文均可').show();
			}).blur(function(event){
				var el  =$(this)
           ,tips = $(this).parent().next();
        el.parent().next().hide()
				if($.trim(el.val()) == ""){
					tips.html("昵称不能为空").show();
					return;
				}
				var len = $.trim($(this).val()).replace(/[^\x00-\xff]/g,"**").length;
				if(len  < 4 || len > 30){
					tips.html("昵称长度为 4- 30 位字符").show();
					return;
				}
				$.ajax({
					type:"post",
					url:"/api/reg/checkuname",
					dataType:"json",
					data:"uname="+$.trim($(this).val())+"&page=setinfo",
					success:function(data){
						if(data.code == "A00000"){
							tips.html("").hide();
						}else{
							tips.html(PKINFO.eCode[data.code]).show();
						}
					}
				})
			})
		},
    /**
    * 最后提交数据
    */
		post: function() {
			
			return function(event) {
				event.preventDefault();
				var uname = $.trim($("#uname").val()),
				gender = $.trim($("input[name=gender]:checked").val()),
				vprovince = province.attr("data"),
				vcity = city.attr("data"),
 				desc = $.trim($("#desc").val());
				if(uname == ""){
					alert("用户名不能为空");
					return;
				}
				$.ajax({
					type:"post",
					dataType:"json",
					data:"uname="+uname+"&gender="+gender+"&province="+vprovince+"&city="+vcity+"&desc="+desc,
					url:"../api/user/setinfo",
					success:function(data) {
						if(data.code == "A00000"){
							alert("修改成功");
						}else{
							alert(PKINFO.eCode[data.code]);
						}
					}
				})
			}
			
		},
		showMenu: function() {
			return function(event) {
				event.stopPropagation();
				$("#province").removeClass("gray");
				$("#city").removeClass("gray");
				$("ul",$(this).parent().parent()).toggle();
			}
		},
		clickProvince: function() {
			return function(event) {
				var code = $(this).attr("data"),
					text = $(this).html();
				province.attr("data",code).val(text);
				$(this).parent().hide();
				
				var citylist = [];
				for(var key in allCityInfo.city[''+code]) {
					citylist.push("<li data='"+key+"'>"+allCityInfo.city[''+code][key]+"</li>");
				}
				$("ul li",city.parent().parent()).remove();
				$("ul",city.parent().parent()).html(citylist.join(""));
				city.attr("data","-1").val("请选择");
			}
		},
		clickCity: function() {
			return function(event) {
				var code = $(this).attr("data"),
				text = $(this).html();
				city.attr("data",code).val(text);
				$(this).parent().hide();
			}
		}
	}
}
