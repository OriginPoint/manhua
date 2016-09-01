//1.0 回到顶部
function fallbackTop() {
	var oBtn = document.getElementById("btn"); //$(".bodyn #btn")
	var timer = null; //定时器
	var isTop = true;
	//可视区高度
	var clientH = document.documentElement.clientHeight;
	window.onscroll = function() {
			//隐藏和显示
			var oTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (oTop >= clientH) {
				oBtn.style.display = "block";
			} else {
				oBtn.style.display = "none";
			}
			if (!isTop) {
				clearInterval(timer);
			}
			isTop = false;
		}
		//绑定事件
	oBtn.onclick = function() {
		timer = setInterval(function() {
			var oTop = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = Math.floor(-oTop / 5);
			document.documentElement.scrollTop = document.body.scrollTop = oTop + speed;
			isTop = true;
			if (oTop == 0) {
				clearInterval(timer);
			}
		}, 30);

	}
}
//2.0 轮播图
var bannerFormIndex = 0;
$(function() {
		// 初始化事件
		fallbackTop(); //回到顶部
		addEle(12); //原创 热门
		addEleNew(12); //最新上架
		addEle16(16); //最新更新
		addEle20(20); //最新更新_列表20
		//3.0进度滚动
		$(window).scroll(function() {
			var wintop = $(window).scrollTop(),
				docheight = $(document).height(),
				winheight = $(window).height();
			var scrolled = (wintop / (docheight - winheight)) * 100;
			$('.scroll-line').css('width', (scrolled + '%'));
		});
		//5.0 切换榜单
		$(".top .select .bt").on("mouseover", function() {
			$(this).parent().children().removeClass("active");
			$(this).addClass("active");
			if ($(this).parents(".sideBar").find(".list_1").length > 0) {
				$(this).parents(".sideBar").find(".list").hide();
				$(this).parents(".sideBar").find(".list_" + ($(this).index() + 1)).show();
			}
		});
		//5.0 今日漫画榜
		$(".new_top .select .bt").on("mouseover", function() {
			$(this).parent().children().removeClass("active");
			$(this).addClass("active");
			if ($(this).parents(".inkk").find(".innr4").length > 0) {
				$(this).parents(".inkk").find(".innr4").hide();
				$(this).parents(".inkk").find(".in4_" + ($(this).index() + 1)).show();
			}
		});
		//5.0 今日完结漫画推荐
		$(".inkk .inbt li").on("mouseover", function() {
			if ($(this).parents(".inkk").find(".in1s").length > 0) {
				$(this).parents(".inkk").find(".in1s").hide();
				$(this).parents(".inkk").find(".in1_" + ($(this).index() + 1)).show();
			}
		});
		//切换轮播
		$(".heart .bt").click(function() {
			$(this).parent().children().removeClass("active");
			$(this).addClass("active");
			if ($(this).parents(".sideBar").find(".list_1").length > 0) {
				$(this).parents(".sideBar").find(".list").hide();
				$(this).parents(".sideBar").find(".list_" + ($(this).index() + 1)).show();
			}
			if ($(this).parent().parent().find(".more").length > 0) {
				$(this).parent().parent().find(".more").addClass("hidden");
				$(this).parent().parent().find("#more_" + ($(this).index() + 1)).removeClass("hidden");
			}
		});
		//焦点图轮播事件
		$(".bannerForm ul").css("width", $(".bannerForm ul li").length * 940);
		bannerTimer = setInterval(function() {
			bannerFormIndex++;
			if (bannerFormIndex > ($(".bannerForm ul li").length - 1)) {
				bannerFormIndex = 0;
			}
			$(".bannerForm ul").stop().animate({
				left: "-" + (bannerFormIndex * 940) + "px"
			}, 500);
			$(".bannerForm .heart span").removeClass("active");
			$(".bannerForm .heart span").eq(bannerFormIndex).addClass("active");
		}, 3000);
	})
	//焦点图跳转事件
function bannerClick(id) {
	bannerFormIndex = id;
	$(".bannerForm ul").stop().animate({
		left: "-" + (bannerFormIndex * 940) + "px"
	}, 500);
	$(".bannerForm .heart span").removeClass("active");
	$(".bannerForm .heart span").eq(bannerFormIndex).addClass("active");
	clearInterval(bannerTimer);
	bannerTimer = setInterval(function() {
		bannerFormIndex++;
		if (bannerFormIndex > ($(".bannerForm ul li").length - 1)) {
			bannerFormIndex = 0;
		}
		$(".bannerForm ul").stop().animate({
			left: "-" + (bannerFormIndex * 940) + "px"
		}, 500);
		$(".bannerForm .heart span").removeClass("active");
		$(".bannerForm .heart span").eq(bannerFormIndex).addClass("active");
	}, 3000);
}
//4.0 添加节点_原创精品
function addEle(index) {
	var str = $(".content .container .list-two ul");
	var img = "<img class=\"cover\" src=\"images/sjzl.jpg\" alt=\"海贼王\">"
	var a1 = "<a href=\"javascript:;\" title=\"海贼王\"><p class=\"title\">海贼王</p></a>";
	var a2 = "<a href=\"javascript:;\"><p class=\"subtitle\">第X回</p></a>";
	var subs = "";
	for (var i = 0; i < index; i++) {
		subs += "<li><a class=\"logs\" href=\"javascript:;\" title=\"海贼王\">" + img + "</a>" + a1 + a2 + "</li>";
	}
	return str.append(subs);
}

function addEleNew(index) {
	var str = $(".content .container .list-new ul");
	var img = "<img class=\"cover\" src=\"images/sjzl.jpg\" alt=\"七大罪\">"
	var log = "<img src=\"images/index_logo_new.png\" alt=\"Hot\" class=\"log\">";
	var a1 = "<a href=\"javascript:;\" title=\"七大罪\"><p class=\"title\">七大罪</p></a>";
	var a2 = "<a href=\"javascript:;\"><p class=\"subtitle\">第X回</p></a>";
	var subs = "";
	for (var i = 0; i < index; i++) {
		subs += "<li><a class=\"logs\" href=\"javascript:;\" title=\"七大罪\">" + img + log + "</a>" + a1 + a2 + "</li>";
	}
	return str.append(subs);
}

function addEle16(index) {
	var str = $(".container .list-sixteen ul");
	var img = "<img class=\"cover\" src=\"images/sjzl.jpg\" alt=\"灵能百分百\">"
	var log = "<img src=\"images/index_logo_hot.png\" alt=\"Hot\" class=\"log\">";
	var a1 = "<a href=\"javascript:;\" title=\"灵能百分百\"><p class=\"title\">灵能百分百</p></a>";
	var a2 = "<a href=\"javascript:;\"><p class=\"subtitle\">第X回</p></a>";
	var subs = "";
	for (var i = 0; i < index; i++) {
		subs += "<li><a class=\"logs\" href=\"javascript:;\" title=\"灵能百分百\">" + img + log + "</a>" + a1 + a2 + "</li>";
	}
	return str.append(subs);
}

function addEle20(index) {
	var str = $(".container .largeBar .clist");
	var subs = "";
	for (var i = 0; i < index; i++) {
		var a1 = "<a href=\"javascript:;\" class=\"title\" title=\"这个美术部有问题！\">这个美术部有问题！</a>"
		var a2 = "<a href=\"javascript:;\" class=\"c\" title=\"第xx回\">[第xx回]</a>"
		subs += "<div class=\"item\">" + a1 + a2 + "</div>";
	}
	return str.append(subs);
}