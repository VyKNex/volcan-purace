/* ==========================================================================
   DESAFÍO DE SABERES Y CALCULADORA DE KITS - VOLCÁN PURACÉ
   ========================================================================== */

// 1. BANCO DE 15 PREGUNTAS DEL DESAFÍO DE SABERES
const quizData = [
  {
    question: "El Servicio Geológico Colombiano declara Alerta Naranja en el Puracé. ¿Qué significa principalmente este estado?",
    options: [
      "Que el volcán está apagado y se puede visitar sin peligro.",
      "Probabilidad de una erupción en términos de días o semanas.",
      "Que solo habrá lluvia normal sin emisión de gases.",
      "Que debemos evacuar de inmediato todo el departamento del Cauca."
    ],
    correct: 1,
    explanation: "La Alerta Naranja indica cambios significativos en los parámetros monitoreados (sismicidad, gases, deformación) con posibilidad de erupción a corto plazo."
  },
  {
    question: "Comienza a caer ceniza sobre tu casa en Puracé o Popayán. ¿Cuál es la primera acción correcta para el agua?",
    options: [
      "Dejar los tanques abiertos para que la ceniza se limpie sola.",
      "Tapar herméticamente tanques y recipientes de almacenamiento.",
      "Hervir el agua con la ceniza para consumirla.",
      "Lavar los techos echando abundante agua con manguera."
    ],
    correct: 1,
    explanation: "Tapar los recipientes evita que la ceniza ácida y sus minerales pesados contaminen la reserva de agua potable."
  },
  {
    question: "Vas caminando cerca de la zona alta y sientes un fuerte olor a azufre (huevos podridos). ¿Qué debes hacer?",
    options: [
      "Acercarte al cráter para tomar una foto del vapor.",
      "Sentarte a esperar que el viento cambie de dirección.",
      "Alejarte de inmediato hacia zonas altas y aireadas en sentido contrario al viento.",
      "Encender una fogata para disipar el gas."
    ],
    correct: 2,
    explanation: "Gases como el SO₂ y el CO₂ se acumulan en depresiones y zonas bajas, siendo tóxicos o asfixiantes. Debes retirarte en sentido contrario al viento."
  },
  {
    question: "Para evitar la inhalación de ceniza fina al salir a la calle, la protección respiratoria ideal es:",
    options: [
      "Usar una bufanda o trapo seco de lana.",
      "Mascarilla o tapabocas N95 ajustado al rostro.",
      "Respirar directamente por la boca.",
      "Un pañuelo de papel desechable común."
    ],
    correct: 1,
    explanation: "Las mascarillas N95 o KN95 filtran hasta el 95% de las partículas finas de ceniza volcánica que dañan las vías respiratorias."
  },
  {
    question: "Tienes animales de finca (vacas o caballos) en zona de caída de ceniza. ¿Cómo debes proteger su alimento?",
    options: [
      "Mojar el pasto cubierto de ceniza antes de dárselo.",
      "Sacudir el pasto en seco o resguardar el forraje en cobertizos limpios.",
      "Dejarlos pastar normalmente sin hacer nada.",
      "Darles alimentos procesados mezclados con ceniza."
    ],
    correct: 1,
    explanation: "Sacudir el pasto en seco evita que los animales ingieran ceniza ácida que les causa severos problemas digestivos o quemaduras en el hocico."
  },
  {
    question: "En un estanque de cría de truchas, ¿qué medida urgente se debe tomar ante la presencia de ceniza en el río?",
    options: [
      "Aumentar al doble la comida de los peces.",
      "Cerrar la bocatoma de agua y usar filtros/desarenadores.",
      "Echar cloro a la laguna de cría.",
      "Vaciar el estanque por completo en ese instante."
    ],
    correct: 1,
    explanation: "Cerrar temporalmente la entrada de agua turbia evita la entrada de sedimentos y la asfixia de los peces por obstrucción de agallas."
  },
  {
    question: "En el PNN Puracé, ¿por qué es tan importante la conservación de los frailejones frente a la actividad volcánica?",
    options: [
      "Porque producen el azufre del volcán.",
      "Porque regulan y captan el agua del páramo para los grandes ríos.",
      "Porque evitan los temblores de tierra.",
      "Porque atraen los rayos nocturnos."
    ],
    correct: 1,
    explanation: "Los frailejones son los grandes reguladores hídricos de la estrella hídrica colombiana (ríos Cauca, Magdalena, Patía y Caquetá)."
  },
  {
    question: "Durante un enjambre sísmico volcánico (sismos continuos), ¿cuál es el lugar más seguro dentro del aula de clase o casa?",
    options: [
      "Junto a ventanas y espejos grandes.",
      "Bajo los árboles más altos del patio.",
      "Cerca de muros estructurales/columnas o bajo escritorios resistentes, lejos de vidrios.",
      "Bajar corriendo por las escaleras rápidamente."
    ],
    correct: 2,
    explanation: "Ubicarse junto a elementos estructurales fuertes o bajo escritorios protege contra caída de lámparas, techos o fragmentos de vidrio."
  },
  {
    question: "Ante una orden de evacuación preventiva expedida por la alcaldía o la UNGRD, la comunidad debe:",
    options: [
      "Esperar a ver si el volcán hace erupción visible.",
      "Evacuar de inmediato por las rutas señalizadas hacia los puntos de encuentro comunitarios.",
      "Bloquear las carreteras para evitar que otros pasen.",
      "Subir a la parte más alta de la montaña del volcán."
    ],
    correct: 1,
    explanation: "Las evacuaciones preventivas se acatan de inmediato sin esperar a que el fenómeno eruptivo haya iniciado."
  },
  {
    question: "¿Qué elemento NO debe faltar en tu kit de emergencia familiar para el Puracé?",
    options: [
      "Juegos de mesa grandes de madera.",
      "Agua potable, tapabocas N95, linterna, radio a pilas y botiquín.",
      "Electrodomésticos pesados.",
      "Ropa pesada sin impermeabilizar."
    ],
    correct: 1,
    explanation: "El kit vital de 3 días requiere hidratación, protección respiratoria, iluminación, comunicación y primeros auxilios."
  },
  {
    question: "Si la ceniza se acumula en el techo de tu vivienda, ¿cuál es la forma correcta de retirarla?",
    options: [
      "Lavar con manguera a alta presión.",
      "Barrer suavemente en SECO con escoba y usando protección.",
      "Dejarla acumulada hasta que llueva.",
      "Echar arena encima para compactarla."
    ],
    correct: 1,
    explanation: "La ceniza mojada se convierte en una pasta pesada similar al cemento fresco que puede colapsar las estructuras de los techos."
  },
  {
    question: "¿Qué es un lahar o flujo de lodo volcánico?",
    options: [
      "Una lluvia de piedras incandescentes.",
      "Una corriente de lodo y agua que baja a gran velocidad por los ríos desde el volcán.",
      "Una nube fría de vapores de agua.",
      "Un tipo de viento fuerte de montaña."
    ],
    correct: 1,
    explanation: "Los lahares se forman cuando la lluvia o el deshielo mezclan la ceniza y materiales volcánicos en los cauces de los ríos."
  },
  {
    question: "Para proteger los cultivos de papa o fresa en la zona rural tras una caída leve de ceniza, se recomienda:",
    options: [
      "Regar inmediatamente con abundante agua.",
      "Sacudir suavemente las plantas en seco usando ramas o plumeros.",
      "Aplicar fertilizantes químicos en polvo encima.",
      "Arrancar las hojas que tengan polvo."
    ],
    correct: 1,
    explanation: "Sacudir en seco previene que la acidez de la ceniza queme las hojas al entrar en contacto con la humedad del ambiente."
  },
  {
    question: "¿Por qué debes usar gafas protectoras en áreas afectadas por la caída de ceniza volcánica?",
    options: [
      "Para evitar el brillo del sol.",
      "Porque la ceniza contiene diminutos fragmentos de vidrio y roca que pueden lacerar los ojos.",
      "Para ver a través de la neblina.",
      "No es necesario usar nada en los ojos."
    ],
    correct: 1,
    explanation: "La ceniza no es polvo suave; son micropartículas abrasivas de roca que rayan la córnea si te frotas los ojos."
  },
  {
    question: "¿Cuál es el medio oficial para consultar alertas sobre la actividad del Volcán Puracé?",
    options: [
      "Rumores compartidos en grupos informales.",
      "Boletines oficiales del Servicio Geológico Colombiano (SGC) y UNGRD.",
      "Páginas de noticias no verificadas en redes sociales.",
      "Comentarios de transeúntes."
    ],
    correct: 1,
    explanation: "Las únicas entidades autorizadas para determinar niveles de alerta y recomendaciones oficiales son el SGC y la UNGRD."
  }
];

let currentQuestion = 0;
let score = 0;

// Referencias de elementos DOM
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackMsg = document.getElementById('feedback-msg');
const progressBar = document.getElementById('progress-bar');
const currentNum = document.getElementById('current-num');
const totalNum = document.getElementById('total-num');
const scoreDisplay = document.getElementById('score-display');

// INICIALIZACIÓN GENERAL AL CORTAR EL DOM
document.addEventListener('DOMContentLoaded', () => {
  // Ajustar número total de preguntas dinámicamente
  if (totalNum) {
    totalNum.textContent = quizData.length;
  }

  // --- LÓGICA DE LA CALCULADORA DE KITS ---
  const tabFam = document.getElementById('tab-family');
  const tabSch = document.getElementById('tab-school');
  const viewFam = document.getElementById('view-family');
  const viewSch = document.getElementById('view-school');

  if (tabFam && tabSch) {
    tabFam.addEventListener('click', () => {
      tabFam.classList.add('active');
      tabSch.classList.remove('active');
      viewFam.classList.remove('hidden');
      viewSch.classList.add('hidden');
    });

    tabSch.addEventListener('click', () => {
      tabSch.classList.add('active');
      tabFam.classList.remove('active');
      viewSch.classList.remove('hidden');
      viewFam.classList.add('hidden');
    });
  }

  const btnFam = document.getElementById('calc-family-btn');
  if (btnFam) {
    btnFam.addEventListener('click', () => {
      const num = parseInt(document.getElementById('num-family').value) || 1;
      document.getElementById('fam-water').textContent = num * 9;
      document.getElementById('fam-masks').textContent = num * 6;
      document.getElementById('fam-goggles').textContent = num;
      document.getElementById('fam-food').textContent = num * 6;
    });
  }

  const btnSch = document.getElementById('calc-school-btn');
  if (btnSch) {
    btnSch.addEventListener('click', () => {
      const num = parseInt(document.getElementById('num-students').value) || 1;
      document.getElementById('sch-masks').textContent = num * 2;
      document.getElementById('sch-water').textContent = num;
      document.getElementById('sch-lists').textContent = Math.ceil(num / 15);
      document.getElementById('sch-kits').textContent = Math.ceil(num / 25);
    });
  }
});

// --- LÓGICA DEL DESAFÍO DE SABERES ---
if (startBtn) {
  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', showNextQuestion);
  restartBtn.addEventListener('click', startQuiz);
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  if (scoreDisplay) scoreDisplay.textContent = '0';
  if (startScreen) startScreen.classList.add('hidden');
  if (endScreen) endScreen.classList.add('hidden');
  if (quizScreen) quizScreen.classList.remove('hidden');
  loadQuestion();
}

function loadQuestion() {
  if (feedbackMsg) feedbackMsg.classList.add('hidden');
  if (nextBtn) nextBtn.classList.add('hidden');
  if (optionsContainer) optionsContainer.innerHTML = '';

  const q = quizData[currentQuestion];
  if (currentNum) currentNum.textContent = currentQuestion + 1;
  if (questionText) questionText.textContent = q.question;

  const progressPct = ((currentQuestion + 1) / quizData.length) * 100;
  if (progressBar) progressBar.style.width = `${progressPct}%`;

  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-number">${idx + 1}</span> <span>${optText}</span>`;
    btn.addEventListener('click', () => selectOption(idx));
    if (optionsContainer) optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedIdx) {
  const q = quizData[currentQuestion];
  const buttons = optionsContainer.querySelectorAll('.option-btn');
  
  buttons.forEach(b => b.disabled = true);

  if (selectedIdx === q.correct) {
    buttons[selectedIdx].classList.add('correct');
    score += 10;
    if (scoreDisplay) scoreDisplay.textContent = score;
    feedbackMsg.className = 'feedback-msg correct-box';
    feedbackMsg.innerHTML = `<strong>¡Excelente decisión! 🎉</strong><br>${q.explanation}`;
  } else {
    buttons[selectedIdx].classList.add('wrong');
    buttons[q.correct].classList.add('correct');
    feedbackMsg.className = 'feedback-msg wrong-box';
    feedbackMsg.innerHTML = `<strong>Respuesta incorrecta 💡</strong><br>${q.explanation}`;
  }

  feedbackMsg.classList.remove('hidden');
  nextBtn.classList.remove('hidden');
}

function showNextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  if (quizScreen) quizScreen.classList.add('hidden');
  if (endScreen) endScreen.classList.remove('hidden');

  const maxScore = quizData.length * 10;
  const percentage = (score / maxScore) * 100;
  
  const titleEl = document.getElementById('game-over-title');
  const msgEl = document.getElementById('game-over-msg');
  const badgeEl = document.getElementById('final-badge');

  if (msgEl) {
    msgEl.textContent = `Puntaje final: ${score} de ${maxScore} puntos (${Math.round(percentage)}% de efectividad).`;
  }

  if (percentage >= 80) {
    if (titleEl) titleEl.textContent = '🛡️ ¡Líder en Prevención Volcánica!';
    if (badgeEl) {
      badgeEl.textContent = 'Nivel: Guardián del Puracé';
      badgeEl.style.backgroundColor = '#c6f6d5';
      badgeEl.style.color = '#22543d';
    }
  } else if (percentage >= 50) {
    if (titleEl) titleEl.textContent = '👍 ¡Buen Nivel de Conocimiento!';
    if (badgeEl) {
      badgeEl.textContent = 'Nivel: Vigía Comunitario';
      badgeEl.style.backgroundColor = '#feebc8';
      badgeEl.style.color = '#744210';
    }
  } else {
    if (titleEl) titleEl.textContent = '📚 ¡Hay que repasar el Plan de Emergencias!';
    if (badgeEl) {
      badgeEl.textContent = 'Nivel: Aprendiz de Prevención';
      badgeEl.style.backgroundColor = '#fed7d7';
      badgeEl.style.color = '#742a2a';
    }
  }
}