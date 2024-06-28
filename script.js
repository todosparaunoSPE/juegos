// Preguntas para el juego de Ahorro
const questionsAhorro = [
    {
        question: "¿Cuál es la mejor manera de ahorrar para la jubilación?",
        options: ["Guardar el dinero debajo del colchón", "Invertir en acciones", "No ahorrar"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Qué es una cuenta de ahorros?",
        options: ["Una cuenta donde guardas tu dinero y ganas intereses", "Una cuenta donde puedes pedir prestado dinero", "Una cuenta para gastar dinero"],
        respuestaCorrecta: 0
    },
    {
        question: "¿Qué son los intereses compuestos?",
        options: ["Intereses que se pagan mensualmente", "Intereses que se calculan solo sobre el capital inicial", "Intereses que se calculan sobre el capital inicial y sobre los intereses acumulados previamente"],
        respuestaCorrecta: 2
    },
    {
        question: "¿Cuál de las siguientes es una forma segura de ahorrar dinero?",
        options: ["Comprar artículos de lujo regularmente", "Invertir en un negocio riesgoso", "Abrir una cuenta de ahorros en un banco"],
        respuestaCorrecta: 2
    },
    {
        question: "¿Qué es el presupuesto?",
        options: ["Un plan para gastar dinero", "Una forma de pedir prestado dinero", "Una cuenta de ahorros"],
        respuestaCorrecta: 0
    },
    {
        question: "¿Por qué es importante ahorrar dinero?",
        options: ["Para gastarlo todo de una vez", "Para poder comprar cosas caras sin pensar", "Para alcanzar metas financieras y estar preparado para emergencias"],
        respuestaCorrecta: 2
    },
    {
        question: "¿Qué es la inflación?",
        options: ["Una medida de cuánto aumentan los precios de los productos con el tiempo", "Un descuento en los precios de los productos", "Una forma de ahorro"],
        respuestaCorrecta: 0
    },
    {
        question: "¿Cuál es una buena razón para tener una cuenta de ahorros?",
        options: ["Para gastar dinero fácilmente", "Para guardar el dinero de manera segura y ganar intereses", "Para pedir prestado dinero"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Cómo puede ayudar el ahorro a alcanzar tus metas financieras?",
        options: ["No puede ayudar", "Haciendo que pierdas dinero", "Proporcionando fondos para lograr cosas que deseas, como comprar una casa o pagar la educación universitaria"],
        respuestaCorrecta: 2
    },
    {
        question: "¿Qué es una emergencia financiera?",
        options: ["Una oportunidad para gastar dinero", "Una situación inesperada que requiere gastos financieros inmediatos", "Una forma de ahorro"],
        respuestaCorrecta: 1
    }
];

// Preguntas para el juego de Inversión
const questionsInversion = [
    {
        question: "¿Qué es el ROI (Return on Investment)?",
        options: ["Una medida de la rentabilidad de una inversión.", "Una cuenta bancaria.", "Un tipo de impuesto."],
        respuestaCorrecta: 0
    },
    {
        question: "¿Qué es un fondo de inversión?",
        options: ["Un préstamo a largo plazo.", "Un vehículo de inversión donde se combinan los fondos de varios inversores y se invierten en diferentes activos financieros.", "Una cuenta de ahorro."],
        respuestaCorrecta: 1
    },
    {
        question: "¿Qué es la diversificación de la cartera de inversiones?",
        options: ["Poner todo el dinero en una sola inversión.", "Distribuir la inversión en diferentes activos para reducir el riesgo.", "No invertir en absoluto."],
        respuestaCorrecta: 1
    },
    {
        question: "¿Cuál de las siguientes es una inversión de bajo riesgo?",
        options: ["Bonos gubernamentales", "Acciones de nuevas empresas tecnológicas", "Invertir en una startup"],
        respuestaCorrecta: 0
    },
    {
        question: "¿Qué es el mercado de valores?",
        options: ["Un lugar donde se venden electrodomésticos", "Un mercado donde se compran y venden acciones de empresas", "Un supermercado para invertir dinero"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Por qué es importante investigar antes de invertir?",
        options: ["Porque la investigación no es necesaria", "Para perder dinero rápidamente", "Para tomar decisiones informadas y reducir el riesgo"],
        respuestaCorrecta: 2
    },
    {
        question: "¿Qué es el riesgo financiero?",
        options: ["Una forma segura de ganar dinero", "La posibilidad de perder dinero o no obtener el retorno esperado", "Una oportunidad para gastar dinero"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Qué son las acciones?",
        options: ["Partes de una película", "Un tipo de inversión que representa la propiedad en una empresa", "Un tipo de seguro"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Qué es la volatilidad del mercado?",
        options: ["La estabilidad del mercado", "La rapidez con la que los precios de mercado cambian con el tiempo", "Un tipo de inversión"],
        respuestaCorrecta: 1
    },
    {
        question: "¿Qué es el diverso riesgo?",
        options: ["El riesgo de no tener suficiente dinero diversificado", "El riesgo de invertir en diferentes activos para reducir el riesgo", "El riesgo de no invertir en absoluto"],
        respuestaCorrecta: 1
    }
];

let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let preguntaActualIndex = 0;

// Función para mostrar la pregunta actual
function mostrarPregunta(questions) {
    const preguntaActual = questions[preguntaActualIndex];
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const statusContainer = document.getElementById('status');

    questionContainer.textContent = preguntaActual.question;
    optionsContainer.innerHTML = '';

    preguntaActual.options.forEach((opcion, idx) => {
        const button = document.createElement('button');
        button.textContent = opcion;
        button.addEventListener('click', () => checkAnswer(preguntaActual, idx, questions));
        optionsContainer.appendChild(button);
    });

    statusContainer.textContent = `Pregunta ${preguntaActualIndex + 1} de ${questions.length} | Correctas: ${respuestasCorrectas} | Incorrectas: ${respuestasIncorrectas}`;
}

// Función para verificar la respuesta seleccionada
function checkAnswer(question, selectedIndex, questions) {
    if (selectedIndex === question.respuestaCorrecta) {
        respuestasCorrectas++;
        alert('¡Respuesta correcta!');
    } else {
        respuestasIncorrectas++;
        alert('Respuesta incorrecta. ¡Inténtalo de nuevo!');
    }

    // Mostrar el estado después de la respuesta
    const statusContainer = document.getElementById('status');
    statusContainer.textContent = `Pregunta ${preguntaActualIndex + 1} de ${questions.length} | Correctas: ${respuestasCorrectas} | Incorrectas: ${respuestasIncorrectas}`;

    // Avanzar a la siguiente pregunta o finalizar el juego
    if (preguntaActualIndex < questions.length - 1) {
        preguntaActualIndex++;
        mostrarPregunta(questions);
    } else {
        // Mostrar el puntaje final por 5 segundos y luego mostrar el formulario de datos del usuario
        alert(`¡Juego terminado! Respuestas correctas: ${respuestasCorrectas}/${questions.length} | Incorrectas: ${respuestasIncorrectas}`);
        setTimeout(mostrarFormularioDatos, 1000);
    }
}

// Función para mostrar el formulario de datos del usuario
function mostrarFormularioDatos() {
    const form = document.getElementById('userDataForm');
    form.style.display = 'block';

    // Manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const celular = document.getElementById('celular').value;

        // Construir el contenido del archivo de texto
        const data = `Nombre: ${nombre}\nEmail: ${email}\nCelular: ${celular}\nRespuestas correctas: ${respuestasCorrectas}/${questionsAhorro.length + questionsInversion.length}`;

        // Crear un objeto Blob con el contenido del archivo
        const blob = new Blob([data], { type: 'text/plain' });

        // Crear un objeto URL para el Blob
        const url = window.URL.createObjectURL(blob);

        // Crear un elemento <a> para descargar el archivo
        const a = document.createElement('a');
        a.href = url;
        a.download = 'userData.txt';

        // Agregar el elemento <a> al DOM y simular clic para descargar
        document.body.appendChild(a);
        a.click();

        // Limpiar y revocar el objeto URL creado
        window.URL.revokeObjectURL(url);

        // Mostrar mensaje de éxito
        alert('Datos guardados correctamente.');

        // Redirigir a main.html después de 3 segundos
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    });
}

// Iniciar el juego al cargar la página
mostrarPregunta(questionsAhorro);