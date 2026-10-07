export interface GuideMeta { slug: string; title: string; desc: string }
/** Italian guides (also the canonical order and keys for all locales). */
export const guides: GuideMeta[] = [
  { slug: 'cos-e-il-codice-fiscale', title: 'Cos’è il codice fiscale e come funziona', desc: 'Definizione, chi lo assegna, a cosa serve e come è fatto.' },
  { slug: 'come-si-calcola-il-codice-fiscale', title: 'Come si calcola il codice fiscale: guida passo passo', desc: 'Le regole per cognome, nome, data, luogo e lettera di controllo, con esempi svolti.' },
  { slug: 'come-leggere-e-decodificare-un-codice-fiscale', title: 'Come leggere e decodificare un codice fiscale', desc: 'Cosa significa ogni gruppo di caratteri e come ricavare data, sesso e luogo.' },
  { slug: 'cos-e-il-codice-fiscale-inverso', title: 'Cos’è il codice fiscale inverso e cosa può dirti', desc: 'Quali dati si ricavano da un codice e perché nome e cognome restano fuori.' },
  { slug: 'cos-e-l-omocodia', title: 'Cos’è l’omocodia nel codice fiscale', desc: 'Perché due persone possono avere lo stesso codice e come cambia la sua forma.' },
  { slug: 'codice-belfiore', title: 'Codice Belfiore: cos’è e come trovarlo', desc: 'Il codice del luogo di nascita per comuni e Stati esteri, con esempi reali.' },
  { slug: 'codice-fiscale-per-cittadini-stranieri', title: 'Codice fiscale per cittadini stranieri e nati all’estero', desc: 'Come si scrive il luogo di nascita estero e come si richiede il codice.' },
  { slug: 'codice-fiscale-per-neonati', title: 'Codice fiscale per neonati: come funziona', desc: 'Attribuzione alla nascita, dati da usare e come controllare il codice.' },
  { slug: 'come-trovare-il-proprio-codice-fiscale', title: 'Come trovare il proprio codice fiscale', desc: 'Dove si legge, come recuperarlo e quando il calcolo non basta.' },
  { slug: 'verifica-formale-e-verifica-ufficiale', title: 'Verifica formale e verifica ufficiale del codice fiscale', desc: 'Cosa controlla un sito indipendente e cosa controlla l’Agenzia delle Entrate.' },
  { slug: 'quando-puo-cambiare-il-codice-fiscale', title: 'Quando può cambiare il codice fiscale', desc: 'Matrimonio, residenza, correzione dei dati e omocodia: cosa cambia e cosa no.' },
  { slug: 'errori-comuni-nel-codice-fiscale', title: 'Errori comuni nel codice fiscale e come evitarli', desc: 'Gli sbagli più frequenti nel calcolo a mano e negli strumenti online.' },
];
export const guideKeys = guides.map((g) => g.slug);
export const guidePath = (slug: string) => `/it/guide/${slug}/`;
