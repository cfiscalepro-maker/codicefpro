import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "formale-und-amtliche-pruefung",
  "title": "Formale und amtliche Prüfung des Codice Fiscale | Codice Fiscale Pro",
  "h1": "Formale Prüfung und amtliche Prüfung des Codice Fiscale",
  "description": "Unterschied zwischen formaler Prüfung (Aufbau, Prüfbuchstabe) und amtlicher Prüfung der Agenzia delle Entrate: was jede testet und wann Sie welche nutzen.",
  "indexDesc": "Was eine unabhängige Website prüft und was die Agenzia delle Entrate prüft.",
  "datePublished": "2026-10-05",
  "summary": "Eine formale Prüfung testet, ob ein Codice Fiscale korrekt aufgebaut ist: Länge, Zeichen, Datum, Geschlecht, Format des Ortes und Prüfbuchstabe. Die amtliche Prüfung der Agenzia delle Entrate gleicht den Code mit dem Steuerregister ab. Eine formale Prüfung des Codice Fiscale ist nicht mit der amtlichen Prüfung der Agenzia delle Entrate gleichzusetzen.",
  "audience": "alle, die einen Code vor der Verwendung in Formular, Vertrag oder Datenbank prüfen müssen, und alle, die sich fragen, warum ein positives Online-Ergebnis nicht reicht. Auch nützlich für Entwicklerinnen und Entwickler, die eine Validierung schreiben.",
  "related": [
    "cos-e-il-codice-fiscale-inverso",
    "cos-e-l-omocodia",
    "errori-comuni-nel-codice-fiscale",
    "come-trovare-il-proprio-codice-fiscale"
  ],
  "faq": [
    {
      "q": "Ist ein formal korrekter Codice Fiscale immer gültig?",
      "a": "Nein. Er kann Aufbau und Prüfbuchstaben richtig haben, ohne je vergeben worden zu sein. Nur das Steuerregister kann sagen, ob er existiert."
    },
    {
      "q": "Ist die Prüfung auf dieser Website amtlich?",
      "a": "Nein. Codice Fiscale Pro ist unabhängig und nicht mit der Agenzia delle Entrate verbunden. Unsere Prüfung ist formal und sagt das in jedem Ergebnis."
    },
    {
      "q": "Wo erfolgt die amtliche Prüfung?",
      "a": "Beim Prüfdienst für den Codice Fiscale der Agenzia delle Entrate, der den Code mit dem Steuerregister abgleicht. Der Link steht auf dieser Seite."
    },
    {
      "q": "Wann genügt die formale Prüfung?",
      "a": "Wenn Sie einen Tipp- oder Rechenfehler vor dem Absenden eines Formulars finden wollen. Hat der Code rechtliche oder steuerliche Folgen, nutzen Sie zusätzlich die amtliche Prüfung."
    }
  ],
  "body": "<h2>Was testet eine formale Prüfung?</h2>\n<p>Sie testet die innere Stimmigkeit des Codes, ohne eine Datenbank zu befragen. Die <a href=\"{{p:verify}}\">Prüfung</a> auf dieser Website umfasst:</p>\n<ul>\n<li>16 Zeichen, mit Buchstaben und Ziffern an den vorgesehenen Stellen;</li>\n<li>einen gültigen Monatsbuchstaben (A, B, C, D, E, H, L, M, P, R, S, T);</li>\n<li>einen zum Monat passenden Tag und ein passendes Geschlecht;</li>\n<li>das Format des Ortscodes, ein Buchstabe und drei Ziffern;</li>\n<li>einen korrekten Prüfbuchstaben, neu berechnet aus den ersten 15 Zeichen;</li>\n<li>Omocodia: die Buchstaben L, M, N, P, Q, R, S, T, U, V anstelle von Ziffern werden akzeptiert.</li>\n</ul>\n\n<h2>Was testet die amtliche Prüfung der Agenzia?</h2>\n<p>Der <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">Dienst der Agenzia delle Entrate</a> (auf Italienisch) gleicht den Code mit den Daten im Steuerregister ab und kann auch prüfen, ob er zu den Personendaten passt. Bei seiner Einführung beschrieb <a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (23. April 2014, auf Italienisch) ihn als nützlich bei Omocodia und für Personen, die in an andere Staaten abgetretenen Gemeinden geboren wurden. Die heutigen Funktionen können abweichen, lesen Sie daher die Seite des Dienstes.</p>\n\n<h2>Worin unterscheiden sich die beiden?</h2>\n<p>Die formale Prüfung betrachtet, wie der Code geschrieben ist. Die amtliche Prüfung betrachtet, ob der Code existiert und wem er gehört.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Frage</th><th>Formale Prüfung</th><th>Amtliche Prüfung</th></tr></thead>\n<tbody>\n<tr><td>Ist der Code richtig geschrieben?</td><td>Ja</td><td>Ja</td></tr><tr><td>Stimmt der Prüfbuchstabe?</td><td>Ja</td><td>Ja</td></tr><tr><td>Wurde der Code jemandem zugewiesen?</td><td>Nein</td><td>Ja</td></tr><tr><td>Passt er zu Name und Geburtsdatum?</td><td>Nein</td><td>Ja, mit den eingegebenen Daten</td></tr><tr><td>Berücksichtigt sie aufgelöste und abgetretene Gemeinden?</td><td>Nur wenn der Code in unserer Liste steht</td><td>Ja</td></tr><tr><td>Ist sie amtlich?</td><td>Nein</td><td>Ja</td></tr>\n</tbody></table></div>\n\n<h2>Kann ein Code die formale Prüfung bestehen und trotzdem nicht existieren?</h2>\n<p>Ja. <code>RSSMRA85T10H501O</code> besteht die formale Prüfung, ist aber ein Beispielcode aus unseren Ratgebern. Jede plausible Kombination von Angaben ergibt einen formal richtigen Code, auch wenn ihn niemand besitzt.</p>\n\n<h2>Wann nutzt man welche?</h2>\n<p>Eine kurze Regel:</p>\n<ol>\n<li>Um einen Tipp- oder Rechenfehler zu finden, beginnen Sie mit der formalen Prüfung: Sie ist sofort da und läuft in Ihrem Browser.</li>\n<li>Bevor Sie den Code in einem Rechtsgeschäft, einem Vertrag oder einer Steuererklärung verwenden, prüfen Sie ihn zusätzlich amtlich.</li>\n<li>Hat der Code Buchstaben anstelle von Ziffern oder wurde die Person in einer aufgelösten oder abgetretenen Gemeinde geboren, nutzen Sie die amtliche Prüfung.</li>\n</ol>\n\n<h2>Wie sind Ihre Daten bei der Prüfung geschützt?</h2>\n<p>Unser Werkzeug verarbeitet den Code in Ihrem Browser und sendet ihn weder an einen Server noch an Analytics. Auf der Website der Agenzia verarbeitet die Agenzia selbst die Daten. Codice Fiscale Pro ist unabhängig und nicht mit der Agenzia delle Entrate verbunden. Siehe die <a href=\"{{p:privacy}}\">Datenschutzerklärung</a>.</p>\n\n<h2>Quellen</h2>\n<ul>\n<li><a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (Italienisch): Prüfdienst für den Codice Fiscale.</li>\n<li><a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (Italienisch): Beschreibung des Dienstes bei der Einführung, 23. April 2014.</li>\n</ul>"
};
export default g;
