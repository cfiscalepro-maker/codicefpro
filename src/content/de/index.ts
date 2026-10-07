import type { LocaleContent } from '../../i18n/content';
const AGENCY_VERIFY = 'https://telematici.agenziaentrate.gov.it/VerificaCF';
const content: LocaleContent = {
  home: {
    title: 'Codice Fiscale berechnen: italienische Steuernummer | Codice Fiscale Pro',
    description: 'Codice Fiscale kostenlos berechnen: für in Italien oder im Ausland Geborene, mit Omocodia. Die Berechnung läuft im Browser, ohne Datenübertragung.',
    eyebrow: 'Kostenlos · Ohne Registrierung',
    h1: 'Codice Fiscale online berechnen',
    intro: 'Der Codice Fiscale ist die italienische Steuernummer. Geben Sie Ihre Personendaten ein und erhalten Sie den Code. Die Berechnung läuft in Ihrem Browser: Name, Geburtsdatum und Geburtsort werden an keinen Server gesendet.',
    afterTool: 'Weitere Werkzeuge: <a class="text-link underline" href="{{p:inverse}}">Codice Fiscale entschlüsseln</a> und <a class="text-link underline" href="{{p:verify}}">Codice Fiscale prüfen</a>. Sie möchten die Regeln verstehen? Lesen Sie, <a class="text-link underline" href="{{g:come-si-calcola-il-codice-fiscale}}">wie der Codice Fiscale berechnet wird</a>.',
  },
  inverse: {
    title: 'Codice Fiscale entschlüsseln: Rückwärtssuche online | Codice Fiscale Pro',
    description: 'Codice Fiscale entschlüsseln: Geburtsdatum, Geschlecht, Geburtsort und Omocodia aus dem Code lesen. Im Browser, ohne Datenübertragung.',
    eyebrow: 'Entschlüsseln', h1: 'Codice Fiscale entschlüsseln: Rückwärtssuche online',
    intro: 'Geben Sie einen Codice Fiscale ein, um die enthaltenen Daten zu lesen: Geschlecht, Geburtsdatum, Geburtsort und Omocodia. Die Auswertung läuft in Ihrem Browser.',
    body: `<h2>Was sich nicht ermitteln lässt</h2>
<p>Die Rückwärtssuche liefert keinen Vor- und Nachnamen. Die ersten sechs Buchstaben entstehen nach einer festen Regel aus den Konsonanten und Vokalen von Nach- und Vorname, und verschiedene Namen ergeben dieselben Buchstaben. Außerdem enthält der Code nur zwei Ziffern des Geburtsjahres, sodass das Jahrhundert offen bleibt, wenn zwei Jahre infrage kommen.</p>
<h2>Entschlüsseln und amtliche Prüfung</h2>
<p>Diese Seite liest die Struktur des Codes. Sie fragt nicht bei der Agenzia delle Entrate an und kann nicht sagen, ob der Code jemals vergeben wurde. Dafür gibt es die <a href="{{p:verify}}">formale Prüfung</a> und, für eine amtliche Antwort, den Dienst der Agenzia selbst. Um einen Code zu erzeugen, nutzen Sie den <a href="{{p:home}}">Codice-Fiscale-Rechner</a>. Der Ratgeber <a href="{{g:cos-e-il-codice-fiscale-inverso}}">Was ist der umgekehrte Codice Fiscale?</a> erklärt die Grenzen genauer.</p>`,
  },
  verify: {
    title: 'Codice Fiscale prüfen: formale Kontrolle | Codice Fiscale Pro',
    description: 'Codice Fiscale prüfen: Länge, Datum, Prüfzeichen und Omocodia. Eine formale Kontrolle, keine amtliche Prüfung.',
    eyebrow: 'Formale Prüfung', h1: 'Codice Fiscale prüfen',
    intro: 'Prüfen Sie, ob ein Codice Fiscale korrekt aufgebaut ist. Eine formale Prüfung des Codice Fiscale ist nicht mit der amtlichen Prüfung der Agenzia delle Entrate gleichzusetzen.',
    body: `<h2>Was wir prüfen</h2>
<ul>
<li>16 Zeichen, mit Buchstaben und Ziffern an den vorgesehenen Stellen.</li>
<li>Gültiger Monatsbuchstabe sowie Tag und Geschlecht, die zum Monat passen.</li>
<li>Das Format des Ortscodes.</li>
<li>Ein korrektes Prüfzeichen.</li>
<li>Omocodia: Buchstaben anstelle von Ziffern werden akzeptiert.</li>
</ul>
<h2>Was wir nicht sagen können</h2>
<p>Ein Code kann formal korrekt sein und trotzdem nie vergeben worden sein, und wir können ihn keinem Namen zuordnen. Für die amtliche Prüfung nutzen Sie den <a href="${AGENCY_VERIFY}" rel="noopener noreferrer">Dienst der Agenzia delle Entrate</a>. Codice Fiscale Pro ist unabhängig und nicht mit der Agenzia verbunden. Die im Code enthaltenen Daten lesen Sie mit <a href="{{p:inverse}}">Codice Fiscale entschlüsseln</a>.</p>`,
  },
  about: {
    title: 'Über uns | Codice Fiscale Pro', description: 'Codice Fiscale Pro ist ein unabhängiger Dienst zum Berechnen, Entschlüsseln und Prüfen des italienischen Codice Fiscale, mit Berechnung im Browser.',
    h1: 'Codice Fiscale Pro', eyebrow: 'Über uns',
    body: `<p>Codice Fiscale Pro ist ein unabhängiger Online-Dienst des Codice Fiscale Pro Teams. Er bietet einen <a href="{{p:home}}">Codice-Fiscale-Rechner</a>, einen <a href="{{p:inverse}}">Decoder</a> und eine <a href="{{p:verify}}">formale Prüfung</a>, kostenlos und ohne Registrierung. Die Oberfläche gibt es auf Italienisch, Deutsch, Französisch, Spanisch und Englisch.</p>
<h2>So arbeiten wir</h2>
<ul>
<li>Die Berechnung läuft in Ihrem Browser. Die eingegebenen Personendaten werden nicht übertragen.</li>
<li>Der Algorithmus folgt den bekannten Regeln des Codice Fiscale, einschließlich Omocodia, und ist durch automatische Tests abgesichert, darunter ein Vergleich mit einer quelloffenen Referenzbibliothek.</li>
<li>Die Ortscodes stammen aus einem Export der Liste der aktuellen Gemeinden und Staaten der Agenzia delle Entrate und liegen als lokale Kopie vor. Es besteht keine Live-Verbindung, und aufgelöste Gemeinden sind nicht enthalten.</li>
</ul>
<h2>Was wir nicht sind</h2>
<p>Wir sind nicht die Agenzia delle Entrate und stehen in keiner Verbindung zu ihr. Wir vergeben keine Codici Fiscali, und eine formale Prüfung ersetzt nicht die amtliche. Dafür nutzen Sie den <a href="${AGENCY_VERIFY}" rel="noopener noreferrer">Dienst der Agenzia</a>.</p>
<h2>Kontakt</h2>
<p>Fehler melden oder Verbesserungen vorschlagen können Sie über die <a href="{{p:contact}}">Kontaktseite</a>.</p>`,
  },
  contact: {
    title: 'Kontakt | Codice Fiscale Pro', description: 'Kontaktieren Sie Codice Fiscale Pro, um einen Fehler zu melden, eine Frage zu stellen oder Ihre Datenschutzrechte auszuüben.',
    h1: 'Kontakt', eyebrow: 'Kontakt',
    body: `<p>Schreiben Sie an <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>
<h2>Bei einem Berechnungsfehler</h2>
<p>Nennen Sie uns das erhaltene und das erwartete Ergebnis, den Geburtsort (Gemeinde oder Staat) und das Datum. Senden Sie bitte keinen vollständigen Codice Fiscale, wenn es nicht nötig ist. Für personenbezogene Daten gilt die <a href="{{p:privacy}}">Datenschutzerklärung</a>.</p>
<h2>Was wir nicht tun können</h2>
<p>Wir vergeben keine Codici Fiscali und können Einträge bei der Agenzia delle Entrate weder korrigieren noch prüfen. Wenden Sie sich dafür direkt an die Agenzia.</p>`,
  },
  privacy: {
    title: 'Datenschutzerklärung und Cookies | Codice Fiscale Pro', description: 'Welche Daten Codice Fiscale Pro verarbeitet: Eingaben im Rechner bleiben im Browser. Google-Analytics-Cookies nur mit Ihrer Einwilligung.',
    h1: 'Datenschutzerklärung und Cookies', eyebrow: 'Stand: 5. Oktober 2026',
    body: `<p>Diese Erklärung beschreibt, wie codicefiscalepro.com heute funktioniert.</p>
<h2>Verantwortlicher und Kontakt</h2>
<p>Die Website wird von Codice Fiscale Pro betrieben, einem unabhängigen Dienst. Für Datenschutzanfragen schreiben Sie an <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>
<h2>Daten, die Sie in die Werkzeuge eingeben</h2>
<p>Nachname, Vorname, Geburtsdatum und Geburtsort, Geschlecht und die eingegebenen Codici Fiscali werden ausschließlich in Ihrem Browser verarbeitet. Wir erhalten sie nicht, speichern sie nicht und senden sie nicht an externe Dienste, auch nicht an Google Analytics. Sie erscheinen nicht in Seitenadressen. Die Teilen-Schaltfläche teilt nur den Link zum Werkzeug, ohne Ihre Daten. Die herunterladbare Datei wird auf Ihrem Gerät erzeugt.</p>
<h2>Technische Daten in Ihrem Browser</h2>
<p>Wir nutzen den lokalen Speicher Ihres Browsers (localStorage) für zwei technische Zwecke, die keine Einwilligung erfordern:</p>
<ul>
<li><strong>theme</strong>: Ihre Wahl zwischen hellem und dunklem Design.</li>
<li><strong>cf-consent</strong>: Ihre Cookie-Auswahl, gespeichert für 6 Monate.</li>
</ul>
<h2>Google Analytics (nur mit Einwilligung)</h2>
<p>Wenn Sie auf „Analyse zulassen“ klicken, laden wir Google Analytics 4, um die Nutzung der Website statistisch zu messen: besuchte Seiten, ungefähre Herkunft, Geräte- und Browsertyp. Wenn Sie ablehnen oder nichts auswählen, wird das Google-Skript nicht geladen.</p>
<ul>
<li><strong>Anbieter:</strong> Google Ireland Limited, mit möglicher Übermittlung von Daten an Google LLC in den USA. Google gibt an, sich auf Mechanismen wie das EU-US Data Privacy Framework und Standardvertragsklauseln zu stützen.</li>
<li><strong>Cookies:</strong> _ga und _ga_G-8GHY9P65L6, bis zu 2 Jahre.</li>
<li><strong>Werbefunktionen:</strong> Google-Signale und Anzeigenpersonalisierung sind deaktiviert.</li>
<li><strong>Speicherdauer:</strong> gemäß der im Google-Analytics-Konto der Website eingestellten Aufbewahrungsdauer, innerhalb der von Google für GA4 festgelegten Grenzen.</li>
<li><strong>Rechtsgrundlage:</strong> Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und Art. 5 Abs. 3 der ePrivacy-Richtlinie in der jeweiligen nationalen Umsetzung, in Deutschland § 25 TDDDG).</li>
</ul>
<p>Sie können Ihre Entscheidung jederzeit über „Cookie-Einstellungen“ am Ende jeder Seite ändern. Wenn Sie nach einer Zustimmung ablehnen, löschen wir die Google-Analytics-Cookies, die der Browser uns entfernen lässt, und beenden die Messung.</p>
<h2>Server-Logs</h2>
<p>Der Hosting-Anbieter kann technische Daten jeder Anfrage speichern, etwa IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browser, für Sicherheit und Betrieb. Wir nutzen sie nicht, um Sie zu identifizieren.</p>
<h2>Werbung</h2>
<p>Die Website zeigt derzeit keine Werbung. Wenn wir Werbung einführen, aktualisieren wir diese Erklärung und holen Ihre Einwilligung ein, bevor Werbe-Cookies verwendet werden.</p>
<h2>Wenn Sie uns schreiben</h2>
<p>Wenn Sie eine E-Mail an contact@codicefiscalepro.com senden, verwenden wir Ihre Adresse und Ihre Nachricht nur, um zu antworten. Die Website hat kein Kontaktformular.</p>
<h2>Ihre Rechte</h2>
<p>Sie können Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit verlangen (Art. 15 bis 22 DSGVO) und Ihre Einwilligung jederzeit widerrufen. Schreiben Sie dazu an die oben genannte Adresse. Sie können sich auch bei der Datenschutzaufsichtsbehörde an Ihrem Wohnort beschweren (siehe <a href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en" rel="noopener noreferrer">Liste der EU-Behörden</a>) oder beim italienischen <a href="https://www.garanteprivacy.it/" rel="noopener noreferrer">Garante per la protezione dei dati personali</a>.</p>
<h2>Änderungen</h2>
<p>Wenn sich die von uns genutzten Dienste ändern, aktualisieren wir diese Seite und das Datum oben.</p>`,
  },
  terms: {
    title: 'Nutzungsbedingungen | Codice Fiscale Pro', description: 'Nutzungsbedingungen von Codice Fiscale Pro: ein unabhängiger, kostenloser Dienst. Ergebnisse sind nicht amtlich und ohne Gewähr.',
    h1: 'Nutzungsbedingungen', eyebrow: 'Stand: 5. Oktober 2026',
    body: `<h2>Unabhängiger Dienst</h2>
<p>Codice Fiscale Pro ist eine unabhängige Website. Sie ist nicht mit der Agenzia delle Entrate oder einer anderen Behörde verbunden, vergibt keine amtlichen Codici Fiscali und ersetzt keine amtlichen Dienste.</p>
<h2>Was die Website bietet</h2>
<p>Einen Codice-Fiscale-Rechner, einen Decoder und eine formale Prüfung sowie Informationsinhalte. Der Dienst ist kostenlos und erfordert keine Registrierung.</p>
<h2>Nicht amtliche Ergebnisse</h2>
<p>Die Ergebnisse werden mit dem bekannten Algorithmus des Codice Fiscale und einer lokalen Liste aktueller italienischer Gemeinden und Staaten berechnet. Die Liste enthält keine aufgelösten Gemeinden. Ein hier berechneter Code kann vom amtlich vergebenen abweichen, zum Beispiel wegen Eingabefehlern, Omocodia oder späterer Änderungen der Personendaten. Bevor Sie einen Code in einem Rechtsgeschäft, einem Vertrag oder einer Steuererklärung verwenden, vergleichen Sie ihn mit Ihrer Gesundheitskarte oder mit der amtlichen Prüfung der Agenzia delle Entrate.</p>
<h2>Keine Gewähr</h2>
<p>Die Website wird „wie besehen“ bereitgestellt. Wir bemühen uns um Richtigkeit, garantieren aber weder Fehlerfreiheit noch ständige Verfügbarkeit. Soweit gesetzlich zulässig, haften wir nicht für Schäden, die aus der Nutzung der Ergebnisse entstehen. Rechte, die das Gesetz Verbrauchern einräumt, bleiben unberührt.</p>
<h2>Zulässige Nutzung</h2>
<p>Nutzen Sie die Werkzeuge für rechtmäßige Zwecke. Nutzen Sie sie nicht, um die Website zu überlasten oder ihre technischen Schutzmaßnahmen zu umgehen.</p>
<h2>Inhalte und externe Links</h2>
<p>Texte, Grafiken und Code der Website gehören Codice Fiscale Pro, sofern nicht anders angegeben. Links auf externe Seiten, etwa die der Agenzia delle Entrate, dienen der Orientierung: Wir kontrollieren diese Seiten nicht.</p>
<h2>Datenschutz</h2>
<p>Die Verarbeitung von Daten ist in der <a href="{{p:privacy}}">Datenschutzerklärung</a> beschrieben.</p>
<h2>Anwendbares Recht und Änderungen</h2>
<p>Diese Bedingungen unterliegen italienischem Recht, ohne dass zwingende Verbraucherschutzvorschriften Ihres Wohnsitzlandes entfallen. Wir können sie aktualisieren: Das Datum oben zeigt die aktuelle Fassung. Bei Fragen schreiben Sie an <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>`,
  },
  guides: {
    title: 'Ratgeber zum Codice Fiscale | Codice Fiscale Pro', description: 'Verständliche Ratgeber zum Codice Fiscale: Berechnung, Lesen des Codes, Omocodia, Belfiore-Code, im Ausland Geborene und Prüfung.',
    h1: 'Ratgeber zum Codice Fiscale',
    intro: 'Ratgeber des Codice Fiscale Pro Teams. Jeder beantwortet eine konkrete Frage und verweist auf das passende Werkzeug: <a href="{{p:home}}">Rechner</a>, <a href="{{p:inverse}}">Decoder</a> oder <a href="{{p:verify}}">Prüfung</a>.',
    other: 'Weitere Ratgeber gibt es auf Italienisch: <a class="text-link underline" href="/it/guide/" hreflang="it" lang="it">Guide al codice fiscale</a>.',
  },
};
export default content;
