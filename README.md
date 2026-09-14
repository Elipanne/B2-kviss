# B2-kviss

En enkel, mobiltilpasset repetisjonskviss for deltakere på norskkurs B2.

## Slik fungerer en runde

En runde består foreløpig av 20 spørsmål:

- 10 ordforrådsspørsmål
- 5 oppgaver med det-setninger
- 5 V2-oppgaver

Spørsmålene trekkes tilfeldig fra en større oppgavebank. Etter hvert svar får brukeren umiddelbar tilbakemelding og en kort forklaring. Til slutt vises samlet resultat og resultat per kategori.

## Filstruktur

```text
B2-kviss/
├── index.html
├── style.css
├── app.js
├── data/
│   ├── quiz-config.js
│   └── questions.js
└── README.md
```

### `data/questions.js`

Her ligger selve oppgavebanken. Nye spørsmål kan legges til uten å endre spillkoden.

Hver oppgave har blant annet:

- `id`: unik ID
- `category`: kategori, for eksempel `vocabulary`, `det` eller `v2`
- `subtype`: mer spesifikk oppgavetype
- `prompt`: selve spørsmålet eller utgangssetningen
- `instruction`: valgfri instruksjon
- `options`: svaralternativer
- `correctIndex`: indeks til riktig svar, der første alternativ er `0`
- `feedback`: forklaring som vises etter svar
- `source`: hvilket undervisningsmateriale oppgaven bygger på
- `tags`: stikkord som kan brukes senere til filtrering

### `data/quiz-config.js`

Her bestemmes hvilke kategorier som er aktive og hvor mange spørsmål fra hver kategori som skal trekkes i en runde.

Eksempel:

```js
vocabulary: {
  label: "Ordforråd",
  enabled: true,
  questionsPerRound: 10
}
```

Det gjør det enkelt å legge til nye kategorier senere. En ny kategori kan først legges inn med `enabled: false`, og skrus på når den skal tas i bruk.

## Videre utvidelser

Når nytt undervisningsmateriell er gjennomgått, kan oppgavebanken bygges ut med flere spørsmål og eventuelt nye kategorier uten at `app.js`, `index.html` eller designet må endres.

Mulige framtidige kategorier kan være bindeord, leddsetninger, verbbøying, substantiv/adjektiv eller andre temaer fra kurset.
