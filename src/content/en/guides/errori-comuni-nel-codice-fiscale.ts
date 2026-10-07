import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "common-codice-fiscale-mistakes",
  "title": "Common Codice Fiscale Mistakes and How to Avoid Them | Codice Fiscale Pro",
  "h1": "Common codice fiscale mistakes and how to avoid them",
  "description": "The most frequent mistakes when calculating or typing a codice fiscale: sex, month, place, surname and omocodia, with a table of mistakes and checks.",
  "indexDesc": "The most frequent mistakes in hand calculation and online tools.",
  "datePublished": "2026-10-05",
  "summary": "The most frequent mistakes are forgetting the +40 on the day for women, swapping first name and surname, using a wrong place code (for example the wrong column of the list, or a municipality with the same name in another province), mixing up the letter O and the digit 0, and ignoring omocodia. A formal check catches the first four.",
  "audience": "anyone calculating a codice fiscale by hand, copying one from a document into a form, or writing software that generates it. For each mistake the guide shows how to spot it and how to fix it.",
  "related": [
    "come-si-calcola-il-codice-fiscale",
    "codice-belfiore",
    "verifica-formale-e-verifica-ufficiale",
    "cos-e-l-omocodia"
  ],
  "faq": [
    {
      "q": "What is the most common mistake in hand calculation?",
      "a": "Forgetting to add 40 to the day of birth for women, or swapping first name and surname. Both show up when you reread the two groups of three letters."
    },
    {
      "q": "Why does my calculated code differ from my health card?",
      "a": "Common causes are a different spelling of the name on documents, a wrong place of birth, the use of a spouse’s surname, or an omocodia code assigned by the Agenzia."
    },
    {
      "q": "Which letters are never used for the month?",
      "a": "F, G, I, N, O, Q, U, V, W, X, Y and Z never appear. Months only use A, B, C, D, E, H, L, M, P, R, S, T."
    },
    {
      "q": "How do I check a code after calculating it?",
      "a": "Use the formal check to find structural errors and compare the code with your health card. For an official check use the Agenzia delle Entrate service."
    }
  ],
  "body": "<h2>What are the most common mistakes when calculating a codice fiscale?</h2>\n<p>The table lists the ten most frequent mistakes with a way to spot each. Examples use the sample code <code>RSSMRA85T10H501O</code>.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Mistake</th><th>How to spot it</th><th>How to avoid it</th></tr></thead>\n<tbody>\n<tr><td>First name and surname swapped</td><td><code>MRA</code> appears before <code>RSS</code></td><td>The first three letters are the surname, the next three the first name</td></tr><tr><td>No +40 on the day for a woman</td><td>Day 01 to 31 for a woman</td><td>For women add 40: day 5 becomes 45</td></tr><tr><td>Wrong month letter</td><td>Letters such as F, G, I, N, O, Q in position 9</td><td>Use only A, B, C, D, E, H, L, M, P, R, S, T</td></tr><tr><td>Residence instead of place of birth</td><td>Code differs from the municipality of birth</td><td>Always use the place of birth</td></tr><tr><td>Wrong column in the list of municipalities</td><td>A code like <code>M1AA</code> instead of <code>H501</code></td><td>Use \"Codice Nazionale\", not \"Codice Catastale\"</td></tr><tr><td>Same-name municipality in another province</td><td>Castro: <code>C337</code> (BG) or <code>M261</code> (LE)</td><td>Choose the province too</td></tr><tr><td>Spouse’s surname used</td><td>Code differs from the health card</td><td>Use the surname at birth</td></tr><tr><td>Apostrophes and spaces counted as letters</td><td>O’Connor that does not give <code>CNN</code></td><td>Ignore apostrophes, spaces and accents</td></tr><tr><td>O instead of 0, or the reverse</td><td>Check letter O against digit 0 in numeric fields</td><td>The check character is always a letter</td></tr><tr><td>Omocodia ignored</td><td>Letters in positions that are normally digits</td><td>Look at the health card and read <a href=\"{{g:cos-e-l-omocodia}}\">what is omocodia</a></td></tr>\n</tbody></table></div>\n\n<h2>Why is my calculated code different from the one on my health card?</h2>\n<p>The most frequent reasons are the spelling of the data and omocodia. <a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (in Italian) lists spaces, apostrophes, double names, special characters and birth abroad among the causes. A code with letters where digits belong is an omocodia variant.</p>\n\n<h2>How do you check a code after calculating it?</h2>\n<p>Check it in three steps, from the quickest to the safest.</p>\n<ol>\n<li>Run it through the <a href=\"{{p:verify}}\">code check</a>: it spots wrong structure, date and check letter.</li>\n<li>Read it with the <a href=\"{{p:inverse}}\">decoder</a> to see that sex, date and place are the ones you expect.</li>\n<li>Compare it with your health card or the <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate service</a> (in Italian).</li>\n</ol>\n\n<h2>Which mistakes does a formal check catch, and which not?</h2>\n<p>It catches wrong structure, impossible month or day, and a wrong check letter. It does not catch a wrong but plausible place, a name spelled differently or a code that nobody owns. For those you need an official document. See <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">formal check and official verification</a>.</p>\n\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (in Italian): mistakes and variants in the data.</li>\n<li><a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (in Italian): list of municipalities and countries.</li>\n</ul>"
};
export default g;
