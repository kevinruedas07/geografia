function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
        {
        pregunta: "1 ¿Cual es el oceano mas grande del mundo?",
        respuesta: "Oceano Pacifico",
        distractores: ["Oceano indico", "Oceano Atlantico"],
        },
        {
        pregunta: "2 ¿Cual es el pais mas grande del mundo?",
        respuesta: "Rusia",
        distractores: ["China", "India"],
        },
        {
        pregunta: "3 ¿En que continente se encuentra Suriam?",
        respuesta: "America del Sur",
        distractores: ["Oceania", "Europa"],
        },
        {
        pregunta: "4 ¿Cual es la nacion mas pequeña del mundo?",
        respuesta: "El Vaticano",
        distractores: ["Monaco", "Andorra"],
        },
        {
          pregunta: "5 ¿Cual es la unica ciudad que esta en dos continentes distintos?",
          respuesta: "Estambul",
          distractores: ["Berlin", "Moscu"],
        },
        {
          pregunta: "6 ¿Cual es la ciudad italiana conocida como la novia del mar?",
          respuesta: "Venecia",
          distractores: ["Roma", "Florencia"],
        },
        {
          pregunta: "7 ¿Cual es la cascada mas alta del mundo?",
          respuesta: "El Salto del Angel",
          distractores: ["Cataratas del Niagara", "Cataratas de Iguaz"],
        },
        {
          pregunta: "8 ¿Cual es la capital de Pakistan?",
          respuesta: "Islamabad",
          distractores: ["Bagdag", "Marrakech"],
        },
        {
          pregunta: "9 ¿La bandera de Estonia consiste en 3 franjas Horizontales de color?",
          respuesta: "Azul, negro y blanco",
          distractores: ["Amarillo, verde y rojo", "Rojo, azul y verde "],
        },
        {
          pregunta: "10 ¿Cual es el nombre del rio mas largo del mundo?",
          respuesta: "Rio Amazonas",
          distractores: ["Rio Danubio", "Rio Nilo"],
        },
        {
          pregunta: "11 ¿Cual es el pais mas poblado de la tierra?",
          respuesta: "China",
          distractores: ["Rusia", "España"],
        },
        {
          pregunta: "12 ¿Cual es la ciudad de los rascacielos?",
          respuesta: "New York",
          distractores: ["Hong Kong", "Dubai"],
        },
        {
          pregunta: "13 ¿En que pais se encuentra ubicada la Casa Rosada?",
          respuesta: "Argentina",
          distractores: ["Chile", "Mexico"],
        },
        {
          pregunta: "14 ¿Cual es la capital de Nicaragua?",
          respuesta: "Managua",
          distractores: ["San tiago", "Brasil"],
        },
        {
          pregunta: "15 ¿Cual es la segunda montaña mas alta del mundo?",
          respuesta: "K2",
          distractores: ["K1", "K3"],
        },
  ];
