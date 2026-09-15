// Små redaksjonelle rettinger og tillegg i eksisterende oppgaver.
// Denne fila lastes etter questions.js, slik at vi kan justere og utvide
// oppgavebanken uten å endre selve spillkoden.

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
    },
    V212: {
      subtype: "fronting",
      prompt: "Jeg svarer vanligvis på e-post om morgenen.",
      instruction: "Begynn setningen med «Om morgenen».",
      options: [
        "Om morgenen jeg svarer vanligvis på e-post.",
        "Om morgenen svarer jeg vanligvis på e-post.",
        "Om morgenen vanligvis svarer jeg på e-post."
      ],
      correctIndex: 1,
      feedback: "Når «Om morgenen» står først, kommer det finitte verbet «svarer» på plass 2: Om morgenen svarer jeg vanligvis på e-post."
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
    V211: "Dessverre",
    V212: "Om morgenen"
  };

  window.QUESTION_BANK = window.QUESTION_BANK.map((question) => {
    const updated = overrides[question.id]
      ? { ...question, ...overrides[question.id] }
      : { ...question };

    if (updated.category === "v2" && v2Starts[updated.id]) {
      updated.instruction = `Begynn setningen med «${v2Starts[updated.id]}».`;
    }

    return updated;
  });

  const additionalQuestions = [
    {
      id: "ORD29", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er en «forelesning»?",
      options: [
        "Undervisning der en lærer eller fagperson presenterer et tema for en gruppe",
        "En individuell eksamen med sensor",
        "En skriftlig søknad om studieplass"
      ],
      correctIndex: 0,
      feedback: "En forelesning er undervisning der en lærer eller fagperson presenterer et faglig tema for en gruppe studenter.",
      source: "Kursordforråd", tags: ["universitet", "undervisning"]
    },
    {
      id: "ORD30", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er et «universitet»?",
      options: [
        "En institusjon for høyere utdanning og forskning",
        "Et offentlig kontor som behandler søknader",
        "En skole bare for barn og ungdom"
      ],
      correctIndex: 0,
      feedback: "Et universitet er en institusjon for høyere utdanning og forskning.",
      source: "Kursordforråd", tags: ["universitet", "utdanning"]
    },
    {
      id: "ORD31", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «hjemmekontor»?",
      options: [
        "At man arbeider hjemme i stedet for på den vanlige arbeidsplassen",
        "Et kontor der bare ledelsen kan arbeide",
        "Et rom på arbeidsplassen der ansatte kan hvile"
      ],
      correctIndex: 0,
      feedback: "Hjemmekontor betyr at man arbeider hjemmefra i stedet for å være på den vanlige arbeidsplassen.",
      source: "Kursordforråd", tags: ["arbeidsliv"]
    },
    {
      id: "ORD32", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er en «søknad»?",
      options: [
        "En formell henvendelse der man ber om noe, for eksempel en jobb eller studieplass",
        "En liste over alle ansatte på en arbeidsplass",
        "Et referat fra et møte"
      ],
      correctIndex: 0,
      feedback: "En søknad er en formell henvendelse der man ber om noe, for eksempel en jobb, studieplass eller tillatelse.",
      source: "Kursordforråd", tags: ["arbeidsliv", "utdanning"]
    },
    {
      id: "ORD33", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er «veiledning»?",
      options: [
        "Hjelp og råd fra noen som støtter deg i et arbeid eller en læringsprosess",
        "En offentlig kunngjøring om nye regler",
        "En prøve man må ta før man begynner å studere"
      ],
      correctIndex: 0,
      feedback: "Veiledning er hjelp og faglige råd, for eksempel fra en lærer, kollega eller veileder mens man arbeider med en oppgave.",
      source: "Kursordforråd", tags: ["universitet", "arbeidsliv"]
    },
    {
      id: "ORD34", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er en «kantine»?",
      options: [
        "Et sted på en arbeidsplass eller skole der man kan kjøpe eller spise mat",
        "Et rom der man oppbevarer bøker",
        "Et kontor der man får teknisk hjelp"
      ],
      correctIndex: 0,
      feedback: "En kantine er et sted på en skole eller arbeidsplass der man kan spise og ofte kjøpe mat og drikke.",
      source: "Kursordforråd", tags: ["universitet", "arbeidsliv"]
    },
    {
      id: "ORD35", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er et «ansattkort» eller «adgangskort»?",
      options: [
        "Et kort som viser hvem du er og ofte gir adgang til bygninger eller rom",
        "Et kort som viser hvilke fag du underviser i",
        "Et betalingskort som bare kan brukes i kantina"
      ],
      correctIndex: 0,
      feedback: "Et ansattkort eller adgangskort brukes til identifikasjon og kan gi tilgang til bygninger, dører eller rom på arbeidsplassen.",
      source: "Kursordforråd", tags: ["arbeidsliv", "universitet"]
    },
    {
      id: "ORD36", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er et «møtereferat»?",
      options: [
        "En skriftlig oppsummering av det som ble diskutert eller bestemt på et møte",
        "En invitasjon som sendes før et møte",
        "En liste over alle møter man har hatt i løpet av året"
      ],
      correctIndex: 0,
      feedback: "Et møtereferat er en skriftlig oppsummering av det som ble diskutert, avtalt eller bestemt på et møte.",
      source: "Kursordforråd", tags: ["arbeidsliv", "møte"]
    },
    {
      id: "ORD37", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er «pensum»?",
      options: [
        "Tekster og annet fagstoff man skal lese eller kunne i et emne eller kurs",
        "En plan over når lærerne har ferie",
        "Alle oppgaver en student har levert"
      ],
      correctIndex: 0,
      feedback: "Pensum er tekster og annet fagstoff som er fastsatt for et emne, kurs eller en eksamen.",
      source: "Kursordforråd", tags: ["universitet", "utdanning"]
    }
  ];

  const existingIds = new Set(window.QUESTION_BANK.map((question) => question.id));
  window.QUESTION_BANK.push(...additionalQuestions.filter((question) => !existingIds.has(question.id)));
})();
