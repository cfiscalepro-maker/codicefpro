import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  slug: 'codice-fiscale-berechnen-anleitung',
  title: 'Codice Fiscale berechnen: Anleitung | Codice Fiscale Pro',
  h1: 'Codice Fiscale berechnen: Schritt-für-Schritt-Anleitung',
  description: 'So wird der Codice Fiscale berechnet: Regeln für Nachname, Vorname, Datum, Geschlecht, Geburtsort und Prüfbuchstabe, mit Rechenbeispielen.',
  indexDesc: 'Die Regeln für Nachname, Vorname, Datum, Ort und Prüfbuchstabe, mit Rechenbeispielen.',
  datePublished: '2026-10-05',
  summary: 'Der Codice Fiscale entsteht in sieben Schritten: 3 Buchstaben aus dem Nachnamen, 3 aus dem Vornamen, die letzten 2 Ziffern des Geburtsjahres, ein Buchstabe für den Monat, der Tag (bei Frauen plus 40), der Code des Geburtsortes und ein Prüfbuchstabe, der aus den vorherigen 15 Zeichen berechnet wird. Für Katharina Müller, geboren am 21. September 1988 in Deutschland, lautet das Ergebnis MLLKHR88P61Z112O.',
  audience: 'alle, die verstehen wollen, wie ein Codice Fiscale aufgebaut ist, ihn von Hand nachrechnen oder ein Ergebnis prüfen möchten: Zugezogene, Studierende, Personalabteilungen, Entwicklerinnen und Entwickler. Den amtlichen Code liefert dieser Ratgeber nicht, den vergibt nur die Agenzia delle Entrate.',
  related: ['cos-e-il-codice-fiscale', 'cos-e-l-omocodia', 'codice-belfiore', 'errori-comuni-nel-codice-fiscale'],
  faq: [
    { q: 'Kann ich den Codice Fiscale von Hand berechnen?', a: 'Ja. Sie brauchen Nachname, Vorname, Geburtsdatum, Geschlecht und den Code der Gemeinde oder des Staates, in dem die Person geboren wurde. Sie bilden die Buchstaben für Nach- und Vorname, schreiben Datum und Geschlecht, fügen den Ortscode an und berechnen den Prüfbuchstaben mit den beiden Umrechnungstabellen.' },
    { q: 'Wie viele Zeichen hat ein Codice Fiscale?', a: 'Der Codice Fiscale einer Person hat 16 Zeichen: 6 Buchstaben aus Nach- und Vorname, 5 Zeichen für Datum und Geschlecht, 4 für den Ort und 1 Prüfbuchstabe.' },
    { q: 'Warum wird bei Frauen 40 zum Geburtstag addiert?', a: 'Die Stellen 10 und 11 enthalten Tag und Geschlecht zugleich. Bei Männern steht der Tag von 01 bis 31, bei Frauen der Tag plus 40, also 41 bis 71.' },
    { q: 'Was gilt, wenn der Nachname weniger als drei Buchstaben hat?', a: 'Der Buchstabe X füllt auf, bis drei Zeichen vorhanden sind. Der Nachname Wu ergibt WUX.' },
  ],
  body: `<h2>Woraus besteht ein Codice Fiscale?</h2>
<p>Der Codice Fiscale ist ein alphanumerischer Code aus 16 Zeichen, der eine Person in Italien steuerlich identifiziert. Die Bildungsregeln gehen auf einen Erlass des italienischen Finanzministeriums vom 23. Dezember 1976 zurück, wie <a href="https://www.pmi.it/?p=362269" rel="noopener noreferrer" lang="it">Pmi.it</a> (auf Italienisch) erinnert. Die Tabelle zeigt die sieben Teile am Beispiel MLLKHR88P61Z112O.</p>
<div class="table-wrap"><table>
<thead><tr><th>Stellen</th><th>Inhalt</th><th>Beispiel</th></tr></thead>
<tbody>
<tr><td>1-3</td><td>Nachname</td><td><code>MLL</code></td></tr>
<tr><td>4-6</td><td>Vorname</td><td><code>KHR</code></td></tr>
<tr><td>7-8</td><td>Geburtsjahr (letzte zwei Ziffern)</td><td><code>88</code></td></tr>
<tr><td>9</td><td>Geburtsmonat</td><td><code>P</code></td></tr>
<tr><td>10-11</td><td>Geburtstag und Geschlecht</td><td><code>61</code></td></tr>
<tr><td>12-15</td><td>Gemeinde oder Geburtsstaat</td><td><code>Z112</code></td></tr>
<tr><td>16</td><td>Prüfzeichen</td><td><code>O</code></td></tr>
</tbody></table></div>

<h2>Wie entstehen die drei Buchstaben des Nachnamens?</h2>
<p>Man nimmt die ersten drei Konsonanten des Nachnamens in der Reihenfolge, in der sie vorkommen. Gibt es weniger als drei Konsonanten, kommen die Vokale dazu, ebenfalls der Reihe nach. Fehlen dann noch Buchstaben, wird mit X aufgefüllt.</p>
<div class="table-wrap"><table>
<thead><tr><th>Nachname</th><th>Verwendete Buchstaben</th><th>Ergebnis</th></tr></thead>
<tbody>
<tr><td>Müller</td><td>M, L, L (das ü zählt als u)</td><td><code>MLL</code></td></tr>
<tr><td>Schmidt</td><td>S, C, H</td><td><code>SCH</code></td></tr>
<tr><td>Meyer</td><td>M, Y, R</td><td><code>MYR</code></td></tr>
<tr><td>von Arx</td><td>V, N, R (Leerzeichen zählen nicht)</td><td><code>VNR</code></td></tr>
<tr><td>Wu</td><td>W, dann der Vokal U, dann X</td><td><code>WUX</code></td></tr>
</tbody></table></div>

<h2>Wie entstehen die drei Buchstaben des Vornamens?</h2>
<p>Hat der Vorname vier oder mehr Konsonanten, nimmt man den ersten, den dritten und den vierten. Bei drei oder weniger Konsonanten gilt dieselbe Regel wie beim Nachnamen: Konsonanten, dann Vokale, dann X.</p>
<div class="table-wrap"><table>
<thead><tr><th>Vorname</th><th>Konsonanten</th><th>Ergebnis</th></tr></thead>
<tbody>
<tr><td>Katharina</td><td>K, T, H, R, N: 1., 3. und 4.</td><td><code>KHR</code></td></tr>
<tr><td>Johannes</td><td>J, H, N, N, S: 1., 3. und 4.</td><td><code>JNN</code></td></tr>
<tr><td>Hans-Peter</td><td>H, N, S, P, T, R: 1., 3. und 4. (der Bindestrich zählt nicht)</td><td><code>HSP</code></td></tr>
<tr><td>Anna</td><td>N, N (zwei), dann der Vokal A</td><td><code>NNA</code></td></tr>
<tr><td>Max</td><td>M, X (zwei), dann der Vokal A</td><td><code>MXA</code></td></tr>
<tr><td>Ute</td><td>T (eins), dann die Vokale U, E</td><td><code>TUE</code></td></tr>
</tbody></table></div>

<h2>Wie werden Geburtsdatum und Geschlecht geschrieben?</h2>
<p>Man schreibt die letzten zwei Ziffern des Jahres, einen Buchstaben für den Monat und den Tag zweistellig. Bei Frauen wird zum Tag 40 addiert. Eine Frau, geboren am 21. September 1988, erhält <code>88P61</code>. Ein Mann, geboren am 5. Januar 1979, erhält <code>79A05</code>.</p>
<div class="table-wrap"><table>
<thead><tr><th>Monat</th><th>Buchstabe</th><th>Monat</th><th>Buchstabe</th></tr></thead>
<tbody>
<tr><td>Januar</td><td><code>A</code></td><td>Juli</td><td><code>L</code></td></tr>
<tr><td>Februar</td><td><code>B</code></td><td>August</td><td><code>M</code></td></tr>
<tr><td>März</td><td><code>C</code></td><td>September</td><td><code>P</code></td></tr>
<tr><td>April</td><td><code>D</code></td><td>Oktober</td><td><code>R</code></td></tr>
<tr><td>Mai</td><td><code>E</code></td><td>November</td><td><code>S</code></td></tr>
<tr><td>Juni</td><td><code>H</code></td><td>Dezember</td><td><code>T</code></td></tr>
</tbody></table></div>
<p>Der Code enthält nur zwei Ziffern des Jahres, daher lässt sich das Jahrhundert nicht ablesen. Der <a href="{{p:inverse}}">Decoder</a> zeigt alle passenden Daten.</p>

<h2>Wie findet man den Code des Geburtsortes?</h2>
<p>Der Ort wird mit dem Belfiore-Code geschrieben: ein Buchstabe und drei Ziffern. Rom ist <code>H501</code>, Mailand <code>F205</code>. Ausländische Staaten haben Codes, die mit Z beginnen: Deutschland ist <code>Z112</code>, Österreich <code>Z102</code>, die Schweiz <code>Z133</code>, Liechtenstein <code>Z119</code>, Luxemburg <code>Z120</code> und Belgien <code>Z103</code>.</p>
<p>Im <a href="{{p:home}}">Rechner</a> können Sie den Namen des Staates oder der Stadt auf Deutsch eingeben, und der Code wird eingetragen. Ein Detail, das wir bei der Arbeit an den Daten geprüft haben: Im <a href="https://arcom.agenziaentrate.gov.it/CitizenArCom/" rel="noopener noreferrer" lang="it">Gemeindearchiv der Agenzia delle Entrate</a> (auf Italienisch) steht der richtige Code in der Spalte „Codice Nazionale“. Die Spalte „Codice Catastale“ enthält einen anderen Code (für Rom <code>M1AA</code>) und würde falsche Ergebnisse liefern. Mehr dazu im Ratgeber zum <a href="{{g:codice-belfiore}}">Belfiore-Code</a>.</p>

<h2>Wie wird das Prüfzeichen berechnet?</h2>
<p>Das sechzehnte Zeichen ist ein Buchstabe von A bis Z. Man erhält es, indem man die Werte der ersten 15 Zeichen addiert, mit einer Tabelle für ungerade und einer für gerade Stellen, und den Rest einer Division durch 26 in einen Buchstaben umwandelt.</p>
<ol>
<li>Wandeln Sie jedes Zeichen in eine Zahl um. An geraden Stellen zählt eine Ziffer so viel, wie sie anzeigt, und ein Buchstabe so viel wie seine Stelle im Alphabet, wobei A = 0. An ungeraden Stellen gilt die Tabelle unten.</li>
<li>Addieren Sie alle Werte.</li>
<li>Teilen Sie die Summe durch 26 und behalten Sie den Rest.</li>
<li>Wandeln Sie den Rest in einen Buchstaben um: 0 ist A, 1 ist B und so weiter bis 25, das ist Z.</li>
</ol>
<h3>Werte der ungeraden Stellen (1, 3, 5, ... 15)</h3>
<ul>
<li>Ziffern 0 bis 9: 1, 0, 5, 7, 9, 13, 15, 17, 19, 21.</li>
<li>Buchstaben A bis J: dieselben Werte wie die Ziffern 0 bis 9, in derselben Reihenfolge.</li>
<li>Buchstaben K bis Z: 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23.</li>
</ul>
<h3>Rechenbeispiel: MLLKHR88P61Z112</h3>
<ul>
<li>Ungerade Stellen: M = 18, L = 4, H = 17, 8 = 19, P = 3, 1 = 0, 1 = 0, 2 = 5. Summe 66.</li>
<li>Gerade Stellen: L = 11, K = 10, R = 17, 8 = 8, 6 = 6, Z = 25, 1 = 1. Summe 78.</li>
<li>Gesamt 144. 144 geteilt durch 26 ergibt 5 Rest 14. Der Wert 14 ist der Buchstabe O.</li>
</ul>
<p>Der vollständige Code lautet <code>MLLKHR88P61Z112O</code>. Katharina Müller ist eine Beispielperson.</p>

<h2>Wie werden Umlaute, Bindestriche, Leerzeichen und zusammengesetzte Namen behandelt?</h2>
<p>Es zählen nur die Buchstaben des Alphabets. Akzente, Apostrophe, Leerzeichen und Bindestriche werden ignoriert, und Buchstaben mit Akzent zählen als Grundbuchstabe. Ausnahmen folgen der Umschrifttabelle des italienischen Innenministeriums, die die Agenzia delle Entrate in ihrem Rundschreiben 34/2011 verwendet: ä und æ zählen als AE, ö und œ als OE, ü als UE und ß als SS. Konsonanten und Vokale werden über den gesamten Nach- oder Vornamen gezählt. Ein Umlaut wird als sein Grundbuchstabe gelesen; da ein ausgeschriebenes „e“ nur einen Vokal hinzufügt, bleibt das Ergebnis meist dasselbe. Das Eszett (ß) behandeln wir bisher nicht eigens: Prüfen Sie in diesem Fall das Ergebnis bei der Agenzia delle Entrate.</p>
<p>Bei verheirateten Frauen gilt der Geburtsname, nicht der Name des Ehepartners. Weicht die Schreibweise Ihres Namens im Pass von der in der Geburtsurkunde ab, kann der amtliche Code vom berechneten abweichen.</p>

<h2>Stimmt der berechnete Code immer mit dem amtlichen überein?</h2>
<p>Nein. Das Ergebnis kann bei Omocodia, abweichender Schreibweise des Namens, Geburt im Ausland oder später berichtigten Personendaten abweichen. Gültig ist nur der Code, den die Agenzia delle Entrate vergeben hat. Vergleichen Sie ihn mit Ihrer Gesundheitskarte oder nutzen Sie den <a href="https://telematici.agenziaentrate.gov.it/VerificaCF" rel="noopener noreferrer" lang="it">Prüfdienst der Agenzia</a> (auf Italienisch). Unsere <a href="{{p:verify}}">formale Prüfung</a> testet nur Aufbau und Prüfbuchstaben. Zur Omocodia siehe <a href="{{g:cos-e-l-omocodia}}">Was ist Omocodia?</a></p>

<h2>Wie prüfen wir unsere eigene Berechnung?</h2>
<p>Die Berechnung ist durch automatische Tests abgesichert und mit einer quelloffenen Referenzbibliothek verglichen. Wir haben die Codes von 7.886 Gemeinden aus unserer Liste verglichen und keine Abweichung gefunden, und wir haben den Prüfbuchstaben des Beispiels oben mit einem getrennten Programm nachgerechnet.</p>
<p>Es gibt zwei Grenzen. Die Ortsliste stammt aus einem Export der Agenzia delle Entrate mit den aktuellen Gemeinden und Staaten, aufgelöste Gemeinden fehlen daher. Und eine Berechnung kann nicht wissen, ob einer Person ein Omocodia-Code zugewiesen wurde.</p>

<h2>Quellen</h2>
<ul>
<li><a href="https://www.pmi.it/?p=362269" rel="noopener noreferrer" lang="it">Pmi.it</a> (Italienisch): Algorithmus und Erlass von 1976.</li>
<li><a href="https://arcom.agenziaentrate.gov.it/CitizenArCom/" rel="noopener noreferrer" lang="it">Agenzia delle Entrate</a> (Italienisch): Archiv der Gemeinden und Staaten.</li>
<li><a href="https://telematici.agenziaentrate.gov.it/VerificaCF" rel="noopener noreferrer" lang="it">Agenzia delle Entrate</a> (Italienisch): amtlicher Prüfdienst.</li>
</ul>`,
};
export default g;
