# B2-kviss

En enkel, mobiltilpasset repetisjonskviss for deltakere på norskkurs B2.

## Slik fungerer en runde

En runde består av 20 spørsmål:

- 10 ordforrådsspørsmål
- 10 grammatikkspørsmål

Grammatikkdelen trekker foreløpig:

- 3 V2-oppgaver
- 2 oppgaver med det-setninger
- 2 oppgaver med plassering av `ikke`
- 3 oppgaver med pragmatiske setningsadverbialer

Spørsmålene trekkes tilfeldig fra en større oppgavebank. Etter hvert svar får brukeren umiddelbar tilbakemelding og en kort forklaring. Til slutt vises samlet resultat og resultat for de to hovedkategoriene Ordforråd og Grammatikk.

I resultatvisningen gir hvert riktig ordforrådssvar én fisk, og hvert riktig grammatikksvar én sau.

## Filstruktur

```text
B2-kviss/
├── index.html
├── style.css
├── result-overrides.css
├── app.js
├── data/
│   ├── quiz-config.js
│   ├── questions.js
│   └── question-overrides.js
└── README.md
```

### `data/questions.js`

Her ligger den opprinnelige oppgavebanken.

### `data/question-overrides.js`

Her ligger redaksjonelle rettinger og nyere spørsmål som er lagt til etter hvert som kurset utvikler seg. Fila lastes etter `questions.js`, slik at enkeltoppgaver kan justeres uten å endre den opprinnelige banken.

Hver oppgave har blant annet:

- `id`: unik ID
- `category`: hovedkategori, nå `vocabulary` eller `grammar`
- `grammarType`: grammatisk undertype, for eksempel `v2`, `det`, `ikke` eller `setningsadverbial`
- `subtype`: mer spesifikk oppgavetype
- `prompt`: selve spørsmålet eller utgangssetningen
- `instruction`: valgfri instruksjon
- `options`: svaralternativer
- `correctIndex`: indeks til riktig svar, der første alternativ er `0`
- `feedback`: forklaring som vises etter svar
- `source`: hvilket undervisningsmateriale oppgaven bygger på
- `tags`: stikkord som kan brukes senere til filtrering

### `data/quiz-config.js`

Her bestemmes hvilke hovedkategorier som er aktive, hvor mange spørsmål som skal trekkes og hvordan grammatikkdelen fordeles på undertyper.

Eksempel:

```js
grammar: {
  label: "Grammatikk",
  enabled: true,
  questionsPerRound: 10,
  subtypeCounts: {
    v2: 3,
    det: 2,
    ikke: 2,
    setningsadverbial: 3
  }
}
```

Dermed kan nye grammatikktyper, for eksempel leddsetninger, senere legges inn ved å utvide oppgavebanken og justere fordelingen i konfigurasjonen.
