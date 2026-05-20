// ============== DATA ==============
const activities = {
  vocab1: {
    title: "1. 🎯 Vocabulary Match",
    instr: "Click a word, then click its meaning. Try to match them all!",
    type: "match",
    pairs: [
      { word: "natural", meaning: "Produced by nature, not people" },
      { word: "society", meaning: "A group of people living together" },
      { word: "cure", meaning: "To get rid of a sickness" },
      { word: "traditions", meaning: "Beliefs passed down from parents to children" },
      { word: "respect", meaning: "To show honor to someone" },
      { word: "trader", meaning: "A person who sells or trades things" },
      { word: "herds", meaning: "Large groups of animals" },
      { word: "expensive", meaning: "Costs a lot of money" },
      { word: "determined", meaning: "Refusing to give up" },
      { word: "bowed", meaning: "Bent low to show respect" }
    ]
  },

  vocab2: {
    title: "2. ✏️ Fill in the Blank",
    instr: "Choose the best word from the box for each sentence.",
    type: "fill",
    bank: ["bowed", "expensive", "herds", "trader", "determined", "traditions", "respect", "cure", "natural", "society"],
    questions: [
      { sentence: "The ___ sold cloth and jewelry at the market.", answer: "trader" },
      { sentence: "The American plains were once home to ___ of buffalo.", answer: "herds" },
      { sentence: "I can't buy that ___ shirt. It costs too much.", answer: "expensive" },
      { sentence: "Mara was so ___ to finish the race that she refused to quit.", answer: "determined" },
      { sentence: "The boy bent low and ___ to the queen.", answer: "bowed" },
      { sentence: "The Abenaki want to keep their ___ alive.", answer: "traditions" },
      { sentence: "It is good to ___ nature and our elders.", answer: "respect" },
      { sentence: "Doctors look for a ___ for the sickness.", answer: "cure" }
    ]
  },

  vocab3: {
    title: "3. 📖 My Words to Know",
    instr: "Pick the high-frequency word that completes each sentence.",
    type: "mc",
    questions: [
      { q: "An apple is an ___ of a fruit.", options: ["paper", "example", "something"], answer: "example" },
      { q: "Write your name on the ___.", options: ["paper", "example", "something"], answer: "paper" },
      { q: "Wait! I think I forgot ___.", options: ["paper", "example", "something"], answer: "something" },
      { q: "Lin went to the library ___.", options: ["often", "took", "important"], answer: "often" },
      { q: "Books were very ___ to her.", options: ["often", "took", "important"], answer: "important" },
      { q: "She always ___ her library card.", options: ["often", "took", "important"], answer: "took" }
    ]
  },

  read1: {
    title: "4. 🦝 The Determined Raccoon",
    instr: "Read the story carefully. Then answer the questions.",
    type: "reading",
    story: `<h3>The Determined Raccoon</h3>
      <p>One afternoon, a raccoon wandered through the quiet forest, his stomach rumbling loudly. "I need to find something to eat," he muttered as he searched among the trees.</p>
      <p>Suddenly, he heard a rustling sound above him. He looked up just in time to see a group of chipmunks darting along the branches. But what truly caught his attention was something else—hanging high above was a large, beautiful bunch of berries.</p>
      <p>The raccoon's eyes sparkled with excitement. "Those berries look delicious," he said eagerly. "I must get them!"</p>
      <p>He stepped back and leaped into the air, stretching as far as he could. But the berries were just out of reach. He tried again and again, each jump higher than the last, yet still he failed.</p>
      <p>Panting, the raccoon looked around and spotted a large rock nearby. "If I stand on that, I'll surely reach them," he thought. He rolled the stone under the tree and climbed on top of it. He stretched upward—but still, the grapes remained too high.</p>
      <p>The raccoon paused, thinking carefully. Then a new idea came to him. "I know what to do! I'll jump from the stone!"</p>
      <p>With renewed determination, he balanced himself, bent his legs, and leaped as high as he possibly could. This time, he caught the berries! He landed on the ground with his prize and happily settled beneath the tree. "These are just as sweet as I imagined," he said, smiling as he enjoyed his meal. "I'm glad I never quit trying."</p>`,
    questions: [
      { q: "Why couldn't Raccoon eat the berries he sees first?", options: ["Because they were too high", "Because they were rotten", "Because the chipmunks ate them"], answer: "Because they were too high" },
      { q: "What was Raccoon's problem?", options: ["He was lost", "He was hungry and couldn't reach the berries", "He was sleepy"], answer: "He was hungry and couldn't reach the berries" },
      { q: "What is the main theme of the story?", options: ["Never give up", "Sharing is caring", "Be quiet in the forest"], answer: "Never give up" },
      { q: "How does Raccoon solve his problem?", options: ["He asks a friend for help", "He jumps from a stone to reach the berries", "He climbs the tree"], answer: "He jumps from a stone to reach the berries" },
      { q: "What lesson did Raccoon learn?", options: ["Don't give up — keep trying", "Always eat berries", "Run from chipmunks"], answer: "Don't give up — keep trying" }
    ]
  },

  read2: {
    title: "5. 🍲 Stone Soup Stories",
    instr: "Read both short stories. Then answer the comparison questions.",
    type: "reading",
    story: `<h3>The Traveler's Secret Recipe</h3>
      <p>A young traveler stopped at a small cottage. He was tired and hungry. "Could you spare a little food?" he asked. The woman said she had nothing to give.</p>
      <p>The traveler said, "I know how to make a wonderful soup using only a stone." She gave him a pot of water. He dropped in the stone, stirred slowly, and said it just needed a pinch of salt. Then a few vegetables. The woman brought what little she had. Soon the soup smelled rich and delicious. They sat together and enjoyed the meal.</p>
      <h3>The Clever Recipe</h3>
      <p>Three hungry travelers arrived in a village where people kept their doors closed. "No one wants to share," one said. The third traveler had an idea. They built a fire and placed a pot of water over it. He dropped in a stone and began to stir.</p>
      <p>Villagers gathered. "What are you making?" "Stone soup," he replied. "It would taste even better with some vegetables." One villager brought cabbage. Another added carrots. Others brought beans, herbs, and spices. The pot filled with a rich, hearty soup. Everyone shared the meal and was no longer afraid to share.</p>`,
    questions: [
      { q: "What is different about the recipe in 'The Traveler's Secret Recipe' compared to 'The Clever Recipe'?", options: ["In the first story they used salt", "In the second story they used a stone", "There was no soup in the first story"], answer: "In the first story they used salt" },
      { q: "What does the young traveler do that the three travelers do not do?", options: ["He cooked the soup himself", "He brought the vegetables", "He ate alone"], answer: "He cooked the soup himself" },
      { q: "How are the people in both selections tricked in the same way?", options: ["They are hungry and end up sharing their food", "They are scared of the traveler", "They are very rich"], answer: "They are hungry and end up sharing their food" },
      { q: "What event takes place in both stories?", options: ["They cook soup using a stone and add ingredients", "They go to the market", "They sing songs"], answer: "They cook soup using a stone and add ingredients" },
      { q: "Where does each story take place?", options: ["In a village / cottage", "On a boat", "In a school"], answer: "In a village / cottage" }
    ]
  },

  read3: {
    title: "6. 🌅 The Abenaki",
    instr: "Read the passage. Then answer the questions.",
    type: "reading",
    story: `<h3>The Abenaki</h3>
      <p>The Abenaki are Native American people. They do not want to lose their <b>traditions</b>. Their culture teaches them how to behave.</p>
      <p>It teaches that it is good to be thankful. It teaches that it is good to <b>respect</b> nature and one's elders. Knowing their ways from long ago is a source of pride.</p>
      <p>These traditions help the Abenaki stay proud of their culture and their history. Joseph Bruchac is a storyteller and musician who tells stories and sings songs in English and in the Abenaki language.</p>`,
    questions: [
      { q: "What does 'traditions' mean?", options: ["New things people invent", "Beliefs and ways passed down from parents to children", "Songs from the radio"], answer: "Beliefs and ways passed down from parents to children" },
      { q: "What does 'respect' mean?", options: ["To show honor to someone", "To run fast", "To be angry"], answer: "To show honor to someone" },
      { q: "Why are traditions important for the Abenaki?", options: ["They help them stay proud of their culture", "They are funny", "They cost money"], answer: "They help them stay proud of their culture" },
      { q: "Who is Joseph Bruchac?", options: ["A storyteller and musician", "A doctor", "A farmer"], answer: "A storyteller and musician" },
      { q: "What does the Abenaki culture teach?", options: ["To be thankful and respect nature and elders", "To never share", "To stay inside"], answer: "To be thankful and respect nature and elders" }
    ]
  },

  folktale: {
    title: "7. 🏰 Folktales Quiz",
    instr: "Answer these questions about folktales (like Puss in Boots and The Story of a Gazelle).",
    type: "mc",
    questions: [
      { q: "What is a folktale?", options: ["A modern movie", "A traditional story told again and again", "A science book"], answer: "A traditional story told again and again" },
      { q: "What do folktales usually have?", options: ["Only pictures", "A problem to solve and a lesson", "No characters"], answer: "A problem to solve and a lesson" },
      { q: "How are characters in folktales usually?", options: ["All confusing", "Either all good or all bad", "Always invisible"], answer: "Either all good or all bad" },
      { q: "Why are similar folktales told in different parts of the world?", options: ["Because people share stories and change them in each place", "Because TV copies them", "Because of the weather"], answer: "Because people share stories and change them in each place" },
      { q: "How are Puss in Boots and The Story of a Gazelle alike?", options: ["Both are poor boys with an animal friend that helps them", "Both are about pirates", "Both happen in space"], answer: "Both are poor boys with an animal friend that helps them" },
      { q: "Why does the storyteller in 'The Story' tell a story?", options: ["Because the boy had a question", "Because she was tired", "Because of the rain"], answer: "Because the boy had a question" },
      { q: "Why does Bird like the third nest in 'Perfect!'?", options: ["Because all the others were dirty or too little", "Because it was made of gold", "Because it had food"], answer: "Because all the others were dirty or too little" },
      { q: "What fairy tale does 'Perfect!' remind you of?", options: ["Cinderella", "Goldilocks and the Three Bears", "Snow White"], answer: "Goldilocks and the Three Bears" }
    ]
  },

  exam: {
    title: "8. 📝 Exam Simulation",
    instr: "This is a mini exam — just like the practice booklet! Read carefully and answer.",
    type: "mixed",
    sections: [
      {
        heading: "Part A — Vocabulary",
        type: "mc",
        questions: [
          { q: "The ___ sold beautiful jewelry at the market.", options: ["herds", "trader", "cure"], answer: "trader" },
          { q: "She was ___ to win the race.", options: ["determined", "expensive", "natural"], answer: "determined" },
          { q: "The Abenaki want to keep their ___ alive.", options: ["herds", "traditions", "expensive"], answer: "traditions" },
          { q: "A diamond ring is very ___.", options: ["expensive", "natural", "bowed"], answer: "expensive" },
          { q: "We should ___ our elders.", options: ["respect", "cure", "trader"], answer: "respect" }
        ]
      },
      {
        heading: "Part B — Short story",
        type: "reading",
        story: `<h3>The Greedy Fox</h3>
          <p>A fox saw some sweet grapes hanging high on a vine. He jumped and jumped, but he could not reach them. After many tries, he walked away saying, "Those grapes were probably sour anyway." But the truth was — he just gave up too soon.</p>`,
        questions: [
          { q: "What was the fox's problem?", options: ["He couldn't reach the grapes", "He was lost", "He was sleepy"], answer: "He couldn't reach the grapes" },
          { q: "What lesson can we learn?", options: ["Don't give up; keep trying", "Eat all the grapes", "Run fast"], answer: "Don't give up; keep trying" },
          { q: "How is this story similar to 'The Determined Raccoon'?", options: ["Both animals want to reach fruit that is too high", "Both are about chipmunks", "Both happen at night"], answer: "Both animals want to reach fruit that is too high" },
          { q: "What is different between this story and 'The Determined Raccoon'?", options: ["The fox gives up, but the raccoon keeps trying", "The fox is bigger", "The raccoon eats grapes"], answer: "The fox gives up, but the raccoon keeps trying" },
          { q: "Why is this story a folktale?", options: ["Animals act like people and there is a lesson", "It is on the news", "It has many pictures"], answer: "Animals act like people and there is a lesson" }
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
  wrap.innerHTML = `<h2>${data.title}</h2><div class="instr">${data.instr}</div>`;

  if (data.type === "match") renderMatch(wrap, data);
  else if (data.type === "fill") renderFill(wrap, data);
  else if (data.type === "mc") renderMC(wrap, data.questions);
  else if (data.type === "reading") {
    wrap.innerHTML += `<div class="story-box">${data.story}</div>`;
    renderMC(wrap, data.questions);
  } else if (data.type === "mixed") {
    data.sections.forEach(sec => {
      wrap.innerHTML += `<h3 style="color:#fd79a8;margin:20px 0 10px">${sec.heading}</h3>`;
      if (sec.story) wrap.innerHTML += `<div class="story-box">${sec.story}</div>`;
      renderMC(wrap, sec.questions);
    });
  }

  root.appendChild(wrap);
}

// ---- Multiple choice renderer ----
function renderMC(parent, questions) {
  const startIdx = parent.querySelectorAll(".question").length;
  questions.forEach((q, i) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";
    qDiv.dataset.answer = q.answer;
    qDiv.innerHTML = `<p class="q-text">${startIdx + i + 1}. ${q.q}</p><div class="options"></div><div class="feedback"></div>`;
    const optsDiv = qDiv.querySelector(".options");
    // shuffle options for variety
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

  // single check button per section
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
        fb.textContent = "⚠️ Please choose an answer.";
        return;
      }
      if (sel.textContent === qDiv.dataset.answer) {
        sel.classList.add("correct");
        qDiv.classList.add("correct");
        fb.className = "feedback show good";
        fb.textContent = "✅ Great job!";
        correct++;
      } else {
        sel.classList.add("wrong");
        qDiv.classList.add("wrong");
        // highlight correct
        qDiv.querySelectorAll(".option").forEach(o => {
          if (o.textContent === qDiv.dataset.answer) o.classList.add("correct");
        });
        fb.className = "feedback show bad";
        fb.textContent = `❌ The correct answer is: "${qDiv.dataset.answer}"`;
      }
    });
    const total = qs.length;
    const stars = correct;
    let msg = "";
    if (correct === total) msg = `🏆 PERFECT! ${correct}/${total} — You're a star! ⭐`;
    else if (correct >= total * 0.7) msg = `🌟 Great work! ${correct}/${total}`;
    else if (correct >= total / 2) msg = `👍 Good try! ${correct}/${total} — Read again and try once more!`;
    else msg = `💪 Don't give up! ${correct}/${total} — Like the Raccoon, keep trying!`;
    score.textContent = msg;
    score.classList.add("show");
    addStars(stars);
  };

  parent.appendChild(btn);
  parent.appendChild(score);
}

// ---- Match renderer ----
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
    const el = document.createElement("div");
    el.className = "match-item word";
    el.textContent = w;
    el.dataset.word = w;
    leftCol.appendChild(el);
  });
  meanings.forEach(m => {
    const el = document.createElement("div");
    el.className = "match-item meaning";
    el.textContent = m;
    el.dataset.meaning = m;
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
        score.textContent = `🏆 AMAZING! You matched all ${total} words! ⭐⭐⭐`;
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
      if (!selWord) {
        el.classList.toggle("selected");
        return;
      }
      el.classList.add("selected");
      tryMatch(selWord, el);
    };
  });
}

// ---- Fill in the blank renderer ----
function renderFill(parent, data) {
  const bank = document.createElement("div");
  bank.innerHTML = `<div style="background:#e0d9ff;padding:12px;border-radius:10px;margin-bottom:15px;text-align:center;font-weight:bold;font-size:1.05rem;">📦 Word bank: ${data.bank.join(" • ")}</div>`;
  parent.appendChild(bank);

  data.questions.forEach((q, i) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";
    qDiv.dataset.answer = q.answer.toLowerCase();
    const parts = q.sentence.split("___");
    qDiv.innerHTML = `<p class="q-text">${i + 1}. ${parts[0]}<input type="text" />${parts[1] || ""}</p><div class="feedback"></div>`;
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
        fb.textContent = "✅ Correct!";
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
    else if (correct >= total * 0.7) msg = `🌟 Great! ${correct}/${total}`;
    else msg = `👍 Keep practicing! ${correct}/${total}`;
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
  if (confirm("Start over and reset your stars?")) {
    totalStars = 0;
    localStorage.setItem("totalStars", "0");
    document.getElementById("starCount").textContent = "0";
    render(document.querySelector(".tab.active").dataset.tab);
  }
});

// initial render
render("vocab1");
