
const c5050 = document.querySelector("#c5050")
const audi = document.querySelector("#audiencia")
const llamar = document.querySelector("#llamar")
const salida = document.querySelector("#exit")
const cajita = document.querySelector("#cajita")
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const diez = document.getElementById("diez");
const once = document.getElementById("once");
const doce = document.getElementById("doce");
const trece = document.getElementById("trece");
const catorce = document.getElementById("catorce");
const quince = document.getElementById("quince");
const respuesta_usuario = document.getElementsByClassName("opcion_div")
const opciones = document.getElementsByClassName("opcion")
const pregunta = document.querySelector("#pregunta")
const op1 = document.querySelector("#op1")
const op2 = document.querySelector("#op2")
const op3 = document.querySelector("#op3")
const op4 = document.querySelector("#op4")



var arr_aux = []

function aleatorio(num_min, num_max) {

    while (true) {
        var volver = false
        var numero = Math.floor(Math.random() * ((num_max + 1) - num_min) + num_min)

        for (var i = 0; i < arr_aux.length; i++) {
            if (arr_aux[i] == numero) { volver = true; break }
        }

        if (!volver) arr_aux.push(numero)
        else continue

        return numero
    }
}



var abandonas;
exit.onclick = function abandonar() {
    alert("Abandonaste");
    op1.style.display = "none";
    op2.style.display = "none";
    op3.style.display = "none";
    op4.style.display = "none";

}


var llamando;
llamar.onclick = function () {
    llamando = prompt("Ingresa el numero");
    confirm("Llamando a tu amigo");
    this.style.visibility = "hidden";
}

c5050.onclick = function () {
    var aux = 0
    for (var i = 0; i < 3; ++i) {
        if (opciones[i].innerText != preguntas[nivel][1]) {
            opciones[i].style.visibility = "hidden"; ++aux;
        }
        if (aux == 2) break;
    }
    this.style.visibility = "hidden";

}

var Mostrar;
audiencia.onclick = function () {
    document.getElementById("graficas").style.display = "block";
    this.style.visibility = "hidden";
}
     function grafic() {
    document.getElementById("graficas").style.display = "none";
};

 

 

var avanzar = [
    ["100,00$"], ["500,00$"], ["800,00$"], ["1.000,00$"], ["5.000,00$"], ["10.000,00$"], ["30.000,00$"], ["60.000,00$"],
    ["90.000,00$"], ["120.000,00$"], ["150.000,00$"], ["180.000,00$"], ["210,000,00$"], ["230.000,00$"], ["250.000,00$"],]

    var nivel = 0
   


    var preguntas = [ 

    ["Cuando nacio bolivar?  ", "1783", "1819", "1505", "1904"],
    ["Es el oso blanco que habita en el hielo artico?  ", "Polar", "Tropical", "Montañes", "Oriental"],
    ["El sistema electoral para determinar las personas que ocuparan cargos publicos  ", "Sufragio", "Adagio", "Naufragio", "Prestigo"],
    ["Una persona famelica esta?  ", "Hambrienta", "Irritable", "Furiosa", "Asustada"],
    ["El albinismo se presenta por falta de ?  ", "Pigmentacion", "Calcio", "Vitamina A", "Oxigeno"],
    ["Cual de estos instrumentos mide la densidad de los aceites? ", "Oleometro", "Dinamometro", "Micrometro", "Holometro"],
    ["Segun el refran, el que se acuesta a dormir cría ?  ", "Fama", "Flojera", "Sueño", "Alegria"],
    ["Tecnica que describe  la superficie de un terreno:?  ", "Topografía", "Serigrafía", "Epigrafía", "Asustada"],
    ["Cual es el idioma oficial de israel?  ", "Hebreo", "Mandarin", "Griego", "Polaco"],
    ["El timbal es un instrumento de ?  ", "Percusion", "Viento metal", "Viento Madera", "Cuerda"],
    ["El animal que come carne de su propia especie es ?  ", "Canibal", "Vandalo", "Miserable", "Sofista"],
    ["La continua subida de precios se denomina?  ", "Inflación", "Precipitacion", "Deflacion", "Superavit"],
    ["Cual de estos animales es rumiante?  ", "La vaca", "La ardilla", "El loro", "El tiburon"],
    ["Cual parte del cuerpo se examina con una encelografia?  ", "Craneo", "Ovario", "Pulmon ", "Higado"],
    ["La coroide es una membrana en el ?  ", "Ojo", "Ovario", "Pulmon ", "Higado"],

]



function actualizar_nivel() {

    pregunta.innerText = preguntas[nivel][0];
    uno.innerText = avanzar[0];
    dos.innerText = avanzar[1];
    tres.innerText = avanzar[2];
    cuatro.innerText = avanzar[3];
    cinco.innerText = avanzar[4];
    seis.innerText = avanzar[5];
    siete.innerText = avanzar[6];
    ocho.innerText = avanzar[7];
    nueve.innerText = avanzar[8];
    diez.innerText = avanzar[9];
    once.innerText = avanzar[10];
    doce.innerText = avanzar[11];
    trece.innerText = avanzar[12];
    catorce.innerText = avanzar[13];
    quince.innerText = avanzar[14];
    op1.innerText = preguntas[nivel][aleatorio(1, 4)];
    op2.innerText = preguntas[nivel][aleatorio(1, 4)];
    op3.innerText = preguntas[nivel][aleatorio(1, 4)];
    op4.innerText = preguntas[nivel][aleatorio(1, 4)];


}

actualizar_nivel()
arr_aux = []



for (var i = 0; i < 4; ++i)
    respuesta_usuario[i].onclick = function () {
        
		if (this.innerText == preguntas[nivel][1] ) {

            exit.onclick = function abandonar() {
                alert("Abandonaste");
                op1.style.display = "none";
                op2.style.display = "none";
                op3.style.display = "none";
                op4.style.display = "none";
            
            }
            
           
			var rs = alert("Respuesta correcta")
		   
			if(rs != 0) { 
				switch(nivel){
                    case 0: document.getElementById("uno").style.color = "gold";
                        
						break;
					case 1: document.getElementById("dos").style.color = "gold";   
						break;
					case 2: document.getElementById("tres").style.color = "gold";   
						break;
					case 3: document.getElementById("cuatro").style.color = "gold";   
						break;
                    case 4: document.getElementById("cinco").style.color = "gold"; 
                             alert("Acumulaste 5.000,00$") 
						break;
                    case 5: document.getElementById("seis").style.color = "gold";    
						break;
					case 6: document.getElementById("siete").style.color = "gold";   
						break;
					case 7: document.getElementById("ocho").style.color = "gold";   
						break;
					case 8: document.getElementById("nueve").style.color = "gold";   
						break;
                    case 9: document.getElementById("diez").style.color = "gold"; 
                           alert("Acumulaste 120.000,00$")   
						break;
					case 10: document.getElementById("once").style.color = "gold";   
						break;
					case 11: document.getElementById("doce").style.color = "gold";   
						break;
					case 12: document.getElementById("trece").style.color = "gold";   
						break;
					case 13: document.getElementById("catorce").style.color = "gold";   
						break;
                    case 14 : document.getElementById("quince").style.color = "gold"; 
                            alert("Ganaste 250.000,00$") 
                          
				}
			}
            
            
			nivel += 1
			
            for (var i = 0; i < 4; ++i)
                opciones[i].style.visibility = "visible"
			
            actualizar_nivel()
            arr_aux = []
           

        }
        else {
                       
              var sr =  alert("Respuesta Incorrecta Perdiste")

			if(sr != 0) { 
				switch(nivel){
                    case 0:   
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                     alert("Perdiste recoje 100$"); break;  
                    case 5:   
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                     alert("Perdiste recoje 5.000,00$"); break;       
                     case 10:   
                     case 11:
                     case 12:
                     case 3:
                     case 14:
                      alert("Perdiste recoje 120.000,00$")   
	 
				}
			}
            
        
       
       
        }


    }

 

   
      

      
      
       

    

    
     
    

