import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  slug: 'how-to-calculate-the-codice-fiscale',
  title: 'How the Codice Fiscale Is Calculated | Codice Fiscale Pro',
  h1: 'How to calculate the codice fiscale: step-by-step guide',
  description: 'How to calculate the codice fiscale: the rules for surname, first name, date, sex, place of birth and check letter, with worked examples.',
  indexDesc: 'The rules for surname, first name, date, place and check letter, with worked examples.',
  datePublished: '2026-10-05',
  summary: 'The codice fiscale is calculated in seven steps: 3 letters from the surname, 3 from the first name, the last 2 digits of the birth year, a letter for the month, the day (plus 40 for women), the code of the place of birth and a check letter worked out from the previous 15 characters. For John Brown, born in the United States on 3 November 1985, the result is BRWJHN85S03Z404I.',
  audience: 'anyone who wants to understand how a codice fiscale is built, check one by hand or test a result: expats, students, HR and payroll staff, developers. It does not give you the official code, which only the Agenzia delle Entrate issues.',
  related: ['cos-e-il-codice-fiscale', 'cos-e-l-omocodia', 'codice-belfiore', 'errori-comuni-nel-codice-fiscale'],
  faq: [
    { q: 'Can I calculate a codice fiscale by hand?', a: 'Yes. You need the surname, first name, date of birth, sex and the code of the municipality or country of birth. You work out the letters for surname and first name, write the date and sex, add the place code and compute the check letter with the two conversion tables.' },
    { q: 'How many characters does a codice fiscale have?', a: 'A codice fiscale for a person has 16 characters: 6 letters from surname and first name, 5 characters for date and sex, 4 for the place and 1 check letter.' },
    { q: 'Why is 40 added to the day of birth for women?', a: 'Positions 10 and 11 hold both the day and the sex. For men they show the day from 01 to 31, for women the day plus 40, so from 41 to 71.' },
    { q: 'What happens if the surname has fewer than three letters?', a: 'The letter X fills the gap until there are three characters. The surname Fo gives FOX.' },
  ],
  body: `<h2>What is a codice fiscale made of?</h2>
<p>The codice fiscale is an alphanumeric code of 16 characters that identifies a person for tax purposes in Italy. The rules for building it come from a decree of the Italian Ministry of Finance dated 23 December 1976, as <a href="https://www.pmi.it/?p=362269" rel="noopener noreferrer" lang="it">Pmi.it</a> (in Italian) recalls. The table shows the seven parts using the example BRWJHN85S03Z404I.</p>
<div class="table-wrap"><table>
<thead><tr><th>Positions</th><th>Content</th><th>Example</th></tr></thead>
<tbody>
<tr><td>1-3</td><td>Surname</td><td><code>BRW</code></td></tr>
<tr><td>4-6</td><td>First name</td><td><code>JHN</code></td></tr>
<tr><td>7-8</td><td>Year of birth (last two digits)</td><td><code>85</code></td></tr>
<tr><td>9</td><td>Month of birth</td><td><code>S</code></td></tr>
<tr><td>10-11</td><td>Day of birth and sex</td><td><code>03</code></td></tr>
<tr><td>12-15</td><td>Municipality or foreign country of birth</td><td><code>Z404</code></td></tr>
<tr><td>16</td><td>Check character</td><td><code>I</code></td></tr>
</tbody></table></div>

<h2>How are the three surname letters worked out?</h2>
<p>Take the first three consonants of the surname in order. If there are fewer than three consonants, add the vowels, again in order. If letters are still missing, fill with X.</p>
<div class="table-wrap"><table>
<thead><tr><th>Surname</th><th>Letters used</th><th>Result</th></tr></thead>
<tbody>
<tr><td>Smith</td><td>S, M, T</td><td><code>SMT</code></td></tr>
<tr><td>Brown</td><td>B, R, W</td><td><code>BRW</code></td></tr>
<tr><td>Müller</td><td>M, L, L (the ü counts as u)</td><td><code>MLL</code></td></tr>
<tr><td>Fo</td><td>F, then the vowel O, then X</td><td><code>FOX</code></td></tr>
<tr><td>Ai</td><td>no consonant: A, I, then X</td><td><code>AIX</code></td></tr>
</tbody></table></div>

<h2>How are the three first-name letters worked out?</h2>
<p>If the first name has four or more consonants, take the first, the third and the fourth. With three consonants or fewer, use the same rule as for the surname: consonants, then vowels, then X.</p>
<div class="table-wrap"><table>
<thead><tr><th>First name</th><th>Consonants</th><th>Result</th></tr></thead>
<tbody>
<tr><td>John</td><td>J, H, N (three)</td><td><code>JHN</code></td></tr>
<tr><td>Christopher</td><td>C, H, R, S, T, P, H, R: 1st, 3rd and 4th</td><td><code>CRS</code></td></tr>
<tr><td>Emily</td><td>M, L, Y (three; the I is a vowel)</td><td><code>MLY</code></td></tr>
<tr><td>Ann</td><td>N, N (two), then the vowel A</td><td><code>NNA</code></td></tr>
<tr><td>Jo</td><td>J, then the vowel O, then X</td><td><code>JOX</code></td></tr>
</tbody></table></div>

<h2>How are the date of birth and sex written?</h2>
<p>Write the last two digits of the year, a letter for the month and the day on two digits. For women, add 40 to the day. A man born on 3 November 1985 gets <code>85S03</code>. A woman born on 14 April 1992 gets <code>92D54</code>.</p>
<div class="table-wrap"><table>
<thead><tr><th>Month</th><th>Letter</th><th>Month</th><th>Letter</th></tr></thead>
<tbody>
<tr><td>January</td><td><code>A</code></td><td>July</td><td><code>L</code></td></tr>
<tr><td>February</td><td><code>B</code></td><td>August</td><td><code>M</code></td></tr>
<tr><td>March</td><td><code>C</code></td><td>September</td><td><code>P</code></td></tr>
<tr><td>April</td><td><code>D</code></td><td>October</td><td><code>R</code></td></tr>
<tr><td>May</td><td><code>E</code></td><td>November</td><td><code>S</code></td></tr>
<tr><td>June</td><td><code>H</code></td><td>December</td><td><code>T</code></td></tr>
</tbody></table></div>
<p>The code holds only two digits of the year, so the century cannot be read back from it. The <a href="{{p:inverse}}">decoder</a> shows every date that fits.</p>

<h2>How do you find the code for the place of birth?</h2>
<p>The place is written with its Belfiore code: one letter and three digits. Rome is <code>H501</code> and Milan <code>F205</code>. Foreign countries use codes that start with Z: the United States is <code>Z404</code>, the United Kingdom <code>Z114</code>, Ireland <code>Z116</code>, Canada <code>Z401</code>, Australia <code>Z700</code> and India <code>Z222</code>.</p>
<p>In the <a href="{{p:home}}">calculator</a> you can type the name of the country or city in English, and the code is filled in for you. One detail we checked while working on the data: in the <a href="https://arcom.agenziaentrate.gov.it/CitizenArCom/" rel="noopener noreferrer" lang="it">Agenzia delle Entrate municipality archive</a> (in Italian) the correct code sits in the column "Codice Nazionale". The column "Codice Catastale" holds a different code (for Rome <code>M1AA</code>) and would produce wrong results. See <a href="{{g:codice-belfiore}}">the Belfiore code guide</a>.</p>

<h2>How is the check character calculated?</h2>
<p>The sixteenth character is a letter from A to Z. You get it by adding up values for the first 15 characters, using one table for odd positions and one for even positions, and turning the remainder of a division by 26 into a letter.</p>
<ol>
<li>Convert each character to a number. In even positions a digit is worth itself and a letter is worth its place in the alphabet, starting with A = 0. In odd positions use the table below.</li>
<li>Add all the values.</li>
<li>Divide the total by 26 and keep the remainder.</li>
<li>Turn the remainder into a letter: 0 is A, 1 is B, and so on up to 25, which is Z.</li>
</ol>
<h3>Values for odd positions (1, 3, 5, ... 15)</h3>
<ul>
<li>Digits 0 to 9: 1, 0, 5, 7, 9, 13, 15, 17, 19, 21.</li>
<li>Letters A to J: the same values as the digits 0 to 9, in the same order.</li>
<li>Letters K to Z: 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23.</li>
</ul>
<h3>Worked example: BRWJHN85S03Z404</h3>
<ul>
<li>Odd positions: B = 0, W = 22, H = 17, 8 = 19, S = 12, 3 = 7, 4 = 9, 4 = 9. Sum 95.</li>
<li>Even positions: R = 17, J = 9, N = 13, 5 = 5, 0 = 0, Z = 25, 0 = 0. Sum 69.</li>
<li>Total 164. 164 divided by 26 is 6 with remainder 8. Value 8 is the letter I.</li>
</ul>
<p>The full code is <code>BRWJHN85S03Z404I</code>. John Brown is an example person.</p>

<h2>How are accents, apostrophes, spaces and compound names handled?</h2>
<p>Only the letters of the alphabet count. Accents, apostrophes, spaces and hyphens are ignored, and accented letters count as the base letter. The exceptions follow the transliteration table of the Italian Ministry of the Interior, used in the Agenzia delle Entrate circular 34/2011: ä and æ count as AE, ö and œ as OE, ü as UE, and ß as SS. Consonants and vowels are counted across the whole surname or first name: O'Connor as a surname gives <code>CNN</code>, and Hans-Peter as a first name gives <code>HSP</code>. A letter such as the umlaut is read as its base letter; since adding an "e" would only add a vowel, the result is usually the same.</p>
<p>For married women the surname at birth is used, not the spouse's. If your name is spelled differently on your passport and your birth certificate, the official code can differ from the calculated one.</p>

<h2>Is the calculated code always the official one?</h2>
<p>No. The result can differ in cases of omocodia, names recorded in a different spelling, birth abroad or personal data corrected later. The only valid code is the one issued by the Agenzia delle Entrate. Compare it with your health card or use the Agenzia's <a href="https://telematici.agenziaentrate.gov.it/VerificaCF" rel="noopener noreferrer" lang="it">verification service</a> (in Italian). Our <a href="{{p:verify}}">formal check</a> tests structure and the check letter only. For omocodia see <a href="{{g:cos-e-l-omocodia}}">what is omocodia</a>.</p>

<h2>How do we check our own calculation?</h2>
<p>The calculation engine is covered by automated tests and compared with an open source reference library. We compared the codes of 7,886 municipalities in our list without finding a difference, and we recomputed the check letter of the example above with a separate program.</p>
<p>There are two limits. The place list comes from an Agenzia delle Entrate export of current municipalities and countries, so suppressed municipalities are missing. And a calculation cannot know whether a person was given an omocodia code.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://www.pmi.it/?p=362269" rel="noopener noreferrer" lang="it">Pmi.it</a> (Italian): algorithm and the 1976 decree.</li>
<li><a href="https://arcom.agenziaentrate.gov.it/CitizenArCom/" rel="noopener noreferrer" lang="it">Agenzia delle Entrate</a> (Italian): archive of municipalities and foreign countries.</li>
<li><a href="https://telematici.agenziaentrate.gov.it/VerificaCF" rel="noopener noreferrer" lang="it">Agenzia delle Entrate</a> (Italian): official verification service.</li>
</ul>`,
};
export default g;
