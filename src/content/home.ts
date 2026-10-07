import type { Locale } from '../i18n/config';

export interface HomeFaq { q: string; a: string }

/** Body copy shown under the calculator on each home page. Link tokens are resolved by resolveLinks(). */
export const homeExtra: Record<Locale, string> = {
  it: `<h2>Come si costruisce un codice fiscale</h2>
<p>Il codice fiscale ha 16 caratteri e si ricava da pochi dati anagrafici con una regola fissata dal decreto del Ministero delle Finanze del 23 dicembre 1976. Le prime tre lettere vengono dal cognome, le tre successive dal nome. Seguono due cifre per l’anno di nascita, una lettera per il mese e due cifre per il giorno, a cui si aggiunge 40 per le donne.</p>
<p>Poi c’è il codice del luogo di nascita: una lettera e tre cifre per i comuni italiani (il codice catastale, detto anche codice Belfiore), la lettera Z e tre cifre per chi è nato all’estero. L’ultimo carattere è una lettera di controllo calcolata sui 15 precedenti. La guida <a href="{{g:come-si-calcola-il-codice-fiscale}}">come si calcola il codice fiscale</a> mostra ogni passaggio con un esempio.</p>
<h2>Quando serve il codice fiscale</h2>
<p>Il codice fiscale viene chiesto a chi si trasferisce in Italia, lavora per un’azienda italiana, affitta o compra casa e apre un conto in banca. Il calcolatore costruisce il codice dai tuoi dati, così puoi confrontarlo con quello che hai già o compilare un modulo senza errori.</p>
<h2>Gli strumenti di Codice Fiscale Pro</h2>
<p>Il sito ha tre strumenti gratuiti, tutti eseguiti nel browser.</p>
<ul>
<li><strong>Calcolo del codice fiscale</strong> (questa pagina): da cognome, nome, sesso, data e luogo di nascita produce il codice. Funziona anche per chi è nato all’estero.</li>
<li><a href="{{p:inverse}}">Codice fiscale inverso</a>: legge un codice esistente e mostra sesso, data di nascita, luogo di nascita ed eventuale omocodia. Non restituisce nome e cognome, perché le lettere iniziali non permettono di ricostruirli.</li>
<li><a href="{{p:verify}}">Verifica del codice fiscale</a>: controlla che il codice sia formalmente corretto, cioè lunghezza, data e carattere di controllo. Non dice se il codice è stato assegnato a qualcuno.</li>
</ul>
<h2>Come usare il calcolatore</h2>
<ol>
<li>Scrivi cognome e nome come risultano nei documenti ufficiali, con tutti i cognomi e tutti i nomi.</li>
<li>Scegli il sesso indicato nei documenti.</li>
<li>Inserisci la data di nascita.</li>
<li>Cerca il comune italiano oppure lo Stato estero di nascita.</li>
<li>Premi il pulsante di calcolo, leggi il codice e copialo.</li>
</ol>
<p>Confronta poi il risultato con la tessera sanitaria o con il documento rilasciato dall’Agenzia delle Entrate.</p>
<h2>Cosa significa il risultato e quali sono i limiti</h2>
<p>Il risultato è un calcolo non ufficiale. Vale solo il codice attribuito dall’Agenzia delle Entrate. Se due persone hanno gli stessi dati, l’Agenzia assegna un codice diverso, sostituendo alcune cifre con lettere (<a href="{{g:cos-e-l-omocodia}}">omocodia</a>). Il calcolatore non può sapere se succede nel tuo caso e mostra il codice di base.</p>
<p>Per ottenere il codice se sei un <a href="{{g:codice-fiscale-per-cittadini-stranieri}}">cittadino straniero</a> o per un <a href="{{g:codice-fiscale-per-neonati}}">neonato</a>, le vie ufficiali sono descritte nelle guide. Codice Fiscale Pro è un servizio indipendente e non è collegato all’Agenzia delle Entrate né ad altri enti pubblici.</p>
<h2>Approfondimenti</h2>
<ul>
<li><a href="{{g:codice-belfiore}}">Il codice Belfiore</a>: come si trova il codice di un comune.</li>
<li><a href="{{g:come-leggere-e-decodificare-un-codice-fiscale}}">Come leggere e decodificare un codice fiscale</a>.</li>
<li><a href="{{g:verifica-formale-e-verifica-ufficiale}}">Verifica formale e verifica ufficiale</a>: che differenza c’è.</li>
</ul>`,

  de: `<h2>So ist ein Codice Fiscale aufgebaut</h2>
<p>Der Codice Fiscale hat 16 Zeichen und wird aus wenigen Personendaten nach einer Regel berechnet, die das Finanzministerium mit Dekret vom 23. Dezember 1976 festgelegt hat. Die ersten drei Buchstaben stammen vom Nachnamen, die nächsten drei vom Vornamen. Es folgen zwei Ziffern für das Geburtsjahr, ein Buchstabe für den Monat und zwei Ziffern für den Tag, bei Frauen plus 40.</p>
<p>Dann kommt der Code des Geburtsorts: ein Buchstabe und drei Ziffern für italienische Gemeinden (der Katastercode, auch Belfiore-Code genannt), bei Geburt im Ausland der Buchstabe Z und drei Ziffern. Das letzte Zeichen ist ein Kontrollbuchstabe, der aus den 15 vorherigen berechnet wird. Der Ratgeber <a href="{{g:come-si-calcola-il-codice-fiscale}}">So wird der Codice Fiscale berechnet</a> zeigt jeden Schritt an einem Beispiel.</p>
<h2>Wann man den Codice Fiscale braucht</h2>
<p>Den Codice Fiscale verlangt, wer nach Italien zieht, für ein italienisches Unternehmen arbeitet, eine Wohnung mietet oder kauft oder ein Bankkonto eröffnet. Der Rechner bildet den Code aus Ihren Daten, damit Sie ihn mit dem vergleichen können, den Sie schon haben, oder ein Formular fehlerfrei ausfüllen.</p>
<h2>Die Werkzeuge von Codice Fiscale Pro</h2>
<p>Die Website hat drei kostenlose Werkzeuge, die alle im Browser laufen.</p>
<ul>
<li><strong>Codice-Fiscale-Rechner</strong> (diese Seite): Aus Nachname, Vorname, Geschlecht, Geburtsdatum und Geburtsort entsteht der Code. Das gilt auch für im Ausland Geborene.</li>
<li><a href="{{p:inverse}}">Codice Fiscale rückwärts lesen</a>: Das Werkzeug liest einen vorhandenen Code und zeigt Geschlecht, Geburtsdatum, Geburtsort und eine mögliche Omocodia. Namen gibt es nicht zurück, weil sich aus den Anfangsbuchstaben keine Namen rekonstruieren lassen.</li>
<li><a href="{{p:verify}}">Codice Fiscale prüfen</a>: Es prüft, ob der Code formal korrekt ist, also Länge, Datum und Kontrollzeichen. Ob der Code jemandem zugewiesen wurde, sagt es nicht.</li>
</ul>
<h2>So benutzen Sie den Rechner</h2>
<ol>
<li>Tragen Sie Nachname und Vorname so ein, wie sie in den amtlichen Dokumenten stehen, mit allen Nachnamen und allen Vornamen.</li>
<li>Wählen Sie das Geschlecht aus den Dokumenten.</li>
<li>Geben Sie das Geburtsdatum ein.</li>
<li>Suchen Sie die italienische Gemeinde oder den ausländischen Geburtsstaat.</li>
<li>Klicken Sie auf die Berechnen-Schaltfläche, lesen Sie den Code ab und kopieren Sie ihn.</li>
</ol>
<p>Vergleichen Sie das Ergebnis danach mit der Gesundheitskarte (tessera sanitaria) oder dem Dokument der Agenzia delle Entrate.</p>
<h2>Was das Ergebnis bedeutet und wo die Grenzen liegen</h2>
<p>Das Ergebnis ist eine inoffizielle Berechnung. Gültig ist nur der Code, den die Agenzia delle Entrate zugewiesen hat. Haben zwei Personen dieselben Daten, vergibt die Agentur einen anderen Code, in dem einige Ziffern durch Buchstaben ersetzt sind (<a href="{{g:cos-e-l-omocodia}}">Omocodia</a>). Der Rechner kann nicht wissen, ob das bei Ihnen eintritt, und zeigt den Basiscode.</p>
<p>Wie Sie den Code als <a href="{{g:codice-fiscale-per-cittadini-stranieri}}">ausländischer Staatsbürger</a> oder für ein <a href="{{g:codice-fiscale-per-neonati}}">Neugeborenes</a> erhalten, beschreiben die Ratgeber. Codice Fiscale Pro ist ein unabhängiger Dienst und weder mit der Agenzia delle Entrate noch mit anderen Behörden verbunden.</p>
<h2>Weiterführende Ratgeber</h2>
<ul>
<li><a href="{{g:codice-belfiore}}">Der Belfiore-Code</a>: So finden Sie den Code einer Gemeinde.</li>
<li><a href="{{g:come-leggere-e-decodificare-un-codice-fiscale}}">Einen Codice Fiscale lesen und entschlüsseln</a>.</li>
<li><a href="{{g:verifica-formale-e-verifica-ufficiale}}">Formale und offizielle Prüfung</a>: der Unterschied.</li>
</ul>`,

  fr: `<h2>Comment est construit un codice fiscale</h2>
<p>Le codice fiscale compte 16 caractères et se calcule à partir de quelques données personnelles selon une règle fixée par le décret du ministère des Finances du 23 décembre 1976. Les trois premières lettres viennent du nom de famille, les trois suivantes du prénom. Viennent ensuite deux chiffres pour l’année de naissance, une lettre pour le mois et deux chiffres pour le jour, auquel on ajoute 40 pour les femmes.</p>
<p>Puis vient le code du lieu de naissance : une lettre et trois chiffres pour les communes italiennes (le code cadastral, appelé aussi code Belfiore), la lettre Z et trois chiffres pour les personnes nées à l’étranger. Le dernier caractère est une lettre de contrôle calculée sur les 15 précédents. Le guide <a href="{{g:come-si-calcola-il-codice-fiscale}}">comment se calcule le codice fiscale</a> détaille chaque étape avec un exemple.</p>
<h2>Quand le codice fiscale est demandé</h2>
<p>On demande le codice fiscale à qui s’installe en Italie, travaille pour une entreprise italienne, loue ou achète un logement ou ouvre un compte bancaire. Le calculateur construit le code à partir de vos données, pour le comparer à celui que vous avez déjà ou remplir un formulaire sans erreur.</p>
<h2>Les outils de Codice Fiscale Pro</h2>
<p>Le site propose trois outils gratuits, tous exécutés dans le navigateur.</p>
<ul>
<li><strong>Calcul du codice fiscale</strong> (cette page) : à partir du nom, du prénom, du sexe, de la date et du lieu de naissance, il produit le code. Il fonctionne aussi pour les personnes nées à l’étranger.</li>
<li><a href="{{p:inverse}}">Codice fiscale inverse</a> : il lit un code existant et affiche le sexe, la date de naissance, le lieu de naissance et une éventuelle omocodia. Il ne rend ni nom ni prénom, car les lettres initiales ne permettent pas de les reconstituer.</li>
<li><a href="{{p:verify}}">Vérification du codice fiscale</a> : il contrôle que le code est correct dans sa forme, c’est-à-dire la longueur, la date et le caractère de contrôle. Il ne dit pas si le code a été attribué à quelqu’un.</li>
</ul>
<h2>Comment utiliser le calculateur</h2>
<ol>
<li>Saisissez le nom et le prénom tels qu’ils figurent sur les documents officiels, avec tous les noms et tous les prénoms.</li>
<li>Choisissez le sexe indiqué sur les documents.</li>
<li>Entrez la date de naissance.</li>
<li>Cherchez la commune italienne ou l’État étranger de naissance.</li>
<li>Cliquez sur le bouton de calcul, lisez le code et copiez-le.</li>
</ol>
<p>Comparez ensuite le résultat avec la carte de santé (tessera sanitaria) ou le document délivré par l’Agenzia delle Entrate.</p>
<h2>Ce que signifie le résultat et ses limites</h2>
<p>Le résultat est un calcul non officiel. Seul le code attribué par l’Agenzia delle Entrate fait foi. Si deux personnes ont les mêmes données, l’Agenzia attribue un code différent, dont certains chiffres sont remplacés par des lettres (<a href="{{g:cos-e-l-omocodia}}">omocodia</a>). Le calculateur ne peut pas savoir si cela vous concerne et affiche le code de base.</p>
<p>Pour obtenir le code en tant que <a href="{{g:codice-fiscale-per-cittadini-stranieri}}">ressortissant étranger</a> ou pour un <a href="{{g:codice-fiscale-per-neonati}}">nouveau-né</a>, les démarches officielles sont décrites dans les guides. Codice Fiscale Pro est un service indépendant, sans lien avec l’Agenzia delle Entrate ni avec d’autres organismes publics.</p>
<h2>Pour aller plus loin</h2>
<ul>
<li><a href="{{g:codice-belfiore}}">Le code Belfiore</a> : comment trouver le code d’une commune.</li>
<li><a href="{{g:come-leggere-e-decodificare-un-codice-fiscale}}">Lire et décoder un codice fiscale</a>.</li>
<li><a href="{{g:verifica-formale-e-verifica-ufficiale}}">Vérification formelle et vérification officielle</a> : la différence.</li>
</ul>`,

  es: `<h2>Cómo se construye un codice fiscale</h2>
<p>El codice fiscale tiene 16 caracteres y se calcula a partir de pocos datos personales con una regla fijada por el decreto del Ministerio de Hacienda italiano del 23 de diciembre de 1976. Las tres primeras letras salen del apellido y las tres siguientes del nombre. Después van dos cifras para el año de nacimiento, una letra para el mes y dos cifras para el día, al que se suma 40 en las mujeres.</p>
<p>A continuación va el código del lugar de nacimiento: una letra y tres cifras para los municipios italianos (el código catastral, llamado también código Belfiore), y la letra Z con tres cifras para quien nació en el extranjero. El último carácter es una letra de control calculada con los 15 anteriores. La guía <a href="{{g:come-si-calcola-il-codice-fiscale}}">cómo se calcula el codice fiscale</a> explica cada paso con un ejemplo.</p>
<h2>Cuándo hace falta el codice fiscale</h2>
<p>Piden el codice fiscale a quien se muda a Italia, trabaja para una empresa italiana, alquila o compra una vivienda o abre una cuenta bancaria. La calculadora construye el código con tus datos, para que lo compares con el que ya tienes o rellenes un formulario sin errores.</p>
<h2>Las herramientas de Codice Fiscale Pro</h2>
<p>El sitio tiene tres herramientas gratuitas, todas ejecutadas en el navegador.</p>
<ul>
<li><strong>Cálculo del codice fiscale</strong> (esta página): con apellido, nombre, sexo, fecha y lugar de nacimiento genera el código. También sirve para quien nació en el extranjero.</li>
<li><a href="{{p:inverse}}">Codice fiscale inverso</a>: lee un código existente y muestra sexo, fecha de nacimiento, lugar de nacimiento y una posible omocodia. No devuelve nombre ni apellido, porque las letras iniciales no permiten reconstruirlos.</li>
<li><a href="{{p:verify}}">Verificación del codice fiscale</a>: comprueba que el código sea correcto en su forma, es decir, longitud, fecha y carácter de control. No dice si el código se asignó a alguien.</li>
</ul>
<h2>Cómo usar la calculadora</h2>
<ol>
<li>Escribe apellido y nombre como figuran en los documentos oficiales, con todos los apellidos y todos los nombres.</li>
<li>Elige el sexo que consta en los documentos.</li>
<li>Introduce la fecha de nacimiento.</li>
<li>Busca el municipio italiano o el país extranjero de nacimiento.</li>
<li>Pulsa el botón de cálculo, lee el código y cópialo.</li>
</ol>
<p>Después compara el resultado con la tarjeta sanitaria (tessera sanitaria) o con el documento emitido por la Agenzia delle Entrate.</p>
<h2>Qué significa el resultado y cuáles son los límites</h2>
<p>El resultado es un cálculo no oficial. Solo vale el código asignado por la Agenzia delle Entrate. Si dos personas tienen los mismos datos, la Agenzia asigna un código distinto, con algunas cifras sustituidas por letras (<a href="{{g:cos-e-l-omocodia}}">omocodia</a>). La calculadora no puede saber si ocurre en tu caso y muestra el código base.</p>
<p>Para obtener el código como <a href="{{g:codice-fiscale-per-cittadini-stranieri}}">ciudadano extranjero</a> o para un <a href="{{g:codice-fiscale-per-neonati}}">recién nacido</a>, las vías oficiales se describen en las guías. Codice Fiscale Pro es un servicio independiente y no está vinculado a la Agenzia delle Entrate ni a otros organismos públicos.</p>
<h2>Guías para profundizar</h2>
<ul>
<li><a href="{{g:codice-belfiore}}">El código Belfiore</a>: cómo encontrar el código de un municipio.</li>
<li><a href="{{g:come-leggere-e-decodificare-un-codice-fiscale}}">Cómo leer y decodificar un codice fiscale</a>.</li>
<li><a href="{{g:verifica-formale-e-verifica-ufficiale}}">Verificación formal y verificación oficial</a>: en qué se diferencian.</li>
</ul>`,

  en: `<h2>How a codice fiscale is built</h2>
<p>The codice fiscale has 16 characters and is worked out from a few personal details by a rule set in a decree of the Italian Ministry of Finance dated 23 December 1976. The first three letters come from the surname and the next three from the first name. Then come two digits for the year of birth, a letter for the month and two digits for the day, with 40 added for women.</p>
<p>Next is the code of the place of birth: one letter and three digits for Italian municipalities (the cadastral code, also called the Belfiore code), and the letter Z with three digits for people born abroad. The last character is a check letter calculated from the previous 15. Our guide <a href="{{g:come-si-calcola-il-codice-fiscale}}">how the codice fiscale is calculated</a> walks through each step with an example.</p>
<h2>When you need a codice fiscale</h2>
<p>People are asked for the codice fiscale when they move to Italy, work for an Italian company, rent or buy a home or open a bank account. The calculator builds the code from your details so you can compare it with the one you already have or fill in a form without mistakes.</p>
<h2>The tools on Codice Fiscale Pro</h2>
<p>The site has three free tools, all running in your browser.</p>
<ul>
<li><strong>Codice fiscale calculator</strong> (this page): from surname, first name, sex, date and place of birth it produces the code. It works for people born abroad too.</li>
<li><a href="{{p:inverse}}">Decode a codice fiscale</a>: reads an existing code and shows the sex, date of birth, place of birth and any omocodia. It does not return a name, because the first letters cannot be turned back into one.</li>
<li><a href="{{p:verify}}">Check a codice fiscale</a>: tests whether the code is formally correct, meaning length, date and check character. It cannot say whether the code was ever assigned to someone.</li>
</ul>
<h2>How to use the calculator</h2>
<ol>
<li>Enter the surname and first name as they appear on official documents, with every surname and every first name.</li>
<li>Choose the sex shown on the documents.</li>
<li>Enter the date of birth.</li>
<li>Search for the Italian municipality or the foreign country of birth.</li>
<li>Press the calculate button, read the code and copy it.</li>
</ol>
<p>Then compare the result with the health card (tessera sanitaria) or the document issued by the Agenzia delle Entrate.</p>
<h2>What the result means and its limits</h2>
<p>The result is an unofficial calculation. Only the code assigned by the Agenzia delle Entrate is valid. If two people have the same details, the Agenzia assigns a different code with some digits replaced by letters (<a href="{{g:cos-e-l-omocodia}}">omocodia</a>). The calculator cannot know whether that applies to you and shows the base code.</p>
<p>The official routes to get a code as a <a href="{{g:codice-fiscale-per-cittadini-stranieri}}">foreign national</a> or for a <a href="{{g:codice-fiscale-per-neonati}}">newborn</a> are described in the guides. Codice Fiscale Pro is an independent service and has no link with the Agenzia delle Entrate or any other public body.</p>
<h2>Further reading</h2>
<ul>
<li><a href="{{g:codice-belfiore}}">The Belfiore code</a>: how to find the code of a municipality.</li>
<li><a href="{{g:come-leggere-e-decodificare-un-codice-fiscale}}">How to read and decode a codice fiscale</a>.</li>
<li><a href="{{g:verifica-formale-e-verifica-ufficiale}}">Formal check and official verification</a>: what separates them.</li>
</ul>`,
};

/** Visible FAQ on each home page. Also feeds the FAQPage structured data, so the two always match. */
export const homeFaq: Record<Locale, HomeFaq[]> = {
  it: [
    { q: 'Che cos’è il codice fiscale?', a: 'È il codice di 16 caratteri che identifica una persona nei rapporti con la pubblica amministrazione e con il fisco italiano. Lo attribuisce l’Agenzia delle Entrate e compare sulla tessera sanitaria.' },
    { q: 'Il codice calcolato qui è ufficiale?', a: 'No. È un calcolo che segue la regola ministeriale e serve a confrontare un codice o a compilare un modulo. L’unico codice valido è quello attribuito dall’Agenzia delle Entrate.' },
    { q: 'I miei dati vengono inviati a un server?', a: 'No. Il calcolo avviene nel tuo browser e nome, data e luogo di nascita non lasciano il tuo dispositivo. Con il tuo consenso il sito misura le visite con Google Analytics, che non riceve i valori inseriti nel calcolatore.' },
    { q: 'Cosa faccio se un’altra persona ha i miei stessi dati?', a: 'L’Agenzia delle Entrate assegna un codice diverso, in cui alcune cifre sono sostituite da lettere (omocodia). Il calcolatore mostra il codice di base e non può sapere se il tuo è una variante, quindi controlla sempre il codice sulla tessera sanitaria.' },
    { q: 'Come si calcola il codice fiscale se sono nato all’estero?', a: 'Il luogo di nascita si indica con la lettera Z seguita da tre cifre che identificano lo Stato. Nel calcolatore basta cercare lo Stato di nascita e il codice viene inserito in automatico.' },
    { q: 'Posso ricavare nome e cognome da un codice fiscale?', a: 'No. Le prime sei lettere dipendono dalle consonanti e dalle vocali di cognome e nome, e nomi diversi possono dare le stesse lettere. Lo strumento inverso legge solo sesso, data di nascita e luogo di nascita.' },
    { q: 'La verifica formale è come la verifica ufficiale?', a: 'No. La verifica formale controlla solo la struttura del codice. Per sapere se un codice risulta attribuito e corrisponde ai dati in Anagrafe Tributaria serve il servizio online dell’Agenzia delle Entrate.' },
  ],
  de: [
    { q: 'Was ist der Codice Fiscale?', a: 'Es ist der 16-stellige Code, der eine Person gegenüber der italienischen Verwaltung und dem Fiskus identifiziert. Die Agenzia delle Entrate weist ihn zu, und er steht auf der Gesundheitskarte (tessera sanitaria).' },
    { q: 'Ist der hier berechnete Code offiziell?', a: 'Nein. Es ist eine Berechnung nach der ministeriellen Regel, die zum Vergleichen eines Codes oder zum Ausfüllen eines Formulars dient. Gültig ist nur der Code, den die Agenzia delle Entrate zugewiesen hat.' },
    { q: 'Werden meine Daten an einen Server gesendet?', a: 'Nein. Die Berechnung läuft in Ihrem Browser, und Name, Geburtsdatum und Geburtsort verlassen Ihr Gerät nicht. Mit Ihrer Einwilligung misst die Website Besuche mit Google Analytics, das die im Rechner eingegebenen Werte nicht erhält.' },
    { q: 'Was ist, wenn eine andere Person dieselben Daten hat?', a: 'Die Agenzia delle Entrate vergibt dann einen anderen Code, in dem einige Ziffern durch Buchstaben ersetzt sind (Omocodia). Der Rechner zeigt den Basiscode und kann nicht wissen, ob Ihrer eine Variante ist. Prüfen Sie den Code deshalb immer auf der Gesundheitskarte.' },
    { q: 'Wie berechne ich den Codice Fiscale, wenn ich im Ausland geboren bin?', a: 'Der Geburtsort wird durch den Buchstaben Z und drei Ziffern für den Staat angegeben. Im Rechner suchen Sie einfach den Geburtsstaat, und der Code wird automatisch eingesetzt.' },
    { q: 'Kann ich aus einem Codice Fiscale Vor- und Nachnamen ablesen?', a: 'Nein. Die ersten sechs Buchstaben hängen von den Konsonanten und Vokalen der Namen ab, und verschiedene Namen können dieselben Buchstaben ergeben. Das Werkzeug zum Rückwärtslesen zeigt nur Geschlecht, Geburtsdatum und Geburtsort.' },
    { q: 'Ist die formale Prüfung dasselbe wie die offizielle Prüfung?', a: 'Nein. Die formale Prüfung kontrolliert nur den Aufbau des Codes. Ob ein Code vergeben ist und zu den Daten im Steuerregister (Anagrafe Tributaria) passt, zeigt nur der Online-Dienst der Agenzia delle Entrate.' },
  ],
  fr: [
    { q: 'Qu’est-ce que le codice fiscale ?', a: 'C’est le code de 16 caractères qui identifie une personne auprès de l’administration et du fisc italiens. L’Agenzia delle Entrate l’attribue et il figure sur la carte de santé (tessera sanitaria).' },
    { q: 'Le code calculé ici est-il officiel ?', a: 'Non. C’est un calcul qui suit la règle ministérielle et sert à comparer un code ou à remplir un formulaire. Seul le code attribué par l’Agenzia delle Entrate est valable.' },
    { q: 'Mes données sont-elles envoyées à un serveur ?', a: 'Non. Le calcul se fait dans votre navigateur, et le nom, la date et le lieu de naissance ne quittent pas votre appareil. Avec votre consentement, le site mesure les visites avec Google Analytics, qui ne reçoit pas les valeurs saisies dans le calculateur.' },
    { q: 'Que faire si une autre personne a les mêmes données que moi ?', a: 'L’Agenzia delle Entrate attribue alors un code différent, dont certains chiffres sont remplacés par des lettres (omocodia). Le calculateur affiche le code de base et ne peut pas savoir si le vôtre est une variante. Vérifiez donc toujours le code sur la carte de santé.' },
    { q: 'Comment calculer le codice fiscale si je suis né à l’étranger ?', a: 'Le lieu de naissance s’indique par la lettre Z suivie de trois chiffres qui désignent l’État. Dans le calculateur, il suffit de chercher l’État de naissance et le code est inséré automatiquement.' },
    { q: 'Peut-on retrouver le nom et le prénom à partir d’un codice fiscale ?', a: 'Non. Les six premières lettres dépendent des consonnes et des voyelles du nom et du prénom, et des noms différents peuvent donner les mêmes lettres. L’outil inverse lit seulement le sexe, la date de naissance et le lieu de naissance.' },
    { q: 'La vérification formelle équivaut-elle à la vérification officielle ?', a: 'Non. La vérification formelle contrôle seulement la structure du code. Pour savoir si un code est attribué et correspond aux données du registre fiscal (Anagrafe Tributaria), il faut le service en ligne de l’Agenzia delle Entrate.' },
  ],
  es: [
    { q: '¿Qué es el codice fiscale?', a: 'Es el código de 16 caracteres que identifica a una persona ante la administración y la hacienda italianas. Lo asigna la Agenzia delle Entrate y figura en la tarjeta sanitaria (tessera sanitaria).' },
    { q: '¿El código calculado aquí es oficial?', a: 'No. Es un cálculo que sigue la regla ministerial y sirve para comparar un código o rellenar un formulario. El único código válido es el asignado por la Agenzia delle Entrate.' },
    { q: '¿Se envían mis datos a un servidor?', a: 'No. El cálculo se hace en tu navegador, y el nombre, la fecha y el lugar de nacimiento no salen de tu dispositivo. Con tu consentimiento el sitio mide las visitas con Google Analytics, que no recibe los valores introducidos en la calculadora.' },
    { q: '¿Qué pasa si otra persona tiene mis mismos datos?', a: 'La Agenzia delle Entrate asigna entonces un código distinto, con algunas cifras sustituidas por letras (omocodia). La calculadora muestra el código base y no puede saber si el tuyo es una variante, así que comprueba siempre el código de la tarjeta sanitaria.' },
    { q: '¿Cómo se calcula el codice fiscale si nací en el extranjero?', a: 'El lugar de nacimiento se indica con la letra Z seguida de tres cifras que identifican el país. En la calculadora basta buscar el país de nacimiento y el código se inserta solo.' },
    { q: '¿Puedo sacar el nombre y el apellido de un codice fiscale?', a: 'No. Las seis primeras letras dependen de las consonantes y las vocales del apellido y del nombre, y nombres distintos pueden dar las mismas letras. La herramienta inversa solo lee el sexo, la fecha de nacimiento y el lugar de nacimiento.' },
    { q: '¿La verificación formal es lo mismo que la verificación oficial?', a: 'No. La verificación formal solo comprueba la estructura del código. Para saber si un código figura asignado y coincide con los datos del registro tributario (Anagrafe Tributaria) hace falta el servicio en línea de la Agenzia delle Entrate.' },
  ],
  en: [
    { q: 'What is the codice fiscale?', a: 'It is the 16-character code that identifies a person to the Italian administration and tax authority. The Agenzia delle Entrate assigns it, and it is printed on the health card (tessera sanitaria).' },
    { q: 'Is the code calculated here official?', a: 'No. It is a calculation that follows the ministerial rule and is useful for comparing a code or filling in a form. The only valid code is the one assigned by the Agenzia delle Entrate.' },
    { q: 'Is my data sent to a server?', a: 'No. The calculation runs in your browser, and your name, date of birth and birthplace never leave your device. With your consent the site measures visits with Google Analytics, which does not receive the values you enter in the calculator.' },
    { q: 'What if another person has exactly my details?', a: 'The Agenzia delle Entrate assigns a different code with some digits replaced by letters (omocodia). The calculator shows the base code and cannot know whether yours is a variant, so always check the code on your health card.' },
    { q: 'How do I calculate the codice fiscale if I was born abroad?', a: 'The place of birth is written as the letter Z followed by three digits that identify the country. In the calculator, search for the country of birth and the code is filled in for you.' },
    { q: 'Can I get a name from a codice fiscale?', a: 'No. The first six letters depend on the consonants and vowels of the surname and first name, and different names can give the same letters. The decoding tool reads only the sex, date of birth and place of birth.' },
    { q: 'Is a formal check the same as official verification?', a: 'No. A formal check only tests the structure of the code. To know whether a code is assigned and matches the records in the tax registry (Anagrafe Tributaria), you need the online service of the Agenzia delle Entrate.' },
  ],
};
