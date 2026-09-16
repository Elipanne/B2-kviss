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

    if (updated.category === "v2") {
      updated.category = "grammar";
      updated.grammarType = "v2";
      if (v2Starts[updated.id]) {
        updated.instruction = `Begynn setningen med «${v2Starts[updated.id]}».`;
      }
    }

    if (updated.category === "det") {
      updated.category = "grammar";
      updated.grammarType = "det";
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
    },

    {
      id: "ORD38", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er en «arbeidsmann»?",
      options: [
        "En person som har fysisk arbeid, særlig innen bygg, anlegg eller industri",
        "En person som bare arbeider med administrasjon",
        "En person som eier en bedrift"
      ],
      correctIndex: 0,
      feedback: "En arbeidsmann er en person som har fysisk arbeid, særlig innen bygg, anlegg eller industri.",
      source: "Ola Tveiten", tags: ["arbeid", "Ola Tveiten"]
    },
    {
      id: "ORD39", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er et «vinterhi»?",
      options: [
        "Et sted der enkelte dyr oppholder seg gjennom vinteren",
        "En hytte som bare brukes om sommeren",
        "Et lager for vinterklær"
      ],
      correctIndex: 0,
      feedback: "Et vinterhi er et sted der enkelte dyr oppholder seg gjennom vinteren, ofte mens de sover eller er lite aktive.",
      source: "Ola Tveiten", tags: ["natur", "Ola Tveiten"]
    },
    {
      id: "ORD40", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «å rydde vei»?",
      options: [
        "Å gjøre terrenget klart slik at man kan bygge eller åpne en vei",
        "Å vaske biler langs en vei",
        "Å stenge en vei for trafikk"
      ],
      correctIndex: 0,
      feedback: "Å rydde vei betyr å gjøre et område eller terreng klart slik at man kan bygge eller åpne en vei.",
      source: "Ola Tveiten", tags: ["arbeid", "vei", "Ola Tveiten"]
    },
    {
      id: "ORD41", category: "vocabulary", subtype: "meaning",
      prompt: "Hva kan «slett» bety?",
      options: [
        "Jevn og flat; ordet kan også bety dårlig eller av dårlig kvalitet",
        "Veldig bratt; ordet kan også bety dyr",
        "Midlertidig; ordet kan også bety ny"
      ],
      correctIndex: 0,
      feedback: "Slett kan bety jevn og flat, som i «en slett vei». Det kan også bety dårlig eller av dårlig kvalitet, som i «en slett prestasjon».",
      source: "Ola Tveiten", tags: ["adjektiv", "Ola Tveiten"]
    },
    {
      id: "ORD42", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er en «krøttesti»?",
      options: [
        "En smal sti som husdyr går på",
        "En bred vei for lastebiler",
        "En sti som bare finnes i byen"
      ],
      correctIndex: 0,
      feedback: "En krøttesti er en smal sti som husdyr går på. «Krøtter» betyr husdyr, særlig storfe.",
      source: "Ola Tveiten", tags: ["natur", "Ola Tveiten"]
    },
    {
      id: "ORD43", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «i evig tid»?",
      options: [
        "For alltid eller svært lenge",
        "I noen få minutter",
        "Bare om vinteren"
      ],
      correctIndex: 0,
      feedback: "I evig tid betyr for alltid eller svært lenge.",
      source: "Ola Tveiten", tags: ["uttrykk", "Ola Tveiten"]
    },
    {
      id: "ORD44", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er et «krus»?",
      options: [
        "En kopp eller et drikkekar, ofte ganske stort",
        "Et lite fat",
        "En skje med langt skaft"
      ],
      correctIndex: 0,
      feedback: "Et krus er en kopp eller et drikkekar, ofte ganske stort.",
      source: "Ola Tveiten", tags: ["hverdagsord", "Ola Tveiten"]
    },
    {
      id: "ORD45", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «å lempe»?",
      options: [
        "Å løfte og flytte noe tungt, gjerne flere ganger",
        "Å reparere noe som er ødelagt",
        "Å måle hvor tungt noe er"
      ],
      correctIndex: 0,
      feedback: "Å lempe betyr å løfte og flytte noe tungt, gjerne flere ganger.",
      source: "Ola Tveiten", tags: ["arbeid", "verb", "Ola Tveiten"]
    },
    {
      id: "ORD46", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er «pukkstein»?",
      options: [
        "Knust stein som blant annet brukes når man bygger vei",
        "Store steiner som aldri er bearbeidet",
        "Sand som brukes på strender"
      ],
      correctIndex: 0,
      feedback: "Pukkstein er knust stein som blant annet brukes i veibygging.",
      source: "Ola Tveiten", tags: ["vei", "arbeid", "Ola Tveiten"]
    },
    {
      id: "ORD47", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er «grus»?",
      options: [
        "Små steiner og steinbiter som blant annet brukes på veier",
        "Våt jord som finnes i myrer",
        "Fint støv fra treverk"
      ],
      correctIndex: 0,
      feedback: "Grus er små steiner og steinbiter som blant annet brukes på veier.",
      source: "Ola Tveiten", tags: ["vei", "Ola Tveiten"]
    },
    {
      id: "ORD48", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er en «brakke»?",
      options: [
        "En enkel, midlertidig bygning som brukes som bolig eller arbeidssted",
        "Et stort hus som alltid er permanent",
        "En tunnel under en vei"
      ],
      correctIndex: 0,
      feedback: "En brakke er en enkel, midlertidig bygning som kan brukes som bolig eller arbeidssted.",
      source: "Ola Tveiten", tags: ["arbeid", "bygning", "Ola Tveiten"]
    },
    {
      id: "ORD49", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «i ukevis»?",
      options: [
        "I mange uker",
        "Én gang i uka",
        "Bare i helgene"
      ],
      correctIndex: 0,
      feedback: "I ukevis betyr i mange uker.",
      source: "Ola Tveiten", tags: ["tid", "Ola Tveiten"]
    },
    {
      id: "ORD50", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «i strekk»?",
      options: [
        "Sammenhengende, uten pause eller avbrudd",
        "Litt etter litt med lange pauser",
        "På et sted langt borte"
      ],
      correctIndex: 0,
      feedback: "I strekk betyr sammenhengende, uten pause eller avbrudd.",
      source: "Ola Tveiten", tags: ["uttrykk", "tid", "Ola Tveiten"]
    },
    {
      id: "ORD51", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «å banne»?",
      options: [
        "Å bruke banneord, ofte fordi man er sint eller frustrert",
        "Å snakke veldig lavt",
        "Å love noe høytidelig"
      ],
      correctIndex: 0,
      feedback: "Å banne betyr å bruke banneord, ofte fordi man er sint eller frustrert.",
      source: "Ola Tveiten", tags: ["verb", "Ola Tveiten"]
    },
    {
      id: "ORD52", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr uttrykket «store ord»?",
      options: [
        "Høytidelige eller imponerende formuleringer",
        "Ord som har mange bokstaver",
        "Ord som skrives med store bokstaver"
      ],
      correctIndex: 0,
      feedback: "Store ord er høytidelige eller imponerende formuleringer, ofte brukt ved taler eller seremonier.",
      source: "Ola Tveiten", tags: ["uttrykk", "Ola Tveiten"]
    },
    {
      id: "ORD53", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er en «kakse»?",
      options: [
        "En rik, mektig eller viktig person, ofte omtalt litt ironisk",
        "En person som arbeider med stein",
        "En person som aldri deltar i møter"
      ],
      correctIndex: 0,
      feedback: "En kakse er en rik, mektig eller viktig person. Ordet brukes ofte litt ironisk.",
      source: "Ola Tveiten", tags: ["person", "Ola Tveiten"]
    },
    {
      id: "ORD54", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «å klippe av en snor» ved en åpning?",
      options: [
        "Å utføre en symbolsk handling når noe nytt åpnes offisielt",
        "Å avslutte et byggeprosjekt uten seremoni",
        "Å reparere et gjerde"
      ],
      correctIndex: 0,
      feedback: "Å klippe av en snor er en tradisjonell, symbolsk handling ved offisiell åpning av for eksempel en vei eller bygning.",
      source: "Ola Tveiten", tags: ["seremoni", "uttrykk", "Ola Tveiten"]
    },
    {
      id: "ORD55", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «narr» i denne sammenhengen?",
      options: [
        "En dum eller latterlig person",
        "En svært erfaren leder",
        "En person som skriver referat"
      ],
      correctIndex: 0,
      feedback: "En narr er her en dum eller latterlig person.",
      source: "Ola Tveiten", tags: ["person", "Ola Tveiten"]
    },
    {
      id: "ORD56", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er en «takketale»?",
      options: [
        "En tale der man takker noen, ofte ved en høytidelig anledning",
        "En tale der man kritiserer et prosjekt",
        "En muntlig eksamen"
      ],
      correctIndex: 0,
      feedback: "En takketale er en tale der man takker noen, ofte ved en høytidelig anledning.",
      source: "Ola Tveiten", tags: ["tale", "Ola Tveiten"]
    },
    {
      id: "ORD57", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er en «kontraktør»?",
      options: [
        "En person eller et firma som har kontrakt på å utføre et arbeid",
        "En person som kontrollerer grammatikk",
        "En offentlig ansatt som skriver lover"
      ],
      correctIndex: 0,
      feedback: "En kontraktør er en person eller et firma som har kontrakt på å utføre et arbeid, for eksempel et byggeprosjekt.",
      source: "Ola Tveiten", tags: ["arbeid", "Ola Tveiten"]
    },
    {
      id: "ORD58", category: "vocabulary", subtype: "meaning",
      prompt: "Hva er et «arbeidslag»?",
      options: [
        "En gruppe som arbeider sammen på samme prosjekt, særlig med fysisk arbeid",
        "Alle ansatte ved en institusjon",
        "En gruppe som bare møtes for å planlegge"
      ],
      correctIndex: 0,
      feedback: "Et arbeidslag er en gruppe som arbeider sammen på samme prosjekt. Ordet brukes særlig om grupper som utfører fysisk arbeid.",
      source: "Ola Tveiten", tags: ["arbeid", "Ola Tveiten"]
    },
    {
      id: "ORD59", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «bit for bit»?",
      options: [
        "Gradvis, én liten del om gangen",
        "Alt på én gang",
        "Uten å gjøre noen endringer"
      ],
      correctIndex: 0,
      feedback: "Bit for bit betyr gradvis, én liten del om gangen.",
      source: "Ola Tveiten", tags: ["uttrykk", "Ola Tveiten"]
    },
    {
      id: "ORD60", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «slit»?",
      options: [
        "Hardt og krevende arbeid",
        "En kort ferie",
        "En enkel oppgave"
      ],
      correctIndex: 0,
      feedback: "Slit betyr hardt og krevende arbeid eller anstrengelse.",
      source: "Ola Tveiten", tags: ["arbeid", "Ola Tveiten"]
    },
    {
      id: "ORD61", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «å koste slit»?",
      options: [
        "Å kreve mye hardt arbeid og anstrengelse",
        "Å være dyrt å kjøpe",
        "Å gå svært raskt"
      ],
      correctIndex: 0,
      feedback: "At noe koster slit, betyr at det krever mye hardt arbeid og anstrengelse.",
      source: "Ola Tveiten", tags: ["uttrykk", "arbeid", "Ola Tveiten"]
    },
    {
      id: "ORD62", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «dannelse»?",
      options: [
        "Kunnskaper, manerer og kulturell forståelse som forbindes med det å være dannet",
        "En formell søknad om utdanning",
        "Det å bygge en ny institusjon"
      ],
      correctIndex: 0,
      feedback: "Dannelse viser til kunnskaper, manerer og kulturell forståelse som forbindes med det å være dannet.",
      source: "B2 15. september", tags: ["språk", "kultur"]
    },
    {
      id: "ORD63", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr det at en person er «dannet»?",
      options: [
        "At personen har gode manerer og kulturell eller intellektuell kunnskap",
        "At personen alltid har høy utdanning",
        "At personen arbeider på et universitet"
      ],
      correctIndex: 0,
      feedback: "Å være dannet forbindes med gode manerer og kulturell eller intellektuell kunnskap.",
      source: "B2 15. september", tags: ["språk", "kultur"]
    },
    {
      id: "ORD64", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «imidlertid»?",
      options: [
        "Et ord som markerer kontrast, omtrent som «likevel» eller «derimot»",
        "Noe som bare varer en kort periode",
        "Noe som skjer svært ofte"
      ],
      correctIndex: 0,
      feedback: "Imidlertid brukes for å markere kontrast, omtrent som «likevel» eller «derimot».",
      source: "B2 15. september", tags: ["bindeord", "ordforråd"]
    },
    {
      id: "ORD65", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «midlertidig»?",
      options: [
        "Noe som bare varer i en begrenset periode",
        "Noe som står i kontrast til det som kom før",
        "Noe som varer for alltid"
      ],
      correctIndex: 0,
      feedback: "Midlertidig betyr at noe bare varer i en begrenset periode.",
      source: "B2 15. september", tags: ["tid", "ordforråd"]
    },
    {
      id: "ORD66", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «talemål»?",
      options: [
        "Språket slik det blir snakket, i motsetning til skriftspråk",
        "Regler for hvordan man skriver formelle tekster",
        "Et mål man setter seg for en muntlig presentasjon"
      ],
      correctIndex: 0,
      feedback: "Talemål er språket slik det blir snakket, i motsetning til skriftspråk.",
      source: "B2 15. september", tags: ["språk", "norsk språkhistorie"]
    },
    {
      id: "ORD67", category: "vocabulary", subtype: "meaning",
      prompt: "Hva betyr «fellestrekk»?",
      options: [
        "Trekk eller egenskaper flere ting har til felles; en likhet mellom dem",
        "En forskjell som bare finnes hos én ting",
        "En tilfeldig detalj som ikke kan sammenlignes"
      ],
      correctIndex: 0,
      feedback: "Et fellestrekk er et trekk eller en egenskap flere ting har til felles – altså en likhet mellom dem.",
      source: "B2 15. september", tags: ["språk", "sammenligning"]
    },

    {
      id: "IKKE01", category: "grammar", grammarType: "ikke", subtype: "negation",
      prompt: "Hun har vært på kontoret denne uka.",
      instruction: "Gjør setningen negativ.",
      options: [
        "Hun har ikke vært på kontoret denne uka.",
        "Hun ikke har vært på kontoret denne uka.",
        "Hun har vært ikke på kontoret denne uka."
      ],
      correctIndex: 0,
      feedback: "I en vanlig helsetning står «ikke» etter det finitte verbet: Hun har ikke vært …",
      source: "B2 15. september", tags: ["ikke", "ordstilling"]
    },
    {
      id: "IKKE02", category: "grammar", grammarType: "ikke", subtype: "negation",
      prompt: "Studentene fikk gode karakterer.",
      instruction: "Gjør setningen negativ.",
      options: [
        "Studentene fikk ikke gode karakterer.",
        "Studentene ikke fikk gode karakterer.",
        "Studentene fikk gode ikke karakterer."
      ],
      correctIndex: 0,
      feedback: "I helsetningen står «ikke» etter det finitte verbet «fikk»: Studentene fikk ikke gode karakterer.",
      source: "B2 15. september", tags: ["ikke", "ordstilling"]
    },
    {
      id: "IKKE03", category: "grammar", grammarType: "ikke", subtype: "negation",
      prompt: "Jeg pleier å trene på mandager.",
      instruction: "Gjør setningen negativ.",
      options: [
        "Jeg pleier ikke å trene på mandager.",
        "Jeg ikke pleier å trene på mandager.",
        "Jeg pleier trene ikke på mandager."
      ],
      correctIndex: 0,
      feedback: "«Pleier» er det finitte verbet, og «ikke» står etter det: Jeg pleier ikke å trene …",
      source: "B2 15. september", tags: ["ikke", "ordstilling"]
    },
    {
      id: "IKKE04", category: "grammar", grammarType: "ikke", subtype: "negation",
      prompt: "Vi skal møte kollegaen i morgen.",
      instruction: "Gjør setningen negativ.",
      options: [
        "Vi skal ikke møte kollegaen i morgen.",
        "Vi ikke skal møte kollegaen i morgen.",
        "Vi skal møte ikke kollegaen i morgen."
      ],
      correctIndex: 0,
      feedback: "«Skal» er det finitte verbet, så «ikke» står etter «skal»: Vi skal ikke møte …",
      source: "B2 15. september", tags: ["ikke", "ordstilling"]
    },

    {
      id: "SA01", category: "grammar", grammarType: "setningsadverbial", subtype: "pragmatics",
      prompt: "Datter: «Jeg liker ikke fiskeboller!» Mor: «Hva snakker du om? Du spiste det ___ i forrige uke!»",
      instruction: "Velg setningsadverbialet som passer best i konteksten.",
      options: ["jo", "visst", "nok"],
      correctIndex: 0,
      feedback: "«Jo» viser her til noe moren regner med at datteren allerede vet eller husker: Hun spiste fiskeboller i forrige uke.",
      source: "B2 15. september", tags: ["jo", "setningsadverbial", "pragmatikk"]
    },
    {
      id: "SA02", category: "grammar", grammarType: "setningsadverbial", subtype: "pragmatics",
      prompt: "A: «Har du hørt noe om instituttet?» B: «Ja, det skal ___ flytte neste år.»",
      instruction: "Velg setningsadverbialet som passer best i konteksten.",
      options: ["visst", "jo", "sannsynligvis"],
      correctIndex: 0,
      feedback: "«Visst» passer når taleren gjengir noe hun har hørt eller fått vite fra andre.",
      source: "B2 15. september", tags: ["visst", "setningsadverbial", "pragmatikk"]
    },
    {
      id: "SA03", category: "grammar", grammarType: "setningsadverbial", subtype: "pragmatics",
      prompt: "A: «Hvor er Per?» B: «Jeg vet ikke. Jakken hans er borte, og kontoret er tomt. Han har ___ gått hjem.»",
      instruction: "B trekker selv en sannsynlig konklusjon. Velg ordet som passer best.",
      options: ["nok", "jo", "sikkert"],
      correctIndex: 0,
      feedback: "«Nok» passer når taleren trekker en sannsynlig konklusjon: Ut fra det hun ser, antar hun at Per har gått hjem.",
      source: "B2 15. september", tags: ["nok", "setningsadverbial", "pragmatikk"]
    },
    {
      id: "SA04", category: "grammar", grammarType: "setningsadverbial", subtype: "pragmatics",
      prompt: "Alle er kommet til møtet. Lederen vil foreslå forsiktig at de starter: «Vi bør ___ begynne snart.»",
      instruction: "Velg setningsadverbialet som passer best til et forsiktig forslag.",
      options: ["vel", "visst", "sikkert"],
      correctIndex: 0,
      feedback: "«Vel» gjør forslaget mindre direkte og kan samtidig invitere til bekreftelse: Vi bør vel begynne snart.",
      source: "B2 15. september", tags: ["vel", "setningsadverbial", "pragmatikk"]
    },
    {
      id: "SA05", category: "grammar", grammarType: "setningsadverbial", subtype: "pragmatics",
      prompt: "A: «Tror du Mari leverer oppgaven i tide?» B: «Ja, hun pleier alltid å være tidlig ute. Hun gjør det ___ denne gangen også.»",
      instruction: "Velg ordet som uttrykker en sterk antakelse.",
      options: ["sikkert", "jo", "visst"],
      correctIndex: 0,
      feedback: "«Sikkert» uttrykker her at taleren mener det er svært sannsynlig at Mari leverer i tide.",
      source: "B2 15. september", tags: ["sikkert", "setningsadverbial", "pragmatikk"]
    },
    {
      id: "SA06", category: "grammar", grammarType: "setningsadverbial", subtype: "pragmatics",
      prompt: "Meteorologen sier at det er 80 prosent sjanse for regn. «Det blir ___ regn i ettermiddag.»",
      instruction: "Velg ordet som tydelig uttrykker sannsynlighet.",
      options: ["sannsynligvis", "jo", "visst"],
      correctIndex: 0,
      feedback: "«Sannsynligvis» betyr at noe antas å være sannsynlig, men ikke sikkert.",
      source: "B2 15. september", tags: ["sannsynligvis", "setningsadverbial", "pragmatikk"]
    }
  ];

  const existingIds = new Set(window.QUESTION_BANK.map((question) => question.id));
  window.QUESTION_BANK.push(...additionalQuestions.filter((question) => !existingIds.has(question.id)));
})();
