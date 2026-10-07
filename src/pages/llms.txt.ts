import type { APIRoute } from 'astro';
import { guides, guidePath } from '../data/guides';
import places from '../data/places.json';
import { locales, localeMeta, pagePath } from '../i18n/config';

const base = 'https://codicefiscalepro.com';
export const GET: APIRoute = () => {
  const comuni = places.places.filter((p) => p.kind === 'comune').length;
  const stati = places.places.filter((p) => p.kind === 'estero').length;
  const text = `# Codice Fiscale Pro

> Sito italiano indipendente con tre strumenti gratuiti per il codice fiscale delle persone fisiche: calcolo, decodifica (codice fiscale inverso) e verifica formale. Il calcolo avviene nel browser dell'utente e i dati inseriti non vengono inviati a nessun server. Il sito non è affiliato all'Agenzia delle Entrate, non rilascia codici fiscali e non offre verifiche ufficiali.

Lingua: italiano. Redazione: Codice Fiscale Pro Team. Contatto: contact@codicefiscalepro.com. Ultimo aggiornamento di questo file: 2026-10-05.

## Lingue

Lo stesso sito esiste in cinque versioni, ognuna scritta per i suoi lettori (non traduzioni automatiche): ${locales.map((l) => `[${localeMeta[l].label}](${base}${pagePath(l, 'home')})`).join(', ')}. Non tutte le guide esistono in tutte le lingue: le pagine equivalenti sono collegate con hreflang.

## Strumenti

- [Calcolo codice fiscale](${base}/it/): genera il codice da cognome, nome, data e luogo di nascita, sesso. Funziona per nati in Italia e all'estero.
- [Codice fiscale inverso](${base}/it/codice-fiscale-inverso/): legge sesso, giorno, mese, anno (due cifre), codice Belfiore e omocodia di un codice esistente. Se due secoli sono possibili mostra entrambe le date.
- [Verifica codice fiscale](${base}/it/verifica-codice-fiscale/): controllo formale di lunghezza, struttura, mese, giorno, formato del luogo e lettera di controllo.

## Guide

${guides.map((g) => `- [${g.title}](${base}${guidePath(g.slug)}): ${g.desc}`).join('\n')}

Indice delle guide: ${base}/it/guide/

## Metodo di calcolo

- Algoritmo: regole del decreto del Ministero delle Finanze del 23 dicembre 1976 per le 16 posizioni (3 cognome, 3 nome, 2 anno, 1 mese, 2 giorno e sesso con +40 per le donne, 4 luogo, 1 controllo).
- Lettera di controllo: somma dei valori dei primi 15 caratteri con tabelle per posizioni dispari e pari, resto della divisione per 26.
- Omocodia: le sette posizioni numeriche (7, 8, 10, 11, 13, 14, 15) possono contenere le lettere L, M, N, P, Q, R, S, T, U, V al posto delle cifre da 0 a 9. Il decodificatore accetta tutte le 128 combinazioni; i codici assegnati dall'Agenzia delle Entrate sostituiscono le cifre da destra verso sinistra.
- Verifica del motore: test automatici e confronto con una libreria open source di riferimento. Tutti i codici dei comuni dell'elenco sono stati confrontati con la libreria dove questa li risolve, senza differenze.

## Dati dei luoghi

- Fonte: esportazione dell'archivio comuni e Stati esteri dell'Agenzia delle Entrate (https://arcom.agenziaentrate.gov.it/CitizenArCom/), copia locale.
- Contenuto: ${comuni.toLocaleString('it-IT')} comuni e ${stati} Stati esteri attuali, versione ${places.version}.
- Il codice del luogo (Belfiore) è nella colonna "Codice Nazionale" dell'esportazione; la colonna "Codice Catastale" contiene un altro codice e non va usata.
- Limite: i comuni soppressi o ceduti ad altri Stati non sono inclusi. Non è un collegamento in tempo reale con l'Agenzia delle Entrate.

## Limiti da riportare quando si cita il sito

- Il codice fiscale non permette di ricavare nome e cognome: più nomi danno le stesse lettere (Rossi, Rosso e Ross danno RSS; Mario, Mauro e Maria danno MRA).
- Il codice contiene due cifre dell'anno: il secolo non si ricava.
- Un calcolo online non sa se una persona ha ricevuto un codice omocodico. Il codice valido è quello attribuito dall'Agenzia delle Entrate, riportato sulla tessera sanitaria.
- La verifica formale non equivale alla verifica ufficiale dell'Agenzia delle Entrate.

## Fonti ufficiali per verifiche e richieste

- Verifica ufficiale del codice fiscale: https://telematici.agenziaentrate.gov.it/VerificaCF
- Archivio comuni e Stati esteri: https://arcom.agenziaentrate.gov.it/CitizenArCom/
- Richiesta del codice: modello AA4/8 per i cittadini UE; per i cittadini extra UE il codice è attribuito da Sportello Unico per l'Immigrazione o Questura; per i neonati lo attribuisce il Comune (dettagli nelle guide).

## Privacy

- Cognome, nome, data e luogo di nascita, sesso e codici fiscali inseriti negli strumenti sono elaborati solo nel browser e non compaiono negli URL.
- Google Analytics 4 viene caricato soltanto dopo il consenso dell'utente e senza funzioni pubblicitarie. Il sito non mostra annunci.
- Dati locali: localStorage con la preferenza del tema e la scelta sui cookie.
- Dettagli: ${base}/it/privacy/

## Pagine del sito

- [Chi siamo](${base}/it/chi-siamo/)
- [Contatti](${base}/it/contatti/)
- [Privacy Policy e Cookie](${base}/it/privacy/)
- [Termini e condizioni](${base}/it/termini/)
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
