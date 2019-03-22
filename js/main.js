//ocultar los div de la pag 2
$(function(){
	$("#hide1").click(function(){

		$("#Div_hide1").toggle();
		$("#Div_hide2").fadeOut();
		$("#Div_hide3").fadeOut();
		$("#Div_hide4").fadeOut();
		$("#Div_hide5").fadeOut();
	});
});
$(function(){
	$("#hide2").click(function(){
		$("#Div_hide2").toggle();
		$("#Div_hide1").fadeOut();
		$("#Div_hide3").fadeOut();
		$("#Div_hide4").fadeOut();
		$("#Div_hide5").fadeOut();
	});
});
$(function(){
	$("#hide3").click(function(){
		$("#Div_hide3").toggle();
		$("#Div_hide1").fadeOut();
		$("#Div_hide2").fadeOut();
		$("#Div_hide4").fadeOut();
		$("#Div_hide5").fadeOut();
	});
});
$(function(){
	$("#hide4").click(function(){
		$("#Div_hide4").toggle();
		$("#Div_hide1").fadeOut();
		$("#Div_hide2").fadeOut();
		$("#Div_hide3").fadeOut();
		$("#Div_hide5").fadeOut();
	});
});
$(function(){
	$("#hide5").click(function(){
		$("#Div_hide5").toggle();
		$("#Div_hide1").fadeOut();
		$("#Div_hide2").fadeOut();
		$("#Div_hide3").fadeOut();
		$("#Div_hide4").fadeOut();
	});
});
//quitar el aside
$(document).ready(function(){
	$('#open').click(function(){
		$('.modal').toggle('slow');
	});
	$('.modal').click(function(){
		$(this).css({display: "none"});
	});
});
$(document).ready(function(){
	$('#open2').click(function(){
		$('.modal2').toggle('slow');
	});
	$('.modal2').click(function(){
		$(this).css({display: "none"});
	});
});
$(document).ready(function(){
	$('#open3').click(function(){
		$('.modal3').toggle('slow');
	});
	$('.modal3').click(function(){
		$(this).css({display: "none"});
	});
});
$(document).ready(function(){
	$('#open4').click(function(){
		$('.modal4').toggle('slow');
	});
	$('.modal4').click(function(){
		$(this).css({display: "none"});
	});
});
$(document).ready(function(){
	$('#open5').click(function(){
		$('.modal5').toggle('slow');
	});
	$('.modal5').click(function(){
		$(this).css({display: "none"});
	});
});
$(document).ready(function(){
	$('#open6').click(function(){
		$('.modal6').toggle('slow');
	});
	$('.modal6').click(function(){
		$(this).css({display: "none"});
	});
});
