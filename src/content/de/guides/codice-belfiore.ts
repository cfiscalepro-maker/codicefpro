import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "belfiore-code-finden",
  "title": "Belfiore-Code: Was er ist und wie Sie ihn finden | Codice Fiscale Pro",
  "h1": "Belfiore-Code: Was er ist und wie Sie ihn finden",
  "description": "Der Belfiore-Code bezeichnet im Codice Fiscale Geburtsgemeinde oder Geburtsstaat: Format, echte Beispiele, gleichnamige Gemeinden, Nachschlagen.",
  "indexDesc": "Der Code des Geburtsortes für Gemeinden und Staaten, mit echten Beispielen.",
  "datePublished": "2026-10-05",
  "summary": "Der Belfiore-Code ist der vierstellige Code (ein Buchstabe und drei Ziffern), der an den Stellen 12-15 eines Codice Fiscale die italienische Gemeinde oder den ausländischen Geburtsstaat bezeichnet. Rom ist H501, Mailand F205. Ausländische Staaten beginnen mit Z, zum Beispiel Z112 für Deutschland und Z102 für Österreich. Sie finden ihn in der Liste der Gemeinden und Staaten der Agenzia delle Entrate.",
  "audience": "alle, die eine Berechnung von Hand abschließen, Entwickler, die Codici Fiscali validieren, und alle, die unsicher sind, welcher Code für eine Gemeinde mit wiederholtem Namen oder für einen ausländischen Staat gilt.",
  "related": [
    "come-si-calcola-il-codice-fiscale",
    "codice-fiscale-per-cittadini-stranieri",
    "errori-comuni-nel-codice-fiscale",
    "come-leggere-e-decodificare-un-codice-fiscale"
  ],
  "faq": [
    {
      "q": "Ist der Belfiore-Code dasselbe wie der Katastercode?",
      "a": "Im Alltag ja: Es ist der Katastercode der Gemeinde. Vorsicht bei Listen mit mehreren Codespalten. In der von uns genutzten Liste der Agenzia delle Entrate steht der richtige Code in der Spalte „Codice Nazionale“."
    },
    {
      "q": "Zeigt der Belfiore-Code meinen Wohnort?",
      "a": "Nein. Im Codice Fiscale zeigt er die Geburtsgemeinde oder den Geburtsstaat, nie den Wohnsitz."
    },
    {
      "q": "Was gilt, wenn meine Geburtsgemeinde nicht mehr existiert?",
      "a": "Verwenden Sie den Code, den die Gemeinde zur Zeit der Geburt hatte. Unsere Liste enthält nur aktuelle Gemeinden und Staaten, prüfen Sie solche Fälle daher mit dem Prüfdienst der Agenzia delle Entrate."
    },
    {
      "q": "Warum haben manche Gemeinden denselben Namen, aber unterschiedliche Codes?",
      "a": "Es sind verschiedene Gemeinden in verschiedenen Provinzen. Castro gibt es in der Provinz Bergamo mit dem Code C337 und in der Provinz Lecce mit dem Code M261. Wählen Sie die richtige."
    }
  ],
  "body": "<h2>Was ist der Belfiore-Code?</h2>\n<p>Es ist der Code, der an den Stellen 12 bis 15 des Codice Fiscale eine italienische Gemeinde oder einen ausländischen Staat bezeichnet, bestehend aus einem Buchstaben und drei Ziffern. Bei Gemeinden folgt er der Katastercodierung, ausländische Staaten haben ein Z mit drei Ziffern, wie <a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (auf Italienisch) erklärt.</p>\n\n<h2>Welche Beispiele für Belfiore-Codes gibt es?</h2>\n<p>Beispiele aus der in diese Website eingebundenen Liste der Agenzia delle Entrate:</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Ort</th><th>Code</th><th>Staat</th><th>Code</th></tr></thead>\n<tbody>\n<tr><td>Rom</td><td><code>H501</code></td><td>Deutschland</td><td><code>Z112</code></td></tr><tr><td>Mailand</td><td><code>F205</code></td><td>Österreich</td><td><code>Z102</code></td></tr><tr><td>Neapel</td><td><code>F839</code></td><td>Schweiz</td><td><code>Z133</code></td></tr><tr><td>Turin</td><td><code>L219</code></td><td>Liechtenstein</td><td><code>Z119</code></td></tr><tr><td>Florenz</td><td><code>D612</code></td><td>Luxemburg</td><td><code>Z120</code></td></tr>\n</tbody></table></div>\n\n<h2>Wie findet man den Belfiore-Code einer Gemeinde oder eines Staates?</h2>\n<p>Am schnellsten über das Ortsfeld des <a href=\"{{p:home}}\">Rechners</a>: Name eingeben, auch auf Deutsch, den Ort wählen, und der Code wird eingetragen. Die vollständige Liste steht im <a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">Archiv der Agenzia delle Entrate</a> (auf Italienisch). Unsere Liste enthält 7.894 Gemeinden und 249 ausländische Staaten, Stand 21. Februar 2026.</p>\n\n<h2>Was tun bei Gemeinden mit gleichem Namen?</h2>\n<p>Unterscheiden Sie sie nach der Provinz: Es sind verschiedene Gemeinden mit verschiedenen Codes. In unserer Liste gibt es fünf solche Namen.</p>\n<ul>\n<li>Castro: Bergamo <code>C337</code>, Lecce <code>M261</code>.</li>\n<li>Livo: Como <code>E623</code>, Trento <code>E624</code>.</li>\n<li>Peglio: Como <code>G415</code>, Pesaro e Urbino <code>G416</code>.</li>\n<li>Samone: Torino <code>H753</code>, Trento <code>H754</code>.</li>\n<li>San Teodoro: Messina <code>I328</code>, Sassari <code>I329</code>.</li>\n</ul>\n\n<h2>Welche Spalte nutzt man in Listen mit mehreren Codes?</h2>\n<p>Ein Detail, das wir am Export der Agenzia delle Entrate geprüft haben: Die Spalte „Codice Nazionale“ enthält den Belfiore-Code (für Rom <code>H501</code>), die Spalte „Codice Catastale“ einen anderen Code (für Rom <code>M1AA</code>). Der zweite führt zu falschen Codici Fiscali.</p>\n\n<h2>Was gilt bei aufgelösten oder geänderten Gemeinden?</h2>\n<p>Der Codice Fiscale behält den Code, den die Gemeinde bei der Geburt hatte. Unsere Liste enthält nur aktuelle Einträge. Wer in einer aufgelösten, zusammengelegten oder an einen anderen Staat abgetretenen Gemeinde geboren wurde, kann einen Code haben, den die Berechnung nicht kennt. In diesen Fällen ist der <a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">Prüfdienst der Agenzia</a> (2014, auf Italienisch) das richtige Werkzeug. Siehe auch <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">Formale und amtliche Prüfung</a>.</p>\n\n<h2>Quellen</h2>\n<ul>\n<li><a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (Italienisch): Archiv der Gemeinden und ausländischen Staaten.</li>\n<li><a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (Italienisch): Aufbau des Ortscodes.</li>\n<li><a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (Italienisch): Prüfung für in abgetretenen Gemeinden Geborene (2014).</li>\n</ul>"
};
export default g;
