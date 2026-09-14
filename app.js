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
    results: []
  };

  const shuffle = (items) => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const enabledCategories = () =>
    Object.entries(config.categories).filter(([, category]) => category.enabled);

  const roundSize = () =>
    enabledCategories().reduce((sum, [, category]) => sum + category.questionsPerRound, 0);

  function buildRound() {
    const selected = [];

    for (const [categoryId, categoryConfig] of enabledCategories()) {
      const available = questionBank.filter((question) => question.category === categoryId);

      if (available.length < categoryConfig.questionsPerRound) {
        throw new Error(
          `For få oppgaver i kategorien «${categoryConfig.label}». ` +
          `Trenger ${categoryConfig.questionsPerRound}, men fant ${available.length}.`
        );
      }

      selected.push(...shuffle(available).slice(0, categoryConfig.questionsPerRound));
    }

    return selected;
  }

  function categoryLabel(categoryId) {
    return config.categories[categoryId]?.label || categoryId;
  }

  function startRound() {
    try {
      state.round = buildRound();
      state.currentIndex = 0;
      state.answered = false;
      state.selectedIndex = null;
      state.results = [];
      renderQuestion();
    } catch (error) {
      renderError(error.message);
    }
  }

  function renderStart() {
    const categorySummary = enabledCategories()
      .map(([, category]) => `${category.questionsPerRound} ${category.label.toLowerCase()}`)
      .join(" + ");

    app.innerHTML = `
      <section class="hero card">
        <p class="eyebrow">Norskkurs B2</p>
        <h1>${config.title}</h1>
        <p class="lead">${config.subtitle}</p>
        <div class="round-summary">
          <strong>${roundSize()} spørsmål</strong>
          <span>${categorySummary}</span>
        </div>
        <p class="muted">Du får en ny tilfeldig kombinasjon hver gang.</p>
        <button class="primary-button" id="start-button" type="button">Start kvissen</button>
      </section>`;

    document.querySelector("#start-button").addEventListener("click", startRound);
  }

  function renderQuestion() {
    const question = state.round[state.currentIndex];
    const total = state.round.length;
    const number = state.currentIndex + 1;
    const progress = ((number - 1) / total) * 100;

    app.innerHTML = `
      <section class="quiz-shell">
        <div class="topline">
          <span class="category-badge">${categoryLabel(question.category)}</span>
          <span class="counter">${number} / ${total}</span>
        </div>

        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>

        <article class="card question-card">
          <h1 class="question-text">${question.prompt}</h1>
          ${question.instruction ? `<p class="instruction">${question.instruction}</p>` : ""}

          <div class="options" role="group" aria-label="Svaralternativer">
            ${question.options
              .map(
                (option, index) => `
                  <button class="option-button" type="button" data-index="${index}">
                    <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                    <span>${option}</span>
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
      <span>${question.feedback}</span>`;

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
    if (percentage === 1) return "Full pott!";
    if (percentage >= 0.8) return "Veldig bra!";
    if (percentage >= 0.6) return "Godt jobba – litt repetisjon til, så sitter det.";
    return "Her er det litt å repetere. Ta gjerne en ny runde.";
  }

  function renderResults() {
    const total = state.results.length;
    const score = state.results.filter((result) => result.correct).length;

    const categoryRows = enabledCategories()
      .map(([categoryId, categoryConfig]) => {
        const result = resultForCategory(categoryId);
        const percent = result.total ? Math.round((result.correct / result.total) * 100) : 0;
        return `
          <div class="result-row">
            <div>
              <strong>${categoryConfig.label}</strong>
              <span>${result.correct} av ${result.total}</span>
            </div>
            <div class="mini-track" aria-hidden="true">
              <div class="mini-fill" style="width: ${percent}%"></div>
            </div>
          </div>`;
      })
      .join("");

    app.innerHTML = `
      <section class="card result-card">
        <p class="eyebrow">Ferdig</p>
        <h1>${score} av ${total}</h1>
        <p class="lead">${resultMessage(score, total)}</p>

        <div class="result-list">
          ${categoryRows}
        </div>

        <button class="primary-button" id="restart-button" type="button">Ta en ny runde</button>
      </section>`;

    document.querySelector("#restart-button").addEventListener("click", startRound);
  }

  function renderError(message) {
    app.innerHTML = `
      <section class="card error-card">
        <h1>Noe gikk galt</h1>
        <p>${message}</p>
      </section>`;
  }

  renderStart();
})();
