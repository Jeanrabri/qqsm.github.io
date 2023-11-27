const c5050 = document.querySelector("#c5050")
const audi = document.querySelector("#audiencia")
const llamar = document.querySelector("#llamar")

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

function Salir(){
	var conf = confirm("Desea abandonar la partida?");

	if(conf!=0){
		if(nivel<=1)
			alert("Tu premio es: 0$"); 	
		else
			alert("Tu premio es: " + premio[nivel-2]); 
			
		//this.location.href='index2.html';//redirecciona y te saca del juego puedes ocultar si prefieres
		//this.location.reload(); //el reload recarga el sitio
	}
}

function resaltarPremio(x){
	switch(x){
		case 0: document.getElementById("uno").style.color = "gold";   
			break;
		case 1: document.getElementById("dos").style.color = "gold";   
			break;
		case 2: document.getElementById("tres").style.color = "gold";   
			break;
		case 3: document.getElementById("cuatro").style.color = "gold";   
			break;
		case 4: document.getElementById("cinco").style.color = "gold";   
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
	}
}


function descartarPremio(x){
	switch(x){
		case 0: alert("Que bruto pongale cero!");   
			break;
		case 1: alert("Tu premio es: " + premio[nivel-1]); this.location.reload();
			break;
		case 2: alert("Tu premio es: " + premio[nivel-1]); this.location.reload();  
			break;
		case 3: alert("Tu premio es: " + premio[nivel-1]); this.location.reload(); 
			break;
		case 4: alert("Tu premio es: " + premio[nivel-1]); this.location.reload(); //esta es la 5ta
			break;
		case 5: case 6: case 7: case 8: case 9:
			document.getElementById("seis").style.color = "white";
			document.getElementById("siete").style.color = "white";
			document.getElementById("ocho").style.color = "white";
			document.getElementById("nueve").style.color = "white";
			document.getElementById("diez").style.color = "white";
			alert("Tu premio es: " + premio[4]); 
			break;
		case 10: case 11: case 12: case 13: case 14: case 9:
			document.getElementById("once").style.color = "white";
			document.getElementById("doce").style.color = "white";
			document.getElementById("trece").style.color = "white";
			document.getElementById("catorce").style.color = "white";
			document.getElementById("quince").style.color = "white";
			alert("Tu premio es: " + premio[9]); 
			break; 
	}
}

var llamando;
llamar.onclick = function () {
    llamando = prompt("Ingresa el numero");
    alert("Llamando a tu amigo...");
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

 
var nivel = 0

var premio = [
    ["100,00$"], ["500,00$"], ["800,00$"], ["1.000,00$"], ["5.000,00$"], ["10.000,00$"], ["30.000,00$"], ["60.000,00$"],
    ["90.000,00$"], ["120.000,00$"], ["150.000,00$"], ["180.000,00$"], ["210,000,00$"], ["230.000,00$"], ["250.000,00$"],]

 
    var preguntas = [ 

    ["Cuándo nació Bolívar?  ", "1783", "1819", "1505", "1904"],
    ["Es el oso blanco que habita en el hielo ártico?  ", "Polar", "Tropical", "Montañes", "Oriental"],
    ["El sistema electoral para determinar las personas que ocuparan cargos públicos  ", "Sufragio", "Adagio", "Naufragio", "Prestigo"],
    ["Una persona famélica está?  ", "Hambrienta", "Irritable", "Furiosa", "Asustada"],
    ["El albinismo se presenta por falta de ?  ", "Pigmentación", "Calcio", "Vítamina A", "Oxígeno"],
    ["Cuál de estos instrumentos mide la densidad de los aceites? ", "Oleometro", "Dinamómetro", "Micrómetro", "Holometro"],
    ["Según el refrán, el que se acuesta a dormir cría ?  ", "Fama", "Flojera", "Sueño", "Alegría"],
    ["Técnica que describe  la superficie de un terreno:?  ", "Topografía", "Serigrafía", "Epigrafía", "Asustada"],
    ["Cuál es el idioma oficial de Israel?  ", "Hebreo", "Mandarin", "Griego", "Polaco"],
    ["El timbal es un instrumento de ?  ", "Percusión", "Viento metal", "Viento Madera", "Cuerda"],
    ["El animal que come carne de su propia especie es ?  ", "Caníbal", "Vándalo", "Miserable", "Sofista"],
    ["La continua subida de precios se denomina?  ", "Inflación", "Precipitación", "Deflación", "Superávit"],
    ["Cuál de estos animales es rumiante?  ", "La vaca", "La ardilla", "El loro", "El tiburón"],
    ["Cuál parte del cuerpo se examina con una encelografía?  ", "Cráneo", "Ovario", "Pulmón ", "Hígado"],
    ["La coroide es una membrana en el ?  ", "Ojo", "Ovario", "Pulmón ", "Higado"],

]

function actualizar_nivel() {

    pregunta.innerText = preguntas[nivel][0];
	
    uno.innerText = premio[0];
    dos.innerText = premio[1];
    tres.innerText = premio[2];
    cuatro.innerText = premio[3];
    cinco.innerText = premio[4];
    seis.innerText = premio[5];
    siete.innerText = premio[6];
    ocho.innerText = premio[7];
    nueve.innerText = premio[8];
    diez.innerText = premio[9];
    once.innerText = premio[10];
    doce.innerText = premio[11];
    trece.innerText = premio[12];
    catorce.innerText = premio[13];
    quince.innerText = premio[14];
	
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
	   
		var rs = alert("Respuesta correcta")
	   
		if(rs != 0) { 
			resaltarPremio(nivel);
		}
		
		nivel += 1
		
		for (var i = 0; i < 4; ++i)
			opciones[i].style.visibility = "visible"
		
		actualizar_nivel()
		arr_aux = []
	}
	else {
		var res = alert("Respuesta incorrecta, perdiste!");
		
		if(rs != 0) { 
			descartarPremio(nivel);
		}
	}
		
}
