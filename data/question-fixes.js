// Små presiseringer som må lastes etter question-overrides.js.
(() => {
  if (!Array.isArray(window.QUESTION_BANK)) return;

  const question = window.QUESTION_BANK.find((item) => item.id === "SA03");
  if (!question) return;

  Object.assign(question, {
    prompt: "En kollega er nervøs før et foredrag. Du vil berolige henne: «Det går ___ bra.»",
    instruction: "Velg setningsadverbialet som passer best til en beroligende antakelse.",
    options: ["nok", "visst", "jo"],
    correctIndex: 0,
    feedback: "«Nok» passer godt i en beroligende antakelse: «Det går nok bra» betyr omtrent «jeg tror det kommer til å gå bra»."
  });
})();
