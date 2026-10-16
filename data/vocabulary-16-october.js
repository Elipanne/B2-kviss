// Ord og uttrykk fra «Nordavinden og sola» og undervisning om snø og vintervær.
// Lastes etter den øvrige oppgavebanken og legger bare til nye ordoppgaver.

(() => {
  if (!Array.isArray(window.QUESTION_BANK)) return;

  const newQuestions = [
    {
      id: "OCT16ORD01", category: "vocabulary", subtype: "meaning",
      term: "å krangle",
      definition: "å være uenig og diskutere på en sint eller sterk måte",
      prompt: "Hva betyr «å krangle»?",
      options: [
        "Å være uenig og diskutere på en sint eller sterk måte",
        "Å bli enige uten å diskutere",
        "Å snakke lavt og forsiktig"
      ],
      correctIndex: 0,
      feedback: "Å krangle betyr å være uenig og diskutere på en sint eller sterk måte.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "uttrykk"]
    },
    {
      id: "OCT16ORD02", category: "vocabulary", subtype: "meaning",
      term: "å bli enige om",
      definition: "å komme fram til samme mening eller beslutning om noe",
      prompt: "Hva betyr «å bli enige om» noe?",
      options: [
        "Å komme fram til samme mening eller beslutning",
        "Å fortsette å være uenige",
        "Å glemme hva man diskuterte"
      ],
      correctIndex: 0,
      feedback: "Å bli enige om noe betyr å komme fram til samme mening eller beslutning om det.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "uttrykk"]
    },
    {
      id: "OCT16ORD03", category: "vocabulary", subtype: "meaning",
      term: "frakk",
      definition: "et langt ytterplagg som brukes utenpå andre klær",
      prompt: "Hva er en «frakk»?",
      options: [
        "Et langt ytterplagg som brukes utenpå andre klær",
        "En kortermet skjorte",
        "Et par varme vintersko"
      ],
      correctIndex: 0,
      feedback: "En frakk er et langt ytterplagg som brukes utenpå andre klær.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "klær"]
    },
    {
      id: "OCT16ORD04", category: "vocabulary", subtype: "meaning",
      term: "å gjelde for",
      definition: "å bli regnet som eller oppfattet som",
      prompt: "Hva betyr «å gjelde for» noe?",
      options: [
        "Å bli regnet som eller oppfattet som noe",
        "Å bestemme en ny regel",
        "Å slutte å være gyldig"
      ],
      correctIndex: 0,
      feedback: "Å gjelde for noe betyr å bli regnet som eller oppfattet som det.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "uttrykk"]
    },
    {
      id: "OCT16ORD05", category: "vocabulary", subtype: "meaning",
      term: "av all sin makt",
      definition: "så kraftig eller intenst som man klarer",
      prompt: "Hva betyr «av all sin makt»?",
      options: [
        "Så kraftig eller intenst som man klarer",
        "Uten å anstrenge seg",
        "Med hjelp fra noen andre"
      ],
      correctIndex: 0,
      feedback: "«Av all sin makt» betyr så kraftig eller intenst som man klarer.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "uttrykk"]
    },
    {
      id: "OCT16ORD06", category: "vocabulary", subtype: "meaning-in-context",
      term: "dess … dess …",
      definition: "en konstruksjon som viser at én endring følger en annen",
      prompt: "I teksten står det «dess mer han blåste, dess tettere trakk mannen frakken rundt seg». Hva uttrykker «dess … dess …»?",
      options: [
        "At én endring følger en annen: jo mer det ene skjer, jo mer skjer det andre",
        "At to ting skjer helt tilfeldig",
        "At noe skjer bare én gang"
      ],
      correctIndex: 0,
      feedback: "«Dess … dess …» viser en sammenheng mellom to endringer: dess mer det ene skjer, dess mer skjer det andre.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "uttrykk"]
    },
    {
      id: "OCT16ORD07", category: "vocabulary", subtype: "meaning",
      term: "å trekke noe rundt seg",
      definition: "å dra et plagg, teppe eller lignende tettere rundt kroppen",
      prompt: "Hva betyr «å trekke frakken rundt seg»?",
      options: [
        "Å dra frakken tettere rundt kroppen",
        "Å ta frakken helt av",
        "Å legge frakken på bakken"
      ],
      correctIndex: 0,
      feedback: "Å trekke noe rundt seg betyr å dra det tettere rundt kroppen.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "uttrykk"]
    },
    {
      id: "OCT16ORD08", category: "vocabulary", subtype: "meaning",
      term: "til sist",
      definition: "til slutt",
      prompt: "Hva betyr «til sist»?",
      options: [
        "Til slutt",
        "Med en gang",
        "Først av alt"
      ],
      correctIndex: 0,
      feedback: "«Til sist» betyr det samme som «til slutt».",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "uttrykk"]
    },
    {
      id: "OCT16ORD09", category: "vocabulary", subtype: "meaning",
      term: "å gi opp",
      definition: "å slutte å prøve fordi man ikke tror man vil lykkes",
      prompt: "Hva betyr «å gi opp»?",
      options: [
        "Å slutte å prøve",
        "Å prøve enda hardere",
        "Å gi noe til en annen person"
      ],
      correctIndex: 0,
      feedback: "Å gi opp betyr å slutte å prøve, ofte fordi man ikke tror man vil lykkes.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "uttrykk"]
    },
    {
      id: "OCT16ORD10", category: "vocabulary", subtype: "meaning",
      term: "å skinne",
      definition: "å sende ut eller reflektere lys",
      prompt: "Hva betyr «å skinne»?",
      options: [
        "Å sende ut eller reflektere lys",
        "Å blåse svært kraftig",
        "Å bli mørkere"
      ],
      correctIndex: 0,
      feedback: "Å skinne betyr å sende ut eller reflektere lys, slik sola gjør.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "natur"]
    },
    {
      id: "OCT16ORD11", category: "vocabulary", subtype: "meaning",
      term: "straks",
      definition: "med en gang",
      prompt: "Hva betyr «straks»?",
      options: [
        "Med en gang",
        "Etter lang tid",
        "Kanskje senere"
      ],
      correctIndex: 0,
      feedback: "«Straks» betyr med en gang eller svært snart.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "uttrykk"]
    },
    {
      id: "OCT16ORD12", category: "vocabulary", subtype: "meaning",
      term: "å innrømme",
      definition: "å erkjenne at noe er sant, ofte noe man helst ikke ville sagt",
      prompt: "Hva betyr «å innrømme» noe?",
      options: [
        "Å erkjenne at noe er sant",
        "Å påstå at noe er helt umulig",
        "Å skjule en opplysning"
      ],
      correctIndex: 0,
      feedback: "Å innrømme betyr å erkjenne at noe er sant, ofte noe man helst ikke ville sagt.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "uttrykk"]
    },
    {
      id: "OCT16ORD13", category: "vocabulary", subtype: "meaning",
      term: "den sterkeste",
      definition: "den som har mest styrke eller makt av flere",
      prompt: "Hva betyr «den sterkeste»?",
      options: [
        "Den som har mest styrke eller makt av flere",
        "Den som er eldst",
        "Den som kommer først"
      ],
      correctIndex: 0,
      feedback: "«Den sterkeste» er superlativ av «sterk»: den som har mest styrke eller makt av flere.",
      source: "Nordavinden og sola", tags: ["16. oktober", "litteratur", "adjektiv"]
    },

    {
      id: "OCT16ORD14", category: "vocabulary", subtype: "meaning",
      term: "snø",
      definition: "frosset nedbør som faller som hvite krystaller eller flak",
      prompt: "Hva er «snø»?",
      options: [
        "Frosset nedbør som faller som hvite krystaller eller flak",
        "Regn som bare faller om sommeren",
        "Is som bare finnes på sjøen"
      ],
      correctIndex: 0,
      feedback: "Snø er frosset nedbør som faller som hvite krystaller eller flak.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD15", category: "vocabulary", subtype: "meaning",
      term: "snøfnugg",
      definition: "et lite enkelt stykke snø som faller fra lufta",
      prompt: "Hva er et «snøfnugg»?",
      options: [
        "Et lite enkelt stykke snø som faller fra lufta",
        "En stor haug med snø",
        "Et hardt lag med is på bakken"
      ],
      correctIndex: 0,
      feedback: "Et snøfnugg er et lite enkelt stykke snø som faller fra lufta.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD16", category: "vocabulary", subtype: "meaning",
      term: "snøbyge",
      definition: "en kort periode med ganske kraftig snø",
      prompt: "Hva er en «snøbyge»?",
      options: [
        "En kort periode med ganske kraftig snø",
        "Et helt år med mye snø",
        "En snøhaug langs veien"
      ],
      correctIndex: 0,
      feedback: "En snøbyge er en kort periode der det snør ganske kraftig.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD17", category: "vocabulary", subtype: "meaning",
      term: "snøskred",
      definition: "en stor mengde snø som plutselig beveger seg nedover en fjellside",
      prompt: "Hva er et «snøskred»?",
      options: [
        "En stor mengde snø som plutselig beveger seg nedover en fjellside",
        "Snø som smelter på et hustak",
        "Et tynt lag med nysnø"
      ],
      correctIndex: 0,
      feedback: "Et snøskred er en stor mengde snø som plutselig beveger seg nedover en fjellside.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær", "natur"]
    },
    {
      id: "OCT16ORD18", category: "vocabulary", subtype: "meaning",
      term: "takras",
      definition: "snø eller is som faller ned fra et tak",
      prompt: "Hva er et «takras»?",
      options: [
        "Snø eller is som faller ned fra et tak",
        "Et tak som blir malt om vinteren",
        "Snø som blåser over en vei"
      ],
      correctIndex: 0,
      feedback: "Takras er snø eller is som faller ned fra et tak.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD19", category: "vocabulary", subtype: "meaning",
      term: "å måke snø",
      definition: "å fjerne snø med spade eller lignende",
      prompt: "Hva betyr «å måke snø»?",
      options: [
        "Å fjerne snø med spade eller lignende",
        "Å kjøre ski gjennom snøen",
        "Å vente på at snøen smelter"
      ],
      correctIndex: 0,
      feedback: "Å måke snø betyr å fjerne snø, vanligvis med en spade eller snøskuffe.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær", "hverdagsliv"]
    },
    {
      id: "OCT16ORD20", category: "vocabulary", subtype: "meaning",
      term: "å brøyte",
      definition: "å fjerne snø fra vei eller gate med plog",
      prompt: "Hva betyr «å brøyte»?",
      options: [
        "Å fjerne snø fra vei eller gate med plog",
        "Å strø salt på maten",
        "Å lage en snømann"
      ],
      correctIndex: 0,
      feedback: "Å brøyte betyr å fjerne snø fra en vei eller gate med en plog.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær", "hverdagsliv"]
    },
    {
      id: "OCT16ORD21", category: "vocabulary", subtype: "meaning",
      term: "brøytebil",
      definition: "et kjøretøy som brukes til å fjerne snø fra veier",
      prompt: "Hva er en «brøytebil»?",
      options: [
        "Et kjøretøy som brukes til å fjerne snø fra veier",
        "En bil som bare kan kjøre på is",
        "En bil som frakter ski"
      ],
      correctIndex: 0,
      feedback: "En brøytebil er et kjøretøy med plog som brukes til å fjerne snø fra veier.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær", "hverdagsliv"]
    },
    {
      id: "OCT16ORD22", category: "vocabulary", subtype: "meaning",
      term: "brøytekant",
      definition: "en haug eller kant av snø som blir liggende langs veien etter brøyting",
      prompt: "Hva er en «brøytekant»?",
      options: [
        "En kant eller haug med snø som blir liggende langs veien etter brøyting",
        "En gul strek midt i veien",
        "Et gjerde som beskytter mot snøskred"
      ],
      correctIndex: 0,
      feedback: "En brøytekant er snøen som blir skjøvet til siden og ligger som en kant langs veien etter brøyting.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær", "hverdagsliv"]
    },
    {
      id: "OCT16ORD23", category: "vocabulary", subtype: "meaning",
      term: "slaps",
      definition: "våt blanding av snø og vann",
      prompt: "Hva er «slaps»?",
      options: [
        "En våt blanding av snø og vann på bakken",
        "Helt tørr og løs snø",
        "Frosset regn på et vindu"
      ],
      correctIndex: 0,
      feedback: "Slaps er en våt blanding av snø og vann, ofte på veier og fortau.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD24", category: "vocabulary", subtype: "meaning",
      term: "sludd",
      definition: "nedbør som er en blanding av regn og snø",
      prompt: "Hva er «sludd»?",
      options: [
        "Nedbør som er en blanding av regn og snø",
        "Våt snø som ligger på bakken",
        "Et hardt lag oppå gammel snø"
      ],
      correctIndex: 0,
      feedback: "Sludd er nedbør som består av en blanding av regn og snø. Slaps ligger på bakken; sludd faller fra lufta.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD25", category: "vocabulary", subtype: "meaning",
      term: "skare",
      definition: "et hardt lag på toppen av snøen",
      prompt: "Hva er «skare»?",
      options: [
        "Et hardt lag på toppen av snøen",
        "Den aller første snøen om høsten",
        "Snø som faller i store flak"
      ],
      correctIndex: 0,
      feedback: "Skare er et hardt lag på toppen av snøen, ofte dannet når mildvær blir fulgt av kulde.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD26", category: "vocabulary", subtype: "meaning",
      term: "å smelte",
      definition: "å gå fra fast form til væske, for eksempel når snø blir til vann",
      prompt: "Hva betyr «å smelte»?",
      options: [
        "Å gå fra fast form til væske",
        "Å bli hardere og kaldere",
        "Å bli dekket av ny snø"
      ],
      correctIndex: 0,
      feedback: "Å smelte betyr å gå fra fast form til væske, for eksempel når snø eller is blir til vann.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD27", category: "vocabulary", subtype: "meaning",
      term: "å tine",
      definition: "å bli mindre frossen eller ikke lenger være frossen",
      prompt: "Hva betyr «å tine»?",
      options: [
        "Å bli mindre frossen eller ikke lenger være frossen",
        "Å fryse enda mer",
        "Å begynne å snø"
      ],
      correctIndex: 0,
      feedback: "Å tine betyr å bli mindre frossen eller ikke lenger være frossen. Vi kan også si at været tiner når snø og is begynner å smelte.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD28", category: "vocabulary", subtype: "meaning",
      term: "nedsnødd",
      definition: "dekket eller nesten begravd av mye snø",
      prompt: "Hva betyr «nedsnødd»?",
      options: [
        "Dekket eller nesten begravd av mye snø",
        "Helt fri for snø",
        "Våt av regn"
      ],
      correctIndex: 0,
      feedback: "Hvis noe er nedsnødd, er det dekket eller nesten begravd av mye snø.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD29", category: "vocabulary", subtype: "meaning",
      term: "snødekt",
      definition: "dekket av snø",
      prompt: "Hva betyr «snødekt»?",
      options: [
        "Dekket av snø",
        "Beskyttet mot snø",
        "Ryddet helt fri for snø"
      ],
      correctIndex: 0,
      feedback: "Snødekt betyr dekket av snø, for eksempel «snødekte fjell».",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD30", category: "vocabulary", subtype: "meaning",
      term: "snøflak",
      definition: "et synlig flak av snø som faller gjennom lufta",
      prompt: "Hva er et «snøflak»?",
      options: [
        "Et synlig flak av snø som faller gjennom lufta",
        "Et stort stykke is som flyter på sjøen",
        "Et hardt lag med snø på bakken"
      ],
      correctIndex: 0,
      feedback: "Et snøflak er et synlig flak av snø som faller gjennom lufta.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    },
    {
      id: "OCT16ORD31", category: "vocabulary", subtype: "meaning",
      term: "kramsnø",
      definition: "våt og klebrig snø som lett kan formes",
      prompt: "Hva er «kramsnø»?",
      options: [
        "Våt og klebrig snø som lett kan formes, for eksempel til snøballer",
        "Helt tørr snø som blåser lett bort",
        "Gammel is på en innsjø"
      ],
      correctIndex: 0,
      feedback: "Kramsnø er våt og klebrig snø som er lett å forme, for eksempel til snøballer og snømenn.",
      source: "Snø og sånt", tags: ["16. oktober", "vinter", "vær"]
    }
  ];

  const existingIds = new Set(window.QUESTION_BANK.map((question) => question.id));
  window.QUESTION_BANK.push(...newQuestions.filter((question) => !existingIds.has(question.id)));
})();
