// Ord og uttrykk fra undervisningen 25. september.
// Ingen nye argumentasjons- eller leddsetningsoppgaver: dette stoffet ble ikke gjennomgått ennå.

(() => {
  if (!Array.isArray(window.QUESTION_BANK)) return;

  const newQuestions = [
    {
      id: "SEP25ORD01", category: "vocabulary", subtype: "meaning",
      term: "dyster",
      definition: "mørk, trist eller preget av lite håp",
      prompt: "Hva betyr «dyster»?",
      options: [
        "Mørk, trist eller preget av lite håp",
        "Svært morsom og livlig",
        "Travel og effektiv"
      ],
      correctIndex: 0,
      feedback: "«Dyster» betyr mørk, trist eller lite håpefull, for eksempel «en dyster framtidsutsikt» eller «en dyster sang».",
      source: "B2 25. september – Levva livet", tags: ["25. september", "sang", "adjektiv"]
    },
    {
      id: "SEP25ORD02", category: "vocabulary", subtype: "meaning",
      term: "galskap",
      definition: "noe svært ufornuftig, absurd eller vanvittig",
      prompt: "Hva betyr «galskap» i uttrykket «når galskapen får rå»?",
      options: [
        "Noe svært ufornuftig, absurd eller vanvittig",
        "En rolig og gjennomtenkt plan",
        "Et vanskelig fag på universitetet"
      ],
      correctIndex: 0,
      feedback: "Her betyr «galskap» noe svært ufornuftig eller vanvittig.",
      source: "B2 25. september – Levva livet", tags: ["25. september", "sang", "uttrykk"]
    },
    {
      id: "SEP25ORD03", category: "vocabulary", subtype: "meaning-in-context",
      term: "å rå",
      definition: "å ha makt eller dominere",
      prompt: "I «når galskapen får rå» betyr «å rå» omtrent …",
      options: [
        "å få dominere eller bestemme",
        "å spørre noen om råd",
        "å rope svært høyt"
      ],
      correctIndex: 0,
      feedback: "«Å rå» kan bety å ha makt eller få dominere: «galskapen får rå» betyr at galskapen får overtaket.",
      source: "B2 25. september – Levva livet", tags: ["25. september", "sang", "uttrykk"]
    },
    {
      id: "SEP25ORD04", category: "vocabulary", subtype: "meaning",
      term: "å råde over",
      definition: "å ha kontroll, myndighet eller råderett over noe",
      prompt: "Hva betyr «å råde over noe»?",
      options: [
        "Å ha kontroll eller myndighet over det",
        "Å være redd for det",
        "Å låne det for en kort periode"
      ],
      correctIndex: 0,
      feedback: "Å råde over noe betyr å ha kontroll, myndighet eller råderett over det.",
      source: "B2 25. september – ord og uttrykk", tags: ["25. september", "uttrykk"]
    },
    {
      id: "SEP25ORD05", category: "vocabulary", subtype: "meaning",
      term: "tosk",
      definition: "en person man synes oppfører seg dumt eller tåpelig",
      prompt: "Hva er en «tosk»?",
      options: [
        "En person man synes oppfører seg dumt eller tåpelig",
        "En svært kunnskapsrik person",
        "En person som alltid snakker formelt"
      ],
      correctIndex: 0,
      feedback: "«Tosk» er et skjellsord for en person man synes er dum eller tåpelig. Det kan virke litt gammeldags og ofte mildere enn enkelte andre skjellsord.",
      source: "B2 25. september – ord og uttrykk", tags: ["25. september", "skjellsord", "muntlig språk"]
    },
    {
      id: "SEP25ORD06", category: "vocabulary", subtype: "meaning",
      term: "tufs",
      definition: "en person som virker litt hjelpeløs, svak eller stakkarslig",
      prompt: "Hvis du kaller noen en «tufs», mener du ofte at personen …",
      options: [
        "virker litt hjelpeløs, svak eller stakkarslig",
        "er farlig og aggressiv",
        "er svært berømt"
      ],
      correctIndex: 0,
      feedback: "En «tufs» er ofte en person som virker litt hjelpeløs eller stakkarslig. Ordet kan brukes ganske mildt eller ertende.",
      source: "B2 25. september – ord og uttrykk", tags: ["25. september", "skjellsord", "muntlig språk"]
    },
    {
      id: "SEP25ORD07", category: "vocabulary", subtype: "meaning",
      term: "tøysekopp",
      definition: "en person som tøyser og gjør dumme eller morsomme ting",
      prompt: "Hva er en «tøysekopp»?",
      options: [
        "En person som tøyser og gjør dumme eller morsomme ting",
        "En person som alltid jukser",
        "En kopp som brukes til leker"
      ],
      correctIndex: 0,
      feedback: "«Tøysekopp» er vanligvis et mildt og lekent ord om en person som tøyser mye.",
      source: "B2 25. september – ord og uttrykk", tags: ["25. september", "skjellsord", "muntlig språk", "uttrykk"]
    },
    {
      id: "SEP25ORD08", category: "vocabulary", subtype: "meaning",
      term: "tulling",
      definition: "en person man synes oppfører seg dumt, tåpelig eller irriterende",
      prompt: "Hva betyr «tulling» om en person?",
      options: [
        "En person som oppfører seg dumt, tåpelig eller irriterende",
        "En person som snakker svært lavt",
        "En person som arbeider for mye"
      ],
      correctIndex: 0,
      feedback: "«Tulling» er et vanlig muntlig ord om en person man synes oppfører seg dumt eller tåpelig.",
      source: "B2 25. september – ord og uttrykk", tags: ["25. september", "skjellsord", "muntlig språk"]
    },
    {
      id: "SEP25ORD09", category: "vocabulary", subtype: "meaning",
      term: "dust",
      definition: "en person man synes er dum eller irriterende",
      prompt: "Hva betyr «dust» når det brukes om en person?",
      options: [
        "En person man synes er dum eller irriterende",
        "En nær venn man stoler på",
        "En svært sjenert person"
      ],
      correctIndex: 0,
      feedback: "«Dust» er et direkte, muntlig skjellsord for en person man synes er dum eller irriterende.",
      source: "B2 25. september – ord og uttrykk", tags: ["25. september", "skjellsord", "muntlig språk"]
    },
    {
      id: "SEP25ORD10", category: "vocabulary", subtype: "meaning",
      term: "fjols",
      definition: "en dum eller tåpelig person",
      prompt: "Hva er et «fjols»?",
      options: [
        "En dum eller tåpelig person",
        "En ekspert på et bestemt fag",
        "En person som bor i nærheten"
      ],
      correctIndex: 0,
      feedback: "«Fjols» er et skjellsord for en person man synes er dum eller tåpelig.",
      source: "B2 25. september – ord og uttrykk", tags: ["25. september", "skjellsord", "muntlig språk"]
    },
    {
      id: "SEP25ORD11", category: "vocabulary", subtype: "meaning",
      term: "fjompenisse",
      definition: "et humoristisk ord for en litt dum eller fjollete person",
      prompt: "Hva er en «fjompenisse»?",
      options: [
        "Et humoristisk ord for en litt dum eller fjollete person",
        "En person som jobber på en fjellhytte",
        "En spesiell type julenisse"
      ],
      correctIndex: 0,
      feedback: "«Fjompenisse» er et komisk og lite høytidelig ord for en person som virker dum eller fjollete.",
      source: "B2 25. september – ord og uttrykk", tags: ["25. september", "skjellsord", "muntlig språk", "uttrykk"]
    },
    {
      id: "SEP25ORD12", category: "vocabulary", subtype: "meaning",
      term: "juksepave",
      definition: "et humoristisk eller barnslig ord for en som jukser",
      prompt: "Hvem kan du kalle en «juksepave»?",
      options: [
        "En som jukser",
        "En som alltid kommer for sent",
        "En som klager mye"
      ],
      correctIndex: 0,
      feedback: "«Juksepave» er et humoristisk eller barnslig ord for en person som jukser.",
      source: "B2 25. september – ord og uttrykk", tags: ["25. september", "skjellsord", "muntlig språk", "uttrykk"]
    },
    {
      id: "SEP25ORD13", category: "vocabulary", subtype: "meaning",
      term: "tullekopp",
      definition: "en person som tuller mye; omtrent det samme som tøysekopp",
      prompt: "Hva betyr «tullekopp»?",
      options: [
        "En person som tuller mye",
        "En person som lager kaffe",
        "En person som aldri sier noe"
      ],
      correctIndex: 0,
      feedback: "«Tullekopp» betyr omtrent det samme som «tøysekopp»: en person som tuller mye. Det er vanligvis et mildt og lekent ord.",
      source: "B2 25. september – ord og uttrykk", tags: ["25. september", "skjellsord", "muntlig språk", "uttrykk"]
    },
    {
      id: "SEP25ORD14", category: "vocabulary", subtype: "meaning",
      term: "gærning",
      definition: "muntlig ord om en person man oppfatter som gal eller svært ufornuftig",
      prompt: "Hva betyr «gærning»?",
      options: [
        "En person man oppfatter som gal eller svært ufornuftig",
        "En person som alltid er forsiktig",
        "En person som jobber i en butikk"
      ],
      correctIndex: 0,
      feedback: "«Gærning» er et muntlig og ganske sterkt ord om en person man oppfatter som gal eller svært ufornuftig.",
      source: "B2 25. september – Levva livet", tags: ["25. september", "sang", "skjellsord", "muntlig språk"]
    },
    {
      id: "SEP25ORD15", category: "vocabulary", subtype: "meaning",
      term: "å vokse fram",
      definition: "å bli utviklet eller oppstå gradvis",
      prompt: "«Trønderrocken vokste fram på 1970-tallet.» Hva betyr «vokste fram»?",
      options: [
        "Ble gradvis utviklet eller oppsto",
        "Ble plutselig forbudt",
        "Ble mindre populær"
      ],
      correctIndex: 0,
      feedback: "Å «vokse fram» betyr å bli utviklet eller oppstå gradvis.",
      source: "B2 25. september – trønderrock", tags: ["25. september", "trønderrock", "uttrykk"]
    },
    {
      id: "SEP25ORD16", category: "vocabulary", subtype: "meaning",
      term: "å føre en tradisjon videre",
      definition: "å fortsette og bevare eller utvikle en tradisjon",
      prompt: "Hva betyr «å føre en tradisjon videre»?",
      options: [
        "Å fortsette, bevare eller utvikle tradisjonen",
        "Å avslutte tradisjonen",
        "Å oversette tradisjonen til et annet språk"
      ],
      correctIndex: 0,
      feedback: "Å føre en tradisjon videre betyr å fortsette den og bidra til at den lever videre.",
      source: "B2 25. september – trønderrock", tags: ["25. september", "trønderrock", "uttrykk"]
    },
    {
      id: "SEP25ORD17", category: "vocabulary", subtype: "meaning",
      term: "å nå ut til",
      definition: "å få kontakt med, bli kjent for eller bli hørt av mange",
      prompt: "Hva betyr «å nå ut til et stort publikum»?",
      options: [
        "Å bli hørt, sett eller kjent av mange mennesker",
        "Å reise langt for å møte publikum",
        "Å snakke så høyt at alle hører"
      ],
      correctIndex: 0,
      feedback: "Å nå ut til et publikum betyr å få kontakt med eller bli hørt, sett eller kjent av dem.",
      source: "B2 25. september – trønderrock", tags: ["25. september", "trønderrock", "uttrykk"]
    },
    {
      id: "SEP25ORD18", category: "vocabulary", subtype: "meaning",
      term: "trønderrock",
      definition: "rockemusikk fra Trøndelag, ofte med tekster på trøndersk dialekt",
      prompt: "Hva er «trønderrock»?",
      options: [
        "Rockemusikk fra Trøndelag, ofte med tekster på trøndersk dialekt",
        "Tradisjonell samisk musikk",
        "Klassisk musikk skrevet i Trondheim"
      ],
      correctIndex: 0,
      feedback: "Trønderrock er rockemusikk fra Trøndelag, ofte med tekster på trøndersk dialekt.",
      source: "B2 25. september – trønderrock", tags: ["25. september", "trønderrock", "dialekt", "musikk"]
    },
    {
      id: "SEP25ORD19", category: "vocabulary", subtype: "meaning",
      term: "dialektbølgen",
      definition: "en periode fra 1970-tallet da mange norske artister begynte å synge på dialekt",
      prompt: "Hva var «dialektbølgen» i norsk musikk?",
      options: [
        "En periode da mange artister begynte å synge på dialekt",
        "En språkreform som forbød dialekter",
        "En metode for å lære nynorsk"
      ],
      correctIndex: 0,
      feedback: "Dialektbølgen viser til en større utvikling på 1970-tallet der mange norske artister sang på sine egne dialekter.",
      source: "B2 25. september – trønderrock", tags: ["25. september", "trønderrock", "dialekt", "musikk"]
    },
    {
      id: "SEP25ORD20", category: "vocabulary", subtype: "meaning",
      term: "apokope",
      definition: "at en trykklett stavelse eller ending faller bort i uttalen",
      prompt: "Hva betyr «apokope»?",
      options: [
        "At en trykklett stavelse eller ending faller bort",
        "At alle vokaler blir lange",
        "At man bytter om rekkefølgen på to ord"
      ],
      correctIndex: 0,
      feedback: "Apokope betyr at en trykklett stavelse eller ending faller bort, for eksempel trøndersk «hold» for «holde».",
      source: "B2 25. september – trønderske dialekter", tags: ["25. september", "dialekt", "trøndersk", "uttale"]
    },
    {
      id: "SEP25ORD21", category: "vocabulary", subtype: "meaning-in-context",
      term: "apokope",
      definition: "at en trykklett stavelse eller ending faller bort i uttalen",
      prompt: "I trøndersk kan «holde» bli «hold». Hva er dette et eksempel på?",
      options: [
        "Apokope",
        "Palatalisering",
        "V2-regelen"
      ],
      correctIndex: 0,
      feedback: "Dette er apokope: den trykklette slutten av ordet faller bort.",
      source: "B2 25. september – trønderske dialekter", tags: ["25. september", "dialekt", "trøndersk", "uttale"]
    },
    {
      id: "SEP25ORD22", category: "vocabulary", subtype: "meaning",
      term: "palatalisering",
      definition: "en uttale der en konsonant får en j-aktig kvalitet",
      prompt: "Hva er «palatalisering»?",
      options: [
        "En uttale der en konsonant får en j-aktig kvalitet",
        "At den siste stavelsen i et ord forsvinner",
        "At man alltid legger trykk på første stavelse"
      ],
      correctIndex: 0,
      feedback: "Ved palatalisering får en konsonant en j-aktig kvalitet. I trøndersk kan dette blant annet høres i n-lyder, som i «mainn».",
      source: "B2 25. september – trønderske dialekter", tags: ["25. september", "dialekt", "trøndersk", "uttale"]
    },
    {
      id: "SEP25ORD23", category: "vocabulary", subtype: "meaning",
      term: "tjukk l",
      definition: "en l-lignende lyd som finnes i flere norske dialekter",
      prompt: "Hva er «tjukk l»?",
      options: [
        "En bestemt l-lignende lyd som finnes i flere norske dialekter",
        "En ekstra lang vokal",
        "Et ord som skrives med to l-er"
      ],
      correctIndex: 0,
      feedback: "Tjukk l er en egen l-lignende lyd som finnes i flere norske dialekter, blant annet i trøndersk.",
      source: "B2 25. september – trønderske dialekter", tags: ["25. september", "dialekt", "trøndersk", "uttale"]
    },
    {
      id: "SEP25ORD24", category: "vocabulary", subtype: "dialect",
      term: "itj",
      definition: "trøndersk form av «ikke»",
      prompt: "Hva betyr det trønderske ordet «itj»?",
      options: [
        "ikke",
        "hva",
        "dere"
      ],
      correctIndex: 0,
      feedback: "«Itj» er en vanlig trøndersk form av «ikke».",
      source: "B2 25. september – trønderske dialekter", tags: ["25. september", "dialekt", "trøndersk", "muntlig språk"]
    },
    {
      id: "SEP25ORD25", category: "vocabulary", subtype: "dialect",
      term: "æ / ka / dokker",
      definition: "trønderske former som tilsvarer «jeg / hva / dere»",
      prompt: "Hvilken kombinasjon viser vanlige trønderske former?",
      options: [
        "æ = jeg, ka = hva, dokker = dere",
        "æ = dere, ka = ikke, dokker = hva",
        "æ = hva, ka = jeg, dokker = ikke"
      ],
      correctIndex: 0,
      feedback: "I mange trønderske dialekter brukes blant annet «æ» for «jeg», «ka» for «hva» og «dokker/dokk» for «dere».",
      source: "B2 25. september – trønderske dialekter", tags: ["25. september", "dialekt", "trøndersk", "muntlig språk"]
    }
  ];

  const existingIds = new Set(window.QUESTION_BANK.map((question) => question.id));
  window.QUESTION_BANK.push(...newQuestions.filter((question) => !existingIds.has(question.id)));
})();
