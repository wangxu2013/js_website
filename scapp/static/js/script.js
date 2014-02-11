var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F9f1d860c127de6cc1682b821235430d9' type='text/javascript'%3E%3C/script%3E"));

//关于我们div切换
function change_div(obj,id){
	var list=document.getElementById("gywm-list").getElementsByTagName("li");
	for(i=0;i<list.length;i++){
		list[i].className="";
	}
	obj.className="active";
	$(".right").hide();
	$("#"+id).show();
}
//显示具体信息
function show(id){	
	$(".right").hide();
	$("#"+id).show();
}