function setCSS(){
	var screen_w = document.body.clientWidth;

	$("#head_img").css({
		"width": screen_w,
		"height": screen_w/1.63
	});

	$("#description").css("height",screen_w*0.21);

	$("#description p").css("font-size",screen_w/28);


	$(".item_bg").css({
		"width": screen_w/1.17,
		"height": screen_w/7.35,
		"font-size": screen_w/22.18
	});

	$(".item_text").css("font-size",screen_w/28);


	$("#dl_btn").css({
		"width": screen_w/2.7,
		"height": screen_w/8.3,
		"font-size": screen_w/23,
		"border-radius": screen_w/62
	});

	$("#foot_text").css("font-size",screen_w/28);

	$("#foot").css("height",screen_w/9);
}
