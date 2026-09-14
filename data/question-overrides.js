// Små redaksjonelle rettinger i eksisterende oppgaver.
// Denne fila lastes etter questions.js, slik at vi kan justere enkeltoppgaver
// uten å endre selve spillkoden.

(() => {
  if (!Array.isArray(window.QUESTION_BANK)) return;

  const overrides = {
    ORD26: {
      options: [
        "De gjør ofte ting litt vanskelig og kan lett miste, velte eller støte borti noe",
        "De er svært raske",
        "De er alltid stille"
      ],
      feedback: "Klønete betyr at man ofte gjør eller beveger seg på en litt vanskelig måte, for eksempel ved å miste, velte eller støte borti ting."
    },
    V207: {
      prompt: "Vi har ikke diskutert saken på møtet ennå.",
      instruction: "Flytt «på møtet» til først i setningen.",
      options: [
        "På møtet vi har ikke diskutert saken ennå.",
        "På møtet har vi ikke diskutert saken ennå.",
        "På møtet vi ikke har diskutert saken ennå."
      ],
      feedback: "Når «På møtet» flyttes til forfeltet, kommer det finitte verbet «har» på plass 2, så subjektet «vi» og deretter «ikke»."
    }
  };

  window.QUESTION_BANK = window.QUESTION_BANK.map((question) =>
    overrides[question.id] ? { ...question, ...overrides[question.id] } : question
  );
})();
