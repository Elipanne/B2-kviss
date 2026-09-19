(() => {
  "use strict";

  const config = window.QUIZ_CONFIG;
  const questionBank = window.QUESTION_BANK;
  const app = document.querySelector("#app");

  if (!config || !Array.isArray(questionBank)) {
    app.innerHTML = `
      <section class="card error-card">
        <h1>Noe gikk galt</h1>
        <p>Oppgavebanken kunne ikke lastes inn.</p>
      </section>`;
    return;
  }

  const state = {
    round: [],
    currentIndex: 0,
    answered: false,
    selectedIndex: null,
    results: [],
    sessionKind: "quiz",
    wordFilter: "all",
    wordSearch: ""
  };

  const grammarTypeLabels = {
    v2: "V2",
    det: "det-setninger",
    ikke: "plassering av ikke",
    setningsadverbial: "setningsadverbialer"
  };

  const shuffle = (items) => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const enabledCategories = () =>
    Object.entries(config.categories).filter(([, category]) => category.enabled);

  const roundSize = () =>
    enabledCategories().reduce((sum, [, category]) => sum + category.questionsPerRound, 0);

  function buildRound() {
    const selected = [];

    for (const [categoryId, categoryConfig] of enabledCategories()) {
      if (categoryConfig.subtypeCounts) {
        const configuredTotal = Object.values(categoryConfig.subtypeCounts)
          .reduce((sum, count) => sum + count, 0);

        if (configuredTotal !== categoryConfig.questionsPerRound) {
          throw new Error(
            `Oppsettet for «${categoryConfig.label}» er inkonsistent: ` +
            `${configuredTotal} undertype-spørsmål er satt opp, men questionsPerRound er ${categoryConfig.questionsPerRound}.`
          );
        }

        for (const [subtypeId, count] of Object.entries(categoryConfig.subtypeCounts)) {
          const available = questionBank.filter(
            (question) => question.category === categoryId && question.grammarType === subtypeId
          );

          if (available.length < count) {
            throw new Error(
              `For få oppgaver av typen «${subtypeId}» i ${categoryConfig.label}. ` +
              `Trenger ${count}, men fant ${available.length}.`
            );
          }

          selected.push(...shuffle(available).slice(0, count));
        }
      } else {
        const available = questionBank.filter((question) => question.category === categoryId);

        if (available.length < categoryConfig.questionsPerRound) {
          throw new Error(
            `For få oppgaver i kategorien «${categoryConfig.label}». ` +
            `Trenger ${categoryConfig.questionsPerRound}, men fant ${available.length}.`
          );
        }

        selected.push(...shuffle(available).slice(0, categoryConfig.questionsPerRound));
      }
    }

    return selected;
  }

  function categoryLabel(categoryId) {
    return config.categories[categoryId]?.label || categoryId;
  }

  function questionLabel(question) {
    if (question.category === "grammar" && question.grammarType) {
      return `Grammatikk · ${grammarTypeLabels[question.grammarType] || question.grammarType}`;
    }
    return categoryLabel(question.category);
  }

  function beginSession(round, kind) {
    state.round = round;
    state.currentIndex = 0;
    state.answered = false;
    state.selectedIndex = null;
    state.results = [];
    state.sessionKind = kind;
    renderQuestion();
  }

  function startQuiz() {
    try {
      beginSession(buildRound(), "quiz");
    } catch (error) {
      renderError(error.message);
    }
  }

  function startGrammarPractice() {
    const grammarQuestions = questionBank.filter((question) => question.category === "grammar");
    if (!grammarQuestions.length) {
      renderError("Fant ingen grammatikkoppgaver i oppgavebanken.");
      return;
    }
    beginSession(shuffle(grammarQuestions), "grammar");
  }

  function renderHome() {
    const vocabularyCount = questionBank.filter((question) => question.category === "vocabulary").length;
    const grammarCount = questionBank.filter((question) => question.category === "grammar").length;

    app.innerHTML = `
      <section class="hero card home-hero">
        <p class="eyebrow">Norskkurs B2</p>
        <h1>Repetisjon</h1>
        <p class="lead">Ta en tilfeldig kviss, slå opp ord og uttrykk, eller jobb deg gjennom grammatikkbanken.</p>

        <div class="home-actions">
          <button class="home-action" id="home-quiz" type="button">
            <span class="home-action-kicker">KVISS</span>
            <strong>20 tilfeldige spørsmål</strong>
            <span>10 ord + 10 grammatikk</span>
          </button>

          <button class="home-action" id="home-words" type="button">
            <span class="home-action-kicker">ORD OG UTTRYKK</span>
            <strong>Bla, søk og filtrer</strong>
            <span>${vocabularyCount} oppføringer fra kurset</span>
          </button>

          <button class="home-action" id="home-grammar" type="button">
            <span class="home-action-kicker">GRAMMATIKK</span>
            <strong>Øv på hele banken</strong>
            <span>${grammarCount} grammatikkoppgaver</span>
          </button>
        </div>
      </section>`;

    document.querySelector("#home-quiz").addEventListener("click", renderQuizIntro);
    document.querySelector("#home-words").addEventListener("click", renderWordLibrary);
    document.querySelector("#home-grammar").addEventListener("click", renderGrammarIntro);
  }

  function renderQuizIntro() {
    const categorySummary = enabledCategories()
      .map(([, category]) => `${category.questionsPerRound} ${category.label.toLowerCase()}`)
      .join(" + ");

    app.innerHTML = `
      <section class="hero card">
        <button class="back-button" id="back-home" type="button">← Forsiden</button>
        <p class="eyebrow">Tilfeldig kviss</p>
        <h1>${config.title}</h1>
        <p class="lead">${config.subtitle}</p>
        <div class="round-summary">
          <strong>${roundSize()} spørsmål</strong>
          <span>${categorySummary}</span>
        </div>
        <p class="muted">Du får en ny tilfeldig kombinasjon hver gang.</p>
        <button class="primary-button" id="start-button" type="button">Start kvissen</button>
      </section>`;

    document.querySelector("#back-home").addEventListener("click", renderHome);
    document.querySelector("#start-button").addEventListener("click", startQuiz);
  }

  function renderGrammarIntro() {
    const grammarQuestions = questionBank.filter((question) => question.category === "grammar");
    const counts = grammarQuestions.reduce((acc, question) => {
      const type = question.grammarType || "annet";
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    const breakdown = Object.entries(counts)
      .map(([type, count]) => `<span class="breakdown-chip">${escapeHtml(grammarTypeLabels[type] || type)}: ${count}</span>`)
      .join("");

    app.innerHTML = `
      <section class="hero card">
        <button class="back-button" id="back-home" type="button">← Forsiden</button>
        <p class="eyebrow">Grammatikk</p>
        <h1>Hele grammatikkbanken</h1>
        <p class="lead">Her får du alle grammatikkoppgavene i tilfeldig rekkefølge.</p>
        <div class="grammar-breakdown">${breakdown}</div>
        <p class="muted">Totalt ${grammarQuestions.length} oppgaver.</p>
        <button class="primary-button" id="start-grammar" type="button">Start grammatikkøkta</button>
      </section>`;

    document.querySelector("#back-home").addEventListener("click", renderHome);
    document.querySelector("#start-grammar").addEventListener("click", startGrammarPractice);
  }

  function quotedParts(text) {
    return [...String(text || "").matchAll(/«([^»]+)»/g)].map((match) => match[1]);
  }

  function wordTerm(question) {
    if (question.term) return question.term;
    const parts = quotedParts(question.prompt);
    if (parts.length > 1 && /\seller\s/i.test(question.prompt)) {
      return parts.join(" / ");
    }
    if (parts.length) return parts[parts.length - 1];
    return question.prompt;
  }

  function wordDefinition(question) {
    return question.definition || question.feedback || question.options?.[question.correctIndex] || "";
  }

  function lessonDateFromTag(tag) {
    const months = {
      januar: 1, februar: 2, mars: 3, april: 4, mai: 5, juni: 6,
      juli: 7, august: 8, september: 9, oktober: 10, november: 11, desember: 12
    };
    const match = String(tag).trim().toLowerCase().match(/^(\d{1,2})\.\s*([a-zæøå]+)$/i);
    if (!match || !months[match[2]]) return null;
    return { day: Number(match[1]), month: months[match[2]], label: tag };
  }

  function latestLessonTag() {
    const candidates = questionBank
      .filter((question) => question.category === "vocabulary")
      .flatMap((question) => question.tags || [])
      .map(lessonDateFromTag)
      .filter(Boolean)
      .sort((a, b) => (b.month - a.month) || (b.day - a.day));
    return candidates[0]?.label || null;
  }

  function tagsFor(question) {
    return (question.tags || []).map((tag) => String(tag).toLowerCase());
  }

  function matchesWordTheme(question, filterId, newestTag) {
    if (filterId === "all") return true;

    const tags = tagsFor(question);
    const source = String(question.source || "").toLowerCase();

    if (filterId === "latest") {
      return newestTag ? tags.includes(String(newestTag).toLowerCase()) : false;
    }

    if (filterId === "work") {
      return tags.some((tag) => ["arbeidsliv", "universitet", "utdanning", "møte", "arbeid", "skole", "undervisning"].includes(tag)) ||
        source.includes("kursordforråd");
    }

    if (filterId === "society") {
      return tags.some((tag) => tag.includes("samfunn") || tag.includes("historie") || tag.includes("monarki") || tag.includes("politikk"));
    }

    if (filterId === "literature") {
      return tags.some((tag) => ["litteratur", "sang", "ola tveiten"].includes(tag)) ||
        source.includes("skolegutt") || source.includes("ola tveiten") || source.includes("livet er for kjipt");
    }

    if (filterId === "expressions") {
      return tags.some((tag) => ["uttrykk", "slang", "muntlig språk", "betydning i kontekst"].includes(tag));
    }

    return true;
  }

  function wordMatchesSearch(question, search) {
    if (!search) return true;
    const haystack = [
      wordTerm(question),
      wordDefinition(question),
      question.source || "",
      ...(question.tags || [])
    ].join(" ").toLocaleLowerCase("nb-NO");

    return haystack.includes(search.toLocaleLowerCase("nb-NO"));
  }

  function renderWordLibrary() {
    const newestTag = latestLessonTag();
    const latestLabel = newestTag ? `Siste undervisning (${newestTag})` : "Siste undervisning";

    app.innerHTML = `
      <section class="word-library">
        <div class="library-heading card">
          <button class="back-button" id="back-home" type="button">← Forsiden</button>
          <p class="eyebrow">Oppslagsverk</p>
          <h1>Ord og uttrykk</h1>
          <p class="lead">Søk etter et ord, eller bla alfabetisk gjennom ordforrådet fra kurset.</p>

          <label class="word-search-label" for="word-search">Søk</label>
          <input class="word-search" id="word-search" type="search" placeholder="Søk etter ord, betydning eller tema …" autocomplete="off">

          <div class="word-filters" role="group" aria-label="Filtrer ord etter tema">
            <button class="filter-chip active" data-filter="all" type="button">Alle</button>
            <button class="filter-chip" data-filter="latest" type="button">${escapeHtml(latestLabel)}</button>
            <button class="filter-chip" data-filter="work" type="button">Arbeidsliv & studier</button>
            <button class="filter-chip" data-filter="society" type="button">Samfunn & historie</button>
            <button class="filter-chip" data-filter="literature" type="button">Litteratur & sanger</button>
            <button class="filter-chip" data-filter="expressions" type="button">Uttrykk</button>
          </div>

          <p class="word-count" id="word-count"></p>
        </div>

        <div id="word-list"></div>
      </section>`;

    state.wordFilter = "all";
    state.wordSearch = "";

    document.querySelector("#back-home").addEventListener("click", renderHome);
    document.querySelector("#word-search").addEventListener("input", (event) => {
      state.wordSearch = event.target.value.trim();
      updateWordList();
    });

    document.querySelectorAll(".filter-chip").forEach((button) => {
      button.addEventListener("click", () => {
        state.wordFilter = button.dataset.filter;
        document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.remove("active"));
        button.classList.add("active");
        updateWordList();
      });
    });

    updateWordList();
  }

  function updateWordList() {
    const newestTag = latestLessonTag();
    const words = questionBank
      .filter((question) => question.category === "vocabulary")
      .filter((question) => matchesWordTheme(question, state.wordFilter, newestTag))
      .filter((question) => wordMatchesSearch(question, state.wordSearch))
      .sort((a, b) => wordTerm(a).localeCompare(wordTerm(b), "nb", { sensitivity: "base" }));

    const countNode = document.querySelector("#word-count");
    const listNode = document.querySelector("#word-list");
    if (!countNode || !listNode) return;

    countNode.textContent = `${words.length} ${words.length === 1 ? "oppføring" : "oppføringer"}`;

    if (!words.length) {
      listNode.innerHTML = `
        <div class="card empty-word-state">
          <strong>Ingen treff</strong>
          <p>Prøv et annet søkeord eller velg et annet filter.</p>
        </div>`;
      return;
    }

    const groups = new Map();
    for (const question of words) {
      const term = wordTerm(question);
      const first = term.trim().charAt(0).toLocaleUpperCase("nb-NO") || "#";
      if (!groups.has(first)) groups.set(first, []);
      groups.get(first).push(question);
    }

    listNode.innerHTML = [...groups.entries()].map(([letter, questions]) => `
      <section class="word-letter-section" aria-labelledby="letter-${escapeHtml(letter)}">
        <h2 class="word-letter" id="letter-${escapeHtml(letter)}">${escapeHtml(letter)}</h2>
        <div class="word-grid">
          ${questions.map((question) => {
            const example = question.example
              ? `<p class="word-example"><span>Eksempel:</span> ${escapeHtml(question.example)}</p>`
              : "";
            const source = question.source
              ? `<p class="word-source">Fra: ${escapeHtml(question.source)}</p>`
              : "";
            return `
              <article class="word-card card">
                <h3>${escapeHtml(wordTerm(question))}</h3>
                <p class="word-definition">${escapeHtml(wordDefinition(question))}</p>
                ${example}
                ${source}
              </article>`;
          }).join("")}
        </div>
      </section>`).join("");
  }

  function renderQuestion() {
    const question = state.round[state.currentIndex];
    const total = state.round.length;
    const number = state.currentIndex + 1;
    const progress = ((number - 1) / total) * 100;

    app.innerHTML = `
      <section class="quiz-shell">
        <button class="back-button compact-back" id="session-home" type="button">← Forsiden</button>
        <div class="topline">
          <span class="category-badge">${escapeHtml(questionLabel(question))}</span>
          <span class="counter">${number} / ${total}</span>
        </div>

        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>

        <article class="card question-card">
          <h1 class="question-text">${escapeHtml(question.prompt)}</h1>
          ${question.instruction ? `<p class="instruction">${escapeHtml(question.instruction)}</p>` : ""}

          <div class="options" role="group" aria-label="Svaralternativer">
            ${question.options
              .map(
                (option, index) => `
                  <button class="option-button" type="button" data-index="${index}">
                    <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                    <span>${escapeHtml(option)}</span>
                  </button>`
              )
              .join("")}
          </div>

          <div id="feedback" class="feedback" aria-live="polite"></div>
          <button class="primary-button next-button hidden" id="next-button" type="button">
            ${number === total ? "Se resultatet" : "Neste spørsmål"}
          </button>
        </article>
      </section>`;

    document.querySelector("#session-home").addEventListener("click", renderHome);
    document.querySelectorAll(".option-button").forEach((button) => {
      button.addEventListener("click", () => answerQuestion(Number(button.dataset.index)));
    });
  }

  function answerQuestion(selectedIndex) {
    if (state.answered) return;

    state.answered = true;
    state.selectedIndex = selectedIndex;

    const question = state.round[state.currentIndex];
    const isCorrect = selectedIndex === question.correctIndex;

    state.results.push({
      id: question.id,
      category: question.category,
      grammarType: question.grammarType || null,
      correct: isCorrect
    });

    const buttons = [...document.querySelectorAll(".option-button")];
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === question.correctIndex) button.classList.add("correct");
      if (index === selectedIndex && !isCorrect) button.classList.add("incorrect");
    });

    const feedback = document.querySelector("#feedback");
    feedback.className = `feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"}`;
    feedback.innerHTML = `
      <strong>${isCorrect ? "Riktig!" : "Ikke helt."}</strong>
      <span>${escapeHtml(question.feedback)}</span>`;

    const nextButton = document.querySelector("#next-button");
    nextButton.classList.remove("hidden");
    nextButton.focus();
    nextButton.addEventListener("click", goNext, { once: true });
  }

  function goNext() {
    if (state.currentIndex === state.round.length - 1) {
      renderResults();
      return;
    }

    state.currentIndex += 1;
    state.answered = false;
    state.selectedIndex = null;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resultForCategory(categoryId) {
    const results = state.results.filter((result) => result.category === categoryId);
    return {
      correct: results.filter((result) => result.correct).length,
      total: results.length
    };
  }

  function resultMessage(score, total) {
    const percentage = total ? score / total : 0;
    if (percentage === 1) return "Full pott! Kongeriket blomstrer.";
    if (percentage >= 0.8) return "Veldig bra! En rik fangst og solid buskap.";
    if (percentage >= 0.6) return "Godt jobba – litt repetisjon til, så sitter det.";
    return "Her er det litt å repetere. Ta gjerne en ny runde.";
  }

  const rewards = {
    vocabulary: { icon: "🐟", singular: "fisk", plural: "fisk", title: "Ordforråd" },
    grammar: { icon: "🐑", singular: "sau", plural: "sauer", title: "Grammatikk" }
  };

  function rewardLabel(reward, count) {
    return count === 1 ? reward.singular : reward.plural;
  }

  function rewardIcons(categoryId, count) {
    const reward = rewards[categoryId];
    if (!reward) return "";
    if (count === 0) return `<span class="reward-empty">ingen ennå</span>`;

    return Array.from({ length: count }, (_, index) =>
      `<span class="reward-icon" aria-hidden="true" style="--i:${index}">${reward.icon}</span>`
    ).join("");
  }

  function renderResults() {
    const total = state.results.length;
    const score = state.results.filter((result) => result.correct).length;
    const resultCategories = ["vocabulary", "grammar"]
      .filter((categoryId) => state.results.some((result) => result.category === categoryId));

    const categoryRows = resultCategories
      .map((categoryId) => {
        const result = resultForCategory(categoryId);
        return `
          <div class="result-row">
            <strong>${escapeHtml(categoryLabel(categoryId))}</strong>
            <span>${result.correct} av ${result.total} riktige</span>
          </div>`;
      })
      .join("");

    const rewardCards = resultCategories
      .map((categoryId) => {
        const result = resultForCategory(categoryId);
        const reward = rewards[categoryId];
        if (!reward) return "";

        return `
          <div class="reward-card reward-${categoryId}">
            <div class="reward-heading">
              <span class="reward-big-icon" aria-hidden="true">${reward.icon}</span>
              <div>
                <strong>${reward.title}</strong>
                <span>${result.correct} ${rewardLabel(reward, result.correct)}</span>
              </div>
            </div>
            <div class="reward-pile" aria-label="${result.correct} av ${result.total} riktige i ${reward.title}">
              ${rewardIcons(categoryId, result.correct)}
            </div>
          </div>`;
      })
      .join("");

    const restartLabel = state.sessionKind === "grammar"
      ? "Ta grammatikkbanken på nytt"
      : "Ta en ny kviss";

    app.innerHTML = `
      <section class="card result-card">
        <p class="eyebrow">Ferdig</p>
        <h1>${score} av ${total}</h1>
        <p class="lead">${resultMessage(score, total)}</p>

        <div class="plain-results" aria-label="Resultat per kategori">
          ${categoryRows}
        </div>

        <div class="reward-section">
          <h2>Dagens fangst og buskap</h2>
          <p class="reward-intro">Ett dyr for hvert riktig svar.</p>
          <div class="reward-grid">
            ${rewardCards}
          </div>
        </div>

        <div class="result-actions">
          <button class="primary-button" id="restart-button" type="button">${restartLabel}</button>
          <button class="secondary-button" id="result-home" type="button">Til forsiden</button>
        </div>
      </section>`;

    document.querySelector("#restart-button").addEventListener("click", () => {
      if (state.sessionKind === "grammar") startGrammarPractice();
      else startQuiz();
    });
    document.querySelector("#result-home").addEventListener("click", renderHome);
  }

  function renderError(message) {
    app.innerHTML = `
      <section class="card error-card">
        <h1>Noe gikk galt</h1>
        <p>${escapeHtml(message)}</p>
        <button class="secondary-button" id="error-home" type="button">Til forsiden</button>
      </section>`;
    document.querySelector("#error-home").addEventListener("click", renderHome);
  }

  renderHome();
})();
