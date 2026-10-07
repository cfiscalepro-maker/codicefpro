import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "codice-fiscale-lesen-und-entschluesseln",
  "title": "Codice Fiscale lesen und entschlüsseln | Codice Fiscale Pro",
  "h1": "Codice Fiscale lesen und entschlüsseln",
  "description": "So lesen Sie einen Codice Fiscale: Bedeutung der 16 Zeichen, Geburtsdatum, Geschlecht und Geburtsort ablesen und was der Code nicht verrät.",
  "indexDesc": "Was jede Zeichengruppe bedeutet und wie Sie Datum, Geschlecht und Ort ablesen.",
  "datePublished": "2026-10-05",
  "summary": "Um einen Codice Fiscale zu lesen, teilen Sie die 16 Zeichen in Gruppen: Stellen 1-6 stammen aus Nach- und Vorname, 7-8 sind das Jahr, 9 der Monat, 10-11 Tag und Geschlecht (bei Frauen plus 40), 12-15 der Geburtsort und 16 der Prüfbuchstabe. Aus MLLKHR88P61Z112O lesen Sie: eine Frau, geboren am 21. September 1988 in Deutschland (Z112).",
  "audience": "alle, die einen Codice Fiscale vor sich haben und wissen wollen, was er sagt: Beschäftigte, die eine Gehaltsabrechnung prüfen, Menschen, die Formulare ausfüllen, Entwickler. Zum automatischen Entschlüsseln nutzen Sie den Decoder.",
  "related": [
    "cos-e-il-codice-fiscale-inverso",
    "cos-e-l-omocodia",
    "codice-belfiore",
    "come-si-calcola-il-codice-fiscale"
  ],
  "faq": [
    {
      "q": "Woran erkenne ich, ob ein Codice Fiscale zu einem Mann oder einer Frau gehört?",
      "a": "Schauen Sie auf die Stellen 10 und 11. Eine Zahl von 01 bis 31 bedeutet Mann, eine Zahl von 41 bis 71 bedeutet Frau, und der Geburtstag ist die Zahl minus 40."
    },
    {
      "q": "Welcher Buchstabe steht für den Monat?",
      "a": "Stelle 9: A Januar, B Februar, C März, D April, E Mai, H Juni, L Juli, M August, P September, R Oktober, S November, T Dezember."
    },
    {
      "q": "Warum hat mein Code Buchstaben, wo ich Ziffern erwarte?",
      "a": "Das deutet auf Omocodia hin. Eine oder mehrere der sieben Ziffern nach den ersten sechs Buchstaben sind durch Buchstaben aus L, M, N, P, Q, R, S, T, U, V ersetzt, die für die Ziffern 0 bis 9 stehen."
    },
    {
      "q": "Kann ich das vollständige Geburtsjahr ablesen?",
      "a": "Der Code enthält nur die letzten zwei Ziffern. Ein Code mit 88 kann zu einer Person von 1988 oder von 1888 gehören, Sie wählen also das plausible Datum."
    }
  ],
  "body": "<h2>Wie liest man einen Codice Fiscale Zeichen für Zeichen?</h2>\n<p>Man liest ihn in Gruppen, immer in derselben Reihenfolge. Nehmen wir <code>MLLKHR88P61Z112O</code>.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Stellen</th><th>Gruppe</th><th>Bedeutung</th></tr></thead>\n<tbody>\n<tr><td>1-3</td><td><code>MLL</code></td><td>Buchstaben aus dem Nachnamen</td></tr><tr><td>4-6</td><td><code>KHR</code></td><td>Buchstaben aus dem Vornamen</td></tr><tr><td>7-8</td><td><code>88</code></td><td>Geburtsjahr: 88</td></tr><tr><td>9</td><td><code>P</code></td><td>Monat: September</td></tr><tr><td>10-11</td><td><code>61</code></td><td>Tag 61 minus 40 gleich 21, weiblich</td></tr><tr><td>12-15</td><td><code>Z112</code></td><td>Geburtsort: Deutschland</td></tr><tr><td>16</td><td><code>O</code></td><td>Prüfbuchstabe</td></tr>\n</tbody></table></div>\n\n<h2>Wie ermittelt man Geburtsdatum und Geschlecht?</h2>\n<p>Nutzen Sie die Stellen 7 bis 11. Die ersten zwei Ziffern sind das Jahr, der Buchstabe der Monat und die letzten zwei Ziffern der Tag. Ist die Tageszahl größer als 40, handelt es sich um eine Frau, und der echte Tag ist die Zahl minus 40. Beispiel: <code>79A05</code> in <code>SCHJNN79A05Z102N</code> bedeutet 1979, Januar, Tag 5, männlich.</p>\n\n<h2>Wie findet man den Geburtsort?</h2>\n<p>Die Stellen 12 bis 15 enthalten den Belfiore-Code. Ein Buchstabe mit drei Ziffern steht für eine italienische Gemeinde, zum Beispiel <code>F205</code> für Mailand. Ein Code mit Z am Anfang steht für einen ausländischen Staat, zum Beispiel <code>Z112</code> für Deutschland, <code>Z102</code> für Österreich oder <code>Z133</code> für die Schweiz. Schlagen Sie ihn mit unserem <a href=\"{{p:inverse}}\">Decoder</a> nach oder lesen Sie den Ratgeber zum <a href=\"{{g:codice-belfiore}}\">Belfiore-Code</a>.</p>\n\n<h2>Was verraten die ersten sechs Buchstaben?</h2>\n<p>Es sind Konsonanten und Vokale, die nach einer festen Regel ausgewählt werden, daher ergeben mehrere Nach- oder Vornamen dieselben Buchstaben. <code>RSS</code> passt zu Rossi, Rosso und Ross. <code>MRA</code> passt zu Mario, Mauro und Maria. Aus den sechs Buchstaben lassen sich Vermutungen bilden, aber weder Vor- noch Nachname lassen sich zurückgewinnen.</p>\n\n<h2>Woran erkennt man einen Omocodia-Code?</h2>\n<p>In einem Code ohne Omocodia sind die Stellen 7, 8, 10, 11, 13, 14 und 15 Ziffern. Steht an einer von ihnen ein Buchstabe aus L, M, N, P, Q, R, S, T, U, V, ist der Code eine Omocodia-Variante. Die ursprüngliche Ziffer ergibt sich aus der Zuordnung L = 0, M = 1, N = 2, P = 3, Q = 4, R = 5, S = 6, T = 7, U = 8, V = 9. Siehe <a href=\"{{g:cos-e-l-omocodia}}\">Was ist Omocodia?</a></p>\n\n<h2>Was lässt sich aus einem Codice Fiscale nicht ablesen?</h2>\n<p>Nicht ablesen lassen sich der vollständige Name, das Jahrhundert der Geburt und ob der Code wirklich an eine Person vergeben wurde. Die ersten beiden ergeben sich aus dem Aufbau des Codes; für das letzte brauchen Sie die <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">amtliche Prüfung</a>.</p>\n\n<h2>Quellen</h2>\n<ul>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (Italienisch): Aufbau der 16 Zeichen.</li>\n<li><a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (Italienisch): Lesen des Codes und Omocodia.</li>\n</ul>"
};
export default g;
