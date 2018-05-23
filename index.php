<?php get_header(); ?>


    <div id="event-description-wrapper">

        <div id="event-description-header-wrapper">
            <h2>2018 UEFA Champions League Final</h2>
        </div>
		<div id="buttons">
					<input type="button" id="lang_eng" value="English" class = "button1">
					<input type="button" id="lang_uk" value="Українська" class = "button1">
					<input type="button" id="lang_ru" value="Російська" class = "button1">
				</div>
				<br>
		
		<div class = "center">
		<div class="your-class">
				
	
				
				<div><img src="https://www.newyorklatinculture.com/wp-content/uploads/2017/09/UEFA-Champions-League-850x567.jpg" alt="1" ></div>
				<div><img src="http://as01.epimg.net/en/imagenes/2018/04/10/football/1523357866_808600_1523357900_noticia_normal.jpg" alt="2" ></div>
				<div><img src="http://xsport.ua/upload/news-photos/27-03-2016-ek/nsk.jpg" alt="3" ></div>
				<div><img src="https://i.pinimg.com/originals/eb/a3/4a/eba34aa3fa02f6f99c915fde6b162fb6.jpg" alt="4" ></div>
			</div>
			</div>
			
        <p id = "text_area">
            
        </p>

    </div>
	


	

    <div class="center">
		<form name="Form1" method="post">
				<div id="form_back"><label id = "name">Name: </label> <br> <input name="name" class="input" type="text"   /></div>
				<br>
				<div id="form_back"><label id = "sub">Subject: </label> <br> <input name="subject" class="input" type="text"   /></div>
				<br>
				<div id="form_back"><label id="email">E-mail: </label> <br> <input name="email" class="input" type="email"   /></div>
				<br>
				<div id="form_back"><label id="det">Detalis: </label><textarea name="body" cols="1" rows="5"  id="text" /></textarea></div>
				<div id="form_back"><input id="but_ot" value="Tickets buy now" type="submit" /></div>
			</form>
			<br>
	
		
    </div>
	
	
<script>	
$(document).ready(function() {
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "<?php
					$to = 'angruh14@gmail.com';

					$name = trim($_POST["name"]);
					$title = trim($_POST["subject"]);
					$text = trim($_POST["body"]);
					$mail = trim($_POST["email"]);
					$message = "Імя: $name \n\n Текст: $text \n \n Пошта: $mail";
					$headers = 'From: angruh@laba789.zzz.com.ua';
					if ($title != ""){
					mail($to, $title, $message, $headers);
						}
					?>",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("SUCCESSFULLY!");
			$("#form").trigger("reset");
		});
		return false;
	});	
});
</script>







<?php get_footer(); ?>