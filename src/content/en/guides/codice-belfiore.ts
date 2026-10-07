import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "belfiore-code",
  "title": "Belfiore Code: What It Is and How to Find It | Codice Fiscale Pro",
  "h1": "Belfiore code: what it is and how to find it",
  "description": "The Belfiore code marks the municipality or country of birth in a codice fiscale: format, real examples, same-name municipalities and how to look it up.",
  "indexDesc": "The place-of-birth code for municipalities and countries, with real examples.",
  "datePublished": "2026-10-05",
  "summary": "The Belfiore code is the four-character code (one letter and three digits) that identifies the Italian municipality or the foreign country of birth in positions 12-15 of a codice fiscale. Rome is H501 and Milan F205. Foreign countries start with Z, for example Z404 for the United States and Z114 for the United Kingdom. You find it in the Agenzia delle Entrate list of municipalities and countries.",
  "audience": "anyone completing a calculation by hand, developers who validate codici fiscali, and anyone unsure which code to use for a municipality with a repeated name or for a foreign country.",
  "related": [
    "come-si-calcola-il-codice-fiscale",
    "codice-fiscale-per-cittadini-stranieri",
    "errori-comuni-nel-codice-fiscale",
    "come-leggere-e-decodificare-un-codice-fiscale"
  ],
  "faq": [
    {
      "q": "Is the Belfiore code the same as the cadastral code?",
      "a": "In everyday use yes: it is the cadastral code of the municipality. Beware of lists with several code columns. In the Agenzia delle Entrate list we use, the right code is in the column \"Codice Nazionale\"."
    },
    {
      "q": "Does the Belfiore code show where I live?",
      "a": "No. In the codice fiscale it shows the municipality or country of birth, never the residence."
    },
    {
      "q": "What if my municipality of birth no longer exists?",
      "a": "Use the code the municipality had at the time of birth. Our list holds current municipalities and countries only, so check such cases with the Agenzia delle Entrate verification service."
    },
    {
      "q": "Why do some municipalities have the same name but different codes?",
      "a": "They are different municipalities in different provinces. Castro exists in the province of Bergamo with code C337 and in the province of Lecce with code M261. Pick the right one."
    }
  ],
  "body": "<h2>What is the Belfiore code?</h2>\n<p>It is the code that identifies an Italian municipality or a foreign country in positions 12 to 15 of the codice fiscale, made of one letter and three digits. For municipalities it follows the cadastral coding, and foreign countries use a Z followed by three digits, as <a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (in Italian) explains.</p>\n\n<h2>What are some examples of Belfiore codes?</h2>\n<p>Examples from the Agenzia delle Entrate list included on this site:</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Place</th><th>Code</th><th>Place</th><th>Code</th></tr></thead>\n<tbody>\n<tr><td>Rome</td><td><code>H501</code></td><td>United States</td><td><code>Z404</code></td></tr><tr><td>Milan</td><td><code>F205</code></td><td>United Kingdom</td><td><code>Z114</code></td></tr><tr><td>Naples</td><td><code>F839</code></td><td>Ireland</td><td><code>Z116</code></td></tr><tr><td>Turin</td><td><code>L219</code></td><td>Canada</td><td><code>Z401</code></td></tr><tr><td>Florence</td><td><code>D612</code></td><td>Germany</td><td><code>Z112</code></td></tr>\n</tbody></table></div>\n\n<h2>How do you find the Belfiore code of a municipality or country?</h2>\n<p>The quickest way is the place field of the <a href=\"{{p:home}}\">calculator</a>: type the name, in English too, and choose the place, and the code is filled in. The full list is in the <a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate archive</a> (in Italian). Our list holds 7,894 municipalities and 249 foreign countries, current to 21 February 2026.</p>\n\n<h2>What should you do with municipalities that share a name?</h2>\n<p>Tell them apart by province: they are different municipalities with different codes. Our list has five such names.</p>\n<ul>\n<li>Castro: Bergamo <code>C337</code>, Lecce <code>M261</code>.</li>\n<li>Livo: Como <code>E623</code>, Trento <code>E624</code>.</li>\n<li>Peglio: Como <code>G415</code>, Pesaro e Urbino <code>G416</code>.</li>\n<li>Samone: Torino <code>H753</code>, Trento <code>H754</code>.</li>\n<li>San Teodoro: Messina <code>I328</code>, Sassari <code>I329</code>.</li>\n</ul>\n\n<h2>Which column do you use in lists with several codes?</h2>\n<p>One detail we checked on the Agenzia delle Entrate export: the column \"Codice Nazionale\" holds the Belfiore code (for Rome <code>H501</code>), while the column \"Codice Catastale\" holds a different code (for Rome <code>M1AA</code>). The second gives wrong codici fiscali.</p>\n\n<h2>What if the municipality was suppressed or has changed?</h2>\n<p>The codice fiscale keeps the code the municipality had at birth. Our list has current entries only. People born in a municipality that has been suppressed, merged or ceded to another state can have a code the calculation does not know. In those cases the <a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia verification service</a> (2014, in Italian) is the right tool. See also <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">formal check and official verification</a>.</p>\n\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (in Italian): archive of municipalities and foreign countries.</li>\n<li><a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (in Italian): structure of the place code.</li>\n<li><a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (in Italian): verification for people born in ceded municipalities (2014).</li>\n</ul>"
};
export default g;
