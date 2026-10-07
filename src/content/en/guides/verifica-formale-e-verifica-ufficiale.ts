import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "formal-check-vs-official-verification",
  "title": "Formal Check vs Official Verification | Codice Fiscale Pro",
  "h1": "Formal check and official verification of the codice fiscale",
  "description": "Difference between a formal check (structure and check letter) and the Agenzia delle Entrate official verification, with what each tests and when to use them.",
  "indexDesc": "What an independent site checks and what the Agenzia delle Entrate checks.",
  "datePublished": "2026-10-05",
  "summary": "A formal check tests that a codice fiscale is built correctly: length, characters, date, sex, place format and check letter. The official verification of the Agenzia delle Entrate compares the code with the tax registry. A formal check of a codice fiscale is not the same as official verification by the Agenzia delle Entrate.",
  "audience": "anyone who must check a code before using it in a form, contract or database, and anyone who wonders why a positive online check is not enough. Also useful for developers writing validation.",
  "related": [
    "cos-e-il-codice-fiscale-inverso",
    "cos-e-l-omocodia",
    "errori-comuni-nel-codice-fiscale",
    "come-trovare-il-proprio-codice-fiscale"
  ],
  "faq": [
    {
      "q": "Is a formally correct codice fiscale always valid?",
      "a": "No. It can have a correct structure and check letter without ever having been assigned to anyone. Only the tax registry can say whether it exists."
    },
    {
      "q": "Is the check on this site official?",
      "a": "No. Codice Fiscale Pro is independent and not affiliated with the Agenzia delle Entrate. Our check is formal and says so in every result."
    },
    {
      "q": "Where is the official verification done?",
      "a": "On the codice fiscale verification service of the Agenzia delle Entrate, which compares the code with the tax registry. The link is on this page."
    },
    {
      "q": "When is a formal check enough?",
      "a": "When you want to catch a typing or calculation error before sending a form. When the code has legal or tax effects, also use the official verification."
    }
  ],
  "body": "<h2>What does a formal check test?</h2>\n<p>It tests the internal consistency of the code without consulting any database. The <a href=\"{{p:verify}}\">code check</a> on this site covers:</p>\n<ul>\n<li>16 characters, with letters and digits in the expected positions;</li>\n<li>a valid month letter (A, B, C, D, E, H, L, M, P, R, S, T);</li>\n<li>a day and sex that fit the month;</li>\n<li>the format of the place code, one letter and three digits;</li>\n<li>a correct check letter, recalculated from the first 15 characters;</li>\n<li>omocodia: the letters L, M, N, P, Q, R, S, T, U, V in place of digits are accepted.</li>\n</ul>\n\n<h2>What does the Agenzia’s official verification test?</h2>\n<p>The <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate service</a> (in Italian) compares the code with the data in the tax registry and can also check that it matches personal details. When it launched, <a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (23 April 2014, in Italian) described it as useful for omocodia and for people born in municipalities ceded to other states. Its current features may differ, so read the service page.</p>\n\n<h2>What is the difference between the two?</h2>\n<p>The formal check looks at how the code is written. The official verification looks at whether the code exists and to whom it belongs.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Question</th><th>Formal check</th><th>Official verification</th></tr></thead>\n<tbody>\n<tr><td>Is the code written correctly?</td><td>Yes</td><td>Yes</td></tr><tr><td>Is the check letter right?</td><td>Yes</td><td>Yes</td></tr><tr><td>Was the code assigned to anyone?</td><td>No</td><td>Yes</td></tr><tr><td>Does it match name and date of birth?</td><td>No</td><td>Yes, with the data entered</td></tr><tr><td>Does it handle suppressed and ceded municipalities?</td><td>Only if the code is in our list</td><td>Yes</td></tr><tr><td>Is it official?</td><td>No</td><td>Yes</td></tr>\n</tbody></table></div>\n\n<h2>Can a code pass the formal check and still not exist?</h2>\n<p>Yes. <code>RSSMRA85T10H501O</code> passes the formal check, but it is an example code from our guides. Any plausible set of details produces a code that is correct in form, even if nobody owns it.</p>\n\n<h2>When should you use which?</h2>\n<p>A short rule:</p>\n<ol>\n<li>To catch a typing or calculation error, start with the formal check: it is immediate and runs in your browser.</li>\n<li>Before using the code in a legal act, a contract or a tax filing, also check it with the official verification.</li>\n<li>If the code has letters in place of digits, or the person was born in a suppressed or ceded municipality, use the official one.</li>\n</ol>\n\n<h2>How is your data protected when you check a code?</h2>\n<p>Our tool processes the code in your browser and sends it neither to a server nor to analytics. On the Agenzia site the data is handled by the Agenzia itself. Codice Fiscale Pro is independent and not affiliated with the Agenzia delle Entrate. See the <a href=\"{{p:privacy}}\">privacy policy</a>.</p>\n\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (Italian): codice fiscale verification service.</li>\n<li><a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (Italian): description of the service at launch, 23 April 2014.</li>\n</ul>"
};
export default g;
