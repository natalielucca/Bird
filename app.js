const birds = [
  {
    id: "talgoxe",
    name: "Talgoxe",
    latin: "Parus major",
    look: "Gul mage med svart slips, svart huvud och vita kinder.",
    sound: "Två tydliga toner: ti-ta, ti-ta, ti-ta.",
    clue: "Lyssna efter den jämna tvåtakten. Den låter nästan som en liten cykelpump.",
    recording: {
      xc: "XC1029575",
      url: "https://xeno-canto.org/1029575/download#t=0,14",
      page: "https://xeno-canto.org/1029575",
      recordist: "Esperanza Poveda",
      license: "CC BY-NC-SA 4.0",
    },
    photo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Great_Tit_%28Parus_major%29_1.jpg/960px-Great_Tit_%28Parus_major%29_1.jpg",
      page: "https://commons.wikimedia.org/wiki/File:Great_Tit_(Parus_major)_1.jpg",
      credit: "Dark one, CC BY-SA 2.5",
    },
    habitat: "Parker, trädgårdar och skolgårdar",
    colors: ["#f2c84b", "#20252a", "#ffffff", "#738f43"],
    pattern: "tie",
    notes: [880, 660, 880, 660, 880, 660],
    duration: 0.13,
  },
  {
    id: "blames",
    name: "Blåmes",
    latin: "Cyanistes caeruleus",
    look: "Liten fågel med blå hjässa, gul mage och vit kind.",
    sound: "Ljusa silvertoner som faller snabbt: sii-sii-sirrr.",
    clue: "Hör du något ljust och snabbt i buskarna kan det vara blåmesen.",
    recording: {
      xc: "XC982816",
      url: "https://xeno-canto.org/982816/download#t=0,14",
      page: "https://xeno-canto.org/982816",
      recordist: "Gunnar Dolk",
      license: "CC BY-NC-SA 4.0",
    },
    photo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Cyanistes_caeruleus_3_Luc_Viatour.jpg/960px-Cyanistes_caeruleus_3_Luc_Viatour.jpg",
      page: "https://commons.wikimedia.org/wiki/File:Cyanistes_caeruleus_3_Luc_Viatour.jpg",
      credit: "Luc Viatour, CC BY-SA 3.0",
    },
    habitat: "Lövträd, parker och holkar",
    colors: ["#f0c84a", "#2f75b8", "#ffffff", "#253b68"],
    pattern: "cap",
    notes: [1180, 1260, 940, 860, 790, 720],
    duration: 0.09,
  },
  {
    id: "koltrast",
    name: "Koltrast",
    latin: "Turdus merula",
    look: "Hanen är svart med orange näbb. Honan är brunare.",
    sound: "Mjuk, klar och flöjtande kvällssång.",
    clue: "Koltrasten sjunger lugnt och vackert, ofta från ett tak eller träd.",
    recording: {
      xc: "XC569639",
      url: "https://xeno-canto.org/569639/download#t=0,16",
      page: "https://xeno-canto.org/569639",
      recordist: "Niels Krabbe",
      license: "CC BY-NC-SA 4.0",
    },
    photo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Common_Blackbird.jpg/960px-Common_Blackbird.jpg",
      page: "https://commons.wikimedia.org/wiki/File:Common_Blackbird.jpg",
      credit: "Andreas Trepte, CC BY-SA 2.5",
    },
    habitat: "Städer, parker och skogskanter",
    colors: ["#1f2422", "#f0a23d", "#3b3b34", "#0f1110"],
    pattern: "plain",
    notes: [520, 660, 740, 620, 700, 880],
    duration: 0.19,
  },
  {
    id: "skata",
    name: "Skata",
    latin: "Pica pica",
    look: "Svartvit fågel med lång stjärt och metallglans.",
    sound: "Hårt och skrattande tjatter: schack-schack-schack.",
    clue: "Skatan låter ofta som ett snabbt, raspigt alarm.",
    recording: {
      xc: "XC737545",
      url: "https://xeno-canto.org/737545/download#t=0,12",
      page: "https://xeno-canto.org/737545",
      recordist: "Erik Hansson",
      license: "CC BY-NC-SA 4.0",
    },
    photo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Eurasian_magpie_%28Pica_pica%29.jpg/960px-Eurasian_magpie_%28Pica_pica%29.jpg",
      page: "https://commons.wikimedia.org/wiki/File:Eurasian_magpie_(Pica_pica).jpg",
      credit: "Alexis Lours, CC BY 4.0",
    },
    habitat: "Gårdar, parker och öppna områden",
    colors: ["#111318", "#ffffff", "#1f8b85", "#1a1d21"],
    pattern: "tail",
    notes: [430, 380, 420, 360, 430, 390],
    duration: 0.07,
    noise: true,
  },
  {
    id: "kraka",
    name: "Kråka",
    latin: "Corvus cornix",
    look: "Grå kropp med svart huvud, vingar och stjärt.",
    sound: "Hes kraxning: kraa, kraa.",
    clue: "Kråkan har ett mörkt, skrovligt rop som hörs långt.",
    recording: {
      xc: "XC1028646",
      url: "https://xeno-canto.org/1028646/download#t=0,12",
      page: "https://xeno-canto.org/1028646",
      recordist: "Esperanza Poveda",
      license: "CC BY-NC-SA 4.0",
    },
    photo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Hooded_crow_%28Corvus_cornix%29_at_Gulf_of_Trieste.jpg/960px-Hooded_crow_%28Corvus_cornix%29_at_Gulf_of_Trieste.jpg",
      page: "https://commons.wikimedia.org/wiki/File:Hooded_crow_(Corvus_cornix)_at_Gulf_of_Trieste.jpg",
      credit: "Petar Milošević, CC BY-SA 4.0",
    },
    habitat: "Nästan överallt nära människor",
    colors: ["#8b9290", "#171a1f", "#5a6160", "#2e3333"],
    pattern: "hood",
    notes: [260, 230, 250],
    duration: 0.22,
    noise: true,
  },
  {
    id: "gråsparv",
    name: "Gråsparv",
    latin: "Passer domesticus",
    look: "Brungrå, knubbig och social. Hanen har svart haklapp.",
    sound: "Korta pigga tjipp: tjilp, tjilp.",
    clue: "Gråsparven pratar ofta i små grupper nära hus och buskar.",
    recording: {
      xc: "XC773153",
      url: "https://xeno-canto.org/773153/download#t=0,12",
      page: "https://xeno-canto.org/773153",
      recordist: "Gunnar Dolk",
      license: "CC BY-NC-SA 4.0",
    },
    photo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Passer_domesticus_04.jpg/960px-Passer_domesticus_04.jpg",
      page: "https://commons.wikimedia.org/wiki/File:Passer_domesticus_04.jpg",
      credit: "Arnold Paul, CC BY-SA 2.5",
    },
    habitat: "Skolgårdar, caféer och buskage",
    colors: ["#b08a58", "#d8c6a4", "#2d2721", "#8f6d47"],
    pattern: "bib",
    notes: [760, 780, 750, 800, 770],
    duration: 0.08,
  },
  {
    id: "bofink",
    name: "Bofink",
    latin: "Fringilla coelebs",
    look: "Rostrosa bröst, blågrå hjässa och dubbla vita vingband.",
    sound: "Snabb ramsa som slutar med knorr.",
    clue: "Bofinken låter som en liten sångtrappa som rusar nedåt.",
    recording: {
      xc: "XC1028620",
      url: "https://xeno-canto.org/1028620/download#t=0,14",
      page: "https://xeno-canto.org/1028620",
      recordist: "Esperanza Poveda",
      license: "CC BY-NC-SA 4.0",
    },
    photo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Fringilla_coelebs_chaffinch_male_edit2.jpg/960px-Fringilla_coelebs_chaffinch_male_edit2.jpg",
      page: "https://commons.wikimedia.org/wiki/File:Fringilla_coelebs_chaffinch_male_edit2.jpg",
      credit: "MichaelMaggs/Arad, CC BY-SA 2.5",
    },
    habitat: "Skogar, parker och alléer",
    colors: ["#c9775a", "#71859a", "#ffffff", "#3f5f47"],
    pattern: "wingbar",
    notes: [980, 930, 880, 820, 760, 700, 640, 720],
    duration: 0.075,
  },
  {
    id: "rodhake",
    name: "Rödhake",
    latin: "Erithacus rubecula",
    look: "Liten rund fågel med varmt orange ansikte och bröst.",
    sound: "Tunn, porlande sång med små glittriga toner.",
    clue: "Rödhaken låter försiktig men fantasifull, som små droppar.",
    recording: {
      xc: "XC1001018",
      url: "https://xeno-canto.org/1001018/download#t=0,15",
      page: "https://xeno-canto.org/1001018",
      recordist: "Gunnar Dolk",
      license: "CC BY-NC-SA 4.0",
    },
    photo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Rouge_gorge_familier_-_crop_%28WB_correction%29.jpg/960px-Rouge_gorge_familier_-_crop_%28WB_correction%29.jpg",
      page: "https://commons.wikimedia.org/wiki/File:Rouge_gorge_familier_-_crop_(WB_correction).jpg",
      credit: "PierreSelim, CC BY-SA 3.0",
    },
    habitat: "Buskar, trädgårdar och skog",
    colors: ["#c96b38", "#8f8a70", "#e8e1cf", "#5d6b50"],
    pattern: "face",
    notes: [1040, 820, 1120, 760, 980, 690, 860],
    duration: 0.085,
  },
  {
    id: "sadesarla",
    name: "Sädesärla",
    latin: "Motacilla alba",
    look: "Svartvit och smal med lång vippande stjärt.",
    sound: "Ljust kvittrande: tsilitt, tsilitt.",
    clue: "Titta efter stjärten som vippar när fågeln springer på marken.",
    recording: {
      xc: "XC1033538",
      url: "https://xeno-canto.org/1033538/download#t=0,12",
      page: "https://xeno-canto.org/1033538",
      recordist: "Esperanza Poveda",
      license: "CC BY-NC-SA 4.0",
    },
    photo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/White_wagtail_%28Motacilla_alba_alba%29.jpg/960px-White_wagtail_%28Motacilla_alba_alba%29.jpg",
      page: "https://commons.wikimedia.org/wiki/File:White_wagtail_(Motacilla_alba_alba).jpg",
      credit: "Charles J. Sharp, CC BY-SA 4.0",
    },
    habitat: "Skolgårdar, fotbollsplaner och vattenkanter",
    colors: ["#f4f4ee", "#1b2024", "#8d9598", "#ffffff"],
    pattern: "tail",
    notes: [980, 1120, 920, 1080, 960],
    duration: 0.075,
  },
  {
    id: "fiskmas",
    name: "Fiskmås",
    latin: "Larus canus",
    look: "Ljus mås med grå rygg, vita vingar och gulgrön näbb.",
    sound: "Klagande rop som stiger och faller.",
    clue: "Fiskmåsen hörs ofta vid vatten men också över skolans tak.",
    recording: {
      xc: "XC1034913",
      url: "https://xeno-canto.org/1034913/download#t=0,13",
      page: "https://xeno-canto.org/1034913",
      recordist: "Esperanza Poveda",
      license: "CC BY-NC-SA 4.0",
    },
    photo: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Larus_canus_in_S%C3%B6dra_Hammarbyhamnen%2C_Stockholm.jpg/960px-Larus_canus_in_S%C3%B6dra_Hammarbyhamnen%2C_Stockholm.jpg",
      page: "https://commons.wikimedia.org/wiki/File:Larus_canus_in_S%C3%B6dra_Hammarbyhamnen,_Stockholm.jpg",
      credit: "ArildV, CC BY-SA 3.0",
    },
    habitat: "Sjöar, hav, tak och öppna ytor",
    colors: ["#f7f7f0", "#aeb8be", "#d6a53b", "#2d3135"],
    pattern: "gull",
    notes: [520, 620, 720, 650, 560],
    duration: 0.18,
  },
];

const state = {
  order: shuffle(birds.map((bird) => bird.id)),
  round: 0,
  score: 0,
  answered: false,
};

const els = {
  tabs: document.querySelectorAll(".tab"),
  hero: document.querySelector(".hero"),
  quizView: document.querySelector("#quizView"),
  quizProgress: document.querySelector("#quizProgress"),
  atlasView: document.querySelector("#atlasView"),
  trainingView: document.querySelector("#trainingView"),
  birdGrid: document.querySelector("#birdGrid"),
  soundList: document.querySelector("#soundList"),
  trainingTitle: document.querySelector("#trainingTitle"),
  trainingText: document.querySelector("#trainingText"),
  roundLabel: document.querySelector("#roundLabel"),
  scoreLabel: document.querySelector("#scoreLabel"),
  quizBirdArt: document.querySelector("#quizBirdArt"),
  callHint: document.querySelector("#callHint"),
  playQuizSound: document.querySelector("#playQuizSound"),
  answerGrid: document.querySelector("#answerGrid"),
  feedback: document.querySelector("#feedback"),
  restartQuiz: document.querySelector("#restartQuiz"),
  nextQuestion: document.querySelector("#nextQuestion"),
  progressBar: document.querySelector("#progressBar"),
  progressText: document.querySelector("#progressText"),
};

let currentAudio;
let currentAudioTimer;

init();

function init() {
  renderBirdGrid();
  renderSoundList();
  renderQuestion();

  els.tabs.forEach((tab) => tab.addEventListener("click", () => switchView(tab.dataset.view)));
  els.playQuizSound.addEventListener("click", () => playBird(getCurrentBird()));
  els.answerGrid.addEventListener("click", handleAnswer);
  els.nextQuestion.addEventListener("click", nextQuestion);
  els.restartQuiz.addEventListener("click", restartQuiz);
}

function switchView(view) {
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
  const isQuiz = view === "quiz";

  if (!isQuiz) stopBirdSound();

  els.hero.classList.toggle("is-compact", !isQuiz);
  els.quizView.classList.toggle("is-hidden", !isQuiz);
  els.quizProgress.classList.toggle("is-hidden", !isQuiz);
  els.atlasView.classList.toggle("is-hidden", view !== "atlas");
  els.trainingView.classList.toggle("is-hidden", view !== "training");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const bird = getCurrentBird();
  const done = state.round >= state.order.length;

  if (done) {
    renderResult();
    return;
  }

  state.answered = false;
  els.roundLabel.textContent = `Fråga ${state.round + 1} av ${birds.length}`;
  els.scoreLabel.textContent = `${state.score} poäng`;
  els.quizBirdArt.innerHTML = mysterySvg();
  els.callHint.textContent = "Lyssna på fågeln och välj rätt namn.";
  els.feedback.textContent = "";
  els.nextQuestion.disabled = true;
  els.nextQuestion.textContent = state.round === birds.length - 1 ? "Visa resultat" : "Nästa fågel";
  renderAnswers(bird);
  updateProgress();
}

function renderAnswers(correctBird) {
  const alternatives = shuffle([
    correctBird,
    ...shuffle(birds.filter((bird) => bird.id !== correctBird.id)).slice(0, 3),
  ]);

  els.answerGrid.innerHTML = alternatives
    .map((bird) => `<button class="answer-button" type="button" data-id="${bird.id}">${bird.name}</button>`)
    .join("");
}

function handleAnswer(event) {
  const button = event.target.closest(".answer-button");
  if (!button || state.answered) return;

  const bird = getCurrentBird();
  const isCorrect = button.dataset.id === bird.id;
  state.answered = true;
  state.score += isCorrect ? 1 : 0;

  document.querySelectorAll(".answer-button").forEach((answer) => {
    answer.disabled = true;
    if (answer.dataset.id === bird.id) answer.classList.add("is-correct");
  });

  if (!isCorrect) button.classList.add("is-wrong");

  els.scoreLabel.textContent = `${state.score} poäng`;
  els.quizBirdArt.innerHTML = photoMarkup(bird, "quiz-photo");
  els.callHint.textContent = bird.sound;
  els.feedback.textContent = isCorrect
    ? `Rätt! ${bird.name}: ${bird.look}`
    : `Nästan. Det var ${bird.name}. ${bird.clue}`;
  els.nextQuestion.disabled = false;
  playBird(bird);
}

function nextQuestion() {
  stopBirdSound();
  state.round += 1;
  renderQuestion();
}

function restartQuiz() {
  stopBirdSound();
  state.order = shuffle(birds.map((bird) => bird.id));
  state.round = 0;
  state.score = 0;
  renderQuestion();
}

function renderResult() {
  const title = state.score >= 8 ? "Fågeldrake!" : state.score >= 5 ? "Bra spanat!" : "Dags för en runda till.";
  els.roundLabel.textContent = "Resultat";
  els.scoreLabel.textContent = `${state.score} av ${birds.length}`;
  els.quizBirdArt.innerHTML = photoMarkup(birds.find((bird) => bird.id === "talgoxe"), "quiz-photo");
  els.callHint.textContent = title;
  els.answerGrid.innerHTML = "";
  els.feedback.textContent =
    state.score >= 8
      ? "Du kan redan många av skolans viktigaste fåglar. Testa ute på skolgården också."
      : "Lyssna i träningsläget och kör quizet igen. Det går snabbt att bli säkrare.";
  els.nextQuestion.disabled = true;
  updateProgress();
}

function updateProgress() {
  const completed = Math.min(state.round, birds.length);
  els.progressBar.style.width = `${(completed / birds.length) * 100}%`;
  els.progressText.textContent = `${completed}/${birds.length} klara`;
}

function renderBirdGrid() {
  els.birdGrid.innerHTML = birds
    .map(
      (bird) => `
        <article class="bird-card">
          <div class="bird-thumb">${photoMarkup(bird)}</div>
          <div class="bird-name">
            <h3>${bird.name}</h3>
            <span>${bird.latin}</span>
          </div>
          <p>${bird.look}</p>
          <p><strong>Läte:</strong> ${bird.sound}</p>
          <div class="bird-card__actions">
            <span class="tag">${bird.habitat}</span>
            <button class="mini-button" type="button" data-sound="${bird.id}">Lyssna</button>
          </div>
        </article>
      `,
    )
    .join("");

  els.birdGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-sound]");
    if (button) playBird(findBird(button.dataset.sound));
  });
}

function renderSoundList() {
  els.soundList.innerHTML = birds
    .map(
      (bird) => `
        <button class="sound-row" type="button" data-train="${bird.id}">
          <span>
            <strong>${bird.name}</strong>
            ${bird.sound}
          </span>
          <span>Spela</span>
        </button>
      `,
    )
    .join("");

  els.soundList.addEventListener("click", (event) => {
    const row = event.target.closest("[data-train]");
    if (!row) return;
    const bird = findBird(row.dataset.train);
    els.trainingTitle.textContent = bird.name;
    els.trainingText.innerHTML = `${photoMarkup(bird, "training-photo")}${bird.clue} Kännetecken: ${bird.look}`;
    playBird(bird);
  });
}

function getCurrentBird() {
  return findBird(state.order[state.round]);
}

function findBird(id) {
  return birds.find((bird) => bird.id === id);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function playBird(bird) {
  stopBirdSound();

  currentAudio = new Audio(bird.recording.url);
  currentAudio.preload = "auto";
  const clipEnd = Number(bird.recording.url.match(/#t=\d+,(\d+)/)?.[1] || 0);

  currentAudio
    .play()
    .then(() => {
      if (clipEnd) {
        currentAudioTimer = window.setTimeout(() => currentAudio.pause(), clipEnd * 1000);
      }
    })
    .catch(() => {
      els.feedback.textContent = "Ljudet kunde inte spelas just nu. Kontrollera internetanslutningen och försök igen.";
    });
}

function stopBirdSound() {
  window.clearTimeout(currentAudioTimer);
  currentAudioTimer = null;

  if (!currentAudio) return;

  currentAudio.pause();
  currentAudio.removeAttribute("src");
  currentAudio.load();
  currentAudio = null;
}

function photoMarkup(bird, className = "") {
  return `
    <figure class="bird-photo ${className}">
      <img src="${bird.photo.url}" alt="${bird.name}" loading="lazy" />
    </figure>
  `;
}

function mysterySvg() {
  return `
    <svg class="mystery-bird" viewBox="0 0 320 220" role="img" aria-label="Hemlig fågel">
      <path d="M204 116 L286 94 L220 145 Z" fill="#48534b" />
      <ellipse cx="158" cy="124" rx="88" ry="54" fill="#27332c" />
      <ellipse cx="95" cy="95" rx="43" ry="38" fill="#1f2924" />
      <path d="M61 95 L18 78 L58 65 Z" fill="#d99d39" />
      <ellipse cx="174" cy="132" rx="55" ry="34" fill="#111815" opacity="0.65" />
      <circle cx="84" cy="83" r="6" fill="#f7fbf2" />
      <path d="M125 176 C120 196 110 202 98 207" stroke="#6f4c2f" stroke-width="8" stroke-linecap="round" fill="none" />
      <path d="M168 177 C167 198 178 203 191 208" stroke="#6f4c2f" stroke-width="8" stroke-linecap="round" fill="none" />
      <text x="160" y="42" text-anchor="middle" fill="#f7fbf2" font-size="28" font-weight="900">?</text>
    </svg>
  `;
}

function birdSvg(bird) {
  const [body, head, accent, wing] = bird.colors;
  const tail = bird.pattern === "tail" ? "M210 108 L302 78 L222 140 Z" : "M204 116 L272 100 L218 142 Z";
  const beak = bird.pattern === "gull" ? "#d6a53b" : "#d98f32";
  const bellyMark = getPatternMarkup(bird.pattern, accent, head);

  return `
    <svg viewBox="0 0 320 220" role="img" aria-label="${bird.name}">
      <path d="${tail}" fill="${wing}" />
      <ellipse cx="158" cy="124" rx="88" ry="54" fill="${body}" />
      <ellipse cx="95" cy="95" rx="43" ry="38" fill="${head}" />
      <path d="M61 95 L18 78 L58 65 Z" fill="${beak}" />
      <ellipse cx="174" cy="132" rx="55" ry="34" fill="${wing}" opacity="0.9" />
      ${bellyMark}
      <circle cx="84" cy="83" r="6" fill="#101418" />
      <circle cx="86" cy="81" r="2" fill="#ffffff" />
      <path d="M125 176 C120 196 110 202 98 207" stroke="#6f4c2f" stroke-width="8" stroke-linecap="round" fill="none" />
      <path d="M168 177 C167 198 178 203 191 208" stroke="#6f4c2f" stroke-width="8" stroke-linecap="round" fill="none" />
    </svg>
  `;
}

function getPatternMarkup(pattern, accent, head) {
  const patterns = {
    tie: `<path d="M118 82 C126 116 130 142 127 170 L151 170 C146 139 142 113 139 84 Z" fill="${head}" />`,
    cap: `<path d="M57 72 C76 44 112 49 132 75 C107 67 82 66 57 72 Z" fill="${head}" />`,
    plain: `<circle cx="64" cy="99" r="10" fill="${accent}" />`,
    hood: `<path d="M66 62 C105 42 132 62 140 96 C115 84 92 83 62 96 Z" fill="${head}" />`,
    bib: `<path d="M98 108 C112 119 119 134 116 150 C101 142 91 130 86 113 Z" fill="${head}" />`,
    wingbar: `<path d="M139 111 L218 94" stroke="${accent}" stroke-width="12" stroke-linecap="round" /><path d="M148 133 L220 124" stroke="${accent}" stroke-width="10" stroke-linecap="round" />`,
    face: `<ellipse cx="86" cy="100" rx="35" ry="30" fill="${accent}" />`,
    tail: `<path d="M206 111 L292 82" stroke="${accent}" stroke-width="13" stroke-linecap="round" />`,
    gull: `<path d="M188 100 C218 102 238 116 249 137" stroke="${head}" stroke-width="9" stroke-linecap="round" fill="none" />`,
  };

  return patterns[pattern] || "";
}
