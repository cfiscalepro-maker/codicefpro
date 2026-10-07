import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "how-to-read-a-codice-fiscale",
  "title": "How to Read and Decode a Codice Fiscale | Codice Fiscale Pro",
  "h1": "How to read and decode a codice fiscale",
  "description": "How to read a codice fiscale: what the 16 characters mean, how to get date of birth, sex and place of birth, and what the code cannot tell you.",
  "indexDesc": "What each group of characters means and how to get date, sex and place.",
  "datePublished": "2026-10-05",
  "summary": "To read a codice fiscale, split the 16 characters into groups: positions 1-6 come from surname and first name, 7-8 are the year, 9 the month, 10-11 day and sex (plus 40 for women), 12-15 the place of birth and 16 the check letter. From BRWJHN85S03Z404I you can read: a man, born on 3 November 1985, in the United States (Z404).",
  "audience": "anyone with a codice fiscale in front of them who wants to know what it says: employees checking a payslip, people filling in forms, developers. To decode automatically, use the decoder tool.",
  "related": [
    "cos-e-il-codice-fiscale-inverso",
    "cos-e-l-omocodia",
    "codice-belfiore",
    "come-si-calcola-il-codice-fiscale"
  ],
  "faq": [
    {
      "q": "How can I tell whether a codice fiscale belongs to a man or a woman?",
      "a": "Look at positions 10 and 11. A number from 01 to 31 means a man, a number from 41 to 71 means a woman, and the day of birth is the number minus 40."
    },
    {
      "q": "Which letter stands for the month?",
      "a": "Position 9: A January, B February, C March, D April, E May, H June, L July, M August, P September, R October, S November, T December."
    },
    {
      "q": "Why does my code have letters where I expect digits?",
      "a": "This points to omocodia. One or more of the seven digits after the first six letters are replaced by letters from L, M, N, P, Q, R, S, T, U, V, which stand for the digits 0 to 9."
    },
    {
      "q": "Can I read the full year of birth?",
      "a": "The code only holds the last two digits. A code with 85 can belong to someone born in 1985 or in 1885, so you pick the plausible date."
    }
  ],
  "body": "<h2>How do you read a codice fiscale character by character?</h2>\n<p>Read it in groups, always in the same order. Take <code>BRWJHN85S03Z404I</code>.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Positions</th><th>Group</th><th>Meaning</th></tr></thead>\n<tbody>\n<tr><td>1-3</td><td><code>BRW</code></td><td>Letters from the surname</td></tr><tr><td>4-6</td><td><code>JHN</code></td><td>Letters from the first name</td></tr><tr><td>7-8</td><td><code>85</code></td><td>Birth year: 85</td></tr><tr><td>9</td><td><code>S</code></td><td>Month: November</td></tr><tr><td>10-11</td><td><code>03</code></td><td>Day 3, male</td></tr><tr><td>12-15</td><td><code>Z404</code></td><td>Place of birth: United States</td></tr><tr><td>16</td><td><code>I</code></td><td>Check letter</td></tr>\n</tbody></table></div>\n\n<h2>How do you work out the date of birth and sex?</h2>\n<p>Use positions 7 to 11. The first two digits are the year, the letter is the month and the last two digits the day. If the day number is above 40 the person is a woman and the real day is the number minus 40. Example: <code>92D54</code> in <code>SMTMLY92D54Z114B</code> means 1992, April, day 54 minus 40 equals 14, female.</p>\n\n<h2>How do you find the place of birth?</h2>\n<p>Positions 12 to 15 hold the Belfiore code. A letter followed by three digits is an Italian municipality, for example <code>F205</code> for Milan. A code starting with Z is a foreign country, for example <code>Z404</code> for the United States or <code>Z114</code> for the United Kingdom. Look it up with our <a href=\"{{p:inverse}}\">decoder</a> or read the guide on the <a href=\"{{g:codice-belfiore}}\">Belfiore code</a>.</p>\n\n<h2>What can you tell from the first six letters?</h2>\n<p>They are consonants and vowels picked by a fixed rule, so several surnames or first names give the same letters. <code>RSS</code> fits Rossi, Rosso and Ross. <code>MRA</code> fits Mario, Mauro and Maria. You can form guesses from the six letters, but you cannot recover the name or the surname.</p>\n\n<h2>How do you recognise an omocodia code?</h2>\n<p>In a code without omocodia, positions 7, 8, 10, 11, 13, 14 and 15 are digits. If one of them holds a letter from L, M, N, P, Q, R, S, T, U, V, the code is an omocodia variant. The original digit follows the mapping L = 0, M = 1, N = 2, P = 3, Q = 4, R = 5, S = 6, T = 7, U = 8, V = 9. See <a href=\"{{g:cos-e-l-omocodia}}\">what is omocodia</a>.</p>\n\n<h2>What can you not read from a codice fiscale?</h2>\n<p>You cannot read the full name, the century of birth, or whether the code was really assigned to a person. The first two come from the way the code is built; for the last one you need the <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">official verification</a>.</p>\n\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (in Italian): structure of the 16 characters.</li>\n<li><a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (in Italian): reading the code and omocodia.</li>\n</ul>"
};
export default g;
