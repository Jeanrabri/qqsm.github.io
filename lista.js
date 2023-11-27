
    var puntos=[

        [preguntas[0],avanzar[0]],
        [preguntas[1],avanzar[1]],
        [preguntas[2],avanzar[2]],
        [preguntas[3],avanzar[3]],
        [preguntas[4],avanzar[4]],
        [preguntas[5],avanzar[5]],
        [preguntas[6],avanzar[6]],
        [preguntas[7],avanzar[7]],
        [preguntas[8],avanzar[8]],
        [preguntas[9],avanzar[9]],
        [preguntas[10],avanzar[10]],
        [preguntas[11],avanzar[11]],
        [preguntas[12],avanzar[12]],
        [preguntas[13],avanzar[13]],
        [preguntas[14],avanzar[14]],
        
        ] 
        var puntos

        for (let puntos = 0; puntos <=4; puntos++) {
            if ( puntos==[4] ) {
                document.getElementById("uno").style.color = "gold";
               
            }
            else if (puntos==[1] ) {
                document.getElementById("dos").style.color = "gold";
                
            }
            else if (puntos==[2] ) {
                document.getElementById("tres").style.color = "gold";
                
            }
            else if (puntos==[3] ) {
                document.getElementById("cuatro").style.color = "gold";
                
            }
        
        }