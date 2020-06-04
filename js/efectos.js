$(document).ready(function(){

// Efecto Menu
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top:'0'
		}, 2000 + (index * 500));
	});

// Efecto Header
	if( $(window).width() > 500 ){
		$('header .textos').css({
			opacity: 0, 	
			marginTop: 0
		});

		$('header .textos').animate({
			opacity: 1, 
			marginTop: '-52px'
		}, 1500);
	}


// Scroll Elementos Menu 
	var acercaDe = $('#acerca-de').offset().top,
		contenido = $('#contenedor').offset().top,
		galeria = $('#galeria').offset().top,
		descargas = $('#descargas').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe -100	
		}, 500);
	});

	$('#btn-contenido').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contenido
		}, 500);
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		}, 500);
	});

	$('#btn-descargas').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: descargas
		}, 500);
	});


});