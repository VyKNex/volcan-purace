document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. CALCULADORA DINÁMICA DE KITS DE EMERGENCIA
     ========================================================================== */
  
  // Referencias a los botones de pestañas y contenedores
  const tabFamily = document.getElementById('tab-family');
  const tabSchool = document.getElementById('tab-school');
  const viewFamily = document.getElementById('view-family');
  const viewSchool = document.getElementById('view-school');

  // Cambiar entre pestañas (Familiar / Escolar)
  if (tabFamily && tabSchool && viewFamily && viewSchool) {
    tabFamily.addEventListener('click', () => {
      tabFamily.classList.add('active');
      tabSchool.classList.remove('active');
      viewFamily.classList.remove('hidden');
      viewSchool.classList.add('hidden');
    });

    tabSchool.addEventListener('click', () => {
      tabSchool.classList.add('active');
      tabFamily.classList.remove('active');
      viewSchool.classList.remove('hidden');
      viewFamily.classList.add('hidden');
    });
  }

  // Función de cálculo kit familiar
  function calcularKitFamiliar() {
    const inputFam = document.getElementById('num-family');
    if (!inputFam) return;

    const numFam = parseInt(inputFam.value) || 1;

    const waterEl = document.getElementById('fam-water');
    const masksEl = document.getElementById('fam-masks');
    const gogglesEl = document.getElementById('fam-goggles');
    const foodEl = document.getElementById('fam-food');

    if (waterEl) waterEl.textContent = numFam * 3 * 3; // 3L x día x 3 días
    if (masksEl) masksEl.textContent = numFam * 2 * 3; // 2 x día x 3 días
    if (gogglesEl) gogglesEl.textContent = numFam;
    if (foodEl) foodEl.textContent = numFam * 2 * 3;
  }

  // Función de cálculo kit escolar
  function calcularKitEscolar() {
    const inputSch = document.getElementById('num-students');
    if (!inputSch) return;

    const numStudents = parseInt(inputSch.value) || 1;

    const masksEl = document.getElementById('sch-masks');
    const waterEl = document.getElementById('sch-water');
    const listsEl = document.getElementById('sch-lists');
    const kitsEl = document.getElementById('sch-kits');

    if (masksEl) masksEl.textContent = numStudents * 2;
    if (waterEl) waterEl.textContent = numStudents;
    if (listsEl) listsEl.textContent = 2;
    if (kitsEl) kitsEl.textContent = Math.ceil(numStudents / 25);
  }

  // Evento al presionar el botón Familiar
  const btnCalcFam = document.getElementById('calc-family-btn');
  if (btnCalcFam) {
    btnCalcFam.addEventListener('click', calcularKitFamiliar);
  }

  // Evento al cambiar el número con el teclado/flechas en kit familiar
  const inputFam = document.getElementById('num-family');
  if (inputFam) {
    inputFam.addEventListener('input', calcularKitFamiliar);
  }

  // Evento al presionar el botón Escolar
  const btnCalcSch = document.getElementById('calc-school-btn');
  if (btnCalcSch) {
    btnCalcSch.addEventListener('click', calcularKitEscolar);
  }

  // Evento al cambiar el número con el teclado/flechas en kit escolar
  const inputSch = document.getElementById('num-students');
  if (inputSch) {
    inputSch.addEventListener('input', calcularKitEscolar);
  }


  /* ==========================================================================
     2. TRIVIA INTERACTIVA (CUESTIONARIO VOLCÁNICO)
     ========================================================================== */
  
  const triviaQuestions = [
    {
      question: "¿A qué cadena volcánica pertenece el Volcán Puracé?",
      options: [
        "Cadena Volcánica del Ruíz",
        "Cadena Volcánica de Los Coconucos",
        "Serranía del Macizo Colombiano",
        "Cordillera Occidental"
      ],
      correct: 1,
      explanation: "El Puracé forma parte de la Cadena Volcánica de Los Coconucos, integrada por 15 centros eruptivos."
    },
    {
      question: "¿Qué gas con olor a azufre mide el SGC para evaluar la inestabilidad del Puracé?",
      options: [
        "Metano (CH₄)",
        "Oxígeno (O₂)",
        "Dióxido de Azufre (SO₂)",
        "Nitrógeno (N₂)"
      ],
      correct: 2,
      explanation: "El dióxido de azufre (SO₂) es un indicador clave de actividad magmática. En agosto de 2026 alcanzó unas 4,200 toneladas diarias."
    },
    {
      question: "¿Qué medida preventiva NUNCA se debe hacer sobre las plantas cubiertas de ceniza?",
      options: [
        "Sacudirlas suavemente en seco",
        "Regarlas inmediatamente con agua",
        "Proteger los viveros con mallas",
        "Retirar la ceniza de los techos"
      ],
      correct: 1,
      explanation: "No se debe regar con agua la ceniza volcánica sobre las hojas, ya que forma una pasta ácida corrosiva que destruye la planta."
    },
    {
      question: "¿Qué planta emblemática del páramo retiene la humedad de las nubes en el PNN Puracé?",
      options: [
        "Orquídea de frío",
        "Pino colombiano",
        "Frailejón (Espeletia hartwegiana)",
        "Palma de cera"
      ],
      correct: 2,
      explanation: "El frailejón es la especie vegetal insigne encargada de captar el agua de la niebla y regular las cuencas hídricas."
    },
    {
      question: "¿Qué elemento de protección respiratoria es el más recomendado ante la caída de ceniza?",
      options: [
        "Bufanda de lana",
        "Mascarilla / Tapabocas N95",
        "Pañuelo de tela seco",
        "Tapabocas de tela sencillo"
      ],
      correct: 1,
      explanation: "La mascarilla N95 filtra eficazmente el material particulado fino y ceniza volcánica ácida evitando afecciones respiratorias."
    },
    {
      question: "¿Cuáles ríos principales de Colombia nacen en la estrella hídrica del PNN Puracé?",
      options: [
        "Amazonas y Orinoco",
        "Magdalena, Cauca, Patía y Caquetá",
        "Atrato y Sinú",
        "Meta y Guaviare"
      ],
      correct: 1,
      explanation: "El PNN Puracé es llamado la 'estrella hídrica' porque allí nacen cuatro de las arterias fluviales más importantes del país."
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let answered = false;

  // Elementos HTML del juego
  const startScreen = document.getElementById('start-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const endScreen = document.getElementById('end-screen');

  const startBtn = document.getElementById('start-btn');
  const nextBtn = document.getElementById('next-btn');
  const restartBtn = document.getElementById('restart-btn');

  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const feedbackMsg = document.getElementById('feedback-msg');

  const currentNumEl = document.getElementById('current-num');
  const totalNumEl = document.getElementById('total-num');
  const scoreDisplay = document.getElementById('score-display');
  const progressBar = document.getElementById('progress-bar');

  const gameOverMsg = document.getElementById('game-over-msg');
  const finalBadge = document.getElementById('final-badge');

  if (startBtn) {
    startBtn.addEventListener('click', startQuiz);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < triviaQuestions.length) {
        showQuestion();
      } else {
        showEndScreen();
      }
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', startQuiz);
  }

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    if (scoreDisplay) scoreDisplay.textContent = score;
    if (totalNumEl) totalNumEl.textContent = triviaQuestions.length;

    if (startScreen) startScreen.classList.add('hidden');
    if (endScreen) endScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.remove('hidden');

    showQuestion();
  }

  function showQuestion() {
    answered = false;
    if (nextBtn) nextBtn.classList.add('hidden');
    if (feedbackMsg) {
      feedbackMsg.classList.add('hidden');
      feedbackMsg.className = "feedback-msg hidden";
    }

    const q = triviaQuestions[currentQuestionIndex];
    if (currentNumEl) currentNumEl.textContent = currentQuestionIndex + 1;
    if (questionText) questionText.textContent = q.question;

    // Actualizar barra de progreso
    if (progressBar) {
      const progressPercent = (currentQuestionIndex / triviaQuestions.length) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    if (optionsContainer) {
      optionsContainer.innerHTML = '';

      q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = `${String.fromCharCode(65 + index)}) ${opt}`;
        btn.addEventListener('click', () => selectOption(index, btn));
        optionsContainer.appendChild(btn);
      });
    }
  }

  function selectOption(selectedIndex, selectedBtn) {
    if (answered) return;
    answered = true;

    const q = triviaQuestions[currentQuestionIndex];
    const allOptionBtns = optionsContainer.querySelectorAll('.option-btn');

    if (selectedIndex === q.correct) {
      score += 10;
      if (scoreDisplay) scoreDisplay.textContent = score;
      selectedBtn.classList.add('correct');
      
      if (feedbackMsg) {
        feedbackMsg.textContent = `¡Correcto! 🎉 ${q.explanation}`;
        feedbackMsg.className = "feedback-msg correct";
      }
    } else {
      selectedBtn.classList.add('incorrect');
      if (allOptionBtns[q.correct]) {
        allOptionBtns[q.correct].classList.add('correct');
      }

      if (feedbackMsg) {
        feedbackMsg.textContent = `Incorrecto. 💡 ${q.explanation}`;
        feedbackMsg.className = "feedback-msg incorrect";
      }
    }

    if (feedbackMsg) feedbackMsg.classList.remove('hidden');
    if (nextBtn) nextBtn.classList.remove('hidden');
  }

  function showEndScreen() {
    if (quizScreen) quizScreen.classList.add('hidden');
    if (endScreen) endScreen.classList.remove('hidden');

    const totalQuestions = triviaQuestions.length;
    const correctCount = score / 10;
    
    if (gameOverMsg) {
      gameOverMsg.textContent = `Respondiste correctamente ${correctCount} de ${totalQuestions} preguntas. Tu puntaje final fue de ${score} puntos.`;
    }

    if (finalBadge) {
      if (correctCount === totalQuestions) {
        finalBadge.textContent = "🥇 ¡Experto en Gestión del Riesgo!";
      } else if (correctCount >= 4) {
        finalBadge.textContent = "🥈 ¡Muy buen nivel de preparación!";
      } else {
        finalBadge.textContent = "🥉 ¡Sigue repasando el contenido de la página!";
      }
    }
  }

});