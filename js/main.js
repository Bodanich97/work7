$(document).ready(function(){
	$('.your-class').slick({
		autoplay:true,
		autoplaySpeed:2000,
		arrows:true,
		dots:true,
		slidesToShow: 1
	});

	$("#lang_eng").click(function(){
		$.ajax({url: "/wp-content/themes/them/text/text_eng.txt", async: false, success: function(result){
			$("#text_area").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/name_eng.txt", async: false, success: function(result){
			$("#name").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/sub_eng.txt", async: false, success: function(result){
			$("#sub").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/email_eng.txt", async: false, success: function(result){
			$("#email").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/det_eng.txt", async: false, success: function(result){
			$("#det").html(result);
		}});
		
		
		
	});

	$("#lang_uk").click(function(){
		$.ajax({url: "/wp-content/themes/them/text/text_uk.txt", async: false, success: function(result){
			$("#text_area").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/name_uk.txt", async: false, success: function(result){
			$("#name").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/sub_uk.txt", async: false, success: function(result){
			$("#sub").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/email_uk.txt", async: false, success: function(result){
			$("#email").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/det_uk.txt", async: false, success: function(result){
			$("#det").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/buy_uk.txt", async: false, success: function(result){
			$("#but_ot").html(result);
		}});
		
	});

	$("#lang_ru").click(function(){
		$.ajax({url: "/wp-content/themes/them/text/text_ru.txt", async: false, success: function(result){
			$("#text_area").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/name_ru.txt", async: false, success: function(result){
			$("#name").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/sub_ru.txt", async: false, success: function(result){
			$("#sub").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/email_ru.txt", async: false, success: function(result){
			$("#email").html(result);
		}});
		
		$.ajax({url: "/wp-content/themes/them/text/det_ru.txt", async: false, success: function(result){
			$("#det").html(result);
		}});
		
		
	});

	$.ajax({url: "/wp-content/themes/them/text/text_uk.txt", async: false, success: function(result){
		$("#text_area").html(result);
	}});
});



