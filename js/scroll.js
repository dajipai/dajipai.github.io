(function(){
	var isDebug = 0;
	$(document).bind('scroll',function(){
		var pos = document.body.scrollTop,
		target = $("nav.navbar"),
		classname = "navbar-fixed-top";
		if(isDebug) console.log(pos);
		if(pos >= 391)
			target.addClass(classname);
		else
			if(target.hasClass(classname))
				target.removeClass(classname);
	});
})();