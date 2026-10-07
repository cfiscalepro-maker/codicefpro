import type { LocaleContent } from '../../i18n/content';
const AGENCY_VERIFY = 'https://telematici.agenziaentrate.gov.it/VerificaCF';
const content: LocaleContent = {
  home: {
    title: 'Codice Fiscale Calculator Online | Codice Fiscale Pro',
    description: 'Free codice fiscale calculator that runs in your browser, so your data stays with you. Works for people born in Italy or abroad. Independent service.',
    eyebrow: 'Free · No registration',
    h1: 'Codice Fiscale Calculator Online',
    intro: 'Enter the personal details and get the Italian tax code. The calculation happens in your browser: name, date of birth and birthplace are not sent to any server.',
    afterTool: 'More tools: <a class="text-link underline" href="{{p:inverse}}">decode a codice fiscale</a> and <a class="text-link underline" href="{{p:verify}}">check a codice fiscale</a>. Want the rules? Read <a class="text-link underline" href="{{g:come-si-calcola-il-codice-fiscale}}">how the codice fiscale is calculated</a>.',
  },
  inverse: {
    title: 'Decode a Codice Fiscale Online (Reverse Lookup) | Codice Fiscale Pro',
    description: 'Decode a codice fiscale: read the date of birth, sex, place of birth and omocodia stored in the code. Runs in your browser, no data sent.',
    eyebrow: 'Decoding', h1: 'Decode a Codice Fiscale: Reverse Lookup Online',
    intro: 'Enter a codice fiscale to read the data it contains: sex, date of birth, place of birth and omocodia. The work happens in your browser.',
    body: `<h2>What you cannot recover</h2>
<p>A reverse codice fiscale does not return a first name or a surname. The first six letters come from the consonants and vowels of the surname and first name by a fixed rule, and different names give the same letters. The code also holds only two digits of the year, so the century stays open when two years fit.</p>
<h2>Decoding and official verification</h2>
<p>This page reads the structure of the code. It does not query the Agenzia delle Entrate and cannot say whether the code was ever assigned to someone. For that there is the <a href="{{p:verify}}">formal check</a> and, for an official answer, the Agenzia's own service. To generate a code, use the <a href="{{p:home}}">codice fiscale calculator</a>. The guide <a href="{{g:cos-e-il-codice-fiscale-inverso}}">What is the reverse codice fiscale</a> explains the limits in detail.</p>`,
  },
  verify: {
    title: 'Check a Codice Fiscale: Formal Validation | Codice Fiscale Pro',
    description: 'Check a codice fiscale: length, date, check character and omocodia. A formal check, not an official one.',
    eyebrow: 'Formal check', h1: 'Check a Codice Fiscale',
    intro: 'Find out whether a codice fiscale is built correctly. A formal check of a codice fiscale is not the same as official verification by the Agenzia delle Entrate.',
    body: `<h2>What we check</h2>
<ul>
<li>16 characters, with letters and digits in the expected positions.</li>
<li>A valid month letter, and a day and sex that fit the month.</li>
<li>The format of the place code.</li>
<li>A correct check character.</li>
<li>Omocodia: letters in place of digits are accepted.</li>
</ul>
<h2>What we cannot say</h2>
<p>A code can be formally correct and still never have been assigned to anyone, and we cannot match it to a name. For official verification use the <a href="${AGENCY_VERIFY}" rel="noopener noreferrer">Agenzia delle Entrate service</a>. Codice Fiscale Pro is independent and not affiliated with the Agenzia. To read the data inside a code, see <a href="{{p:inverse}}">decode a codice fiscale</a>.</p>`,
  },
  about: {
    title: 'About | Codice Fiscale Pro', description: 'Codice Fiscale Pro is an independent service to calculate, decode and check the Italian codice fiscale, with calculation in your browser.',
    h1: 'Codice Fiscale Pro', eyebrow: 'About',
    body: `<p>Codice Fiscale Pro is an independent online service run by the Codice Fiscale Pro Team. It offers a <a href="{{p:home}}">codice fiscale calculator</a>, a <a href="{{p:inverse}}">decoder</a> and a <a href="{{p:verify}}">formal check</a>, free and without registration. The interface is available in Italian, German, French, Spanish and English.</p>
<h2>How we work</h2>
<ul>
<li>The calculation runs in your browser. The personal data you enter is not sent.</li>
<li>The algorithm follows the known codice fiscale rules, including omocodia, and is covered by automated tests, including a comparison with an open source reference library.</li>
<li>Place codes come from an export of the Agenzia delle Entrate list of current municipalities and foreign states, stored as a local copy. It is not a live connection and it does not include suppressed municipalities.</li>
</ul>
<h2>What we are not</h2>
<p>We are not the Agenzia delle Entrate and have no relationship with it. We do not issue codici fiscali, and a formal check is not the official verification. For that, use the <a href="${AGENCY_VERIFY}" rel="noopener noreferrer">Agenzia's service</a>.</p>
<h2>Contact</h2>
<p>To report an error or suggest an improvement, see the <a href="{{p:contact}}">contact page</a>.</p>`,
  },
  contact: {
    title: 'Contact | Codice Fiscale Pro', description: 'Contact Codice Fiscale Pro to report a mistake, ask a question or exercise your privacy rights.',
    h1: 'Contact', eyebrow: 'Contact',
    body: `<p>Write to <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>
<h2>To report a calculation error</h2>
<p>Tell us the result you got and the one you expected, the municipality or country of birth and the date. Please do not send a full codice fiscale unless it is needed. Personal data is handled as described in the <a href="{{p:privacy}}">privacy policy</a>.</p>
<h2>What we cannot do</h2>
<p>We do not issue codici fiscali and cannot correct or check records at the Agenzia delle Entrate. For that you need to contact the Agenzia directly.</p>`,
  },
  privacy: {
    title: 'Privacy Policy and Cookies | Codice Fiscale Pro', description: 'What data Codice Fiscale Pro handles: calculator inputs stay in your browser. Google Analytics cookies only with your consent.',
    h1: 'Privacy Policy and Cookies', eyebrow: 'Last updated: 5 October 2026',
    body: `<p>This policy describes how codicefiscalepro.com works today.</p>
<h2>Controller and contact</h2>
<p>The site is run by Codice Fiscale Pro, an independent service. For any privacy request write to <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>
<h2>Data you enter in the tools</h2>
<p>Surname, first name, date and place of birth, sex and the codici fiscali you enter are processed in your browser only. We do not receive them, store them or send them to outside services, including Google Analytics. They do not appear in page addresses. The share button shares only the link to the tool, without your data. The downloadable file is created on your device.</p>
<h2>Technical data in your browser</h2>
<p>We use your browser's local storage (localStorage) for two technical purposes that do not need consent:</p>
<ul>
<li><strong>theme</strong>: your choice of light or dark theme.</li>
<li><strong>cf-consent</strong>: your cookie choice, kept for 6 months.</li>
</ul>
<h2>Google Analytics (only with consent)</h2>
<p>If you press "Accept analytics", we load Google Analytics 4 to measure use of the site in aggregate: pages visited, approximate origin, device and browser type. If you reject or make no choice, the Google script is not loaded.</p>
<ul>
<li><strong>Provider:</strong> Google Ireland Limited, with possible transfer of data to Google LLC in the United States. Google states that it relies on mechanisms such as the EU-US Data Privacy Framework and standard contractual clauses.</li>
<li><strong>Cookies:</strong> _ga and _ga_G-8GHY9P65L6, for up to 2 years.</li>
<li><strong>Advertising features:</strong> Google signals and ad personalization are switched off.</li>
<li><strong>Retention:</strong> according to the retention period set in the site's Google Analytics account, within the limits Google sets for GA4.</li>
<li><strong>Legal basis:</strong> your consent (Article 6(1)(a) GDPR and Article 5(3) of the ePrivacy Directive as implemented in national law).</li>
</ul>
<p>You can change your mind at any time with "Manage cookies" at the bottom of every page. If you reject after accepting, we delete the Google Analytics cookies that the browser lets us remove and stop measuring.</p>
<h2>Server logs</h2>
<p>The hosting provider may record technical data about each request, such as IP address, date and time, requested page and browser, for security and operation. We do not use it to identify you.</p>
<h2>Advertising</h2>
<p>The site does not show ads at the moment. If we add advertising, we will update this policy and ask for consent before using advertising cookies.</p>
<h2>If you write to us</h2>
<p>If you email contact@codicefiscalepro.com, we use your address and message only to reply. The site has no contact form.</p>
<h2>Your rights</h2>
<p>You can ask for access, correction, deletion, restriction, objection and portability of data about you (Articles 15 to 22 GDPR) and withdraw consent at any time. Write to the address above. You can also complain to the data protection authority where you live (see the <a href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en" rel="noopener noreferrer">list of EU authorities</a>) or to the Italian <a href="https://www.garanteprivacy.it/" rel="noopener noreferrer">Garante per la protezione dei dati personali</a>. Users in the United Kingdom can contact the Information Commissioner's Office.</p>
<h2>Changes</h2>
<p>If the tools we use change, we update this page and the date at the top.</p>`,
  },
  terms: {
    title: 'Terms and Conditions | Codice Fiscale Pro', description: 'Terms of use of Codice Fiscale Pro: an independent, free service. Results are unofficial and carry no warranty.',
    h1: 'Terms and Conditions', eyebrow: 'Last updated: 5 October 2026',
    body: `<h2>Independent service</h2>
<p>Codice Fiscale Pro is an independent website. It is not affiliated with the Agenzia delle Entrate or any public body, does not issue official codici fiscali and does not replace official services.</p>
<h2>What the site offers</h2>
<p>A codice fiscale calculator, a decoder and a formal check, plus informational content. The service is free and needs no registration.</p>
<h2>Unofficial results</h2>
<p>Results are calculated with the known codice fiscale algorithm and a local list of current Italian municipalities and foreign states. The list does not include suppressed municipalities. A code calculated here can differ from the one officially assigned, for example because of mistakes in the data entered, omocodia or later changes to personal records. Before you use a code in a legal act, a contract or a tax filing, compare it with your health card or with the Agenzia delle Entrate's official verification.</p>
<h2>No warranty</h2>
<p>The site is provided "as is". We work to keep it accurate but do not guarantee that it is free of errors or always available. To the extent the law allows, we are not liable for damage resulting from use of the results. Rights that the law gives consumers are not affected.</p>
<h2>Fair use</h2>
<p>Use the tools for lawful purposes. Do not use them to overload the site or to bypass its technical protections.</p>
<h2>Content and external links</h2>
<p>Texts, graphics and code on the site belong to Codice Fiscale Pro unless stated otherwise. Links to external sites, such as the Agenzia delle Entrate, are offered for convenience: we do not control those sites.</p>
<h2>Privacy</h2>
<p>How data is handled is described in the <a href="{{p:privacy}}">privacy policy</a>.</p>
<h2>Governing law and changes</h2>
<p>These terms are governed by Italian law, without removing the mandatory consumer protections of your country of residence. We may update them: the date at the top shows the latest version. For questions write to <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>`,
  },
  guides: {
    title: 'Codice Fiscale Guides | Codice Fiscale Pro', description: 'Clear guides on the codice fiscale: how it is calculated, how to read it, omocodia, the Belfiore code, people born abroad and verification.',
    h1: 'Codice Fiscale Guides',
    intro: 'Guides by the Codice Fiscale Pro Team. Each one answers a precise question and points to the right tool: <a href="{{p:home}}">calculator</a>, <a href="{{p:inverse}}">decoder</a> or <a href="{{p:verify}}">check</a>.',
    other: 'More guides are available in Italian: <a class="text-link underline" href="/it/guide/" hreflang="it" lang="it">Guide al codice fiscale</a>.',
  },
};
export default content;
