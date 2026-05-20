// ============== SPANISH TOGGLE ==============
let esMode = JSON.parse(localStorage.getItem("esMode") || "false");

function applyEsMode() {
  document.querySelectorAll('.es-box').forEach(el => {
    el.style.display = esMode ? '' : 'none';
  });
  const btn = document.getElementById('esToggle');
  if (!btn) return;
  if (esMode) {
    btn.textContent = '🇲🇽 Español: ON';
    btn.classList.add('es-on');
  } else {
    btn.textContent = '🇲🇽 Ayuda en Español';
    btn.classList.remove('es-on');
  }
}

// ============== DATA ==============
const activities = {
  vocab1: {
    title: "1. 🎯 Vocabulary Match",
    instr: "Click a word, then click its meaning. Try to match them all!",
    instrEs: "Haz clic en una palabra y luego en su significado. ¡Trata de emparejarlas todas!",
    type: "match",
    pairs: [
      { word: "natural",    meaning: "Produced by nature, not people",                 meaningEs: "Producido por la naturaleza, no por personas" },
      { word: "society",    meaning: "A group of people living together",              meaningEs: "Un grupo de personas que viven juntas" },
      { word: "cure",       meaning: "To get rid of a sickness",                       meaningEs: "Deshacerse de una enfermedad" },
      { word: "traditions", meaning: "Beliefs passed down from parents to children",   meaningEs: "Creencias que los padres pasan a sus hijos" },
      { word: "respect",    meaning: "To show honor to someone",                       meaningEs: "Mostrar honor a alguien" },
      { word: "trader",     meaning: "A person who sells or trades things",            meaningEs: "Persona que vende o intercambia cosas" },
      { word: "herds",      meaning: "Large groups of animals",                        meaningEs: "Grupos grandes de animales" },
      { word: "expensive",  meaning: "Costs a lot of money",                           meaningEs: "Cuesta mucho dinero" },
      { word: "determined", meaning: "Refusing to give up",                            meaningEs: "No se rinde; sigue intentando" },
      { word: "bowed",      meaning: "Bent low to show respect",                       meaningEs: "Se inclinó para mostrar respeto" }
    ]
  },

  vocab2: {
    title: "2. ✏️ Fill in the Blank",
    instr: "Choose the best word from the box for each sentence.",
    instrEs: "Elige la mejor palabra del cuadro para completar cada oración.",
    type: "fill",
    bank: ["bowed", "expensive", "herds", "trader", "determined", "traditions", "respect", "cure", "natural", "society"],
    questions: [
      { sentence: "The ___ sold cloth and jewelry at the market.",                       sentenceEs: "El ___ vendió tela y joyas en el mercado.",                             answer: "trader" },
      { sentence: "The American plains were once home to ___ of buffalo.",               sentenceEs: "Las llanuras americanas eran el hogar de ___ de búfalos.",             answer: "herds" },
      { sentence: "I can't buy that ___ shirt. It costs too much.",                      sentenceEs: "No puedo comprar esa camisa ___. Cuesta demasiado.",                   answer: "expensive" },
      { sentence: "Mara was so ___ to finish the race that she refused to quit.",        sentenceEs: "Mara estaba tan ___ de terminar la carrera que se negó a rendirse.",  answer: "determined" },
      { sentence: "The boy bent low and ___ to the queen.",                              sentenceEs: "El niño se inclinó y le ___ a la reina.",                             answer: "bowed" },
      { sentence: "The Abenaki want to keep their ___ alive.",                           sentenceEs: "Los Abenaki quieren mantener vivas sus ___.",                         answer: "traditions" },
      { sentence: "It is good to ___ nature and our elders.",                            sentenceEs: "Es bueno ___ la naturaleza y a los mayores.",                         answer: "respect" },
      { sentence: "Doctors look for a ___ for the sickness.",                            sentenceEs: "Los médicos buscan una ___ para la enfermedad.",                      answer: "cure" }
    ]
  },

  vocab3: {
    title: "3. 📖 My Words to Know",
    instr: "Pick the high-frequency word that completes each sentence.",
    instrEs: "Elige la palabra de uso frecuente que complete cada oración.",
    type: "mc",
    questions: [
      { q: "An apple is an ___ of a fruit.",      qEs: "Una manzana es un ___ de una fruta.",         options: ["paper", "example", "something"], answer: "example" },
      { q: "Write your name on the ___.",          qEs: "Escribe tu nombre en el ___.",                options: ["paper", "example", "something"], answer: "paper" },
      { q: "Wait! I think I forgot ___.",          qEs: "¡Espera! Creo que olvidé ___.",               options: ["paper", "example", "something"], answer: "something" },
      { q: "Lin went to the library ___.",         qEs: "Lin iba a la biblioteca ___.",                options: ["often", "took", "important"],    answer: "often" },
      { q: "Books were very ___ to her.",          qEs: "Los libros eran muy ___ para ella.",          options: ["often", "took", "important"],    answer: "important" },
      { q: "She always ___ her library card.",     qEs: "Ella siempre ___ su tarjeta de biblioteca.", options: ["often", "took", "important"],    answer: "took" }
    ]
  },

  read1: {
    title: "4. 🦝 The Determined Raccoon",
    instr: "Read the story carefully. Then answer the questions.",
    instrEs: "Lee el cuento con cuidado. Luego responde las preguntas.",
    type: "reading",
    story: `<h3>The Determined Raccoon</h3>
<p>One afternoon, a raccoon <span class="vt" title="🇲🇽 caminó por">wandered</span> through the quiet forest, his stomach <span class="vt" title="🇲🇽 rugiendo">rumbling</span> loudly. "I need to find something to eat," he <span class="vt" title="🇲🇽 murmuró">muttered</span>.</p>
<p>Suddenly, he heard a <span class="vt" title="🇲🇽 ruido de hojas">rustling</span> above him and saw <span class="vt" title="🇲🇽 ardillas listadas">chipmunks</span> <span class="vt" title="🇲🇽 moviéndose rápido">darting</span> along branches. But what caught his attention was a large, beautiful bunch of berries hanging very high.</p>
<p>The raccoon's eyes <span class="vt" title="🇲🇽 brillaron">sparkled</span>. "Those berries look <span class="vt" title="🇲🇽 deliciosas">delicious</span>!" He <span class="vt" title="🇲🇽 saltó">leaped</span> and <span class="vt" title="🇲🇽 se estiró">stretched</span> but the berries were just out of reach.</p>
<p><span class="vt" title="🇲🇽 Jadeando (respirando fuerte)">Panting</span>, he <span class="vt" title="🇲🇽 encontró / vio">spotted</span> a large rock. He rolled it under the tree and climbed on top — still too high.</p>
<p>Then a new idea: "I'll jump from the stone!" With <span class="vt" title="🇲🇽 renovada">renewed</span> <span class="vt" title="🇲🇽 determinación">determination</span>, he leaped as high as he could. This time, he caught the berries! He happily <span class="vt" title="🇲🇽 se sentó">settled</span> beneath the tree. "I'm glad I never <span class="vt" title="🇲🇽 me rendí">quit</span> trying."</p>`,
    storyEs: `<h3>🇲🇽 El Mapache Determinado</h3>
<p>Una tarde, un mapache caminó por el bosque tranquilo, con el estómago rugiendo fuerte. "Necesito encontrar algo para comer", murmuró.</p>
<p>De repente, escuchó un ruido sobre él y vio ardillas listadas moviéndose por las ramas. Pero lo que más llamó su atención fue un gran racimo de moras colgando muy alto.</p>
<p>Los ojos del mapache brillaron. "¡Esas moras se ven deliciosas!" Saltó y se estiró pero las moras estaban fuera de su alcance.</p>
<p>Jadeando, vio una gran roca. La rodó debajo del árbol y se subió encima — todavía muy alto.</p>
<p>Entonces tuvo una nueva idea: "¡Saltaré desde la piedra!" Con renovada determinación, saltó tan alto como pudo. ¡Esta vez agarró las moras! "Me alegra no haber dejado de intentarlo."</p>`,
    questions: [
      { q: "Why couldn't Raccoon eat the berries he sees first?",  qEs: "¿Por qué el Mapache no pudo comer las moras al principio?",     options: ["Because they were too high", "Because they were rotten", "Because the chipmunks ate them"], answer: "Because they were too high" },
      { q: "What was Raccoon's problem?",                          qEs: "¿Cuál era el problema del Mapache?",                             options: ["He was lost", "He was hungry and couldn't reach the berries", "He was sleepy"], answer: "He was hungry and couldn't reach the berries" },
      { q: "What is the main theme of the story?",                 qEs: "¿Cuál es el tema principal del cuento?",                         options: ["Never give up", "Sharing is caring", "Be quiet in the forest"], answer: "Never give up" },
      { q: "How does Raccoon solve his problem?",                  qEs: "¿Cómo resuelve el Mapache su problema?",                         options: ["He asks a friend for help", "He jumps from a stone to reach the berries", "He climbs the tree"], answer: "He jumps from a stone to reach the berries" },
      { q: "What lesson did Raccoon learn?",                       qEs: "¿Qué lección aprendió el Mapache?",                              options: ["Don't give up — keep trying", "Always eat berries", "Run from chipmunks"], answer: "Don't give up — keep trying" }
    ]
  },

  read2: {
    title: "5. 🍲 Stone Soup Stories",
    instr: "Read both short stories. Then answer the comparison questions.",
    instrEs: "Lee los dos cuentos cortos. Luego responde las preguntas de comparación.",
    type: "reading",
    story: `<h3>The Traveler's Secret Recipe</h3>
<p>A young <span class="vt" title="🇲🇽 viajero">traveler</span> stopped at a small <span class="vt" title="🇲🇽 cabaña">cottage</span>. He was tired and hungry. "Could you <span class="vt" title="🇲🇽 darme un poco de">spare</span> a little food?" The woman said she had nothing to give.</p>
<p>The traveler said, "I know how to make a wonderful soup using only a stone." She gave him water. He dropped in the stone, stirred slowly, and said it just needed a <span class="vt" title="🇲🇽 pizca">pinch</span> of salt. Then a few vegetables. The woman brought what little she had. Soon the soup smelled rich and delicious. They sat together and enjoyed the meal.</p>
<h3>The Clever Recipe</h3>
<p>Three hungry travelers arrived in a village where people kept their doors closed. The third traveler built a fire, placed a pot of water over it, and dropped in a stone.</p>
<p><span class="vt" title="🇲🇽 Aldeanos">Villagers</span> gathered. "Stone soup," he said. "It would taste better with vegetables." One brought <span class="vt" title="🇲🇽 repollo">cabbage</span>, another <span class="vt" title="🇲🇽 zanahorias">carrots</span>, others <span class="vt" title="🇲🇽 frijoles, hierbas y especias">beans, herbs, and spices</span>. The pot filled with a rich, <span class="vt" title="🇲🇽 abundante">hearty</span> soup. Everyone shared and was no longer afraid to share.</p>`,
    storyEs: `<h3>🇲🇽 La Receta Secreta del Viajero</h3>
<p>Un joven viajero se detuvo en una pequeña cabaña. Estaba cansado y hambriento. La mujer dijo que no tenía nada que dar.</p>
<p>El viajero dijo: "Sé hacer una sopa usando solo una piedra." Le dio agua. Echó la piedra, revolvió despacio, y dijo que solo necesitaba una pizca de sal y unas verduras. La mujer trajo lo poco que tenía. Pronto la sopa olía deliciosa. Se sentaron juntos a comer.</p>
<h3>🇲🇽 La Receta Inteligente</h3>
<p>Tres viajeros hambrientos llegaron a un pueblo donde nadie quería compartir. El tercer viajero encendió un fuego, puso agua y echó una piedra.</p>
<p>Los aldeanos se reunieron. "Sopa de piedra. Sabría mejor con verduras." Uno trajo repollo, otro zanahorias, otros frijoles y especias. La olla se llenó con sopa abundante. Todos compartieron y ya no tuvieron miedo de hacerlo.</p>`,
    questions: [
      { q: "What is different about the recipe in 'The Traveler's Secret Recipe' compared to 'The Clever Recipe'?", qEs: "¿Qué tiene de diferente la receta del primer cuento?",        options: ["In the first story they used salt", "In the second story they used a stone", "There was no soup in the first story"], answer: "In the first story they used salt" },
      { q: "What does the young traveler do that the three travelers do not do?",                                  qEs: "¿Qué hace el joven viajero que los tres no hacen?",            options: ["He cooked the soup himself", "He brought the vegetables", "He ate alone"], answer: "He cooked the soup himself" },
      { q: "How are the people in both selections tricked in the same way?",                                       qEs: "¿De qué manera engañan a las personas igual en ambos cuentos?", options: ["They are hungry and end up sharing their food", "They are scared of the traveler", "They are very rich"], answer: "They are hungry and end up sharing their food" },
      { q: "What event takes place in both stories?",                                                              qEs: "¿Qué evento ocurre en ambos cuentos?",                           options: ["They cook soup using a stone and add ingredients", "They go to the market", "They sing songs"], answer: "They cook soup using a stone and add ingredients" },
      { q: "Where does each story take place?",                                                                    qEs: "¿Dónde ocurre cada cuento?",                                     options: ["In a village / cottage", "On a boat", "In a school"], answer: "In a village / cottage" }
    ]
  },

  read3: {
    title: "6. 🌅 The Abenaki",
    instr: "Read the passage. Then answer the questions.",
    instrEs: "Lee el texto. Luego responde las preguntas.",
    type: "reading",
    story: `<h3>The Abenaki</h3>
<p>The <span class="vt" title="🇲🇽 pueblo nativo americano">Abenaki</span> are <span class="vt" title="🇲🇽 nativos americanos — indígenas">Native American</span> people. They do not want to lose their <b><span class="vt" title="🇲🇽 tradiciones">traditions</span></b>. Their <span class="vt" title="🇲🇽 cultura">culture</span> teaches them how to <span class="vt" title="🇲🇽 comportarse">behave</span>.</p>
<p>It teaches that it is good to be <span class="vt" title="🇲🇽 agradecidos">thankful</span> and to <b><span class="vt" title="🇲🇽 respetar">respect</span></b> nature and one's <span class="vt" title="🇲🇽 mayores">elders</span>. Knowing their ways from long ago is a source of <span class="vt" title="🇲🇽 orgullo">pride</span>.</p>
<p>These traditions help the Abenaki stay <span class="vt" title="🇲🇽 orgullosos">proud</span> of their culture. Joseph Bruchac is a <span class="vt" title="🇲🇽 narrador de cuentos">storyteller</span> and <span class="vt" title="🇲🇽 músico">musician</span> who tells stories in English and in the Abenaki language.</p>`,
    storyEs: `<h3>🇲🇽 Los Abenaki</h3>
<p>Los Abenaki son un pueblo nativo americano. Ellos no quieren perder sus <b>tradiciones</b>. Su cultura les enseña cómo comportarse.</p>
<p>Les enseña que es bueno ser agradecidos y <b>respetar</b> la naturaleza y a sus mayores. Conocer sus costumbres de hace mucho tiempo es una fuente de orgullo.</p>
<p>Estas tradiciones ayudan a los Abenaki a sentirse orgullosos de su cultura. Joseph Bruchac es un cuentacuentos y músico que cuenta historias en inglés y en el idioma Abenaki.</p>`,
    questions: [
      { q: "What does 'traditions' mean?",                     qEs: "¿Qué significa 'traditions' (tradiciones)?",                 options: ["New things people invent", "Beliefs and ways passed down from parents to children", "Songs from the radio"], answer: "Beliefs and ways passed down from parents to children" },
      { q: "What does 'respect' mean?",                        qEs: "¿Qué significa 'respect' (respeto)?",                        options: ["To show honor to someone", "To run fast", "To be angry"], answer: "To show honor to someone" },
      { q: "Why are traditions important for the Abenaki?",    qEs: "¿Por qué son importantes las tradiciones para los Abenaki?",  options: ["They help them stay proud of their culture", "They are funny", "They cost money"], answer: "They help them stay proud of their culture" },
      { q: "Who is Joseph Bruchac?",                           qEs: "¿Quién es Joseph Bruchac?",                                   options: ["A storyteller and musician", "A doctor", "A farmer"], answer: "A storyteller and musician" },
      { q: "What does the Abenaki culture teach?",             qEs: "¿Qué enseña la cultura Abenaki?",                             options: ["To be thankful and respect nature and elders", "To never share", "To stay inside"], answer: "To be thankful and respect nature and elders" }
    ]
  },

  folktale: {
    title: "7. 🏰 Folktales Quiz",
    instr: "Answer these questions about folktales (like Puss in Boots and The Story of a Gazelle).",
    instrEs: "Responde estas preguntas sobre los cuentos folclóricos (como El Gato con Botas y La Historia de una Gacela).",
    type: "mc",
    questions: [
      { q: "What is a folktale?",                                                 qEs: "¿Qué es un cuento folclórico?",                                                    options: ["A modern movie", "A traditional story told again and again", "A science book"], answer: "A traditional story told again and again" },
      { q: "What do folktales usually have?",                                     qEs: "¿Qué suelen tener los cuentos folclóricos?",                                       options: ["Only pictures", "A problem to solve and a lesson", "No characters"], answer: "A problem to solve and a lesson" },
      { q: "How are characters in folktales usually?",                            qEs: "¿Cómo suelen ser los personajes en los cuentos folclóricos?",                      options: ["All confusing", "Either all good or all bad", "Always invisible"], answer: "Either all good or all bad" },
      { q: "Why are similar folktales told in different parts of the world?",     qEs: "¿Por qué se cuentan cuentos similares en diferentes partes del mundo?",            options: ["Because people share stories and change them in each place", "Because TV copies them", "Because of the weather"], answer: "Because people share stories and change them in each place" },
      { q: "How are Puss in Boots and The Story of a Gazelle alike?",            qEs: "¿En qué se parecen El Gato con Botas y La Historia de una Gacela?",               options: ["Both are poor boys with an animal friend that helps them", "Both are about pirates", "Both happen in space"], answer: "Both are poor boys with an animal friend that helps them" },
      { q: "Why does the storyteller in 'The Story' tell a story?",              qEs: "¿Por qué la narradora cuenta un cuento?",                                           options: ["Because the boy had a question", "Because she was tired", "Because of the rain"], answer: "Because the boy had a question" },
      { q: "Why does Bird like the third nest in 'Perfect!'?",                   qEs: "¿Por qué al Pájaro le gusta el tercer nido en '¡Perfecto!'?",                      options: ["Because all the others were dirty or too little", "Because it was made of gold", "Because it had food"], answer: "Because all the others were dirty or too little" },
      { q: "What fairy tale does 'Perfect!' remind you of?",                     qEs: "¿A qué cuento de hadas te recuerda '¡Perfecto!'?",                                  options: ["Cinderella", "Goldilocks and the Three Bears", "Snow White"], answer: "Goldilocks and the Three Bears" }
    ]
  },

  exam: {
    title: "8. 📝 Exam Simulation",
    instr: "This is a mini exam — just like the practice booklet! Read carefully and answer.",
    instrEs: "Este es un mini examen, ¡igual que el cuadernillo de práctica! Lee con cuidado y responde.",
    type: "mixed",
    sections: [
      {
        heading: "Part A — Vocabulary",
        headingEs: "Parte A — Vocabulario",
        type: "mc",
        questions: [
          { q: "The ___ sold beautiful jewelry at the market.", qEs: "El ___ vendió hermosas joyas en el mercado.",    options: ["herds", "trader", "cure"],             answer: "trader" },
          { q: "She was ___ to win the race.",                  qEs: "Ella estaba ___ de ganar la carrera.",           options: ["determined", "expensive", "natural"], answer: "determined" },
          { q: "The Abenaki want to keep their ___ alive.",     qEs: "Los Abenaki quieren mantener vivas sus ___.",    options: ["herds", "traditions", "expensive"],   answer: "traditions" },
          { q: "A diamond ring is very ___.",                   qEs: "Un anillo de diamantes es muy ___.",             options: ["expensive", "natural", "bowed"],      answer: "expensive" },
          { q: "We should ___ our elders.",                     qEs: "Debemos ___ a nuestros mayores.",                options: ["respect", "cure", "trader"],          answer: "respect" }
        ]
      },
      {
        heading: "Part B — Short story",
        headingEs: "Parte B — Cuento corto",
        type: "reading",
        story: `<h3>The Greedy Fox</h3>
<p>A fox saw some sweet <span class="vt" title="🇲🇽 uvas">grapes</span> hanging high on a <span class="vt" title="🇲🇽 enredadera / vid">vine</span>. He jumped and jumped, but could not reach them. After many tries, he walked away saying, "Those grapes were <span class="vt" title="🇲🇽 agrias">sour</span> anyway." But the truth was — he just <span class="vt" title="🇲🇽 se rindió">gave up</span> too soon.</p>`,
        storyEs: `<h3>🇲🇽 El Zorro Codicioso</h3>
<p>Un zorro vio unas uvas dulces colgando muy alto en una enredadera. Saltó y saltó, pero no pudo alcanzarlas. Después de muchos intentos, se alejó diciendo: "De todas formas, esas uvas estaban agrias." Pero la verdad era que simplemente se rindió demasiado pronto.</p>`,
        questions: [
          { q: "What was the fox's problem?",                                             qEs: "¿Cuál era el problema del zorro?",                                            options: ["He couldn't reach the grapes", "He was lost", "He was sleepy"], answer: "He couldn't reach the grapes" },
          { q: "What lesson can we learn?",                                               qEs: "¿Qué lección podemos aprender?",                                              options: ["Don't give up; keep trying", "Eat all the grapes", "Run fast"], answer: "Don't give up; keep trying" },
          { q: "How is this story similar to 'The Determined Raccoon'?",                 qEs: "¿En qué se parece este cuento al del 'Mapache Determinado'?",                 options: ["Both animals want to reach fruit that is too high", "Both are about chipmunks", "Both happen at night"], answer: "Both animals want to reach fruit that is too high" },
          { q: "What is different between this story and 'The Determined Raccoon'?",     qEs: "¿En qué es diferente este cuento al del 'Mapache Determinado'?",              options: ["The fox gives up, but the raccoon keeps trying", "The fox is bigger", "The raccoon eats grapes"], answer: "The fox gives up, but the raccoon keeps trying" },
          { q: "Why is this story a folktale?",                                           qEs: "¿Por qué este cuento es un cuento folclórico?",                               options: ["Animals act like people and there is a lesson", "It is on the news", "It has many pictures"], answer: "Animals act like people and there is a lesson" }
        ]
      }
    ]
  }
};

// ============== STATE ==============
let totalStars = parseInt(localStorage.getItem("totalStars") || "0", 10);
document.getElementById("starCount").textContent = totalStars;

function addStars(n) {
  totalStars += n;
  localStorage.setItem("totalStars", totalStars);
  document.getElementById("starCount").textContent = totalStars;
}

// ============== RENDER ==============
function render(tabKey) {
  const data = activities[tabKey];
  const root = document.getElementById("content");
  root.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.className = "activity";
  wrap.innerHTML = `
    <h2>${data.title}</h2>
    <div class="instr">${data.instr}</div>
    ${data.instrEs ? `<div class="es-box instr-es">🇲🇽 ${data.instrEs}</div>` : ''}
  `;

  if (data.type === "match") renderMatch(wrap, data);
  else if (data.type === "fill") renderFill(wrap, data);
  else if (data.type === "mc") renderMC(wrap, data.questions);
  else if (data.type === "reading") {
    renderStory(wrap, data.story, data.storyEs);
    renderMC(wrap, data.questions);
  } else if (data.type === "mixed") {
    data.sections.forEach(sec => {
      const hEl = document.createElement("div");
      hEl.innerHTML = `
        <h3 class="sec-heading">${sec.heading}</h3>
        ${sec.headingEs ? `<div class="es-box sec-heading-es">🇲🇽 ${sec.headingEs}</div>` : ''}
      `;
      wrap.appendChild(hEl);
      if (sec.story) renderStory(wrap, sec.story, sec.storyEs);
      renderMC(wrap, sec.questions);
    });
  }

  root.appendChild(wrap);
  applyEsMode();
}

function renderStory(parent, storyHtml, storyEs) {
  const box = document.createElement("div");
  box.className = "story-box";
  box.innerHTML = storyHtml;
  parent.appendChild(box);

  if (storyEs) {
    const esBox = document.createElement("div");
    esBox.className = "story-box es-box story-es-box";
    esBox.innerHTML = storyEs;
    parent.appendChild(esBox);
  }
}

function renderMC(parent, questions) {
  const startIdx = parent.querySelectorAll(".question").length;
  questions.forEach((q, i) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";
    qDiv.dataset.answer = q.answer;

    const esHint = q.qEs ? `<div class="es-box q-es">🇲🇽 ${q.qEs}</div>` : '';

    qDiv.innerHTML = `
      <p class="q-text">${startIdx + i + 1}. ${q.q}</p>
      ${esHint}
      <div class="options"></div>
      <div class="feedback"></div>
    `;

    const optsDiv = qDiv.querySelector(".options");
    const opts = [...q.options].sort(() => Math.random() - 0.5);
    opts.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.textContent = opt;
      btn.onclick = () => {
        optsDiv.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
        btn.classList.add("selected");
      };
      optsDiv.appendChild(btn);
    });
    parent.appendChild(qDiv);
  });

  const btn = document.createElement("button");
  btn.className = "btn-check";
  btn.textContent = "✅ Check my answers";
  const score = document.createElement("div");
  score.className = "score-box";

  btn.onclick = () => {
    let correct = 0;
    const qs = parent.querySelectorAll(".question");
    qs.forEach(qDiv => {
      const sel = qDiv.querySelector(".option.selected");
      const fb = qDiv.querySelector(".feedback");
      qDiv.classList.remove("correct", "wrong");
      qDiv.querySelectorAll(".option").forEach(o => o.classList.remove("correct", "wrong"));
      if (!sel) {
        fb.className = "feedback show bad";
        fb.textContent = "⚠️ Please choose an answer. / Por favor elige una respuesta.";
        return;
      }
      if (sel.textContent === qDiv.dataset.answer) {
        sel.classList.add("correct");
        qDiv.classList.add("correct");
        fb.className = "feedback show good";
        fb.textContent = "✅ Great job! / ¡Muy bien!";
        correct++;
      } else {
        sel.classList.add("wrong");
        qDiv.classList.add("wrong");
        qDiv.querySelectorAll(".option").forEach(o => {
          if (o.textContent === qDiv.dataset.answer) o.classList.add("correct");
        });
        fb.className = "feedback show bad";
        fb.textContent = `❌ The correct answer is: "${qDiv.dataset.answer}"`;
      }
    });
    const total = qs.length;
    let msg = "";
    if (correct === total) msg = `🏆 PERFECT! ${correct}/${total} — ¡Eres una estrella! ⭐`;
    else if (correct >= total * 0.7) msg = `🌟 Great work! / ¡Muy bien! ${correct}/${total}`;
    else if (correct >= total / 2) msg = `👍 Good try! ${correct}/${total} — Lee de nuevo e intenta otra vez.`;
    else msg = `💪 ¡No te rindas! ${correct}/${total} — Like the Raccoon, keep trying!`;
    score.textContent = msg;
    score.classList.add("show");
    addStars(correct);
  };

  parent.appendChild(btn);
  parent.appendChild(score);
}

function renderMatch(parent, data) {
  const grid = document.createElement("div");
  grid.className = "match-grid";
  const leftCol = document.createElement("div");
  leftCol.className = "match-col";
  const rightCol = document.createElement("div");
  rightCol.className = "match-col";

  const words = data.pairs.map(p => p.word);
  const meanings = data.pairs.map(p => p.meaning).sort(() => Math.random() - 0.5);

  words.forEach(w => {
    const pair = data.pairs.find(p => p.word === w);
    const el = document.createElement("div");
    el.className = "match-item word";
    el.dataset.word = w;
    el.innerHTML = `<span class="vt" title="🇲🇽 ${pair.meaningEs}">${w}</span>
      <div class="es-box match-word-es">🇲🇽 ${pair.meaningEs}</div>`;
    leftCol.appendChild(el);
  });

  meanings.forEach(m => {
    const el = document.createElement("div");
    el.className = "match-item meaning";
    el.dataset.meaning = m;
    el.textContent = m;
    rightCol.appendChild(el);
  });

  grid.appendChild(leftCol);
  grid.appendChild(rightCol);
  parent.appendChild(grid);

  const score = document.createElement("div");
  score.className = "score-box";
  parent.appendChild(score);

  let selWord = null;
  let matched = 0;
  const total = data.pairs.length;

  function tryMatch(wordEl, meaningEl) {
    const pair = data.pairs.find(p => p.word === wordEl.dataset.word);
    if (pair.meaning === meaningEl.dataset.meaning) {
      wordEl.classList.add("matched");
      meaningEl.classList.add("matched");
      wordEl.classList.remove("selected");
      meaningEl.classList.remove("selected");
      wordEl.onclick = null;
      meaningEl.onclick = null;
      matched++;
      addStars(1);
      if (matched === total) {
        score.textContent = `🏆 ¡INCREÍBLE! ¡Emparejaste las ${total} palabras! ⭐⭐⭐`;
        score.classList.add("show");
      }
    } else {
      wordEl.classList.add("wrong-flash");
      meaningEl.classList.add("wrong-flash");
      setTimeout(() => {
        wordEl.classList.remove("wrong-flash", "selected");
        meaningEl.classList.remove("wrong-flash", "selected");
      }, 600);
    }
    selWord = null;
  }

  leftCol.querySelectorAll(".word").forEach(el => {
    el.onclick = () => {
      if (el.classList.contains("matched")) return;
      leftCol.querySelectorAll(".word").forEach(w => w.classList.remove("selected"));
      el.classList.add("selected");
      selWord = el;
    };
  });
  rightCol.querySelectorAll(".meaning").forEach(el => {
    el.onclick = () => {
      if (el.classList.contains("matched")) return;
      if (!selWord) { el.classList.toggle("selected"); return; }
      el.classList.add("selected");
      tryMatch(selWord, el);
    };
  });
}

function renderFill(parent, data) {
  const bank = document.createElement("div");
  bank.innerHTML = `<div class="word-bank">📦 Word bank: ${data.bank.join(" • ")}</div>`;
  parent.appendChild(bank);

  data.questions.forEach((q, i) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";
    qDiv.dataset.answer = q.answer.toLowerCase();

    const parts = q.sentence.split("___");
    const partsEs = q.sentenceEs ? q.sentenceEs.split("___") : null;
    const esHtml = partsEs
      ? `<div class="es-box q-es">🇲🇽 ${partsEs[0]}<b>___</b>${partsEs[1] || ''}</div>`
      : '';

    qDiv.innerHTML = `
      <p class="q-text">${i + 1}. ${parts[0]}<input type="text" autocomplete="off" />${parts[1] || ""}</p>
      ${esHtml}
      <div class="feedback"></div>
    `;
    parent.appendChild(qDiv);
  });

  const btn = document.createElement("button");
  btn.className = "btn-check";
  btn.textContent = "✅ Check my answers";
  const score = document.createElement("div");
  score.className = "score-box";

  btn.onclick = () => {
    let correct = 0;
    const qs = parent.querySelectorAll(".question");
    qs.forEach(qDiv => {
      const input = qDiv.querySelector("input");
      const fb = qDiv.querySelector(".feedback");
      input.classList.remove("correct", "wrong");
      qDiv.classList.remove("correct", "wrong");
      const val = input.value.trim().toLowerCase();
      if (val === qDiv.dataset.answer) {
        input.classList.add("correct");
        qDiv.classList.add("correct");
        fb.className = "feedback show good";
        fb.textContent = "✅ Correct! / ¡Correcto!";
        correct++;
      } else {
        input.classList.add("wrong");
        qDiv.classList.add("wrong");
        fb.className = "feedback show bad";
        fb.textContent = `❌ The correct word is: "${qDiv.dataset.answer}"`;
      }
    });
    const total = qs.length;
    let msg = "";
    if (correct === total) msg = `🏆 PERFECT! ${correct}/${total} ⭐`;
    else if (correct >= total * 0.7) msg = `🌟 ¡Muy bien! ${correct}/${total}`;
    else msg = `👍 ¡Sigue practicando! ${correct}/${total}`;
    score.textContent = msg;
    score.classList.add("show");
    addStars(correct);
  };

  parent.appendChild(btn);
  parent.appendChild(score);
}

// ============== TABS ==============
document.querySelectorAll(".tab").forEach(t => {
  t.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    render(t.dataset.tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.getElementById("resetAll").addEventListener("click", () => {
  if (confirm("Start over and reset your stars? / ¿Empezar de nuevo y borrar tus estrellas?")) {
    totalStars = 0;
    localStorage.setItem("totalStars", "0");
    document.getElementById("starCount").textContent = "0";
    render(document.querySelector(".tab.active").dataset.tab);
  }
});

document.getElementById("esToggle").addEventListener("click", () => {
  esMode = !esMode;
  localStorage.setItem("esMode", JSON.stringify(esMode));
  applyEsMode();
});

// initial render
render("vocab1");
applyEsMode();
