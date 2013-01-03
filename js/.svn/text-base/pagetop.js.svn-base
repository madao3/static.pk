/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;

// JavaScript Document
var thislocation=this.location+"";
var domain=thislocation.substring(thislocation.indexOf("//")+2);
if (domain.indexOf("/")>0) domain=domain.substring(0,domain.indexOf("/"));
var pagehash=(thislocation.indexOf("#")>0)?thislocation.substring(thislocation.indexOf("#")+1):"";
var pageis="";
if (navigator.appVersion.indexOf("MSIE")!=-1) pageis="IE IE"+navigator.appVersion.substring(navigator.appVersion.indexOf("MSIE")+5).substring(0,navigator.appVersion.substring(navigator.appVersion.indexOf("MSIE")+5).indexOf("."));
if (navigator.userAgent.indexOf("Firefox")>0) pageis="FF FF"+navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")+8).substring(0,navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")+8).indexOf("."));
if (navigator.userAgent.indexOf("Chrome")>0) pageis="GG GG"+navigator.userAgent.substring(navigator.userAgent.indexOf("Chrome")+7).substring(0,navigator.userAgent.substring(navigator.userAgent.indexOf("Chrome")+7).indexOf("."));
if (navigator.userAgent.indexOf("Version")>0) pageis="Sf Sf"+navigator.userAgent.substring(navigator.userAgent.indexOf("Version")+8).substring(0,navigator.userAgent.substring(navigator.userAgent.indexOf("Version")+8).indexOf("."));
if (pageis=="IE IE6") document.execCommand("BackgroundImageCache", false, true);
var title_txt="";
var pjs=new Array();
var t_i=-1;
function pngtm(thisimg){
	if (thisimg.onload!=null) thisimg.onload=null;
	var i_w=thisimg.width;
	var i_h=thisimg.height;
	thisimg.style.filter+="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+thisimg.src+", sizingmethod=scale);";
	thisimg.src="images/tm.gif";
	thisimg.width=i_w;
	thisimg.height=i_h;
}
function addf(t_d,t_k,t_l,t_wz){
	var t_m=(typeof(t_d)=="object")?t_d:document.getElementById(t_d);
	t_wz=(t_wz!=undefined)?t_wz:0;
	if (eval("t_m."+t_k)!=null) {
		var oldfunction=""+eval("t_m."+t_k);
		if (t_l.lastIndexOf(";")<(t_l.length-2)) t_l+=";"; 
		if (oldfunction.indexOf(t_l)<0) {
		 if (t_wz==0) {
		 	oldfunction=oldfunction.substring(oldfunction.indexOf("{")+1,oldfunction.indexOf("}"));
			oldfunction=oldfunction.split("\n").join("").split("\r").join("");
			t_l=oldfunction+((oldfunction.lastIndexOf(";")<(oldfunction.length-2) && oldfunction.length>3)?";"+t_l:t_l);
		 } else {
		 	t_l+=oldfunction.substring(oldfunction.indexOf("{")+1,oldfunction.indexOf("}"));
		 }
		} else {
			t_l=oldfunction.substring(oldfunction.indexOf("{")+1,oldfunction.indexOf("}"));
		}
	}
	if (pageis=="FF FF2") {
		t_m.setAttribute(t_k,t_l);
	} else {
		eval("with (t_m) "+t_k+"=new Function(t_l)");
	}
}
function movef(t_d,t_k,t_l){
	var t_m=(typeof(t_d)=="object")?t_d:document.getElementById(t_d);
	if (eval("t_m."+t_k)!=null) {
		var oldfunction=""+eval("t_m."+t_k);
		if (t_l.lastIndexOf(";")<(t_l.length-2)) t_l+=";"; 
		oldfunction=oldfunction.substring(oldfunction.indexOf("{")+1,oldfunction.indexOf("}")).split(t_l).join("");
		if (oldfunction.indexOf(t_l.substring(0,t_l.length-1))>=0){
			oldfunction=oldfunction.split(t_l.substring(0,t_l.length-1)).join("");
		}
		t_l=oldfunction;
	} else {
		t_l="";
	}
	if (pageis=="FF FF2") {
		t_m.setAttribute(t_k,t_l);
	} else {
		if (t_l!="") {eval("with (t_m) "+t_k+"=new Function(t_l)");} else {eval("with (t_m) "+t_k+"=\"\"");}
	}
}
function cssadd(t_d,t_k){
	var t_m=(typeof(t_d)=="object")?t_d:document.getElementById(t_d);
	if (t_m.className != "") {
		var cssns=t_m.className.split(" ");
		var cssn=0;
		for (var cssns_i=0; cssns_i<cssns.length;cssns_i++) {
			if (cssns[cssns_i]==t_k) cssn=1;
		}
		if (cssn==0) t_m.className +=" "+t_k;
	} else {
		t_m.className =t_k;
	}
}
function cssremove(t_d,t_k){
	var t_m=(typeof(t_d)=="object")?t_d:document.getElementById(t_d);
	var cssns=t_m.className.split(" ");
	var cssn="";
	for (var cssns_i=0; cssns_i<cssns.length;cssns_i++) {
		if (cssns[cssns_i]!=t_k) cssn+=(cssns_i==0)?cssns[cssns_i]:(" "+cssns[cssns_i]);
	}
	t_m.className=cssn;
}

function functionjishu(i_id,i_times,i_timeall,i_style,i_end){
	i_times++;
	var styletype=i_style.split(",");
	var endf=(i_end!=undefined)?i_end:"";
	for (var styletype_i=0; styletype_i<styletype.length; styletype_i++) {
		var styletype2=styletype[styletype_i].split("|");
		var iii=parseInt(styletype2[2],10)+(parseInt(styletype2[3],10)-parseInt(styletype2[2],10))*i_times/i_timeall;
		eval("document.getElementById('"+i_id+"').style."+styletype2[0]+"='"+iii+styletype2[1]+"'");
		if (styletype2[0]=="opacity") eval("document.getElementById('"+i_id+"').style.filter='alpha(opacity="+(iii*100)+")'");
	}
	if (i_times<i_timeall) {
		setTimeout("functionjishu('"+i_id+"',"+i_times+","+i_timeall+",'"+i_style+"','"+endf+"')",15);
	} else {
		if (endf!="") eval(endf);
	}
}

var wheelfunction="";
var wheelvalue="";
function wheel(event){
  if(wheelfunction!="") { 
		var delta = 0;
		if (!event) event = window.event;
		if (event.wheelDelta) { 
			delta = event.wheelDelta/120;
			if (window.opera) delta = -delta;
		} else if (event.detail) {
			delta = -event.detail/3;
		}
		if (delta) eval(wheelfunction+"("+delta+wheelvalue+")");
	}
}
if (window.addEventListener)
window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;
var mousePos;
function mouseMove(ev){
	ev = ev || window.event;
	mousePos=mouseCoords(ev);
}  
function mouseCoords(ev){  
  if(ev.pageX || ev.pageY){  
  	return {x:ev.pageX, y:ev.pageY};  
  } else {
    return {x:ev.clientX,y:ev.clientY};
	}
}
if (pageis.indexOf("IE")>=0) {
	document.onmousemove=mouseMove;
} else {
	window.onmousemove=mouseMove;
}
function newtag(t_dd,t_s,t_h,t_a){
	var t_d;
	if (typeof(t_dd)!="string"){
		t_s=t_dd[1];
		t_h=t_dd[2];
		t_a=t_dd[3];
		t_d=t_dd[0];
	} else {
		t_d=t_dd;
	}
	var tagname="";var tagclass="";var tagid="";
	var t_st=(t_s!=undefined)?t_s:"";
	var t_ht=(t_h!=undefined)?t_h:"";
	var t_at=(t_a!=undefined)?t_a:"";
	var isinput=0;
	var tagnew1=document.createElement('label');
	if (t_d.indexOf("#")>0) {
		tagname=t_d.substring(0,t_d.indexOf("#"));
		if (tagname.indexOf(".")>0) {
			tagclass=tagname.substring(tagname.indexOf(".")+1);
			tagname=tagname.substring(0,tagname.indexOf("."));
		}
		tagid=t_d.substring(t_d.indexOf("#")+1);
		if (tagid.indexOf(".")>0) {
			tagclass=tagid.substring(tagid.indexOf(".")+1);
			tagid=tagid.substring(0,tagid.indexOf("."));

		}
	} else if(t_d.indexOf(".")>0){
		tagclass=t_d.substring(t_d.indexOf(".")+1);
		tagname=t_d.substring(0,t_d.indexOf("."));
	} else {
		tagname=t_d;
	}
	var tagnew=document.createElement(tagname);
	if (tagclass!="") tagnew.className=tagclass;
	if (tagid!="") tagnew.id=tagid;
	if (t_st!="") tagnew.style.cssText=t_st;
	if (t_ht!="") {
		if (tagname=='img') {
			tagnew.setAttribute('alt',t_ht);
		} else if (tagname=='input') {
			tagnew.setAttribute('value',t_ht);
		} else {tagnew.innerHTML=t_ht;}
	}
	if (t_at!="") {
		for (var iii=0;iii<t_at.length;iii=iii+2) {
			tagnew.setAttribute(t_at[iii],t_at[iii+1]);
			if (tagname=='input' && t_at[iii]=='type'){
				isinput=1;
				if (t_at[iii+1]=='radio' || t_at[iii+1]=='checkbox') {
					tagnew1.innerHTML=t_ht;
				}
			} 
		}
	}
	if (isinput==1) {
		tagnew1.insertBefore(tagnew,tagnew1.firstChild);
		return(tagnew1);
	} else {
		return(tagnew);
	}
}
function addnode(t_d,t_w,t_p,t_n){
	var t_m=(typeof(t_d)=="object")?t_d:document.getElementById(t_d);
	var anchorsub=t_m.getElementsByTagName("*");
	if (t_w=="") {
		switch (t_p) {
			case "start":
				if (t_m.firstChild) {
					t_m.insertBefore(newtag(t_n),t_m.firstChild);
				} else {
					t_m.appendChild(newtag(t_n));
				}
			break;
			case "before":t_m.parentNode.insertBefore(newtag(t_n),t_m);break;
			case "after":
				if (t_m.nextSibling) {
					t_m.parentNode.insertBefore(newtag(t_n),t_m.nextSibling);
				} else {
					t_m.parentNode.appendChild(newtag(t_n));
				}
			break;
			default:t_m.appendChild(newtag(t_n));
		}
	} else {
		for (var j_j=0; j_j<anchorsub.length; j_j++) {
			if (tagif(anchorsub[j_j],t_w)) {
				switch (t_p) {
					case "start":
						if (anchorsub[j_j].firstChild) {
							anchorsub[j_j].insertBefore(newtag(t_n),anchorsub[j_j].firstChild);
						} else {
							anchorsub[j_j].appendChild(newtag(t_n));
						}
					break;
					case "before":anchorsub[j_j].parentNode.insertBefore(newtag(t_n),anchorsub[j_j]);break;
					case "after":
						if (anchorsub[j_j].nextSibling) {
							
							anchorsub[j_j].parentNode.insertBefore(newtag(t_n),anchorsub[j_j].nextSibling);
						} else {
							anchorsub[j_j].parentNode.appendChild(newtag(t_n));
						}
					break;
					default:anchorsub[j_j].appendChild(newtag(t_n));
				}
			}
		}
	}
}
function cssif(t_d,t_k){
	var returni=false;
	var t_m=(typeof(t_d)=="object")?t_d:document.getElementById(t_d);
	var cssns=t_m.className.split(" ");
	for (var cssns_i=0; cssns_i<cssns.length;cssns_i++) {
		if (cssns[cssns_i]==t_k) returni=true;
	}
	return(returni);
}
function tagif(t_d,t_k) {
	var returni=false;
	if (t_k!="" && t_k!=undefined) {
		var t_kname=t_k.split(" ").join("").split("||");
		for ( var t_z=0;t_z<t_kname.length; t_z++) {
			var tagname="";var tagclass="";var tagid="";
			if (t_kname[t_z].indexOf("#")>=0) {
				tagname=t_kname[t_z].substring(0,t_kname[t_z].indexOf("#"));
				if (tagname.indexOf(".")>0) {
					tagclass=tagname.substring(tagname.indexOf(".")+1);
					tagname=tagname.substring(0,tagname.indexOf("."));
				}
				tagid=t_kname[t_z].substring(t_kname[t_z].indexOf("#")+1);
				if (tagid.indexOf(".")>0) {
					tagclass=tagid.substring(tagid.indexOf(".")+1);
					tagid=tagid.substring(0,tagid.indexOf("."));
				}
			} else if(t_kname[t_z].indexOf(".")>=0){
				tagclass=t_kname[t_z].substring(t_kname[t_z].indexOf(".")+1);
				tagname=t_kname[t_z].substring(0,t_kname[t_z].indexOf("."));
			} else {
				tagname=t_kname[t_z];
			}
			var tagnameif=(tagname=="")?true:((t_d.nodeName==tagname.toUpperCase())?true:false);
			var tagclassif=(tagclass=="")?true:(((" "+t_d.className+" ").indexOf(" "+tagclass+" ")>=0)?true:false);
			var tagidif=(tagid=="")?true:((t_d.id==tagid)?true:false);
			if (!returni && tagnameif && tagclassif && tagidif ) returni=true;
		}
	}
	return(returni);
}
function subif(t_d,t_k){
	var ifsub=false;
	var asub=t_d.getElementsByTagName("*");
	for (var j_s=0;j_s<asub.length;j_s++) {
		if(asub[j_s]==t_k) {
			ifsub=true;j_s=asub.length;
		}
	}
	return(ifsub);
}

function intxt(t_d){
	var in_txt=(t_d.textContent)?t_d.textContent:t_d.innerText;
	if (in_txt==null) in_txt="";
	in_txt=in_txt.split(" ").join("");
	in_txt=in_txt.split("\r").join("");
	in_txt=in_txt.split("\n").join("");
	in_txt=in_txt.split("	").join("");
	in_txt=in_txt.split("&amp;").join("");
	in_txt=in_txt.split("&").join("");
	in_txt=in_txt.split(",").join("");
	in_txt=in_txt.split(".").join("");
	return(in_txt);
}
function noteid(t_d,t_c){
	if (!t_d.id) t_d.id=t_c; 
	return(t_d.id);
}
function txtclass_main(t_d,t_t){
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],t_t)){
			cssadd(anchorsub[j_j],intxt(anchorsub[j_j]));
		}
	}
}
function pm(t_d,t_k){
	var t_u=""+t_d;
	var p_v=(t_u.indexOf("?"+t_k+"=")>0)?t_u.substring(t_u.indexOf("?"+t_k+"=")+t_k.length+2):((t_u.indexOf("&"+t_k+"=")>0)?t_u.substring(t_u.indexOf("&"+t_k+"=")+t_k.length+2):"");
	p_v=(p_v.indexOf("&")>0)?p_v.substring(0,p_v.indexOf("&")):p_v;
	p_v=(p_v.indexOf("#")>0)?p_v.substring(0,p_v.indexOf("#")):p_v;
	return(p_v);
}
function addpm(t_d,t_k,t_l){
	var t_u=""+t_d;
	t_u=(t_u.indexOf("#")>0)?t_u.substring(0,t_u.indexOf("#")):t_u;
	t_u=(t_u.indexOf("?"+t_k+"=")>0)?(t_u.substring(0,t_u.indexOf("?"+t_k+"="))+"?"+((t_u.substring(t_u.indexOf("?"+t_k+"=")).indexOf("&")>0)?(t_u.substring(t_u.indexOf("?"+t_k+"=")).substring(t_u.substring(t_u.indexOf("?"+t_k+"=")).indexOf("&")+1)+"&"+t_k+"="):(""+t_k+"="))):((t_u.indexOf("&"+t_k+"=")>0)?(t_u.substring(0,t_u.indexOf("&"+t_k+"=")+1)+((t_u.substring(t_u.indexOf("&"+t_k+"=")+1).indexOf("&")>0)?(t_u.substring(t_u.indexOf("&"+t_k+"=")+1).substring(t_u.substring(t_u.indexOf("&"+t_k+"=")+1).indexOf("&")+1)+"&"+t_k+"="):(""+t_k+"="))):((t_u.indexOf("?")>0 || t_u.indexOf("&")>0)?(t_u+"&"+t_k+"="):(t_u+"?"+t_k+"=")));
	t_u=t_u+t_l;
	return(t_u);
}
function photo_auto_main(t_d,img_w,img_h,img_place){
	if (t_d.nodeName=="IMG") {
		if (t_d.complete) {
			photo_auto(t_d,img_w,img_h,img_place);
		} else {
			addf(t_d,"onload","photo_auto(this,"+img_w+","+img_h+",'"+img_place+"')");
		}
	} else {
		var anchorsub=t_d.getElementsByTagName("img");
		for (var j_j=0;j_j<anchorsub.length;j_j++) {
			if (anchorsub[j_j].complete) {
				photo_auto(anchorsub[j_j],img_w,img_h,img_place);
			} else {
				addf(anchorsub[j_j],"onload","photo_auto(this,"+img_w+","+img_h+",'"+img_place+"')");
			}
		}
	}
}
function photo_auto(thisimg,img_w,img_h,img_place){
	if (thisimg.onload!=null) thisimg.onload=null;
	var i_w=thisimg.width;
	var i_h=thisimg.height;
	if (img_w>0 && img_h>0) {
		if (i_w>=img_w) {
			if (i_h*img_w/i_w>=img_h){
				thisimg.style.width=parseInt(i_w*img_h/i_h)+"px";
				thisimg.style.height=img_h+"px";
				if (img_place=="center") thisimg.style.padding="0 "+parseInt((img_w-i_w*img_h/i_h)/2)+"px 0 "+(img_w-parseInt(i_w*img_h/i_h)-parseInt((img_w-i_w*img_h/i_h)/2))+"px";
			} else {
				thisimg.style.width=img_w+"px";
				thisimg.style.height=parseInt(i_h*img_w/i_w)+"px";
				if (img_place=="center") thisimg.style.padding=parseInt((img_h-i_h*img_w/i_w)/2)+"px 0 "+(img_h-parseInt(i_h*img_w/i_w)-parseInt((img_h-i_h*img_w/i_w)/2))+"px 0";
			}
		} else {
			if (i_h>=img_h) {
				thisimg.style.height=img_h+"px";
				thisimg.style.width=parseInt(i_w*img_h/i_h)+"px";
				if (img_place=="center") thisimg.style.padding="0 "+parseInt((img_w-i_w*img_h/i_h)/2)+"px 0 "+(img_w-parseInt(i_w*img_h/i_h)-parseInt((img_w-i_w*img_h/i_h)/2))+"px";
			} else {
				if (img_place=="center") thisimg.style.padding=parseInt((img_h-i_h)/2)+"px "+parseInt((img_w-i_w)/2)+"px "+(img_h-i_h-parseInt((img_h-i_h)/2))+"px "+(img_w-i_w-parseInt((img_w-i_w)/2))+"px";
			}
		}
	} else {
		if (img_w<1) {
			if (i_h>img_h) {
				if (img_h>0) {
					thisimg.style.width=parseInt(i_w*img_h/i_h)+"px";
					thisimg.style.height=img_h+"px";
				}
			} else {
				if (img_place=="center") thisimg.style.padding=parseInt((img_h-i_h)/2)+"px 0px "+(img_h-i_h-parseInt((img_h-i_h)/2))+"px";
			}
		} else {
			if (i_w>img_w) {
				thisimg.style.height=parseInt(i_h*img_w/i_w)+"px";
				thisimg.style.width=img_w+"px";
			} else {
				if (img_place=="center") thisimg.style.padding="0px "+parseInt((img_w-i_w)/2)+"px 0px "+(img_w-i_w-parseInt((img_w-i_w)/2))+"px";
			}
		}
	}
	if (pageis=="IE IE6" && thisimg.src.toUpperCase().substring(thisimg.src.toUpperCase().length-3,thisimg.src.toUpperCase().length)=="PNG") pngtm(thisimg);
}



var befornavid=new Array();
function befornav(t_d,t_k){
	befornavid[befornavid.length]=noteid(t_d,t_k);
	befornavid[befornavid.length]=t_k;
}
function pagenav(t_d){
	if (!t_d.getElementsByTagName("a")) return;
	var anchornav=t_d.getElementsByTagName("a");
	for (var j_m=0;j_m<befornavid.length/2;j_m++) {
		var anchorsub=document.getElementById(befornavid[2*j_m]).getElementsByTagName("li");
		for (var j_l=(anchornav.length-1);j_l>=0;j_l--) {
			for (var j_j=0;j_j<anchorsub.length;j_j++) {
				if (anchorsub[j_j].getElementsByTagName("a")) {
					if (intxt(anchorsub[j_j].getElementsByTagName("a")[0])==intxt(anchornav[j_l]) && anchorsub[j_j].getElementsByTagName("a")[0].href==anchornav[j_l].href) {
						if (!cssif(anchorsub[j_j],"current")) {
							cssadd(anchorsub[j_j],"current");
							if (befornavid[2*j_m+1]=="menu") {
								if (!!anchorsub[j_j].onmouseout) anchorsub[j_j].onmouseout=null;
								if (!!anchorsub[j_j].onmouseover){
									var lif=""+anchorsub[j_j].onmouseover;
									if (lif.indexOf("mshow(")>0) setTimeout("mshow("+lif.substring(lif.lastIndexOf('(')+1,lif.lastIndexOf(')'))+")",1);
									anchorsub[j_j].onmouseover=null;
								}
							}
							//j_j=anchorsub.length;
						}
					}
				}
			}
		}
	}
}

function menu_main(t_d,t_k){
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0;j_j<anchorsub.length;j_j++) {
		if (tagif(anchorsub[j_j],t_k)) {
			addf(anchorsub[j_j],"onmouseover","menu(this,'on')");
			addf(anchorsub[j_j],"onmouseout","menu(this,'out')");
		}
	}
}
function menu(t_j,t_k) {
	if (t_k=="on") {
		if (!cssif(t_j,"mouseon")) cssadd(t_j.parentNode,"nocurrent");
		cssadd(t_j,"mouseon");
	} else {
		if (cssif(t_j,"mouseon")) cssremove(t_j.parentNode,'nocurrent');
		cssremove(t_j,'mouseon');
	}
}

function mshow_main(t_d,t_k,d_container,d_show){
	t_i++;
	pjs[t_i]=new Array();
	var anchorsub=t_d.getElementsByTagName("*");
	var j_l=0;var j_m=-1;
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],d_container)){
			if (j_m!=-1) {
				addf(anchorsub[j_m],"onmouseover","menu(this,'on')");
				addf(anchorsub[j_m],"onmouseout","menu(this,'out')");
			}
			j_m=j_j;
		} else if (tagif(anchorsub[j_j],d_show)){
			if (j_m>=0) {
				if (subif(anchorsub[j_m],anchorsub[j_j])){
					j_l++;
					pjs[t_i][5*j_l+1]=noteid(anchorsub[j_j],"pjs"+t_i+"_"+(5*j_l+1));
						pjs[t_i][5*j_l]=noteid(anchorsub[j_m],"pjs"+t_i+"_"+(5*j_l));
					anchorsub[j_j].style.height="auto";
					pjs[t_i][5*j_l+4]=anchorsub[j_j].clientHeight;
					anchorsub[j_j].style.height="0";
					addf(anchorsub[j_m],"onmouseover","mshow("+t_i+","+j_l+",'on',"+t_k+")");
					addf(anchorsub[j_m],"onmouseout","mshow("+t_i+","+j_l+",'out',"+t_k+")");
					j_m=-1;	
				}
			}
		}
	}
	if (j_m!=-1) {
		addf(anchorsub[j_m],"onmouseover","menu(this,'on')");
		addf(anchorsub[j_m],"onmouseout","menu(this,'out')");
	}
}
function mshow(t_j,t_k,t_l,t_m) {
	var c_b=document.getElementById(pjs[t_j][5*t_k+1]);
	var c_a=document.getElementById(pjs[t_j][5*t_k]);
	if (t_l=="on") {
		if (!cssif(c_a,"mouseon")){
			clearInterval(pjs[t_j][5*t_k+3]);
			cssadd(c_a,"mouseon")
			pjs[t_j][1]=2*pjs[t_j][5*t_k+4];
			c_b.style.height="0px";
			c_b.scrollTop=pjs[t_j][5*t_k+4];
			c_b.style.visibility="visible";
			c_b.style.overflow="hidden";
			pjs[t_j][5*t_k+3]=setInterval("mshow_h("+t_j+","+t_k+","+t_m+")",20);
		} else {
			clearTimeout(pjs[t_j][5*t_k+2]);
		}
	} else {
		if (cssif(c_a,"mouseon")){
			pjs[t_j][5*t_k+2]=setTimeout("mshow_c("+t_j+","+t_k+","+t_m+")",10);
		}
	}
}
function mshow_h(t_j,t_k,t_l) {
	var c_b=document.getElementById(pjs[t_j][5*t_k+1]);
	pjs[t_j][1]=pjs[t_j][1]-pjs[t_j][5*t_k+4]/10;
	if (pjs[t_j][1]>=0) {
		if (pjs[t_j][1]<pjs[t_j][5*t_k+4]) {
			c_b.style.height=(pjs[t_j][5*t_k+4]-pjs[t_j][1])+"px";
			c_b.scrollTop=pjs[t_j][1];
		}
	} else {
		c_b.scrollTop=0;
		c_b.style.height="auto";
		c_b.style.overflow="visible";
		clearInterval(pjs[t_j][5*t_k+3]);
	}
}
function mshow_c(t_j,t_k,t_l){
	var c_b=document.getElementById(pjs[t_j][5*t_k+1]);
	var c_a=document.getElementById(pjs[t_j][5*t_k]);
	cssremove(c_a,"mouseon");
	clearInterval(pjs[t_j][5*t_k+3]);
	if (t_l==0) {
		pjs[t_j][0]=c_b.clientHeight;
		c_b.style.overflow="hidden";
		c_b.scrollTop=pjs[t_j][5*t_k+4]-pjs[t_j][0];
		pjs[t_j][5*t_k+3]=setInterval("mshow_d("+t_j+","+t_k+","+t_l+")",30);
	} else{
		c_b.style.visibility="hidden";
	}
}
function mshow_d(t_j,t_k,t_l) {
	var c_b=document.getElementById(pjs[t_j][5*t_k+1]);
	pjs[t_j][0]=pjs[t_j][0]-pjs[t_j][5*t_k+4]/10;
	if (pjs[t_j][0]>0) {
		c_b.style.height=pjs[t_j][0]+"px";
		c_b.style.overflow="hidden";
		c_b.scrollTop=pjs[t_j][5*t_k+4]-pjs[t_j][0];
	} else {
		c_b.style.visibility="hidden";
		c_b.style.height="0px";
		c_b.scrollTop=0;
		clearInterval(pjs[t_j][5*t_k+3]);
	}
}

function slidingdoor_main(t_d,t_k,d_container,d_title,d_btn,hash){
	t_i++;
	pjs[t_i]=new Array(); var t_l=0; var t_m=-1;var btn=t_d;var la_c=0;pjs[t_i][1]=0;pjs[t_i][0]="slidingdoor";
	pjs[t_i][2]=(hash!=undefined)?hash:"";
	var anchorsub=t_d.getElementsByTagName("*");
	var slidingtil=newtag("ul.slidingdoor_title");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],d_container)){
			t_m=j_j;
		} else if (tagif(anchorsub[j_j],d_title)){
			if (t_m>=0) {
				if (subif(anchorsub[t_m],anchorsub[j_j])){
					t_l++;
					pjs[t_i][2*t_l+1]=noteid(anchorsub[t_m],"pjs"+t_i+"_"+t_l);
					if (pjs[t_i][2*t_l+1]==pagehash) la_c=t_l;
					pjs[t_i][2*t_l+2]="pjs"+t_i+"_"+t_l+"btn";
					var newli=newtag("li#"+pjs[t_i][2*t_l+2]+".slidingbtn"+t_l,'height:auto;',anchorsub[j_j].innerHTML);
					if (cssif(anchorsub[t_m],"sliding_on")) {
						cssif(newli,"current")
						pjs[t_i][1]=t_l;
					}
					slidingtil.appendChild(newli);
					addf(newli,t_k,"slidingdoor("+t_i+","+t_l+")");
					if ((pageis=="IE IE6" || pageis=="IE IE7") && eval("anchorsub[j_j].getElementsByTagName(\"*\")[0]."+t_k)) {
						var fff=""+eval("anchorsub[j_j].getElementsByTagName(\"*\")[0]."+t_k);
						if (fff.indexOf("{")>0) fff=fff.substring(fff.indexOf("{")+1,fff.lastIndexOf("}"));
						fff.split(" ").join("");
						fff.split("\r").join("");
						fff.split("\n").join("");
						addf(newli,t_k,fff);
					}
					t_m=-1;
				}
			}
		} else if (d_btn!=undefined && tagif(anchorsub[j_j],d_btn)) {
			btn=anchorsub[j_j];
		}
	}
	if (!!btn.firstChild) {
		btn.insertBefore(slidingtil,btn.firstChild);
	} else {
		btn.appendChild(slidingtil);
	}
	//alert(slidingtil.innerHTML);
	if (la_c!=0) {
		slidingdoor(t_i,la_c);
	} else if (pjs[t_i][1]==0) {
		slidingdoor(t_i,1);
	}
}
function slidingdoor_opacityshow(t_d,t_l){
	t_l+=10;
	if (t_l<=100) {
		document.getElementById(pjs[t_d][2*pjs[t_d][1]+1]).style.cssText="opacity:"+(t_l/100)+";filter:Alpha(Opacity="+t_l+");";
		setTimeout("slidingdoor_opacityshow("+t_d+","+t_l+")",30);
	}
}
function slidingdoor_opacityhidden(t_d,t_n,t_l){
	t_l-=10;
	if (t_l>0) {
		document.getElementById(pjs[t_d][2*pjs[t_d][1]+1]).style.cssText="opacity:"+(t_l/100)+";filter:Alpha(Opacity="+t_l+");";
		setTimeout("slidingdoor_opacityhidden("+t_d+","+t_n+","+t_l+")",30);
	} else {
		document.getElementById(pjs[t_d][2*pjs[t_d][1]+1]).style.cssText="opacity:0;filter:Alpha(Opacity=0);";
		slidingdoor2(t_d,t_n);
	}
}
function slidingdoor(t_d,t_l){
	if (t_l!=pjs[t_d][1]) {
		if (pjs[t_d][1]>0) {
			slidingdoor_opacityhidden(t_d,t_l,100);
		} else {
			cssadd(pjs[t_d][2*t_l+1],"sliding_on");
			cssadd(pjs[t_d][2*t_l+2],"current");
			pjs[t_d][1]=t_l;
			slidingdoor_opacityshow(t_d,0);
		}
	}
}
function slidingdoor2(t_d,t_l){
	var c_a_o=document.getElementById(pjs[t_d][2*pjs[t_d][1]+1]);
	var c_b_o=document.getElementById(pjs[t_d][2*pjs[t_d][1]+2]);
	if (cssif(c_a_o,"sliding_on")) {
		cssremove(c_a_o,"sliding_on");
		cssremove(c_b_o,"current");
	}
	cssadd(pjs[t_d][2*t_l+1],"sliding_on");
	cssadd(pjs[t_d][2*t_l+2],"current");
	pjs[t_d][1]=t_l;
	if (pjs[t_d][2]=="hash") window.location.hash="#"+pjs[t_d][2*t_l+1];
	slidingdoor_opacityshow(t_d,0);
}
function sdoorto(t_d){
	for (var j_j=0; j_j<pjs.length; j_j++) {
		if (typeof(pjs[j_j])=="object") {
			if (typeof(pjs[j_j][0])=="string" && pjs[j_j][0]=="slidingdoor") {
				var j_l=j_j;
				for (var j_k=1; j_k<(pjs[j_l].length-1)/2; j_k++) {
					if (pjs[j_l][2*j_k+1]==t_d) {
						slidingdoor(j_l,j_k);
						j_k=(pjs[j_l].length-1)/2;
						j_j=pjs.length;
					}
				}
			}
		}
	}
}

function nostyle(t_d){
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		anchorsub[j_j].style.cssText="";
	}
}
function nocss(t_d){
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		anchorsub[j_j].className="";
	}
}

function content_main(t_d,t_k,t_l){
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		if(t_k=="nostyle" && !tagif(anchorsub[j_j],".havestyle")) anchorsub[j_j].style.cssText="";
		if (pageis=="IE IE6" && anchorsub[j_j].nodeName=="P"){
			if (anchorsub[j_j].align=="right") anchorsub[j_j].style.textAlign="right";
			if (anchorsub[j_j].align=="center") anchorsub[j_j].style.textAlign="center";
		} else if (anchorsub[j_j].nodeName=="IMG" || anchorsub[j_j].nodeName=="TABLE") {
			if (anchorsub[j_j].border!="0") {
				if (anchorsub[j_j].nodeName=="IMG" && t_l>0) photo_auto_main(anchorsub[j_j],(t_d.clientWidth-t_l),0,'nocenter');
				cssadd(anchorsub[j_j],"haveborder");
			} else {
				if (anchorsub[j_j].nodeName=="IMG" && t_l>0) photo_auto_main(anchorsub[j_j],t_d.clientWidth,0,'nocenter');
			}
			if (anchorsub[j_j].align=="right") anchorsub[j_j].style.marginLeft="3em";
			if (anchorsub[j_j].align=="left") anchorsub[j_j].style.marginRight="3em";
		}
	}
}

function outspread_main(t_d,t_k,t_l,d_container,d_btn,d_hash){
	t_i++;var j_l=0;var t_m=0;
	pjs[t_i]=new Array();pjs[t_i][0]=0;
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],d_container)){
			t_m=j_j;
			j_l++;
			pjs[t_i][j_l]=noteid(anchorsub[t_m],"pjs"+t_i+"_"+j_l);
			if (t_l=="open_all") {
				cssadd(anchorsub[t_m],"outspread_open");
			} else if(j_l==1 && t_l=="open_frist"){
				if (!cssif(anchorsub[t_m],"outspread_open")) pjs[t_i][0]=1;
			}
			if (d_hash=="hash" && pagehash==pjs[t_i][j_l]) {
				if (!cssif(anchorsub[t_m],"outspread_open")) pjs[t_i][0]=j_l;
			}
		} else if (tagif(anchorsub[j_j],d_btn)){
			if (subif(anchorsub[t_m],anchorsub[j_j])){
				addf(anchorsub[j_j],"onmousemove","menu(this,'on')");
				addf(anchorsub[j_j],"onmouseout","menu(this,'out')");
				addf(anchorsub[j_j],"onclick","outspread("+t_i+","+j_l+",'"+t_k+"','"+d_hash+"')");
			}
		}
	}
	if (pjs[t_i][0]>0) outspread(t_i,pjs[t_i][0],t_k,d_hash);
}
function outspread(t_j,t_k,t_l,d_hash){
	var m_c=document.getElementById(pjs[t_j][t_k]);
	if (cssif(m_c,"outspread_open")) {
		cssremove(m_c,"outspread_open");
	} else {
		if (t_l=="close_other" && pjs[t_j][0]!=0) {
			var m_o=document.getElementById(pjs[t_j][pjs[t_j][0]]);
			if (t_k!=pjs[t_j][0]) {
				cssremove(m_o,"outspread_open");
			}
		}
		cssadd(m_c,"outspread_open");
		pjs[t_j][0]=t_k;
		if (d_hash=="hash") window.location.hash="#"+pjs[t_j][t_k];
	}
}

function scroll_main(t_d,t_type,d_container,d_content,d_v,d_t){
	t_i++;
	pjs[t_i]=new Array();
	pjs[t_i][0]=1;pjs[t_i][1]=0;pjs[t_i][2]=0;pjs[t_i][6]=(d_t!=undefined)?d_t:0;pjs[t_i][7]=0;pjs[t_i][8]=0;pjs[t_i][9]=0;
	var s_c;var s_m;
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],d_container)){
			s_c=anchorsub[j_j];
			pjs[t_i][4]=noteid(s_c,"pjs"+t_i);
		} else if (tagif(anchorsub[j_j],d_content)){
			s_m=anchorsub[j_j];
		}
	}
	if (t_type=="left") {
		pjs[t_i][9]=s_c.clientWidth;
		s_m.style.position="absolute";
		pjs[t_i][3]=s_m.clientWidth;
		s_m.style.position="relative";
	} else {
		pjs[t_i][9]=s_c.clientHeight;
		pjs[t_i][3]=s_m.clientHeight;
	}
	if (pjs[t_i][9]<pjs[t_i][3]) {
		if(pjs[t_i][6]==0) {
			var newa1=newtag("a.scroll_move_1");
			t_d.appendChild(newa1);
			var newa2=newtag("a.scroll_move_2");
			t_d.appendChild(newa2);
		}
		var copytimes=parseInt(pjs[t_i][9]/pjs[t_i][3])+1;
		s_m.style.display="block";
		cssadd(s_m,"scrollclass");
		if (t_type=="left") {
			s_m.style.width=2*(copytimes+1)*pjs[t_i][3]+"px";
		} else {
			s_m.style.height=2*(copytimes+1)*pjs[t_i][3]+"px";
		}
		var scroll_c=s_m.innerHTML;
		for (var j_k=0;j_k<2*copytimes;j_k++){
			s_m.innerHTML+=scroll_c;
		}
		addf(s_c,"onmousemove","scroll_stop("+t_i+",1)");
		addf(s_c,"onmouseout","scroll_stop("+t_i+",0);");
		if(pjs[t_i][6]==0) {
			addf(newa1,"onmousedown","scroll_moveto("+t_i+",8)");
			addf(newa2,"onmousedown","scroll_moveto("+t_i+",-8)");
			addf(newa1,"onmouseup","scroll_moveto("+t_i+",1)");
			addf(newa2,"onmouseup","scroll_moveto("+t_i+",-1)");
		}
		pjs[t_i][5]=setInterval("scroll_todo("+t_i+",'"+t_type+"')",(d_v!=undefined)?d_v:30);
	}
}
function scroll_moveto(t_j,t_k) {
	pjs[t_j][0]=t_k;
}
function scroll_stop(t_j,t_k) {
	pjs[t_j][2]=t_k;
}
function scroll_todo(t_j,t_k){
	if(pjs[t_j][6]==0) {
		if (pjs[t_j][2]==0) {
			pjs[t_j][1]=pjs[t_j][1]+pjs[t_j][0];
			if (2*pjs[t_j][3]-pjs[t_j][1]<0) {
				pjs[t_j][1]=pjs[t_j][1]-2*pjs[t_j][3];
			} else {
				if (pjs[t_j][1]<0) pjs[t_j][1]=2*pjs[t_j][3]-pjs[t_j][1];
			}
			if (t_k=="left") {
				document.getElementById(pjs[t_j][4]).scrollLeft=pjs[t_j][1];
			} else {
				document.getElementById(pjs[t_j][4]).scrollTop=pjs[t_j][1];
			}
		}
	} else {
		if (pjs[t_j][2]==0 || pjs[t_j][8]<=pjs[t_j][9]) {
			pjs[t_j][8]++;
			if (pjs[t_j][8]<=pjs[t_j][9]) {
				pjs[t_j][1]=pjs[t_j][1]+pjs[t_j][0];
				if (2*pjs[t_j][3]-pjs[t_j][1]<0) {
					pjs[t_j][1]=pjs[t_j][1]-2*pjs[t_j][3];
				} else {
					if (pjs[t_j][1]<0) pjs[t_j][1]=2*pjs[t_j][3]-pjs[t_j][1];
				}
				if (t_k=="left") {
					document.getElementById(pjs[t_j][4]).scrollLeft=pjs[t_j][1];
				} else {
					document.getElementById(pjs[t_j][4]).scrollTop=pjs[t_j][1];
				}
			} else {
				if(pjs[t_j][8]>pjs[t_j][9]+pjs[t_j][6]) pjs[t_j][8]=0;
			}
		}
	}
}


function tonewlayer() {
	var newnote1=newtag("div#newlayer");
	document.body.insertBefore(newnote1,document.body.firstChild);
	var newnote=newtag("div.layer_bg");
	newnote1.appendChild(newtag("div.layer_bg"));
	newnote1.appendChild(newtag("div.layer_place"));
	newnote=newtag("div#layer_content");
	newnote1.appendChild(newnote);
	if (pageis=="IE IE6") newnote.innerHTML+="<iframe id=\"layer_iframe\" name=\"layer_iframe\" src=\"about:blank;\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\"></iframe>";
	for (var i=1;i<10;i++) {
		newnote.appendChild(newtag("div#sublayer"+i));
	}
	newnote1=newtag("a.btn_close");
	newnote.appendChild(newnote1);
	addf(newnote1,"onclick","newlayer_close()");
	newlayerplace();
	if (window.onscroll==null) {
		window.onscroll=function (){newlayerplace();}
	} else {
		var onscrolltxt=""+window.onscroll;
		eval("window.onscroll="+onscrolltxt.substring(0,onscrolltxt.length-1)+"newlayerplace();}");
	}
	if (window.onresize==null) {
		window.onresize=function (){newlayerplace();}
	} else {
		var onresizetxt=""+window.onresize;
		eval("window.onresize="+onresizetxt.substring(0,onresizetxt.length-1)+"newlayerplace();}");
	}
}
function newlayerplace() {
	var c_w=document.documentElement.clientWidth;
	var c_h=document.documentElement.clientHeight;
	var c_h2=document.body.clientHeight;
	var st=(document.body.scrollTop>0)?document.body.scrollTop:document.documentElement.scrollTop;
	var layerstyle=document.getElementById("newlayer").style;
	layerstyle.width=(c_w>1000)?c_w+"px":"1000px";
	if (c_h>600) {
		layerstyle.height=c_h+"px";
		layerstyle.top=((pageis=="IE IE6")?st:0)+"px";
	} else {
		layerstyle.height="600px";
		layerstyle.top=((st<c_h2-600)?((pageis=="IE IE6")?st:0):((pageis=="IE IE6")?(st-600+c_h):(c_h2-600-st)))+"px";
	}
}
function newlayer_open() {
	var layerstyle=document.getElementById("newlayer").style;
	layerstyle.zIndex=9999;
	layerstyle.display="block";
}
function newlayer_close() {
	var layerstyle=document.getElementById("newlayer").style;
	layerstyle.display="none";
	layerstyle.zIndex=1;
	document.getElementById("sublayer5").innerHTML="";
}
function tonewlayer_main(t_d,thistype,thisdload,thiswidth,thisheight,thiscss){
	if (!document.getElementById("newlayer")) tonewlayer();
	var t_w=(thiswidth!=undefined)?thiswidth:540;
	var t_h=(thisheight!=undefined)?thisheight:150;
	var t_dl=(thisdload!=undefined)?thisdload:"";
	var t_type=(thistype!=undefined)?thistype:"";
	document.getElementById("newlayer").className=(thiscss!=undefined)?thiscss:"";
	var s5=document.getElementById("sublayer5");
	s5.style.cssText="width:"+t_w+"px;height:"+t_h+"px;";
	if (t_type=="") {
		if (typeof(t_d)=="object") s5.innerHTML=t_d.innerHTML;
		if (typeof(t_d)=="string") s5.innerHTML=document.getElementById(t_d).innerHTML;
	} else {
		switch (t_type) {
			case "id":
				s5.innerHTML=document.getElementById(t_d).innerHTML;
			break;
			case "iframe":
				if (pageis.indexOf("FF")!=-1) {
					
					s5.innerHTML="<iframe id=\"tonewlayer_iframe\" name=\"tonewlayer_iframe\" src=\""+t_d+"\" width=\""+t_w+"\" height=\""+t_h+"\" frameborder=\"0\" allowTransparency=\"true\" scrolling=\"no\"></iframe>";
				} else {
					s5.innerHTML="<iframe id=\"tonewlayer_iframe\" name=\"tonewlayer_iframe\" src=\"about:blank;\" width=\""+t_w+"\" height=\""+t_h+"\" frameborder=\"0\" allowTransparency=\"true\" scrolling=\"no\"></iframe>";
					window.frames["tonewlayer_iframe"].location.href=t_d;
				}
			break;
			case "wallpaper":
				s5.innerHTML="<img src=\""+t_d+"\" width=\""+t_w+"\" height=\""+t_h+"\" />";
			break;
			case "img":
				s5.style.cssText="width:"+t_w+"px;height:"+t_h+"px;overflow:hidden;"
				s5.innerHTML="<img src=\""+t_d+"\" onload=\"photo_auto(this,"+t_w+","+t_h+",'center')\" />";
			break;
			case "swf":
			var nl = new SWFObject(t_d,"",t_w,t_h,"9,0,28,0");
				nl.addParam("wmode","opaque");
				if (t_d.indexOf("/")>0) nl.addParam("base",t_d.substring(0,t_d.lastIndexOf("/")+1));
				nl.addParam("allowfullScreen","true");
				nl.addParam("scale", "noscale");
				nl.write("sublayer5");
			break;
			case "flv":
				s5.style.cssText="width:"+t_w+"px;height:"+(t_h+24)+"px;overflow:auto;"
				var nl = new SWFObject("/images/page/player.swf", "",t_w,t_h+24, "9,0,28,0", "#000000");
				nl.addParam("wmode", "opaque");
				nl.addParam("allowfullScreen", "true");
				nl.addParam("scale", "noscale");
	
				nl.addVariable("autostart", "true");
				nl.addVariable("frontcolor", "#000000");
				nl.addVariable("height",t_h);
				nl.addVariable("width", t_w);
				nl.addVariable("file", t_d);
				nl.write("sublayer5");
			break;
		}
	}
	if (t_dl!="") {
		s5.appendChild(newtag("span","",t_dl));
	}
	newlayer_open();
	document.getElementById("layer_content").style.height=s5.offsetHeight+"px";
	document.getElementById("layer_content").style.width=s5.offsetWidth+"px";
}

function scrollcontent_main(t_d,t_t,t_m,t_s,t_ss){
	t_i++;
	pjs[t_i]=new Array();pjs[t_i][0]=0;pjs[t_i][5]=0;pjs[t_i][7]=1;var s_m;
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],t_m)){
			s_m=anchorsub[j_j];
			j_j=anchorsub.length;
		}
	}
	if (pageis=="FF FF2")cssadd(s_m,"ff2");
	pjs[t_i][1]=noteid(s_m,"pjs"+t_i);
	pjs[t_i][2]=(t_t==1 || t_t==3)?s_m.clientWidth:s_m.clientHeight;
	var asub=s_m.getElementsByTagName("li");
	pjs[t_i][3]=(t_t==1 || t_t==3)?asub[0].clientWidth:asub[0].clientHeight;
	pjs[t_i][4]=pjs[t_i][3]*asub.length;
	if (pjs[t_i][2]<pjs[t_i][4]) {
		var page_up=newtag("a.page_up");
		var page_dn=newtag("a.page_dn");
		s_m.parentNode.insertBefore(page_up,s_m);
		s_m.parentNode.insertBefore(page_dn,s_m);
		addf(page_up,"onclick","scrollcontent("+t_i+","+t_t+",-1,"+t_s+","+t_ss+")");
		addf(page_dn,"onclick","scrollcontent("+t_i+","+t_t+",1,"+t_s+","+t_ss+")");
		addf(t_d,"onmouseover","scrollcontent_stop("+t_i+","+t_t+",0,"+t_s+","+t_ss+")");
		addf(t_d,"onmouseout","scrollcontent_stop("+t_i+","+t_t+",1,"+t_s+","+t_ss+")");
		s_m.innerHTML=s_m.innerHTML+s_m.innerHTML+s_m.innerHTML;
		pjs[t_i][8]=setTimeout("scrollcontent("+t_i+","+t_t+",1,"+t_s+","+t_ss+")",t_ss);
	}
	s_m.style.visibility="visible";
}
function scrollcontent_stop(t_d,t_t,t_m,t_s,t_ss){
	clearTimeout(pjs[t_d][8]);
	pjs[t_d][7]=t_m;
	if (t_m==1 && pjs[t_d][5]==0) pjs[t_d][8]=setTimeout("scrollcontent("+t_d+","+t_t+",1,"+t_s+","+t_ss+")",t_ss);
}
function scrollcontent(t_d,t_t,t_m,t_s,t_ss){
	clearTimeout(pjs[t_d][8]);
	if (pjs[t_d][5]==0) {
		pjs[t_d][5]=1;
		scrollcontent_goto(t_d,t_t,t_m*((t_t<3)?pjs[t_d][2]:pjs[t_d][3]),t_s,t_ss);
	}
}

function scrollcontent_goto(t_d,t_t,t_m,t_s,t_ss){
	if (t_m>0) {
		if (t_m>t_s) {
			t_m=t_m-t_s;
			pjs[t_d][0]+=t_s;
		} else {
			pjs[t_d][0]+=t_m;
			t_m=0;
		}
	} else {
		if (t_m+t_s<0) {
			t_m=t_m+t_s;
			pjs[t_d][0]-=t_s;
		} else {
			pjs[t_d][0]+=t_m;
			t_m=0;
		}
	}
	if (2*pjs[t_d][4]-pjs[t_d][0]<0) {
		pjs[t_d][0]=pjs[t_d][0]-2*pjs[t_d][4];
	} else {
		if (pjs[t_d][0]<0) pjs[t_d][0]=2*pjs[t_d][4]+pjs[t_d][0];
	}
	if (t_t==1 || t_t==3) {
		document.getElementById(pjs[t_d][1]).scrollLeft=pjs[t_d][0];
	} else {
		document.getElementById(pjs[t_d][1]).scrollTop=pjs[t_d][0];
	}
	if (t_m!=0) {
		pjs[t_d][6]=setTimeout("scrollcontent_goto("+t_d+","+t_t+","+t_m+","+t_s+","+t_ss+")",30);
	} else {
		pjs[t_d][5]=0;
		if (pjs[t_d][7]==1) pjs[t_i][8]=setTimeout("scrollcontent("+t_d+","+t_t+",1,"+t_s+","+t_ss+")",t_ss);
	}
}



function hotimg_main(t_d,t_c,t_p,t_t,t_b,t_n){
	t_i++;
	pjs[t_i]=new Array();
	var anchorsub=t_d.getElementsByTagName("*");
	var btntxt="";
	pjs[t_i][0]=0;pjs[t_i][1]=t_p;pjs[t_i][2]=new Array();pjs[t_i][3]=(t_n!=undefined)?t_n.substring(1):"";pjs[t_i][4]=0;pjs[t_i][12]=0;pjs[t_i][14]=2;pjs[t_i][15]=1;
	pjs[t_i][5]=new Array();pjs[t_i][6]=new Array();pjs[t_i][7]=new Array();pjs[t_i][8]=new Array();
	for (j_j=0;j_j<anchorsub.length;j_j++) {
		if (tagif(anchorsub[j_j],t_c)){
			pjs[t_i][4]++;
			pjs[t_i][2][pjs[t_i][4]] =(typeof(t_t)=="number")?t_t:t_t[(pjs[t_i][4]-1)];
			pjs[t_i][8][pjs[t_i][4]]=noteid(anchorsub[j_j],"pjs_"+t_i+"_"+pjs[t_i][4]);
			pjs[t_i][9]=anchorsub[j_j].clientWidth;
			pjs[t_i][10]=anchorsub[j_j].clientHeight;
			if (pjs[t_i][3]=="") {
				anchorsub[j_j].style.position="absolute";
				anchorsub[j_j].style.visibility="hidden";
			}
			if(pjs[t_i][4]==1){
				if(pjs[t_i][3]=="") {
					anchorsub[j_j].style.zIndex=2;
					anchorsub[j_j].style.visibility="visible";
				}
				cssadd(anchorsub[j_j],"current")
			}
			if(anchorsub[j_j].getElementsByTagName("img")[0]){
				pjs[t_i][5][pjs[t_i][4]]=anchorsub[j_j].getElementsByTagName("img")[0].src;
				pjs[t_i][6][pjs[t_i][4]]=(anchorsub[j_j].getElementsByTagName("img")[0].alt)?anchorsub[j_j].getElementsByTagName("img")[0].alt:"";
			}
			if(anchorsub[j_j].getElementsByTagName("a")[0]){
				pjs[t_i][7][pjs[t_i][4]]=anchorsub[j_j].getElementsByTagName("a")[0].href;
				if(t_b!="now" && pjs[t_i][5][pjs[t_i][4]].substring(pjs[t_i][5][pjs[t_i][4]].length-4)==".swf") {
					var nl = new SWFObject(pjs[t_i][5][pjs[t_i][4]],"","100%","100%","9,0,28,0");
					nl.addParam("wmode","opaque");
					nl.write(noteid(anchorsub[j_j].getElementsByTagName("a")[0],"pjs_a_"+t_i+"_"+pjs[t_i][4]));
				}
			} else {
				if(t_b!="now" && pjs[t_i][5][pjs[t_i][4]].substring(pjs[t_i][5][pjs[t_i][4]].length-4)==".swf") {
					var nl = new SWFObject(pjs[t_i][5][pjs[t_i][4]],"","100%","100%","9,0,28,0");
					nl.addParam("wmode","opaque");
					nl.write(anchorsub[j_j].id);
				}
			}
			btntxt+="<a href=\"javascript:hotimgs("+t_i+","+pjs[t_i][4]+")\" id=\"btn"+t_i+"_"+pjs[t_i][4]+"\""+((pjs[t_i][4]==1)?" class=\"btn_"+pjs[t_i][4]+" current\"":" class=\"btn_"+pjs[t_i][4]+"\"")+" title=\""+((pjs[t_i][6][pjs[t_i][4]])?pjs[t_i][6][pjs[t_i][4]]:"")+"\">"+((t_b=="img")?"<img src=\""+pjs[t_i][5][pjs[t_i][4]]+"\" />":"<span>"+pjs[t_i][4]+"</span>")+"</a>";
		}
	}
	if (pjs[t_i][3]!=""){
		if(pjs[t_i][5][1].substring(pjs[t_i][5][1].length-4)==".swf") {
			var nl = new SWFObject(pjs[t_i][5][1],"","100%","100%","9,0,28,0");
			nl.addParam("wmode","opaque");
			nl.write(pjs[t_i][3]);
		} else {
			document.getElementById(pjs[t_i][3]).style.backgroundImage="url("+pjs[t_i][5][1]+")";
			if (pjs[t_i][7][1]!=null) {
				document.getElementById(pjs[t_i][3]).innerHTML="<a href=\""+pjs[t_i][7][1]+"\" target=\"_blank\"></a>";
			} 
		}
	}
	t_d.appendChild(newtag("div#pjs_txt_"+t_i+".hotimgtxt","",pjs[t_i][6][1]));
	t_d.appendChild(newtag("div#pjs_btn_"+t_i+".hotimgbtn","",btntxt));
	addf(t_d,"onmouseover","hotimg_stop("+t_i+")");
	addf(t_d,"onmouseout","hotimg_move("+t_i+")");
	t_d.appendChild(newtag("a#pjs"+t_i+"_pgup.hot_pgup"));
	t_d.appendChild(newtag("a#pjs"+t_i+"_pgdn.hot_pgdn"));
	addf("pjs"+t_i+"_pgup","onclick","hotimg_page("+t_i+",-1)");
	addf("pjs"+t_i+"_pgdn","onclick","hotimg_page("+t_i+",1)");
	pjs[t_i][11]=setTimeout("hotimg_change("+t_i+")",pjs[t_i][2][1]);
}

function hotimg_change(t_j){
	pjs[t_j][12]++;
	if (pjs[t_j][12]==1) {
		pjs[t_j][13]=Math.round(Math.random()*7)+1;
		if (pjs[t_j][1]!=0) pjs[t_j][13]=pjs[t_j][1];
	}
	if (pjs[t_j][12]<41) {
		if (pjs[t_j][12]==20) {
			pjs[t_j][15]=pjs[t_j][14];
			for (j_i=1;j_i<=pjs[t_j][4];j_i++) {
				cssremove("btn"+t_j+"_"+j_i,"current");
				cssremove(pjs[t_j][8][j_i],"current");
			}
			cssadd("btn"+t_j+"_"+pjs[t_j][15],"current");
			cssadd(pjs[t_j][8][pjs[t_j][15]],"current");
			document.getElementById("pjs_txt_"+t_j).innerHTML=pjs[t_j][6][pjs[t_j][15]];
			if (pjs[t_j][3]!=""){
				if(pjs[t_j][5][pjs[t_j][15]].substring(pjs[t_j][5][pjs[t_j][15]].length-4)==".swf") {
					var nl = new SWFObject(pjs[t_j][5][pjs[t_j][15]],"","100%","100%","9,0,28,0");
					nl.addParam("wmode","opaque");
					nl.write(pjs[t_j][3]);
				} else {
					document.getElementById(pjs[t_j][3]).style.backgroundImage="url("+pjs[t_j][5][pjs[t_j][15]]+")";
					if (pjs[t_j][7][1]!=null) {
						document.getElementById(pjs[t_j][3]).innerHTML="<a href=\""+pjs[t_j][7][pjs[t_j][15]]+"\" target=\"_blank\"></a>";
					} 
				}
			}
		}
		switch (pjs[t_j][13]) {
			case 1 :
				j_k=Math.round(pjs[t_j][9]*(pjs[t_j][12]/40-1));
				j_l=Math.round(pjs[t_j][10]*(1-pjs[t_j][12]/40));
			break;
			case 2 :
				j_k=0;
				j_l=Math.round(pjs[t_j][10]*(1-pjs[t_j][12]/40));
			break;
			case 3 :
				j_k=Math.round(pjs[t_j][9]*(1-pjs[t_j][12]/40));
				j_l=Math.round(pjs[t_j][10]*(pjs[t_j][12]/40-1));
			break;
			case 4 :
				j_k=Math.round(pjs[t_j][9]*(pjs[t_j][12]/40-1));
				j_l=Math.round(pjs[t_j][10]*(pjs[t_j][12]/40-1));
			break;
			case 5 :
				j_k=0;
				j_l=Math.round(pjs[t_j][10]*(pjs[t_j][12]/40-1));
			break;
			case 6 :
				j_k=Math.round(pjs[t_j][9]*(1-pjs[t_j][12]/40));
				j_l=Math.round(pjs[t_j][10]*(1-pjs[t_j][12]/40));
			break;
			case 7 :
				j_k=Math.round(pjs[t_j][9]*(1-pjs[t_j][12]/40));
				j_l=0;
			break;
			default:j_k=(pjs[t_j][12]<20)?pjs[t_j][9]:0;j_l=0;
			if (pageis.indexOf("IE")!=-1) {
				document.getElementById(pjs[t_j][8][pjs[t_j][15]]).style.filter="Alpha(Opacity="+Math.abs(100-pjs[t_j][12]*5)+")";
			} else {
				document.getElementById(pjs[t_j][8][pjs[t_j][15]]).style.opacity=Math.abs(100-pjs[t_j][12]*5)/100;
			}
		}
		if (pjs[t_j][3]=="") {
			document.getElementById(pjs[t_j][8][pjs[t_j][14]]).style.zIndex=3;
			document.getElementById(pjs[t_j][8][pjs[t_j][14]]).style.visibility="visible";
			document.getElementById(pjs[t_j][8][pjs[t_j][14]]).style.top=j_l+"px";
			document.getElementById(pjs[t_j][8][pjs[t_j][14]]).style.left=j_k+"px";
		} else {
			if (pageis.indexOf("IE")!=-1) {
				document.getElementById(pjs[t_j][3]).style.filter="Alpha(Opacity="+Math.abs(100-pjs[t_j][12]*5)+")";
			} else {
				document.getElementById(pjs[t_j][3]).style.opacity=Math.abs(100-pjs[t_j][12]*5)/100;
			}
		}
		//document.title=pjs[t_j][12];
		pjs[t_j][11]=setTimeout("hotimg_change("+t_j+")",20);
		
	} else {
		if (pjs[t_j][3]=="") {
			for (j_i=1;j_i<=pjs[t_j][4];j_i++) {
				document.getElementById(pjs[t_j][8][j_i]).style.cssText=(j_i!=pjs[t_j][15])?"position:absolute;z-index:1;top:0;left:0;visibility:hidden;":"position:absolute;z-index:2;top:0;left:0;visibility:visible;";
			}
		} else {
			if (pageis.indexOf("IE")!=-1) {
				document.getElementById(pjs[t_j][3]).style.filter="''";
			} else {
				document.getElementById(pjs[t_j][3]).style.opacity=1;
			}
		}
		pjs[t_j][12]=0;
		if (pjs[t_j][0]==0) {
			pjs[t_j][14]=pjs[t_j][15]+1;
			if (pjs[t_j][14]>pjs[t_j][4]) pjs[t_j][14]=1;
			pjs[t_j][11]=setTimeout("hotimg_change("+t_j+")",pjs[t_j][2][pjs[t_j][15]]);
		}
		if (pjs[t_j][0]==3) {
			pjs[t_j][14]=pjs[t_j][15]+1;
			if (pjs[t_j][14]>pjs[t_j][4]) pjs[t_j][14]=1;
			pjs[t_j][0]=1;
		}
		if (pjs[t_j][0]==2) {
			pjs[t_j][0]=3;
			hotimg_change(t_j);
		}
	}
}
function hotimgs(t_j,mt){
	clearTimeout(pjs[t_j][11]);
	if (pjs[t_j][15]!=mt) {
		pjs[t_j][0]=2;
		pjs[t_j][12]=40;
		pjs[t_j][14]=mt;
		hotimg_change(t_j);
	} else {
		pjs[t_j][9]=setTimeout("hotimg_change("+t_j+")",pjs[t_j][2][pjs[t_j][15]]);
	}
}
function hotimg_page(t_j,mt){
	var mmt=pjs[t_j][15]+mt;
	if (mmt==0) mmt=pjs[t_j][4];
	if (mmt>pjs[t_j][4]) mmt=1;
	hotimgs(t_j,mmt);
}
function hotimg_stop(t_j){
	if (pjs[t_j][0]==0) {
		pjs[t_j][0]=1;
		pjs[t_j][12]=40;
		clearTimeout(pjs[t_j][11]);
		hotimg_change(t_j);
	}
}
function hotimg_move(t_j){
	if (pjs[t_j][0]==1) {
		pjs[t_j][0]=0;
		clearTimeout(pjs[t_j][11]);
		pjs[t_j][11]=setTimeout("hotimg_change("+t_j+")",pjs[t_j][2][pjs[t_j][15]]);
	}
}

function morecss(t_d,t_n,t_c,t_b) {
	var anchorsub=t_d.getElementsByTagName("*");
	var t_k=0;
	for (j_j=0;j_j<anchorsub.length;j_j++) {
		if (tagif(anchorsub[j_j],t_n)){
			t_k++;
			cssadd(anchorsub[j_j],(t_c+t_k));
			if (t_k>=t_b) t_k=0;
		}
	}
}
function photolist(t_d,t_k,t_l){
	var anchorsub=t_d.getElementsByTagName("a");var moreurl="";var j_j=0;var linkanchor="";
	for (j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],t_k)){
			moreurl=""+anchorsub[j_j].getAttribute("href",2);
			moreurl=((moreurl.indexOf("#")>0)?moreurl.substring(0,moreurl.lastIndexOf("#")):moreurl)+"#";
			j_j=anchorsub.length;
		}
	}
	anchorsub=t_d.getElementsByTagName("*");
	for (j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],t_l)){
			if (moreurl!="") {
				var asub=anchorsub[j_j].getElementsByTagName("a");
				for (var j_l=0; j_l<asub.length; j_l++) {
					asub[j_l].href=moreurl+asub[j_l].getAttribute("href",2)+linkanchor;
				}
			}
			anchorsub[j_j].style.visibility="visible";
		}
	}
}
function photocontent_main(t_d,t_t,t_l,t_w,t_h,t_hash,t_share,t_txt){
	t_i++;
	pjs[t_i]=new Array();pjs[t_i][0]=0;pjs[t_i][1]=new Array();pjs[t_i][2]=new Array();pjs[t_i][11]=new Array();pjs[t_i][14]=new Array();pjs[t_i][15]=false;pjs[t_i][16]=new Array();
	var moreurl="";var photo_btn;
	var imgurl=(thislocation.indexOf("?imgurl=")>0)?thislocation.substring(thislocation.indexOf("?imgurl=")+8):((thislocation.indexOf("&imgurl=")>0)?thislocation.substring(thislocation.indexOf("&imgurl=")+8):"");
	imgurl=(imgurl.indexOf("#")>0)?imgurl.substring(0,imgurl.indexOf("#")):imgurl;
	if (t_hash!=undefined && t_hash=='hash') {
		imgurl=pagehash;
		pjs[t_i][15]=true;
	}
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],t_l)){
			photo_btn=anchorsub[j_j];
			j_j=anchorsub.length;
		}
	}
	var asub=photo_btn.getElementsByTagName("a");
	var havec=0; 	
	switch (t_t) {
		case 0:
			for (var j_l=0; j_l<asub.length; j_l++) {
				pjs[t_i][1][j_l]=asub[j_l].getAttribute("href",2);
				pjs[t_i][16][j_l]=(asub[j_l].getAttribute("href2"))?asub[j_l].getAttribute("href2"):"";
				pjs[t_i][11][j_l]=asub[j_l].getElementsByTagName("img")[0].src;
				pjs[t_i][2][j_l]="";pjs[t_i][14][j_l]="";
				var imgtxt=asub[j_l].getElementsByTagName("*");
				for (var imgtxt_i=0; imgtxt_i<imgtxt.length; imgtxt_i++) {
					if (tagif(imgtxt[imgtxt_i],t_txt)) pjs[t_i][2][j_l]=imgtxt[imgtxt_i].innerHTML;
					if (tagif(imgtxt[imgtxt_i],t_share)) pjs[t_i][14][j_l]=intxt(imgtxt[imgtxt_i]);
				}
				if (pjs[t_i][2][j_l]=="") {
					pjs[t_i][2][j_l]=(asub[j_l].title)?asub[j_l].title.split("&#10;").join(""):"";
				}
				if (pjs[t_i][2][j_l]=="") {
					pjs[t_i][2][j_l]=(asub[j_l].getElementsByTagName("img")[0].alt)?asub[j_l].getElementsByTagName("img")[0].alt.split("&#10;").join(""):"";
				}
				if (pjs[t_i][1][j_l]==imgurl) {pjs[t_i][0]=j_l;havec=1;}
				addf(asub[j_l],"onclick","photocontent_type0("+t_i+","+t_w+","+t_h+","+j_l+",1);");
				asub[j_l].removeAttribute("href");asub[j_l].removeAttribute("target");
			}
			if (pjs[t_i][15]) {photocontent_type0(t_i,t_w,t_h,0,havec);}
		break;
		case 1:
			for (var j_l=0; j_l<asub.length; j_l++) {
				pjs[t_i][1][j_l]=asub[j_l].getAttribute("href",2);
				pjs[t_i][1][j_l]=asub[j_l].getAttribute("href",2);
				pjs[t_i][16][j_l]=(asub[j_l].getAttribute("href2"))?asub[j_l].getAttribute("href2"):"";
				pjs[t_i][11][j_l]=asub[j_l].getElementsByTagName("img")[0].src;
				pjs[t_i][2][j_l]="";pjs[t_i][14][j_l]="";
				var imgtxt=asub[j_l].getElementsByTagName("*");
				for (var imgtxt_i=0; imgtxt_i<imgtxt.length; imgtxt_i++) {
					if (tagif(imgtxt[imgtxt_i],t_txt)) pjs[t_i][2][j_l]=imgtxt[imgtxt_i].innerHTML;
					if (tagif(imgtxt[imgtxt_i],t_share)) pjs[t_i][14][j_l]=intxt(imgtxt[imgtxt_i]);
				}
				if (pjs[t_i][2][j_l]=="") {
					pjs[t_i][2][j_l]=(asub[j_l].title)?asub[j_l].title.split("&#10;").join(""):"";
				}
				if (pjs[t_i][2][j_l]=="") {
					pjs[t_i][2][j_l]=(asub[j_l].getElementsByTagName("img")[0].alt)?asub[j_l].getElementsByTagName("img")[0].alt.split("&#10;").join(""):"";
				}
				if (pjs[t_i][1][j_l]==imgurl) {pjs[t_i][0]=j_l;havec=1;}
			}
			photo_btn.parentNode.insertBefore(newtag("div#pjs_"+t_i+".photo_content"),photo_btn);
			photo_btn.parentNode.insertBefore(newtag("div#pjs_"+t_i+"_btn.photo_content_btn"),photo_btn);
			photocontent_type1(t_i,t_w,t_h,0,havec);
		break;
		case 2:
		case 3:
			pjs[t_i][3]=new Array();
			if (pageis=="FF FF2") cssadd(photo_btn,"ff2");
			pjs[t_i][4]=noteid(photo_btn,"pjs"+t_i+"_btn");
			pjs[t_i][5]=(t_t==2)?photo_btn.clientWidth:photo_btn.clientHeight;
			pjs[t_i][6]=0;
			for (var j_l=0; j_l<asub.length; j_l++) {
				pjs[t_i][1][j_l]=asub[j_l].getAttribute("href",2);
				pjs[t_i][1][j_l]=asub[j_l].getAttribute("href",2);
				pjs[t_i][16][j_l]=(asub[j_l].getAttribute("href2"))?asub[j_l].getAttribute("href2"):"";
				var imgtxt=asub[j_l].getElementsByTagName("*");
				pjs[t_i][2][j_l]="";pjs[t_i][14][j_l]="";
				for (var imgtxt_i=0; imgtxt_i<imgtxt.length; imgtxt_i++) {
					if (tagif(imgtxt[imgtxt_i],t_txt)) pjs[t_i][2][j_l]=imgtxt[imgtxt_i].innerHTML;
					if (tagif(imgtxt[imgtxt_i],t_share)) pjs[t_i][14][j_l]=intxt(imgtxt[imgtxt_i]);
				}
				if (pjs[t_i][2][j_l]=="") {
					pjs[t_i][2][j_l]=(asub[j_l].title)?asub[j_l].title.split("&#10;").join(""):"";
				}
				if (pjs[t_i][2][j_l]=="") {
					pjs[t_i][2][j_l]=(asub[j_l].getElementsByTagName("img")[0].alt)?asub[j_l].getElementsByTagName("img")[0].alt.split("&#10;").join(""):"";
				}
				pjs[t_i][11][j_l]=asub[j_l].getElementsByTagName("img")[0].src;
				if (asub[j_l].getAttribute("href",2)==imgurl) {pjs[t_i][0]=j_l;havec=1}
				pjs[t_i][6]+=(t_t==2)?asub[j_l].clientWidth:asub[j_l].clientHeight;
				pjs[t_i][3][j_l]=pjs[t_i][6];
				asub[j_l].href="javascript:photocontent_type2("+t_i+","+t_t+","+t_w+","+t_h+","+j_l+",1)";
				asub[j_l].target="";
				cssadd(asub[j_l],"pjs_"+t_i+"_"+j_l);
			}
			photo_btn.parentNode.insertBefore(newtag("div#pjs_"+t_i+".photo_content"),photo_btn);
			var page_up=newtag("a.page_up");
			var page_dn=newtag("a.page_dn");
			photo_btn.parentNode.insertBefore(page_up,photo_btn);
			photo_btn.parentNode.insertBefore(page_dn,photo_btn);
			addf(page_up,"onclick","photocontent_type2page("+t_i+","+t_t+","+t_w+","+t_h+",-1)");
			addf(page_dn,"onclick","photocontent_type2page("+t_i+","+t_t+","+t_w+","+t_h+",1)");
			if (pjs[t_i][5]<pjs[t_i][6]){
				pjs[t_i][7]=pjs[t_i][6]-Math.round(pjs[t_i][5]/2+pjs[t_i][3][0]/2);
				photo_btn.innerHTML=photo_btn.innerHTML+photo_btn.innerHTML+photo_btn.innerHTML;
				var btn_up=newtag("a.btn_up");
				var btn_dn=newtag("a.btn_dn");
				photo_btn.parentNode.insertBefore(btn_up,photo_btn);
				photo_btn.parentNode.insertBefore(btn_dn,photo_btn);
				addf(btn_up,"onmousedown","photocontent_s("+t_i+","+t_t+",10)");
				addf(btn_up,"onmouseup","photocontent_s("+t_i+","+t_t+",0)");
				addf(btn_up,"onmouseout","photocontent_s("+t_i+","+t_t+",0)");
				addf(btn_dn,"onmousedown","photocontent_s("+t_i+","+t_t+",-10)");
				addf(btn_dn,"onmouseup","photocontent_s("+t_i+","+t_t+",0)");
				addf(btn_dn,"onmouseout","photocontent_s("+t_i+","+t_t+",0)");
			}
			photocontent_type2(t_i,t_t,t_w,t_h,pjs[t_i][0],havec);
			photo_btn.style.visibility="visible";
		break;
	}
}
function photocontent_type0(t_d,t_w,t_h,t_n,havec){
	pjs[t_d][0]=t_n;
	tonewlayer_main(pjs[t_d][1][pjs[t_d][0]],((pjs[t_d][1][pjs[t_d][0]].substring(pjs[t_d][1][pjs[t_d][0]].length-4)==".flv" || pjs[t_d][1][pjs[t_d][0]].substring(pjs[t_d][1][pjs[t_d][0]].length-4)==".mp4")?"flv":"img"),"<span class=\"imgtxt\">"+pjs[t_d][2][pjs[t_d][0]]+"</span><span id=\"pjs_"+t_d+"_btn\" class=\"photo_content_btn\"><a class=\"page_up\" onclick=\"photocontent_type00("+t_d+","+t_w+","+t_h+",-1,1)\">&#19978;&#19968;&#24352;</a><a class=\"page_dn\" onclick=\"photocontent_type00("+t_d+","+t_w+","+t_h+",1,1)\">&#19979;&#19968;&#24352;</a>"+(pjs[t_d][0]+1)+" of "+pjs[t_d][1].length+"</span>"+((pjs[t_d][16][pjs[t_d][0]]!="")?"<a href=\""+pjs[t_d][16][pjs[t_d][0]]+"\"  target=\"_blank\" class=\"imgurl\"></a>":""),t_w,t_h,"photocontent_type0");
	if (pjs[t_d][15]) window.location.hash="#"+pjs[t_d][1][pjs[t_d][0]];
	if (pjs[t_d][14][pjs[t_d][0]]!=null) jiathis_config = {title:pjs[t_d][14][pjs[t_d][0]]};
}

function photocontent_type00(t_d,t_w,t_h,t_n,havec){
	pjs[t_d][0]=pjs[t_d][0]+t_n;
	if (pjs[t_d][0]<0) pjs[t_d][0]=pjs[t_d][1].length-1;
	if (pjs[t_d][0]>=pjs[t_d][1].length) pjs[t_d][0]=0;
	photocontent_type0(t_d,t_w,t_h,pjs[t_d][0],havec);
}

function photocontent_type1(t_d,t_w,t_h,t_n,havec){
	pjs[t_d][0]=pjs[t_d][0]+t_n;
	if (pjs[t_d][0]<0) pjs[t_d][0]=pjs[t_d][1].length-1;
	if (pjs[t_d][0]>=pjs[t_d][1].length) pjs[t_d][0]=0;
	if (pjs[t_d][1][pjs[t_d][0]].substring(pjs[t_d][1][pjs[t_d][0]].length-4)==".flv" || pjs[t_d][1][pjs[t_d][0]].substring(pjs[t_d][1][pjs[t_d][0]].length-4)==".mp4"){
		var nl = new SWFObject("/images/page/player.swf", "",t_w,t_h, "9,0,28,0", "#000000");
		nl.addParam("wmode", "opaque");
		nl.addParam("allowfullScreen", "true");
		nl.addParam("scale", "noscale");
		if (havec==1) nl.addVariable("autostart", "true");
		nl.addVariable("height",(t_h-24));
		nl.addVariable("width", t_w);
		nl.addVariable("image",pjs[t_d][11][pjs[t_d][0]]);
		nl.addVariable("file", pjs[t_d][1][pjs[t_d][0]]);
		nl.write("pjs_"+t_d);
		document.getElementById("pjs_"+t_d).appendChild(newtag("span.imgtxt","",pjs[t_d][2][pjs[t_d][0]]));
	} else {
		document.getElementById("pjs_"+t_d).innerHTML="<a href=\"javascript:photocontent_type1("+t_d+","+t_w+","+t_h+",1,1)'}\"><img src=\""+pjs[t_d][1][pjs[t_d][0]]+"\" onload=\"photo_auto(this,"+t_w+","+t_h+",\'center\')\" /></a><span class=\"imgtxt\">"+pjs[t_d][2][pjs[t_d][0]]+"</span>";
	}
	document.getElementById("pjs_"+t_d+"_btn").innerHTML="<a href=\"javascript:photocontent_type1("+t_d+","+t_w+","+t_h+",-1,1)\" class=\"page_up\">&#19978;&#19968;&#24352;</a> <a href=\"javascript:photocontent_type1("+t_d+","+t_w+","+t_h+",1,1)\" class=\"page_dn\">&#19979;&#19968;&#24352;</a>"+(pjs[t_d][0]+1)+" of "+pjs[t_d][1].length+"";
	if (pjs[t_d][15]) window.location.hash="#"+pjs[t_d][1][pjs[t_d][0]];
	if (pjs[t_d][14][pjs[t_d][0]]!=null) jiathis_config = {title:pjs[t_d][14][pjs[t_d][0]]};
}
function photocontent_s(t_d,t_t,t_n){
	clearInterval(pjs[t_d][10]);
	pjs[t_d][11]=t_n;
	if (pjs[t_d][11]!=0) pjs[t_d][10]=setInterval("photocontent_sto("+t_d+","+t_t+")",30);
}
function photocontent_sto(t_d,t_t){
	pjs[t_d][8]+=pjs[t_d][11];
	pjs[t_d][8]=(pjs[t_d][7]>pjs[t_d][8])?(pjs[t_d][6]+pjs[t_d][8]):((pjs[t_d][8]>(pjs[t_d][7]+pjs[t_d][6]))?(pjs[t_d][8]-pjs[t_d][6]):pjs[t_d][8]);
	if (t_t==2) {
		document.getElementById(pjs[t_d][4]).scrollLeft=pjs[t_d][8];
	} else {
		document.getElementById(pjs[t_d][4]).scrollTop=pjs[t_d][8];
	}
}
function photocontent_type2_s(t_d,t_t){
	pjs[t_d][8]=(t_t==2)?document.getElementById(pjs[t_d][4]).scrollLeft:document.getElementById(pjs[t_d][4]).scrollTop;
	if (pjs[t_d][8]!=pjs[t_d][9]) {
		pjs[t_d][8]+=Math.round(pjs[t_d][9]/2-pjs[t_d][8]/2);
		if (t_t==2) {
			document.getElementById(pjs[t_d][4]).scrollLeft=pjs[t_d][8];
		} else {
			document.getElementById(pjs[t_d][4]).scrollTop=pjs[t_d][8];
		}
	} else {
		clearInterval(pjs[t_d][10]);
	}
}
function photocontent_type2page(t_d,t_t,t_w,t_h,t_n){
	var t_i=pjs[t_d][0]+t_n;
	t_i=(t_i<0)?(pjs[t_d][1].length-1):(t_i>=pjs[t_d][1].length)?0:t_i;
	photocontent_type2(t_d,t_t,t_w,t_h,t_i,1);
}
function photocontent_type2(t_d,t_t,t_w,t_h,t_n,havec){
	if (pjs[t_d][1][t_n].substring(pjs[t_d][1][t_n].length-4)==".flv" || pjs[t_d][1][t_n].substring(pjs[t_d][1][t_n].length-4)==".mp4"){
		var nl = new SWFObject("/images/page/player.swf", "",t_w,t_h, "9,0,28,0", "#000000");
		nl.addParam("wmode", "opaque");
		nl.addParam("allowfullScreen", "true");
		nl.addParam("scale", "noscale");
		if (havec==1) nl.addVariable("autostart", "true");
		nl.addVariable("height",(t_h-24));
		nl.addVariable("width", t_w);
		nl.addVariable("image",pjs[t_d][11][t_n]);
		nl.addVariable("file", pjs[t_d][1][t_n]);
		nl.write("pjs_"+t_d);
		document.getElementById("pjs_"+t_d).appendChild(newtag("span.imgtxt","",pjs[t_d][2][t_n]));
	} else {
		document.getElementById("pjs_"+t_d).innerHTML="<a href=\"javascript:photocontent_type2("+t_d+","+t_t+","+t_w+","+t_h+","+(((t_n+1)<pjs[t_d][1].length)?(t_n+1):0)+",1)\"><img src=\""+pjs[t_d][1][t_n]+"\" onload=\"photo_auto(this,"+t_w+","+t_h+",\'center\')\" /></a><span class=\"imgtxt\">"+pjs[t_d][2][t_n]+"</span>";
	}
	var asub=document.getElementById(pjs[t_d][4]).getElementsByTagName("a");
	for (var j_l=0; j_l<asub.length; j_l++) {
		if (tagif(asub[j_l],".pjs_"+t_d+"_"+t_n)) {
			cssadd(asub[j_l],"current")
		} else {
			cssremove(asub[j_l],"current");
		}
	}	if (pjs[t_d][5]<pjs[t_d][6]) {
		clearInterval(pjs[t_d][10]);
		pjs[t_d][9]=pjs[t_d][7]+pjs[t_d][3][t_n];
		pjs[t_d][10]=setInterval("photocontent_type2_s("+t_d+","+t_t+")",30);
	}
	pjs[t_d][0]=t_n;
	if (pjs[t_d][15]) window.location.hash="#"+pjs[t_d][1][pjs[t_d][0]];
	if (pjs[t_d][14][pjs[t_d][0]]!=null) jiathis_config = {title:pjs[t_d][14][pjs[t_d][0]]};
}

function scrollbar_main(t_d){
	t_i++;
	pjs[t_i]=new Array();
	pjs[t_i][0]=0;pjs[t_i][5]=0;
	var lsdiv=newtag("div","height:1px;");
	t_d.insertBefore(lsdiv,t_d.firstChild);
	var lsdivw=lsdiv.clientWidth;
	t_d.removeChild(lsdiv);
	t_d.style.cssText="padding:0;border:0;";
	pjs[t_i][1]=t_d.clientHeight;
	t_d.style.cssText="height:auto;max-height:none;padding:0;border:0;";
	pjs[t_i][2]=t_d.clientHeight-pjs[t_i][1];
	t_d.style.cssText="width:"+lsdivw+"px;";//overflow:visible;
	if (pjs[t_i][2]>0) {
		var newcontainer=newtag("div#pjs"+t_i);
		var newcontainer2=newtag("div#pjs"+t_i+"_c");
		newcontainer.appendChild(newcontainer2);
		newcontainer.style.cssText="position:relative;height:"+pjs[t_i][1]+"px;overflow:auto;width:"+(lsdivw+17)+"px;padding-right:"+(t_d.clientWidth+24-lsdivw)+"px";	
		while (t_d.getElementsByTagName("*")[0]) {
			newcontainer2.appendChild(t_d.getElementsByTagName("*")[0]);
		}
		t_d.appendChild(newcontainer);
		var scrollbar_c=newtag("div.scrollbar");
		var scrollbar_tt=newtag("div#pjs"+t_i+"_t.scrollbar_tt");
		var scrollbar_t=newtag("div#pjs"+t_i+"_1.scrollbar_t");
		var scrollbar_m=newtag("div#pjs"+t_i+"_2.scrollbar_m");
		var scrollbar_b=newtag("div#pjs"+t_i+"_3.scrollbar_b");
		var scrollbar_bb=newtag("div#pjs"+t_i+"_b.scrollbar_bb");
		t_d.appendChild(scrollbar_c);
		if (scrollbar_c.clientHeight>5) {pjs[t_i][1]=scrollbar_c.clientHeight;}
		scrollbar_c.style.cssText="height:"+pjs[t_i][1]+"px;";
		scrollbar_c.appendChild(scrollbar_tt);
		scrollbar_c.appendChild(scrollbar_t);
		scrollbar_c.appendChild(scrollbar_m);
		scrollbar_c.appendChild(scrollbar_b);
		scrollbar_c.appendChild(scrollbar_bb);
		if (scrollbar_tt.clientHeight>5) {
			pjs[t_i][1]=pjs[t_i][1]-scrollbar_tt.clientHeight;
		} else {
			scrollbar_tt.style.cssText="height:0;overflow:hidden;";
		}
		if (scrollbar_bb.clientHeight>5) {
			pjs[t_i][1]=pjs[t_i][1]-scrollbar_bb.clientHeight;
		} else {
			scrollbar_bb.style.cssText="height:0;overflow:hidden;";
		}
		if (scrollbar_m.clientHeight>5) {
			pjs[t_i][3]=pjs[t_i][1]-scrollbar_m.clientHeight;
		} else {
			scrollbar_m.style.cssText="height:"+parseInt(pjs[t_i][1]*pjs[t_i][1]/(pjs[t_i][1]+pjs[t_i][2]))+"px;overflow:hidden;";
			pjs[t_i][3]=pjs[t_i][1]-scrollbar_m.clientHeight;
		}
		scrollbar_t.style.cssText="height:0px;overflow:hidden;";
		scrollbar_b.style.cssText="height:"+pjs[t_i][3]+"px;overflow:hidden;";
		addf(newcontainer,"onscroll","scrollbar_ms("+t_i+")");
		addf(scrollbar_tt,"onmousedown","scrollbar_ack("+t_i+",-1)");
		addf(scrollbar_bb,"onmousedown","scrollbar_ack("+t_i+",1)");
		addf(scrollbar_tt,"onmouseup","scrollbar_ack("+t_i+",0)");
		addf(scrollbar_bb,"onmouseup","scrollbar_ack("+t_i+",0)");
		addf(scrollbar_tt,"onmouseout","scrollbar_ack("+t_i+",0)");
		addf(scrollbar_bb,"onmouseout","scrollbar_ack("+t_i+",0)");
		addf(scrollbar_t,"onclick","scrollbar_ck("+t_i+",-1)");
		addf(scrollbar_b,"onclick","scrollbar_ck("+t_i+",1)");
		addf(scrollbar_m,"onmousedown","scrollbar("+t_i+",1)");
		if (pageis.indexOf("IE")>=0) {
			if (document.onmousemove==null) {
				document.onmousemove=function (){scrollbar_move(t_i);}
			} else {
				var onmousemovetxt=""+document.onmousemove;
				eval("document.onmousemove="+onmousemovetxt.substring(0,onmousemovetxt.length-1)+"scrollbar_move("+t_i+");}");
			}
		} else {
			if (window.onmousemove==null) {
				window.onmousemove=function (){scrollbar_move(t_i);}
			} else {
				var onmousemovetxt=""+window.onmousemove;
				eval("window.onmousemove="+onmousemovetxt.substring(0,onmousemovetxt.length-1)+"scrollbar_move("+t_i+");}");
			}
		}
		
	}
}
function scrollbar_ack(t_d,t_t){
	if (t_t!=0) {
		scrollbar_ack_m(t_d,t_t);
		pjs[t_d][7]=setInterval("scrollbar_ack_m("+t_d+","+t_t+")",100);
	} else {
		clearInterval(pjs[t_d][7]);
	}
}
function scrollbar_ack_m(t_d,t_t){
	document.getElementById("pjs"+t_d).scrollTop+=t_t*30;
}
function scrollbar_ck(t_d,t_t){
	pjs[t_d][0]=parseInt(pjs[t_d][0]+t_t*pjs[t_d][1]*0.75);
	if (pjs[t_d][0]<0) pjs[t_d][0]=0;
	if (pjs[t_d][0]>pjs[t_d][2]) pjs[t_d][0]=pjs[t_d][2];
	document.getElementById("pjs"+t_d).scrollTop=pjs[t_d][0];
}

function scrollbar(t_d,t_t){
	pjs[t_d][6]=t_t;
	if (pjs[t_d][6]==1) {
		pjs[t_d][5]=mousePos.y;
		pjs[t_d][4]=pjs[t_d][0];
		addf(document.body,"onmouseup","scrollbar("+t_d+",0)");
		addf(document.body,"onselectstart","return false;");
		document.body.style.cssText="-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;"+document.body.style.cssText;
	} else {
		scrollbar_move(t_d);
		document.body.onmouseup="";
		movef(document.body,"onselectstart","return false;");
		document.body.removeAttribute("onselectstart");
		var gd=""+document.body.style.cssText;
		gd=gd.split("-moz-user-select: none;").join("").split("-moz-user-select: none").join("");
		gd=gd.split("-webkit-user-select: none;").join("").split("-webkit-user-select: none").join("");
		gd=gd.split("-ms-user-select: none;").join("").split("-ms-user-select: none").join("");
		gd=gd.split("-o-user-select: none;").join("").split("-o-user-select: none").join("");
		gd=gd.split("user-select: none;").join("").split("user-select: none").join("");
		document.body.style.cssText=gd;
	}
}
function scrollbar_move(t_d){
	if (pjs[t_d][6]==1) {
		var mouse_y=mousePos.y;
		pjs[t_d][0]=pjs[t_d][4]+pjs[t_d][2]*(mouse_y-pjs[t_d][5])/pjs[t_d][3];
		if (pjs[t_d][0]<0) pjs[t_d][0]=0;
		if (pjs[t_d][0]>pjs[t_d][2]) pjs[t_d][0]=pjs[t_d][2];
		document.getElementById("pjs"+t_d).scrollTop=pjs[t_d][0];
	}
}

function scrollbar_ms(t_d){
	pjs[t_d][0]=document.getElementById("pjs"+t_d).scrollTop;
	document.getElementById("pjs"+t_d+"_1").style.height=parseInt(pjs[t_d][3]*pjs[t_d][0]/pjs[t_d][2])+"px";
	document.getElementById("pjs"+t_d+"_3").style.height=(pjs[t_d][3]-parseInt(pjs[t_d][3]*pjs[t_d][0]/pjs[t_d][2]))+"px";
}
function likeselect_main(t_d,t_input,t_c,t_a){
	t_i++;
	pjs[t_i]=new Array();
	pjs[t_i][1]=noteid(t_d,"pjs_"+t_i);
	var t_ai=0;var t_ai2=0;
	addf(t_d,"onmouseout","selectclose1("+t_i+")");
	var anchorsub=t_d.getElementsByTagName("*");
	for (j_j=0;j_j<anchorsub.length;j_j++) {
		if (tagif(anchorsub[j_j],t_input)){
			addf(anchorsub[j_j],"onclick","selectopen("+t_i+")");
			pjs[t_i][2]=noteid(anchorsub[j_j],"pjs_"+t_i+"_til");
		} else if (tagif(anchorsub[j_j],t_c)) {
			addf(anchorsub[j_j],"onmouseover","selectopen2("+t_i+")");
		} else if (tagif(anchorsub[j_j],t_a)) {
			if (t_ai2==0) t_ai2=j_j;
			if (cssif(anchorsub[j_j],"current")) t_ai=j_j;
			addf(anchorsub[j_j],"onclick","seleconclick(this,"+t_i+",'"+t_a+"')");
		}
	}
	if (t_ai>0) {
		seleconclick(anchorsub[t_ai],t_i,t_a);
	} else {
		seleconclick(anchorsub[t_ai2],t_i,t_a);
	}
}
function selectopen(t_j){
	if (cssif(pjs[t_j][1],"selectopen")) {
		cssremove(pjs[t_j][1],"selectopen");
	} else {
		cssadd(pjs[t_j][1],"selectopen");
	}
}
function selectopen2(t_j){
	clearTimeout(pjs[t_j][0]);
	cssadd(pjs[t_j][1],"selectopen");
}
function selectclose1(t_j){
	pjs[t_j][0]=setTimeout("selectclose2("+t_j+")",1);
}
function selectclose2(t_j){
	cssremove(pjs[t_j][1],"selectopen");
}
function seleconclick(t_d,t_j,t_a){
	var anchorsub=t_d.parentNode.getElementsByTagName("*");
	for (j_j=0;j_j<anchorsub.length;j_j++) {
		if (tagif(anchorsub[j_j],t_a)) {
			cssremove(anchorsub[j_j],"current");
		}
	}
	cssadd(t_d,"current");
	document.getElementById(pjs[t_j][2]).innerHTML=intxt(t_d);
	selectclose2(t_j);
}

function likelist_main(t_d,t_n,t_c,t_p,t_h){
	t_i++;
	pjs[t_i]=new Array();
	pjs[t_i][0]="likelist";
	pjs[t_i][1]=noteid(t_d,"pjs"+t_i);
	pjs[t_i][2]=0;
	pjs[t_i][3]="pjs"+t_i+"_turnpage";
	pjs[t_i][6]=t_c;
	pjs[t_i][7]=(t_h!=undefined)?t_h:"";
	var tp=0;
	var page=pm(this.location,pjs[t_i][1]+"_page");
	if (page=="")pm(this.location,"page");
	if (pjs[t_i][7]=="hash") page=(pagehash.indexOf(pjs[t_i][1]+"_page")==0)?pagehash.substring(pjs[t_i][1].length+5):((pagehash.indexOf("page")==0)?pagehash.substring(4):"");
	pjs[t_i][5]=(page!="")?parseInt(page,10):1;
	if (pjs[t_i][5]<1) pjs[t_i][5]=1;
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],pjs[t_i][6])){
			pjs[t_i][2]++;
		} else if (tagif(anchorsub[j_j],t_p)){
			pjs[t_i][3]=noteid(anchorsub[j_j],pjs[t_i][3]);
			tp=1;
		}
	}
	pjs[t_i][4]=(parseInt(pjs[t_i][2]/t_n)==pjs[t_i][2]/t_n)?pjs[t_i][2]/t_n:(parseInt(pjs[t_i][2]/t_n)+1);
	if(tp==0) t_d.appendChild(newtag("div#"+pjs[t_i][3]+".turnpage"));
	if (pjs[t_i][5]>pjs[t_i][4]) {
		pjs[t_i][5]=pjs[t_i][4];
	}
	tp=pjs[t_i][5];
	pjs[t_i][5]=0;
	likelist(t_i,t_n,tp);
}

function likelist(t_j,t_n,t_c){
	if (t_c!=pjs[t_j][5]) {
		var t_js=0;
		var anchorsub=document.getElementById(pjs[t_j][1]).getElementsByTagName("*");
		for (var j_j=0; j_j<anchorsub.length; j_j++) {
			if (tagif(anchorsub[j_j],pjs[t_j][6])){
				t_js++;
				if (t_js>(pjs[t_j][5]-1)*t_n && t_js<=pjs[t_j][5]*t_n) cssremove(anchorsub[j_j],"visible");
				if (t_js>(t_c-1)*t_n && t_js<=t_c*t_n) cssadd(anchorsub[j_j],"visible");
			}
		}
		pjs[t_j][5]=t_c;
		var tp_c="<a "+((pjs[t_j][5]==1)?"disabled=\"true\"  class=\"pgstar nohave\"":"href=\"javascript:void(0)\" onclick=\"likelist("+t_j+","+t_n+","+1+")\" class=\"pgstar\"")+">&#39318;&#39029;</a>";
		tp_c+="<a "+((pjs[t_j][5]==1)?"disabled=\"true\" class=\"pgup nohave\"":"href=\"javascript:void(0)\" onclick=\"likelist("+t_j+","+t_n+","+(pjs[t_j][5]-1)+")\" class=\"pgup\"")+">&#19978;&#19968;&#39029;</a> <span class=\"pagebtn\">";
		for (var j_l=pjs[t_j][5]-4; j_l<=pjs[t_j][5]+4; j_l++) {
			if (j_l>0 && j_l<=pjs[t_j][4]) tp_c+="<a href=\"javascript:void(0)\" onclick=\"likelist("+t_j+","+t_n+","+j_l+")\""+((j_l==pjs[t_j][5])?" class=\"current\"":"")+">"+j_l+"</a>";
		}
		tp_c+="</span><a "+((pjs[t_j][5]==pjs[t_j][4])?"disabled=\"true\" class=\"pgdn nohave\"":"href=\"javascript:void(0)\" onclick=\"likelist("+t_j+","+t_n+","+(pjs[t_j][5]+1)+")\" class=\"pgdn\"")+">&#19979;&#19968;&#39029;</a>";
		tp_c+="<a "+((pjs[t_j][5]==pjs[t_j][4])?"disabled=\"true\" class=\"pgend nohave\"":"href=\"javascript:void(0)\" onclick=\"likelist("+t_j+","+t_n+","+pjs[t_j][4]+")\" class=\"pgend\"")+">&#23614;&#39029;</a>";
		tp_c+="<span class=\"pgall\">&#20849;&#26377  <strong>"+pjs[t_j][2]+"</strong> &#26465; &nbsp; </span><span class=\"pgcur\">&#24403;&#21069;&#31532; <strong>"+pjs[t_j][5]+"</strong>  &#39029; &nbsp; </span><span class=\"pgallpg\">&#20849; <strong>"+pjs[t_j][4]+"</strong> &#39029;</span>";
		if (pjs[t_j][4]>1) document.getElementById(pjs[t_j][3]).innerHTML=tp_c;
		if (pjs[t_j][7]=="hash") window.location.hash="#"+pjs[t_j][1]+"_page"+pjs[t_j][5];
	}
}

function slikelist_main(t_d,t_t,t_c,t_p,t_h){
	t_i++;
	pjs[t_i]=new Array();
	pjs[t_i][0]="slikelist";
	pjs[t_i][1]=noteid(t_d,"pjs"+t_i);
	pjs[t_i][2]=0;pjs[t_i][4]=0;
	pjs[t_i][3]="pjs"+t_i+"_turnpage";
	pjs[t_i][6]=(t_t!=undefined)?t_t:1;
	pjs[t_i][7]=(t_h!=undefined)?t_h:"";
	var tp=0;
	var page=pm(this.location,pjs[t_i][1]+"_page");
	if (page=="")pm(this.location,"page");
	if (pjs[t_i][7]=="hash") page=(pagehash.indexOf(pjs[t_i][1]+"_page")==0)?pagehash.substring(pjs[t_i][1].length+5):((pagehash.indexOf("page")==0)?pagehash.substring(4):"");
	pjs[t_i][5]=(page!="")?parseInt(page,10):1;
	if (pjs[t_i][5]<1) pjs[t_i][5]=1;
	var anchorsub=t_d.getElementsByTagName("*");
	for (var j_j=0; j_j<anchorsub.length; j_j++) {
		if (tagif(anchorsub[j_j],t_c)){
			pjs[t_i][9]=noteid(anchorsub[j_j],"pjs"+t_i+"_sub");
		} else if (tagif(anchorsub[j_j],t_p)){
			pjs[t_i][3]=noteid(anchorsub[j_j],pjs[t_i][3]);
			tp=1;
		}
	}
	pjs[t_i][2]=document.getElementById(pjs[t_i][9]).clientHeight;
	addnode(pjs[t_i][9],"","after",["div#pjs"+t_i+"_container.slikelist_container","position:relative;height:"+pjs[t_i][2]+"px;overflow:hidden;"]);
	addnode("pjs"+t_i+"_container","","",["div#pjs"+t_i+"_content.slikelist_content","position:relative;height:"+pjs[t_i][2]+"px;overflow:hidden;"]);
	if(tp==0) t_d.appendChild(newtag("div#"+pjs[t_i][3]+".turnpage"));
	document.getElementById("pjs"+t_i+"_content").appendChild(document.getElementById(pjs[t_i][9]));
	document.getElementById(pjs[t_i][9]).style.height="auto";
	tp=document.getElementById(pjs[t_i][9]).clientHeight;
	pjs[t_i][4]=(Math.ceil(tp/pjs[t_i][2])==tp/pjs[t_i][2])?tp/pjs[t_i][2]:Math.ceil(tp/pjs[t_i][2]);
	document.getElementById(pjs[t_i][9]).style.height=(pjs[t_i][4]*pjs[t_i][2])+"px";
	if (pjs[t_i][5]>pjs[t_i][4]) pjs[t_i][5]=pjs[t_i][4];
	tp=pjs[t_i][5];
	pjs[t_i][5]=0;
	slikelist(t_i,tp);
}

function slikelist(t_j,t_c){
	if (t_c!=pjs[t_j][5]) {
		var t_js=0;
		if (pjs[t_j][5]!=0) {
			var pjsttt=document.getElementById("pjs"+t_j+"_content").cloneNode(true);
			pjsttt.id="pjs"+t_j+"_content1";
			document.getElementById("pjs"+t_j+"_container").appendChild(pjsttt);
			pjsttt.scrollTop=pjs[t_j][2]*(t_c-1);
			var ttw=document.getElementById("pjs"+t_j+"_container").clientWidth;
			document.getElementById("pjs"+t_j+"_container").style.width=ttw+"px";
			document.getElementById("pjs"+t_j+"_content").style.width=ttw+"px";
			document.getElementById("pjs"+t_j+"_content1").style.width=ttw+"px";
			switch (pjs[t_j][6]) {
				case 1 :
					if (pjs[t_j][5]<t_c) {
						functionjishu("pjs"+t_j+"_content1",0,40,"top|px|0|-"+pjs[t_j][2]);
						functionjishu("pjs"+t_j+"_content",0,40,"top|px|0|-"+pjs[t_j][2],"slikelist_end("+t_j+")");
					} else {
						functionjishu("pjs"+t_j+"_content1",0,40,"top|px|-"+(2*pjs[t_j][2])+"|-"+pjs[t_j][2]);
						functionjishu("pjs"+t_j+"_content",0,40,"top|px|0|"+pjs[t_j][2],"slikelist_end("+t_j+")");
					}
				break;
				case 2 :
					document.getElementById("pjs"+t_j+"_content1").style.top="-"+pjs[t_j][2]+"px";
					if (pjs[t_j][5]<t_c) {
						functionjishu("pjs"+t_j+"_content1",0,40,"left|px|"+ttw+"|0");
						functionjishu("pjs"+t_j+"_content",0,40,"left|px|0|-"+ttw,"slikelist_end("+t_j+")");
					} else {
						functionjishu("pjs"+t_j+"_content1",0,40,"left|px|-"+ttw+"|0");
						functionjishu("pjs"+t_j+"_content",0,40,"left|px|0|"+ttw,"slikelist_end("+t_j+")");
					}
				break;
				case 3 :
					if (pjs[t_j][5]<t_c) {
						functionjishu("pjs"+t_j+"_content1",0,40,"top|px|0|-"+pjs[t_j][2],"slikelist_end("+t_j+")");
					} else {
						functionjishu("pjs"+t_j+"_content1",0,40,"top|px|-"+(2*pjs[t_j][2])+"|-"+pjs[t_j][2],"slikelist_end("+t_j+")");
					}
				break;
				case 4 :
					document.getElementById("pjs"+t_j+"_content1").style.top="-"+pjs[t_j][2]+"px";
					if (pjs[t_j][5]<t_c) {
						functionjishu("pjs"+t_j+"_content1",0,40,"left|px|"+ttw+"|0","slikelist_end("+t_j+")");
					} else {
						functionjishu("pjs"+t_j+"_content1",0,40,"left|px|-"+ttw+"|0","slikelist_end("+t_j+")");
					}
				break;
				default:slikelist_end(t_j);
			}
			pjs[t_j][5]=t_c;
		} else {
			pjs[t_j][5]=t_c;
			slikelist_end(t_j);
		}
	}
}
function slikelist_end(t_j){
	if (document.getElementById("pjs"+t_j+"_content1")){
		document.getElementById("pjs"+t_j+"_content").scrollTop=pjs[t_j][2]*(pjs[t_j][5]-1);
		document.getElementById("pjs"+t_j+"_content").style.top="0";
		document.getElementById("pjs"+t_j+"_content").style.left="0";
		document.getElementById("pjs"+t_j+"_content1").parentNode.removeChild(document.getElementById("pjs"+t_j+"_content1"));
		document.getElementById("pjs"+t_j+"_container").style.width="auto";
		document.getElementById("pjs"+t_j+"_content").style.width="auto";
	}
	var tp_c="<a "+((pjs[t_j][5]==1)?"disabled=\"true\"  class=\"pgstar nohave\"":"href=\"javascript:void(0)\" onclick=\"slikelist("+t_j+","+1+")\" class=\"pgstar\"")+">&#39318;&#39029;</a>";
	tp_c+="<a "+((pjs[t_j][5]==1)?"disabled=\"true\" class=\"pgup nohave\"":"href=\"javascript:void(0)\" onclick=\"slikelist("+t_j+","+(pjs[t_j][5]-1)+")\" class=\"pgup\"")+">&#19978;&#19968;&#39029;</a> <span class=\"pagebtn\">";
	for (var j_l=pjs[t_j][5]-4; j_l<=pjs[t_j][5]+4; j_l++) {
		if (j_l>0 && j_l<=pjs[t_j][4]) tp_c+="<a href=\"javascript:void(0)\" onclick=\"slikelist("+t_j+","+j_l+")\""+((j_l==pjs[t_j][5])?" class=\"current\"":"")+">"+j_l+"</a>";
	}
	tp_c+="</span><a "+((pjs[t_j][5]==pjs[t_j][4])?"disabled=\"true\" class=\"pgdn nohave\"":"href=\"javascript:void(0)\" onclick=\"slikelist("+t_j+","+(pjs[t_j][5]+1)+")\" class=\"pgdn\"")+">&#19979;&#19968;&#39029;</a>";
	tp_c+="<a "+((pjs[t_j][5]==pjs[t_j][4])?"disabled=\"true\" class=\"pgend nohave\"":"href=\"javascript:void(0)\" onclick=\"slikelist("+t_j+","+pjs[t_j][4]+")\" class=\"pgend\"")+">&#23614;&#39029;</a>";
	tp_c+="<span class=\"pgcur\">&#24403;&#21069;&#31532; <strong>"+pjs[t_j][5]+"</strong>  &#39029; &nbsp; </span><span class=\"pgallpg\">&#20849; <strong>"+pjs[t_j][4]+"</strong> &#39029;</span>";
	if (pjs[t_j][4]>1) document.getElementById(pjs[t_j][3]).innerHTML=tp_c;
	if (pjs[t_j][7]=="hash") window.location.hash="#"+pjs[t_j][1]+"_page"+pjs[t_j][5];
}

function floating_window_main(t_d,t_l,t_k,t_t){
	t_i++;
	pjs[t_i]=new Array();
	var t_type=(t_t!=undefined)?t_t:"a";
	pjs[t_i][0]="floating";
	pjs[t_i][1]=noteid(t_d,"pjs"+t_i);
	pjs[t_i][2]=t_d.clientWidth
	pjs[t_i][3]=t_d.clientHeight;
	pjs[t_i][4]=(t_l!=undefined)?t_l:0;
	pjs[t_i][5]=(t_k!=undefined)?t_k:0;
	pjs[t_i][6]=1;
	pjs[t_i][7]=1;
	pjs[t_i][8]=1;
	if (pageis=="IE IE6") t_d.appendChild(newtag("iframe","position:absolute;left:0;top:0;z-index:-1;width:"+pjs[t_i][2]+"px;height:"+pjs[t_i][3]+"px;filter:alpha(opacity=0);"));
	var newa=newtag("a.btn_close");
	addf(newa,"onclick","floating_window_close("+t_i+")");
	t_d.appendChild(newa);
	addf(t_d,"onmouseover","floating_window_move("+t_i+",0)");
	addf(t_d,"onmouseout","floating_window_move("+t_i+",1)");
	pjs[t_i][9]=setInterval("floating_window("+t_i+",'"+t_type+"')",30);
}
function floating_window_close(t_d){
	clearInterval(pjs[t_d][9]);
	document.getElementById(pjs[t_d][1]).style.display="none";
}
function floating_window_move(t_d,t_l){
	pjs[t_d][6]=t_l;
}
function floating_window(t_d,t_t) {
	if (pjs[t_d][6]==1) {
		var fp=document.getElementById(pjs[t_d][1]);
		pjs[t_d][7]=(t_t=='y')?0:((pjs[t_d][7]>=0)?(document.documentElement.clientWidth>=pjs[t_d][4]+pjs[t_d][2]+pjs[t_d][7])?1:-1:(pjs[t_d][4]+pjs[t_d][7]<0)?1:-1);
		pjs[t_d][8]=(t_t=='x')?0:((pjs[t_d][8]>=0)?(document.documentElement.clientHeight>=pjs[t_d][5]+pjs[t_d][3]+pjs[t_d][8])?1:-1:(pjs[t_d][5]+pjs[t_d][8]<0)?1:-1);
		pjs[t_d][4]=pjs[t_d][4]+pjs[t_d][7];
		pjs[t_d][5]=pjs[t_d][5]+pjs[t_d][8];
		fp.style.left=((document.body.scrollLeft==0)?document.documentElement.scrollLeft:document.body.scrollLeft)+pjs[t_d][4]+"px";
		fp.style.top=((document.body.scrollTop==0)?document.documentElement.scrollTop:document.body.scrollTop)+pjs[t_d][5]+"px";
	}
}