# B2-kviss

En enkel, mobiltilpasset repetisjonsside for deltakere på norskkurs B2.

## Forsiden

Nettsida har tre innganger:

1. **Tilfeldig kviss** – 20 spørsmål: 10 ordforråd + 10 grammatikk.
2. **Ord og uttrykk** – alfabetisk, søkbar ordoversikt med temafiltre og filter for siste undervisning.
3. **Grammatikk** – øving på hele grammatikkbanken i tilfeldig rekkefølge.

## Oppgavebanken

Spørsmålene ligger i `data/` og lastes før `app.js`. Ordoversikten bruker de samme ordforrådsoppgavene som kvissen, slik at definisjonene ikke må vedlikeholdes i en egen liste.

Hver oppgave har blant annet:

- `id`: unik ID
- `category`: `vocabulary` eller `grammar`
- `subtype`: mer spesifikk oppgavetype
- `grammarType`: for grammatikk, for eksempel `v2`, `det`, `ikke` eller `setningsadverbial`
- `prompt`: selve spørsmålet eller utgangssetningen
- `instruction`: valgfri instruksjon
- `options`: svaralternativer
- `correctIndex`: indeks til riktig svar, der første alternativ er `0`
- `feedback`: forklaring som vises etter svar; brukes også som definisjon i ordoversikten når `definition` ikke er satt
- `source`: hvilket undervisningsmateriale oppgaven bygger på
- `tags`: brukes blant annet til filtrering i ordoversikten

Ordoppgaver kan i tillegg få feltene `term`, `definition` og `example`. Hvis de ikke finnes, henter ordoversikten ordet fra anførselstegn i `prompt` og bruker `feedback` som forklaring.

## Tilfeldig kviss

Fordelingen styres i `data/quiz-config.js`. Kvissen består nå av:

- 10 ordforrådsspørsmål
- 10 grammatikkspørsmål

Grammatikkdelen trekker et bestemt antall fra ulike undertyper. Dette kan endres uten å bygge om resten av sida.

## Ord og uttrykk

Ordoversikten kan:

- søke i ord, definisjoner, kilder og tags
- vise ordene alfabetisk
- filtrere på arbeidsliv/studier, samfunn/historie, litteratur/sanger og uttrykk
- finne siste undervisning automatisk fra datotagger som `18. september`

## Resultater

Resultatsida viser vanlig poengsum og gir ett symbol per riktig svar:

- 🐟 ordforråd
- 🐑 grammatikk

## Videre utvidelser

Nye ord og grammatikkoppgaver kan legges til fortløpende. Aktuelle senere utvidelser er flere grammatikkundertyper, eksempelsetninger i ordoversikten og øving på enkeltord direkte fra ordkortene.
