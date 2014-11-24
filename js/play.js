$(document).ready(function(){
	console.log('estamos listos');
	$('#tocar').click(reproducir);
	$('.song').click(get_album);
	$('.suena').click(tocar);
	$('#sigd').click(next_song);
});

var repro = '';
var songtitle = 'Happy';
var repro = document.createElement('audio');
var j= 1;
function next_song(){
	
	++j;
	if(j<5){
		switch(j){
			case 2:
				
				repro.pause();
				songtitle = $('#sound'+j).text();
				//songtitle = songtitle.substring(0,songtitle.length-1);
				$('#song-portada').html('<p>'+songtitle+'</p>');
				reproducir();
				break;
			case 3:
				songtitle = $('#sound3').text();
				$('#song-portada').html('<p>'+songtitle+'</p>');
				//songtitle = songtitle.substring(0,songtitle.length-1);
				reproducir();
				break;
			case 4:
				songtitle = $('#sound4').text();
				$('#song-portada').html('<p>'+songtitle+'</p>');
				//songtitle = songtitle.substring(0,songtitle.length-1);
				reproducir();
				break;
		}

		
	}else{
		j=1;
	}

	
}


function tocar(data){
	repro.pause();

	this.titulo = data.currentTarget.innerText;
	$('#titu-song').html('<p>'+this.titulo+'</p>');
	$('#song-portada').html('<p>'+this.titulo+'</p>');
	songtitle = data.currentTarget.innerText;
	console.log(songtitle)
	reproducir();
}




function reproducir(){
	console.log('reproduciendo');
	
	repro.setAttribute('src', 'music/'+songtitle+'.mp3');
	repro.play();

	$('.icon-stop').click(function(){
		console.log('pausado');
		repro.pause();
	});
	
}
var ver = "";
function get_album(data){
	j = 1;
	ver = data;
	console.log('albuuuum');
	this.nombre_album = data.currentTarget.id;
	this.fuente = 'albums/album-' + this.nombre_album + '.jpg'
	$('#portada').attr('src',this.fuente);

	my_json();
		
}

//verificando url json

function my_json(){
	$.ajax({
		url:"/songs.json",
		dataType : "JSON"

			//for( var i=1; i< recibo.disco-this.nombre_album.length+1; i++){
			//	console.log('aqui'+i);
			//}
		

	}).done(function (result){
			this.indicador = ver.currentTarget.id;
			if(this.indicador === 'uno'){
				songtitle = result.uno[1];
				$("#titu-song").html('<p>'+result.uno[1]+'</p>');
				$("#titu-autor").html('<p>Pharrell Williams</p>');
				$("#song-portada").html('<p>'+result.uno[1]+'</p>');
				$("#autor-portada").html('<p>Pharrell Williams</p>');
				for(var i=0; i< result.uno.length; i++){
					$(".name-list"+i).html('<span>'+result.uno[i]+'</span>');
				}

			}
			if(this.indicador === 'dos'){
				songtitle = result.dos[1];
				$("#titu-song").html('<p>'+result.dos[1]+'</p>');
				$("#titu-autor").html('<p>A Great Big World</p>');
				$("#song-portada").html('<p>'+result.dos[1]+'</p>');
				$("#autor-portada").html('<p>A Great Big World</p>');
				for(var i=0; i< result.dos.length; i++){
					$(".name-list"+i).html('<span>'+result.dos[i]+'</span>');
				}
			}
			if(this.indicador === 'tres'){
				songtitle = result.tres[1];
				$("#titu-song").html('<p>'+result.tres[1]+'</p>');
				$("#titu-autor").html('<p>Ed Sheeran</p>');
				$("#song-portada").html('<p>'+result.tres[1]+'</p>');
				$("#autor-portada").html('<p>Ed Sheeran</p>');
				for(var i=0; i< result.dos.length; i++){
					$(".name-list"+i).html('<span>'+result.tres[i]+'</span>');
				}
			}
			if(this.indicador === 'cuatro'){
				songtitle = result.cuatro[1];
				$("#titu-song").html('<p>'+result.cuatro[1]+'</p>');
				$("#titu-autor").html('<p>One Direction</p>');
				$("#song-portada").html('<p>'+result.cuatro[1]+'</p>');
				$("#autor-portada").html('<p>One Direction</p>');
				for(var i=0; i< result.dos.length; i++){
					$(".name-list"+i).html('<span>'+result.cuatro[i]+'</span>');
				}
			}

	});
	
}


