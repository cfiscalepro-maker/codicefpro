import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "codice-fiscale-rueckwaerts",
  "title": "Codice Fiscale rückwärts: Was der Code verrät | Codice Fiscale Pro",
  "h1": "Codice Fiscale rückwärts: Was ein Code verrät",
  "description": "Codice Fiscale rückwärts: Geschlecht, Geburtsdatum und Geburtsort auslesen. Warum kein Name herauskommt und was die amtliche Prüfung anders macht.",
  "indexDesc": "Welche Daten ein Code verrät und warum Vor- und Nachname nicht rekonstruierbar sind.",
  "datePublished": "2026-10-05",
  "summary": "Die Rückwärtssuche liest einen vorhandenen Codice Fiscale und liefert die enthaltenen Daten: Geschlecht, Tag und Monat der Geburt, die letzten zwei Ziffern des Jahres und den Geburtsort. Einen Vor- oder Nachnamen liefert sie nicht, denn die ersten sechs Buchstaben passen zu vielen Namen: RSS passt zu Rossi, Rosso und Ross, MRA zu Mario, Mauro und Maria.",
  "audience": "alle, die wissen wollen, was ein Code aussagt, etwa um ein ausgefülltes Formular oder einen Datensatz zu prüfen. Unbekannte Personen lassen sich damit nicht identifizieren, das erlaubt der Code nicht.",
  "related": [
    "cos-e-il-codice-fiscale",
    "come-leggere-e-decodificare-un-codice-fiscale",
    "cos-e-l-omocodia",
    "verifica-formale-e-verifica-ufficiale"
  ],
  "faq": [
    {
      "q": "Verrät die Rückwärtssuche Vor- und Nachname?",
      "a": "Nein. Die ersten sechs Buchstaben stammen aus Konsonanten und Vokalen von Nach- und Vorname, und verschiedene Namen ergeben dieselben Buchstaben. Man kann Vermutungen anstellen, aber die Daten nicht zurückgewinnen."
    },
    {
      "q": "Was lässt sich sicher ablesen?",
      "a": "Geschlecht, Tag und Monat der Geburt, die letzten zwei Ziffern des Jahres und der Code der Gemeinde oder des Staates der Geburt. Mit der Gemeindeliste ergibt der Code den Ortsnamen."
    },
    {
      "q": "Ist die Rückwärtssuche amtlich?",
      "a": "Nein. Sie liest die Struktur des Codes. Ob ein Code existiert und zu einer Person passt, klärt der Dienst der Agenzia delle Entrate."
    },
    {
      "q": "Ist es sicher, einen Codice Fiscale in eine Entschlüsselungsseite einzugeben?",
      "a": "Das hängt von der Seite ab. Bevorzugen Sie Werkzeuge, die im Browser arbeiten und die Daten nicht senden, wie dieses, und geben Sie fremde Codes nicht ohne Grund ein."
    }
  ],
  "body": "<h2>Was ist die Rückwärtssuche beim Codice Fiscale?</h2>\n<p>Es ist die Berechnung, die von einem Code ausgeht und zu den Personendaten zurückführt, aus denen er entstand: das Gegenteil der <a href=\"{{g:come-si-calcola-il-codice-fiscale}}\">normalen Berechnung</a>. Wer danach sucht, möchte meist Geburtsdatum, Geschlecht und Geburtsgemeinde wissen.</p>\n\n<h2>Welche Daten liefert die Rückwärtssuche?</h2>\n<p>Sicher liefert sie Geschlecht, Tag, Monat, die letzten zwei Ziffern des Jahres und den Code des Geburtsortes, den die <a href=\"{{p:inverse}}\">Liste der Gemeinden und Staaten</a> in einen Ortsnamen übersetzt. Sie zeigt auch, ob der Code eine Omocodia-Variante ist.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Angabe</th><th>Ablesbar?</th><th>Hinweis</th></tr></thead>\n<tbody>\n<tr><td>Geschlecht</td><td>Ja</td><td>Ein Tag über 40 bedeutet Frau</td></tr><tr><td>Tag und Monat der Geburt</td><td>Ja</td><td>Der Monatsbuchstabe muss übersetzt werden</td></tr><tr><td>Geburtsjahr</td><td>Teilweise</td><td>Nur zwei Ziffern, das Jahrhundert bleibt offen</td></tr><tr><td>Geburtsort</td><td>Ja</td><td>Aus dem Belfiore-Code, wenn er in der Liste steht</td></tr><tr><td>Nach- und Vorname</td><td>Nein</td><td>Nur Vermutungen</td></tr>\n</tbody></table></div>\n\n<h2>Warum lassen sich Vor- und Nachname nicht zurückgewinnen?</h2>\n<p>Die ersten sechs Buchstaben nutzen Konsonanten und, wenn nötig, Vokale, sodass viele Namen dasselbe Ergebnis liefern. Rossi, Rosso und Ross ergeben alle <code>RSS</code>. Mario, Mauro und Maria ergeben alle <code>MRA</code>. Manche Quellen sprechen von guten Chancen, den Vornamen zu erraten (<a href=\"https://lentepubblica.it/contabilita-bilancio-tasse-tributi/codice-fiscale-inverso-cose-a-cosa-serve-e-come-si-calcola/\" rel=\"noopener noreferrer\" lang=\"it\">Lentepubblica.it</a>, auf Italienisch), es bleibt aber eine Vermutung, und beim Nachnamen ist es schwieriger.</p>\n\n<h2>Wie nutzt man die Rückwärtssuche?</h2>\n<p>Sie geben den Code im Decoder ein und lesen das Ergebnis, in drei Schritten.</p>\n<ol>\n<li>Öffnen Sie den <a href=\"{{p:inverse}}\">Decoder</a>.</li>\n<li>Geben Sie die 16 Zeichen ein, auch mit Buchstaben anstelle einiger Ziffern.</li>\n<li>Lesen Sie Geschlecht, Datum, Ort und Belfiore-Code und beachten Sie das Ergebnis der formalen Prüfung.</li>\n</ol>\n<p>Passen zwei Jahre zu den zwei Ziffern, etwa 2005 und 1905, zeigt das Werkzeug beide, und Sie wählen das plausible.</p>\n\n<h2>Ist die Rückwärtssuche eine amtliche Prüfung?</h2>\n<p>Nein. Das Entschlüsseln liest die Struktur des Codes. Es sagt nicht, ob der Code vergeben wurde und an wen. Dazu siehe <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">Formale und amtliche Prüfung</a> und den <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">Dienst der Agenzia delle Entrate</a> (auf Italienisch).</p>\n\n<h2>Wie schützt man die Privatsphäre beim Entschlüsseln?</h2>\n<p>Ein Codice Fiscale ist ein personenbezogenes Datum. Unser Werkzeug verarbeitet ihn in Ihrem Browser und sendet ihn weder an einen Server noch an Google Analytics. Prüfen Sie bei anderen Seiten, wie sie die Daten behandeln, und geben Sie fremde Codes nicht ohne konkreten Grund ein.</p>\n\n<h2>Quellen</h2>\n<ul>\n<li><a href=\"https://lentepubblica.it/contabilita-bilancio-tasse-tributi/codice-fiscale-inverso-cose-a-cosa-serve-e-come-si-calcola/\" rel=\"noopener noreferrer\" lang=\"it\">Lentepubblica.it</a> (Italienisch): ablesbare Daten und Grenzen der Rückwärtsberechnung.</li>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (Italienisch): Regeln für die Buchstaben.</li>\n</ul>"
};
export default g;
