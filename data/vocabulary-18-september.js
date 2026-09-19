// Ord og uttrykk fra undervisningen 18. september.
// Lastes etter den øvrige oppgavebanken og legger bare til nye ordoppgaver.

(() => {
  if (!Array.isArray(window.QUESTION_BANK)) return;

  const newQuestions = [
    {
      id: "SEP18ORD01", category: "vocabulary", subtype: "meaning",
      prompt: "Hva kan «kjip» bety?",
      options: [
        "Dårlig, ubehagelig eller stusselig",
        "Elegant og høytidelig",
        "Svært dyr og eksklusiv"
      ],
      correctIndex: 0,
      feedback: "«Kjip» kan blant annet bety dårlig, ubehagelig, usympatisk eller stusselig.",
      source: "Livet er for kjipt", tags: ["18. september", "sang", "muntlig språk"]
    },
    {
      id: "SEP18ORD02", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «å rægge» i sangen?",
      options: [
        "Å kjøre rundt i en tøff bil uten noe bestemt mål, omtrent som å råne",
        "Å reparere en bilmotor",
        "Å kjøre svært forsiktig i kø"
      ],
      correctIndex: 0,
      feedback: "I sangen betyr «å rægge» å kjøre rundt i en tøff bil uten noe bestemt mål. Et nært ord er «å råne».",
      source: "Livet er for kjipt", tags: ["18. september", "sang", "slang"]
    },
    {
      id: "SEP18ORD03", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «drita full»?",
      options: [
        "Veldig beruset av alkohol",
        "Veldig mett etter et stort måltid",
        "Veldig trøtt etter en lang dag"
      ],
      correctIndex: 0,
      feedback: "«Drita full» er et muntlig og ganske sterkt uttrykk som betyr svært beruset av alkohol.",
      source: "Livet er for kjipt", tags: ["18. september", "sang", "muntlig språk"]
    },
    {
      id: "SEP18ORD04", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «å rave rundt»?",
      options: [
        "Å gå rundt på en ukontrollert eller ustø måte",
        "Å løpe målrettet fra sted til sted",
        "Å stå helt stille og vente"
      ],
      correctIndex: 0,
      feedback: "Å rave rundt betyr å gå rundt på en ustø eller ukontrollert måte, ofte fordi man er beruset.",
      source: "Livet er for kjipt", tags: ["18. september", "sang", "uttrykk"]
    },
    {
      id: "SEP18ORD05", category: "vocabulary", subtype: "meaning",
      prompt: "Hva mener noen hvis de sier «jeg er et null»?",
      options: [
        "At de føler seg mislykket eller uviktige",
        "At de har glemt et telefonnummer",
        "At de er helt nøytrale i en konflikt"
      ],
      correctIndex: 0,
      feedback: "Å omtale seg selv som «et null» betyr at man føler seg mislykket, lite verdt eller uviktig.",
      source: "Livet er for kjipt", tags: ["18. september", "sang", "uttrykk"]
    },
    {
      id: "SEP18ORD06", category: "vocabulary", subtype: "meaning-in-context",
      prompt: "I sangen står det: «allting er så trøtt». Hva betyr «trøtt» her?",
      options: [
        "Kjedelig og lite spennende",
        "Søvnig og klar for å legge seg",
        "Vanskelig å forstå"
      ],
      correctIndex: 0,
      feedback: "Her brukes «trøtt» billedlig om noe som er kjedelig, slapt eller lite spennende.",
      source: "Livet er for kjipt", tags: ["18. september", "sang", "betydning i kontekst"]
    },
    {
      id: "SEP18ORD07", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «fangenskap»?",
      options: [
        "Det å være fanget og ikke fri",
        "Det å være på reise i lang tid",
        "Det å bo alene"
      ],
      correctIndex: 0,
      feedback: "Fangenskap betyr det å være fanget og ikke kunne bevege seg fritt.",
      source: "Livet er for kjipt", tags: ["18. september", "sang"]
    },
    {
      id: "SEP18ORD08", category: "vocabulary", subtype: "meaning-in-context",
      prompt: "I den historiske teksten blir samene omtalt som «tilbakestående». Hva betyr ordet i denne sammenhengen?",
      options: [
        "Et nedsettende ord om noen som blir sett på som lite utviklet eller mindre intelligent",
        "En person som har kommet for sent til et møte",
        "En person som ønsker å bevare gamle bygninger"
      ],
      correctIndex: 0,
      feedback: "«Tilbakestående» ble brukt nedsettende om mennesker man mente var lite utviklet eller mindre intelligente. I denne sammenhengen beskriver ordet et gammelt, diskriminerende syn.",
      source: "B2 18. september – lytteoppgave", tags: ["18. september", "samisk historie", "nedsettende språk"]
    },
    {
      id: "SEP18ORD09", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «høyst oppegående» om en person?",
      options: [
        "Svært velfungerende, fornuftig eller intelligent",
        "Svært gammel og svak",
        "Veldig sint og vanskelig å snakke med"
      ],
      correctIndex: 0,
      feedback: "«Høyst oppegående» betyr at noen er svært velfungerende, fornuftige eller intelligente.",
      source: "B2 18. september – lytteoppgave", tags: ["18. september", "uttrykk"]
    },
    {
      id: "SEP18ORD10", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr det å bli «helt fra seg»?",
      options: [
        "Å bli svært opprørt, fortvilet eller ute av seg",
        "Å bli helt alene hjemme",
        "Å glemme hvor man kommer fra"
      ],
      correctIndex: 0,
      feedback: "Å bli «helt fra seg» betyr å bli svært opprørt, fortvilet eller ute av seg.",
      source: "B2 18. september – lytteoppgave", tags: ["18. september", "uttrykk"]
    },
    {
      id: "SEP18ORD11", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «i gåseøyne»?",
      options: [
        "I anførselstegn",
        "Med veldig liten skrift",
        "Som et spørsmål"
      ],
      correctIndex: 0,
      feedback: "«I gåseøyne» betyr «i anførselstegn». Uttrykket brukes særlig muntlig.",
      source: "B2 18. september – lytteoppgave", tags: ["18. september", "uttrykk", "skrift"]
    }
  ];

  const existingIds = new Set(window.QUESTION_BANK.map((question) => question.id));
  window.QUESTION_BANK.push(...newQuestions.filter((question) => !existingIds.has(question.id)));
})();
