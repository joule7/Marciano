function a(){
	if(document.getElementById('pregunta').value == ""){
		document.getElementById('respuesta').innerHTML = "No has preguntado nada";
	}else{
		var r = Math.random();//arroja un decimal entre 0 y 1
		console.log(r);
		if (r<=0.20){//.0-.20
			r='simón';
		}else if (r<=.40){//.21-.40
			r='oye no lo se';
		}else if (r<=.60){//.41-.60
			r='para que quieres saber eso xD';
		}else if (r<=.80){//.61-.80
			r='nu ma que preguntas';
		}else {//.81-1
			r='khe :V';
		}
		document.getElementById('respuesta').innerHTML = r;
	}
}