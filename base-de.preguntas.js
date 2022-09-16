function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
        {
        pregunta: "1 ¿Cuál es el océano más grande del mundo?",
        respuesta: "Océano Pacífico",
        distractores: ["Océano indico", "Océano Atlántico"],
        },
        {
        pregunta: "2 ¿Cuál es el país más grande del mundo?",
        respuesta: "Rusia",
        distractores: ["China", "India"],
        },
        {
        pregunta: "3 ¿En qué continente se encuentra surinam?",
        respuesta: "América del Sur",
        distractores: ["Oceanía", "Europa"],
        },
        {
        pregunta: "4 ¿Cuál es la nación más pequeña del mundo?",
        respuesta: "El Vaticano",
        distractores: ["Mónaco", "Andorra"],
        },
        {
        pregunta: "5 ¿Cuál es la única ciudad que está en dos continentes distintos?",
        respuesta: "Estambul",
        distractores: ["Berlín", "Moscú"],
        },
        {
        pregunta: "6 ¿Cuál es la ciudad italiana conocida como la novia del mar?",
        respuesta: "Venecia",
        distractores: ["Roma", "Florencia"],
        },
        {
        pregunta: "7 ¿Cuál es la cascada más alta del mundo?",
        respuesta: "El Salto del Ángel",
        distractores: ["Cataratas del Niágara", "Cataratas de Iguazú"],
        },
        {
        pregunta: "8 ¿Cuál es la capital de Pakistán?",
        respuesta: "Islamabad",
        distractores: ["Bagdad", "Marrakech"],
        },
        {
        pregunta: "9 ¿La bandera de Estonia consiste en 3 franjas Horizontales de color?",
        respuesta: "Azul, negro y blanco",
        distractores: ["Amarillo, verde y rojo", "Rojo, azul y verde"],
        },
        {
        pregunta: "10 ¿Cuál es el nombre del río más largo del mundo?",
        respuesta: "Río Amazonas",
        distractores: ["Río Danubio", "Río Nilo"],
        },
        {
        pregunta: "11 ¿Cuál es el país más poblado de la tierra?",
        respuesta: "China",
        distractores: ["Rusia", "España"],
        },
        {
        pregunta: "12 ¿Cuál es la ciudad de los rascacielos?",
        respuesta: "New York",
        distractores: ["Hong Kong", "Dubai"],
        },
        {
        pregunta: "13 ¿En qué país se encuentra ubicada la Casa Rosada?",
        respuesta: "Argentina",
        distractores: ["Chile", "México"],
        },
        {
        pregunta: "14 ¿Cuál es la capital de Nicaragua?",
        respuesta: "Managua",
        distractores: ["Santiago", "Brasil"],
        },
        {
        pregunta: "15 ¿Cuál es la segunda montaña más alta del mundo?",
        respuesta: "K2",
        distractores: ["K1", "K3"],
        },
  ];
