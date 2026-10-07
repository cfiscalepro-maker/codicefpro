import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "reverse-codice-fiscale",
  "title": "Reverse Codice Fiscale: What a Code Can Tell You | Codice Fiscale Pro",
  "h1": "Reverse codice fiscale: what a code can tell you",
  "description": "A reverse codice fiscale reads a code and gives sex, date and place of birth. Why it cannot give a name, and how it differs from official verification.",
  "indexDesc": "Which data a code reveals and why the name and surname cannot be recovered.",
  "datePublished": "2026-10-05",
  "summary": "The reverse codice fiscale reads an existing code and returns the data it holds: sex, day and month of birth, the last two digits of the year and the place of birth. It cannot return a name or surname, because the first six letters fit many names: RSS fits Rossi, Rosso and Ross, MRA fits Mario, Mauro and Maria.",
  "audience": "anyone who wants to know what a code says, for example to check a filled-in form or a record in a file. It does not identify unknown people, which a code does not allow.",
  "related": [
    "cos-e-il-codice-fiscale",
    "come-leggere-e-decodificare-un-codice-fiscale",
    "cos-e-l-omocodia",
    "verifica-formale-e-verifica-ufficiale"
  ],
  "faq": [
    {
      "q": "Does the reverse codice fiscale reveal name and surname?",
      "a": "No. The first six letters come from consonants and vowels of surname and first name, and different names give the same letters. You can form guesses, not recover the data."
    },
    {
      "q": "What can be read with certainty?",
      "a": "Sex, day and month of birth, the last two digits of the year and the code of the municipality or country of birth. With the list of municipalities the code gives the name of the place."
    },
    {
      "q": "Is a reverse codice fiscale official?",
      "a": "No. It reads the structure of the code. To know whether a code exists and matches a person, use the Agenzia delle Entrate service."
    },
    {
      "q": "Is it safe to type a codice fiscale into a decoding site?",
      "a": "It depends on the site. Prefer tools that work in your browser without sending the data, like this one, and avoid entering other people’s codes without a reason."
    }
  ],
  "body": "<h2>What is a reverse codice fiscale?</h2>\n<p>It is the calculation that starts from a code and goes back to the personal data that produced it: the opposite of the <a href=\"{{g:come-si-calcola-il-codice-fiscale}}\">normal calculation</a>. People who search for it usually want the date of birth, the sex and the municipality of birth.</p>\n\n<h2>Which data does a reverse codice fiscale give?</h2>\n<p>It gives with certainty the sex, the day, the month, the last two digits of the year and the code of the place of birth, which the <a href=\"{{p:inverse}}\">list of municipalities and countries</a> turns into a place name. It also shows whether the code is an omocodia variant.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Data</th><th>Can be read?</th><th>Note</th></tr></thead>\n<tbody>\n<tr><td>Sex</td><td>Yes</td><td>A day above 40 means a woman</td></tr><tr><td>Day and month of birth</td><td>Yes</td><td>The month letter has to be translated</td></tr><tr><td>Year of birth</td><td>Partly</td><td>Two digits only, the century stays open</td></tr><tr><td>Place of birth</td><td>Yes</td><td>From the Belfiore code, if it is in the list</td></tr><tr><td>Surname and first name</td><td>No</td><td>Only guesses</td></tr>\n</tbody></table></div>\n\n<h2>Why can name and surname not be recovered?</h2>\n<p>The first six letters use consonants and, when needed, vowels, so many names give the same result. Rossi, Rosso and Ross all give <code>RSS</code>. Mario, Mauro and Maria all give <code>MRA</code>. Some sources speak of good odds of guessing the first name (<a href=\"https://lentepubblica.it/contabilita-bilancio-tasse-tributi/codice-fiscale-inverso-cose-a-cosa-serve-e-come-si-calcola/\" rel=\"noopener noreferrer\" lang=\"it\">Lentepubblica.it</a>, in Italian), but it stays a guess, and for the surname it is harder.</p>\n\n<h2>How do you use the reverse codice fiscale?</h2>\n<p>You type the code in the decoder and read the result, in three steps.</p>\n<ol>\n<li>Open the <a href=\"{{p:inverse}}\">decoder</a>.</li>\n<li>Type the 16 characters, even with letters in place of some digits.</li>\n<li>Read sex, date, place and Belfiore code, and check the formal check result.</li>\n</ol>\n<p>If two years fit the two digits, for example 2005 and 1905, the tool shows both and you choose the plausible one.</p>\n\n<h2>Is a reverse codice fiscale an official verification?</h2>\n<p>No. Decoding reads the structure of the code. It does not say whether the code was assigned, or to whom. For that see <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">formal check and official verification</a> and the <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate service</a> (in Italian).</p>\n\n<h2>How can you protect privacy when decoding a code?</h2>\n<p>A codice fiscale is personal data. Our tool processes it in your browser and does not send it to a server or to Google Analytics. With other sites, check how they treat the data, and avoid entering other people’s codes without a concrete reason.</p>\n\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://lentepubblica.it/contabilita-bilancio-tasse-tributi/codice-fiscale-inverso-cose-a-cosa-serve-e-come-si-calcola/\" rel=\"noopener noreferrer\" lang=\"it\">Lentepubblica.it</a> (in Italian): data that can be read and limits of the reverse calculation.</li>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (in Italian): rules for the letters.</li>\n</ul>"
};
export default g;
