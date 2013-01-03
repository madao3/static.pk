//// JavaScript Document
//function goTopEx(){
//		var obj=document.getElementById("goTopBtn");
//		function getScrollTop(){
//				return (document.documentElement.scrollTop>0)?document.documentElement.scrollTop:document.body.scrollTop;
//
//			}
//		function setScrollTop(value){
//				document.documentElement.scrollTop=value;
//				document.body.scrollTop=value;
//			}    
//		window.onscroll=function(){
//			getScrollTop()>0?obj.style.display="":obj.style.display="none";
//			}
//		obj.onclick=function(){
//			var goTop=setInterval(scrollMove,1);
//			function scrollMove(){
//					setScrollTop(getScrollTop()/1.1);
//					if(getScrollTop()<1)clearInterval(goTop);
//				}
//			}
//    }



function goTopEx(){
	var obj=document.getElementById("goTopBtn");
	function getScrollTop() {
		return (document.documentElement.scrollTop>0)?document.documentElement.scrollTop:document.body.scrollTop;
	}
	function setScrollTop(value) {
		document.documentElement.scrollTop=value;
		document.body.scrollTop=value;
	}    
	window.onscroll = function() {
		getScrollTop()>0 ? obj.style.display="" : obj.style.display="none";
	}
	obj.onclick = function() {
		// IE+Chrome+Safari
		document.onmousewheel = function(){ clearInterval(goTop); document.onmousewheel="";};
		// Firefox
		try {
			document.addEventListener('DOMMouseScroll',function(){clearInterval(goTop);},false);
		} catch (e) {
		}
	
		var goTop = setInterval(scrollMove,1);
		function scrollMove() {
			setScrollTop(getScrollTop()/1.1);

			if ( getScrollTop()<1 ) {
				clearInterval(goTop);
				document.onmousewheel='';
			}
		}
	}
}

