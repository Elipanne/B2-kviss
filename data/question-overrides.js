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
    V201: {
      prompt: "Jeg skrev sammendraget i går kveld.",
      instruction: "Begynn setningen med «I går kveld».",
      options: [
        "I går kveld jeg skrev sammendraget.",
        "I går kveld skrev jeg sammendraget.",
        "I går kveld sammendraget skrev jeg."
      ],
      correctIndex: 1,
      feedback: "Når «I går kveld» står først, må det finitte verbet fortsatt stå på plass 2: I går kveld skrev jeg sammendraget."
    },
    V207: {
      prompt: "Vi har ikke diskutert saken på møtet ennå.",
      instruction: "Begynn setningen med «På møtet».",
      options: [
        "På møtet vi har ikke diskutert saken ennå.",
        "På møtet har vi ikke diskutert saken ennå.",
        "På møtet vi ikke har diskutert saken ennå."
      ],
      correctIndex: 1,
      feedback: "Når «På møtet» står først, kommer det finitte verbet «har» på plass 2, så subjektet «vi» og deretter «ikke»."
    }
  };

  const v2Starts = {
    V201: "I går kveld",
    V202: "I kantina",
    V203: "På mandag",
    V204: "Snart",
    V205: "På grunn av fornorskingspolitikken",
    V206: "På mange skoler",
    V207: "På møtet",
    V208: "På fredager",
    V209: "Tidligere",
    V210: "Neste uke",
    V211: "Dessverre"
  };

  window.QUESTION_BANK = window.QUESTION_BANK.map((question) => {
    const updated = overrides[question.id]
      ? { ...question, ...overrides[question.id] }
      : { ...question };

    if (updated.category === "v2" && updated.subtype === "fronting" && v2Starts[updated.id]) {
      updated.instruction = `Begynn setningen med «${v2Starts[updated.id]}».`;
    }

    return updated;
  });
})();
