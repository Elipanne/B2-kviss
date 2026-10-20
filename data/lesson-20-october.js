// Ordforråd og grammatikk fra siste undervisning (20. oktober).
// Oppdaterer «nedsnødd» med overført betydning og legger til nye ord- og grammatikkoppgaver.

(() => {
  if (!Array.isArray(window.QUESTION_BANK)) return;

  const nedsnodd = window.QUESTION_BANK.find((question) => question.id === "OCT16ORD28");
  if (nedsnodd) {
    Object.assign(nedsnodd, {
      term: "nedsnødd",
      definition: "dekket av mye snø; overført: overveldet av svært mye arbeid, e-post, oppgaver eller lignende",
      prompt: "Hva kan «nedsnødd» bety?",
      options: [
        "Både dekket av mye snø og, overført, overveldet av svært mye arbeid eller andre oppgaver",
        "Bare at noe har fryst fast i bakken",
        "At man har ryddet bort all snøen"
      ],
      correctIndex: 0,
      feedback: "«Nedsnødd» kan brukes konkret om noe som er dekket av mye snø. Overført kan man for eksempel være «nedsnødd i jobb» når man har svært mye å gjøre.",
      source: "Snø og vintervær",
      tags: ["16. oktober", "20. oktober", "vinter", "vær", "uttrykk", "overført betydning"]
    });
  }

  const newQuestions = [
    {
      id: "OCT20ORD01", category: "vocabulary", subtype: "meaning",
      term: "å være på jordet",
      definition: "å ta feil, misforstå eller være helt på villspor",
      prompt: "Hva betyr uttrykket «å være på jordet»?",
      options: [
        "Å ta feil, misforstå eller være helt på villspor",
        "Å arbeide utendørs på en gård",
        "Å være svært godt forberedt"
      ],
      correctIndex: 0,
      feedback: "«Å være på jordet» betyr overført å ta feil, misforstå eller være helt på villspor.",
      source: "B2 20. oktober", tags: ["20. oktober", "uttrykk", "muntlig språk", "overført betydning"]
    },
    {
      id: "OCT20ORD02", category: "vocabulary", subtype: "meaning",
      term: "å være på bærtur",
      definition: "å ta feil eller være på villspor",
      prompt: "Hva betyr uttrykket «å være på bærtur»?",
      options: [
        "Å ta feil eller være på villspor",
        "Å gå en rolig tur for å plukke bær",
        "Å være svært sikker på at man har rett"
      ],
      correctIndex: 0,
      feedback: "«Å være på bærtur» brukes ofte overført om å ta feil eller være på villspor.",
      source: "B2 20. oktober", tags: ["20. oktober", "uttrykk", "muntlig språk", "overført betydning"]
    },
    {
      id: "OCT20ORD03", category: "vocabulary", subtype: "meaning",
      term: "krumkake",
      definition: "en tynn og sprø kake som stekes i krumkakejern og rulles mens den er varm",
      prompt: "Hva er en «krumkake»?",
      options: [
        "En tynn og sprø kake som stekes i et spesielt jern og rulles mens den er varm",
        "En myk bolle med safran og rosiner",
        "En rund kake som alltid fylles med syltetøy"
      ],
      correctIndex: 0,
      feedback: "Krumkake er en tynn, sprø norsk kake som stekes i krumkakejern og vanligvis rulles til en kjegle eller sylinder.",
      source: "B2 20. oktober", tags: ["20. oktober", "jul", "mat", "tradisjoner"]
    },
    {
      id: "OCT20ORD04", category: "vocabulary", subtype: "meaning",
      term: "lussekatter",
      definition: "gule safranboller som tradisjonelt spises på luciadagen",
      prompt: "Hva er «lussekatter»?",
      options: [
        "Gule safranboller som tradisjonelt spises på luciadagen",
        "Små sprø julekaker med kanel",
        "En type godteri som formes som katter"
      ],
      correctIndex: 0,
      feedback: "Lussekatter er gule boller med safran, ofte formet som en S, som tradisjonelt spises på luciadagen 13. desember.",
      source: "B2 20. oktober", tags: ["20. oktober", "jul", "mat", "tradisjoner"]
    },
    {
      id: "OCT20ORD05", category: "vocabulary", subtype: "meaning",
      term: "sju sorter",
      definition: "tradisjonen eller uttrykket for å ha sju forskjellige typer julekaker",
      prompt: "Hva betyr «sju sorter» i forbindelse med norsk jul?",
      options: [
        "Sju forskjellige typer julekaker",
        "Sju retter som må spises på julaften",
        "Sju forskjellige julegaver"
      ],
      correctIndex: 0,
      feedback: "«Sju sorter» viser til en tradisjon om å bake eller servere sju forskjellige typer småkaker til jul.",
      source: "B2 20. oktober", tags: ["20. oktober", "jul", "mat", "tradisjoner"]
    },
    {
      id: "OCT20ORD06", category: "vocabulary", subtype: "meaning",
      term: "kongen på haugen",
      definition: "en lek der man prøver å beholde plassen øverst på en haug; overført: den som dominerer eller har den sterkeste posisjonen",
      prompt: "Hva kan «kongen på haugen» bety?",
      options: [
        "Både en lek der man prøver å beholde plassen øverst på en haug, og overført den som dominerer eller har den sterkeste posisjonen",
        "Bare navnet på en norsk konge som bodde på et fjell",
        "En person som alltid går tur alene"
      ],
      correctIndex: 0,
      feedback: "«Kongen på haugen» er en lek der man prøver å bli stående øverst på en haug mens andre forsøker å få en ned. Overført kan uttrykket bety den som dominerer eller har den sterkeste posisjonen.",
      source: "B2 20. oktober", tags: ["20. oktober", "vinter", "lek", "uttrykk", "overført betydning"]
    },

    {
      id: "POS01", category: "grammar", grammarType: "possessive", subtype: "sin-si-sitt-sine",
      prompt: "Nora har et eget kontor. Hun sitter på kontoret ___.",
      instruction: "Velg riktig eiendomsord.",
      options: ["sitt", "hennes", "sin"],
      correctIndex: 0,
      feedback: "Kontoret tilhører subjektet «hun» (Nora), og «kontor» er intetkjønn: Hun sitter på kontoret sitt.",
      source: "B2 20. oktober", tags: ["20. oktober", "sin", "sitt", "eiendomsord"]
    },
    {
      id: "POS02", category: "grammar", grammarType: "possessive", subtype: "sin-si-sitt-sine",
      prompt: "Ahmed har skrevet tre artikler. Han skal presentere artiklene ___.",
      instruction: "Velg riktig eiendomsord.",
      options: ["sine", "hans", "sin"],
      correctIndex: 0,
      feedback: "Artiklene tilhører subjektet «han» (Ahmed), og ordet står i flertall: artiklene sine.",
      source: "B2 20. oktober", tags: ["20. oktober", "sin", "sine", "eiendomsord"]
    },
    {
      id: "POS03", category: "grammar", grammarType: "possessive", subtype: "sin-si-sitt-sine",
      prompt: "Kari har glemt veska på jobb. Per tar med seg veska ___ hjem til henne.",
      instruction: "Velg riktig eiendomsord.",
      options: ["hennes", "sin", "sitt"],
      correctIndex: 0,
      feedback: "Veska tilhører Kari, ikke subjektet Per. Derfor bruker vi «hennes»: Per tar med seg veska hennes.",
      source: "B2 20. oktober", tags: ["20. oktober", "sin", "hennes", "eiendomsord"]
    },
    {
      id: "POS04", category: "grammar", grammarType: "possessive", subtype: "sin-si-sitt-sine",
      prompt: "Jonas har en sønn. Han følger sønnen ___ til skolen.",
      instruction: "Velg riktig eiendomsord.",
      options: ["sin", "hans", "sitt"],
      correctIndex: 0,
      feedback: "Sønnen tilhører subjektet «han» (Jonas), og «sønn» er hankjønn: sønnen sin.",
      source: "B2 20. oktober", tags: ["20. oktober", "sin", "eiendomsord"]
    },
    {
      id: "POS05", category: "grammar", grammarType: "possessive", subtype: "sin-si-sitt-sine",
      prompt: "Studentene har levert oppgavene. Nå venter de på tilbakemelding på oppgavene ___.",
      instruction: "Velg riktig eiendomsord.",
      options: ["sine", "deres", "sitt"],
      correctIndex: 0,
      feedback: "Oppgavene tilhører subjektet «de» (studentene), og ordet står i flertall: oppgavene sine.",
      source: "B2 20. oktober", tags: ["20. oktober", "sin", "sine", "eiendomsord"]
    },
    {
      id: "POS06", category: "grammar", grammarType: "possessive", subtype: "sin-si-sitt-sine",
      prompt: "Ingrid har skrevet en rapport. Lars leser rapporten ___ før han møter henne.",
      instruction: "Velg riktig eiendomsord.",
      options: ["hennes", "sin", "sitt"],
      correctIndex: 0,
      feedback: "Rapporten tilhører Ingrid, ikke subjektet Lars. Derfor bruker vi «hennes».",
      source: "B2 20. oktober", tags: ["20. oktober", "sin", "hennes", "eiendomsord"]
    },
    {
      id: "POS07", category: "grammar", grammarType: "possessive", subtype: "sin-si-sitt-sine",
      prompt: "Henrik har glemt adgangskortet. Han leter etter adgangskortet ___.",
      instruction: "Velg riktig eiendomsord.",
      options: ["sitt", "hans", "sin"],
      correctIndex: 0,
      feedback: "Adgangskortet tilhører subjektet «han» (Henrik), og «kort» er intetkjønn: adgangskortet sitt.",
      source: "B2 20. oktober", tags: ["20. oktober", "sitt", "eiendomsord"]
    },
    {
      id: "POS08", category: "grammar", grammarType: "possessive", subtype: "sin-si-sitt-sine",
      prompt: "Anne har en bror som bor i Bergen. Hun skal besøke broren ___.",
      instruction: "Velg riktig eiendomsord.",
      options: ["sin", "hennes", "sitt"],
      correctIndex: 0,
      feedback: "Broren tilhører subjektet «hun» (Anne), og «bror» er hankjønn: broren sin.",
      source: "B2 20. oktober", tags: ["20. oktober", "sin", "eiendomsord"]
    },
    {
      id: "POS09", category: "grammar", grammarType: "possessive", subtype: "sin-si-sitt-sine",
      prompt: "Studentene har sendt læreren noen spørsmål. Læreren svarer på spørsmålene ___.",
      instruction: "Velg riktig eiendomsord.",
      options: ["deres", "sine", "hennes"],
      correctIndex: 0,
      feedback: "Spørsmålene tilhører studentene, ikke subjektet «læreren». Derfor bruker vi «deres»: spørsmålene deres.",
      source: "B2 20. oktober", tags: ["20. oktober", "deres", "eiendomsord"]
    }
  ];

  const existingIds = new Set(window.QUESTION_BANK.map((question) => question.id));
  window.QUESTION_BANK.push(...newQuestions.filter((question) => !existingIds.has(question.id)));
})();
