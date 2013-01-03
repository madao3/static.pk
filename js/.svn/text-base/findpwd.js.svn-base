(function(){
	var curElement = document.getElementById('email'),
	    errVal     = document.getElementById('nobody'),
	    submit     = document.getElementById('submit'),
	    count      = 0,
	    emailReg   = /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i,
	    oldErrVal  = errVal.value;
	
	function defValClear() {
		if (count === 0) { 
		    curElement.value = '' ;
			count = 1 ;
		}
	}
	function emailTest() {
		if (!emailReg.test(curElement.value) && $.trim($(curElement).val()) != "" && $.trim($(curElement).val()) != "请输入您注册时填写的邮箱") {
			errVal.style.display = 'block';
			errVal.innerHTML = '邮箱格式错误';
			return false;
		} else {
			errVal.style.display = 'none';
			return true;
		}
	}
	
	function submitData(){
		if($.trim($(curElement).val()) == "" ){
			return;
		}
		$.ajax({
			type: "POST",
			dataType: "json",
			url: "/api/user/findpwd",
			data: "email="+$.trim($(curElement).val()),
			success: function(data){
				if(data.code != "A00000"){
					errVal.style.display = 'block';
					errVal.innerHTML = PKINFO.eCode[data.code];
				}else{
					// 操作成功 跳到找回邮件发送成功提示页
					window.location = data.data.redirect;
				}
			}
			
		});
	}
		
	curElement.onclick = curElement.onfocus = defValClear;
	curElement.onblur  = emailTest;
	$(submit).click(function(e){
		e.preventDefault();
		if(!emailTest()||$.trim($(curElement).val())=="" || $.trim($(curElement).val()) == "请输入您注册时填写的邮箱"){
			return false;
		} else {
			submitData();
		}
	});
})()


