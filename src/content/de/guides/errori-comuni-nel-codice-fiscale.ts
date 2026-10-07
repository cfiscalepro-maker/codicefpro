import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "haeufige-fehler-codice-fiscale",
  "title": "Häufige Fehler beim Codice Fiscale | Codice Fiscale Pro",
  "h1": "Häufige Fehler beim Codice Fiscale und wie Sie sie vermeiden",
  "description": "Die häufigsten Fehler beim Berechnen oder Eintippen eines Codice Fiscale: Geschlecht, Monat, Ort, Nachname, Omocodia, mit Fehlertabelle.",
  "indexDesc": "Die häufigsten Fehler bei der Handberechnung und in Online-Werkzeugen.",
  "datePublished": "2026-10-05",
  "summary": "Die häufigsten Fehler sind: das +40 beim Tag der Frauen vergessen, Vor- und Nachname vertauschen, einen falschen Ortscode verwenden (zum Beispiel die falsche Spalte der Liste oder eine gleichnamige Gemeinde in einer anderen Provinz), den Buchstaben O mit der Ziffer 0 verwechseln und Omocodia übersehen. Eine formale Prüfung findet die ersten vier.",
  "audience": "alle, die einen Codice Fiscale von Hand berechnen, aus einem Dokument in ein Formular übertragen oder Software schreiben, die ihn erzeugt. Zu jedem Fehler zeigt der Ratgeber, wie man ihn erkennt und behebt.",
  "related": [
    "come-si-calcola-il-codice-fiscale",
    "codice-belfiore",
    "verifica-formale-e-verifica-ufficiale",
    "cos-e-l-omocodia"
  ],
  "faq": [
    {
      "q": "Was ist der häufigste Fehler bei der Handberechnung?",
      "a": "Das +40 beim Tag der Frauen zu vergessen oder Vor- und Nachname zu vertauschen. Beides fällt auf, wenn man die zwei Dreiergruppen von Buchstaben noch einmal liest."
    },
    {
      "q": "Warum weicht mein berechneter Code von der Gesundheitskarte ab?",
      "a": "Häufige Ursachen sind eine andere Schreibweise des Namens in den Dokumenten, ein falscher Geburtsort, der Name des Ehepartners oder ein von der Agenzia vergebener Omocodia-Code."
    },
    {
      "q": "Welche Buchstaben werden nie für den Monat verwendet?",
      "a": "F, G, I, N, O, Q, U, V, W, X, Y und Z kommen nie vor. Monate nutzen nur A, B, C, D, E, H, L, M, P, R, S, T."
    },
    {
      "q": "Wie prüfe ich einen Code nach der Berechnung?",
      "a": "Nutzen Sie die formale Prüfung für Strukturfehler und vergleichen Sie den Code mit der Gesundheitskarte. Für eine amtliche Prüfung gibt es den Dienst der Agenzia delle Entrate."
    }
  ],
  "body": "<h2>Was sind die häufigsten Fehler beim Berechnen eines Codice Fiscale?</h2>\n<p>Die Tabelle nennt die zehn häufigsten Fehler und wie man sie erkennt. Die Beispiele nutzen den Beispielcode <code>RSSMRA85T10H501O</code>.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Fehler</th><th>Woran man ihn erkennt</th><th>So vermeiden Sie ihn</th></tr></thead>\n<tbody>\n<tr><td>Vor- und Nachname vertauscht</td><td><code>MRA</code> steht vor <code>RSS</code></td><td>Die ersten drei Buchstaben sind der Nachname, die nächsten drei der Vorname</td></tr><tr><td>Kein +40 beim Tag einer Frau</td><td>Tag 01 bis 31 bei einer Frau</td><td>Bei Frauen 40 addieren: Tag 5 wird 45</td></tr><tr><td>Falscher Monatsbuchstabe</td><td>Buchstaben wie F, G, I, N, O, Q an Stelle 9</td><td>Nur A, B, C, D, E, H, L, M, P, R, S, T verwenden</td></tr><tr><td>Wohnort statt Geburtsort</td><td>Code weicht von der Geburtsgemeinde ab</td><td>Immer den Geburtsort verwenden</td></tr><tr><td>Falsche Spalte in der Gemeindeliste</td><td>Ein Code wie <code>M1AA</code> statt <code>H501</code></td><td>„Codice Nazionale“ verwenden, nicht „Codice Catastale“</td></tr><tr><td>Gleichnamige Gemeinde in anderer Provinz</td><td>Castro: <code>C337</code> (BG) oder <code>M261</code> (LE)</td><td>Auch die Provinz wählen</td></tr><tr><td>Name des Ehepartners verwendet</td><td>Code weicht von der Gesundheitskarte ab</td><td>Den Geburtsnamen verwenden</td></tr><tr><td>Apostrophe, Leerzeichen und Umlaute falsch behandelt</td><td>O’Connor ergibt nicht <code>CNN</code></td><td>Apostrophe, Leerzeichen und Akzente ignorieren, Umlaute als Grundbuchstaben</td></tr><tr><td>O statt 0 oder umgekehrt</td><td>Prüfbuchstabe O gegen Ziffer 0 in Zahlenfeldern</td><td>Das Prüfzeichen ist immer ein Buchstabe</td></tr><tr><td>Omocodia übersehen</td><td>Buchstaben an Stellen, die sonst Ziffern enthalten</td><td>Gesundheitskarte ansehen und <a href=\"{{g:cos-e-l-omocodia}}\">Was ist Omocodia?</a> lesen</td></tr>\n</tbody></table></div>\n\n<h2>Warum weicht mein berechneter Code von dem auf der Gesundheitskarte ab?</h2>\n<p>Die häufigsten Gründe sind die Schreibweise der Daten und Omocodia. <a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (auf Italienisch) nennt Leerzeichen, Apostrophe, Doppelnamen, Sonderzeichen und Geburt im Ausland unter den Ursachen. Ein Code mit Buchstaben, wo Ziffern stehen müssten, ist eine Omocodia-Variante.</p>\n\n<h2>Wie prüft man einen Code nach der Berechnung?</h2>\n<p>Prüfen Sie in drei Schritten, vom schnellsten zum sichersten.</p>\n<ol>\n<li>Lassen Sie ihn durch die <a href=\"{{p:verify}}\">Prüfung</a> laufen: Sie findet falschen Aufbau, falsches Datum und falschen Prüfbuchstaben.</li>\n<li>Lesen Sie ihn mit dem <a href=\"{{p:inverse}}\">Decoder</a>, um zu sehen, dass Geschlecht, Datum und Ort den Erwartungen entsprechen.</li>\n<li>Vergleichen Sie ihn mit Ihrer Gesundheitskarte oder dem <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">Dienst der Agenzia delle Entrate</a> (auf Italienisch).</li>\n</ol>\n\n<h2>Welche Fehler findet eine formale Prüfung und welche nicht?</h2>\n<p>Sie findet falschen Aufbau, unmögliche Monate oder Tage und einen falschen Prüfbuchstaben. Nicht findet sie einen falschen, aber plausiblen Ort, einen anders geschriebenen Namen oder einen Code, den niemand besitzt. Dafür brauchen Sie ein amtliches Dokument. Siehe <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">Formale und amtliche Prüfung</a>.</p>\n\n<h2>Quellen</h2>\n<ul>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (Italienisch): Fehler und Abweichungen bei den Daten.</li>\n<li><a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (Italienisch): Liste der Gemeinden und Staaten.</li>\n</ul>"
};
export default g;
