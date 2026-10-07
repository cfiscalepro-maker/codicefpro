import type { LocaleContent } from '../../i18n/content';
const AGENCY_VERIFY = 'https://telematici.agenziaentrate.gov.it/VerificaCF';
const content: LocaleContent = {
  home: {
    title: 'Calcul du codice fiscale en ligne | Codice Fiscale Pro',
    description: 'Calculez gratuitement votre codice fiscale italien, dans votre navigateur et sans envoi de données. Pour les nés en Italie ou à l’étranger, omocodia incluse.',
    eyebrow: 'Gratuit · Sans inscription',
    h1: 'Calcul du codice fiscale en ligne',
    intro: 'Le codice fiscale est le numéro fiscal italien. Saisissez vos données d’état civil pour obtenir le code. Le calcul se fait dans votre navigateur : nom, date de naissance et lieu de naissance ne sont envoyés à aucun serveur.',
    afterTool: 'Autres outils : <a class="text-link underline" href="{{p:inverse}}">décoder un codice fiscale</a> et <a class="text-link underline" href="{{p:verify}}">vérifier un codice fiscale</a>. Envie de comprendre les règles ? Lisez <a class="text-link underline" href="{{g:come-si-calcola-il-codice-fiscale}}">comment se calcule le codice fiscale</a>.',
  },
  inverse: {
    title: 'Décoder un codice fiscale en ligne (recherche inverse) | Codice Fiscale Pro',
    description: 'Décoder un codice fiscale : lisez date de naissance, sexe, lieu de naissance et omocodia contenus dans le code. Dans votre navigateur, sans envoi de données.',
    eyebrow: 'Décodage', h1: 'Décoder un codice fiscale : recherche inverse en ligne',
    intro: 'Saisissez un codice fiscale pour lire les données qu’il contient : sexe, date de naissance, lieu de naissance et omocodia. Le traitement se fait dans votre navigateur.',
    body: `<h2>Ce qu’on ne peut pas retrouver</h2>
<p>La recherche inverse ne renvoie ni prénom ni nom de famille. Les six premières lettres proviennent des consonnes et des voyelles du nom et du prénom selon une règle fixe, et des noms différents donnent les mêmes lettres. Le code ne contient en outre que deux chiffres de l’année : le siècle reste ouvert quand deux années sont possibles.</p>
<h2>Décodage et vérification officielle</h2>
<p>Cette page lit la structure du code. Elle n’interroge pas l’Agenzia delle Entrate et ne peut pas dire si le code a un jour été attribué. Pour cela, il existe le <a href="{{p:verify}}">contrôle formel</a> et, pour une réponse officielle, le service de l’Agenzia elle-même. Pour générer un code, utilisez le <a href="{{p:home}}">calculateur de codice fiscale</a>. Le guide <a href="{{g:cos-e-il-codice-fiscale-inverso}}">Qu’est-ce que le codice fiscale inverse ?</a> détaille les limites.</p>`,
  },
  verify: {
    title: 'Vérifier un codice fiscale : contrôle formel | Codice Fiscale Pro',
    description: 'Vérifier un codice fiscale : longueur, date, caractère de contrôle et omocodia. Un contrôle formel, non officiel.',
    eyebrow: 'Contrôle formel', h1: 'Vérifier un codice fiscale',
    intro: 'Vérifiez si un codice fiscale est correctement construit. Une vérification formelle du codice fiscale n’équivaut pas à la vérification officielle de l’Agenzia delle Entrate.',
    body: `<h2>Ce que nous contrôlons</h2>
<ul>
<li>16 caractères, avec des lettres et des chiffres aux positions prévues.</li>
<li>Une lettre de mois valide, ainsi qu’un jour et un sexe compatibles avec le mois.</li>
<li>Le format du code du lieu.</li>
<li>Un caractère de contrôle correct.</li>
<li>L’omocodia : les lettres à la place de chiffres sont acceptées.</li>
</ul>
<h2>Ce que nous ne pouvons pas dire</h2>
<p>Un code peut être formellement correct sans avoir jamais été attribué à personne, et nous ne pouvons pas le rapprocher d’un nom. Pour la vérification officielle, utilisez le <a href="${AGENCY_VERIFY}" rel="noopener noreferrer">service de l’Agenzia delle Entrate</a>. Codice Fiscale Pro est indépendant et n’est pas affilié à l’Agenzia. Pour lire les données d’un code, voir <a href="{{p:inverse}}">décoder un codice fiscale</a>.</p>`,
  },
  about: {
    title: 'À propos | Codice Fiscale Pro', description: 'Codice Fiscale Pro est un service indépendant pour calculer, décoder et vérifier le codice fiscale italien, avec calcul dans votre navigateur.',
    h1: 'Codice Fiscale Pro', eyebrow: 'À propos',
    body: `<p>Codice Fiscale Pro est un service en ligne indépendant, tenu par le Codice Fiscale Pro Team. Il propose un <a href="{{p:home}}">calculateur de codice fiscale</a>, un <a href="{{p:inverse}}">décodeur</a> et un <a href="{{p:verify}}">contrôle formel</a>, gratuits et sans inscription. L’interface existe en italien, en allemand, en français, en espagnol et en anglais.</p>
<h2>Notre méthode</h2>
<ul>
<li>Le calcul s’effectue dans votre navigateur. Les données personnelles saisies ne sont pas envoyées.</li>
<li>L’algorithme suit les règles connues du codice fiscale, omocodia comprise, et il est couvert par des tests automatisés, dont une comparaison avec une bibliothèque de référence open source.</li>
<li>Les codes des lieux viennent d’un export de la liste des communes et des États actuels de l’Agenzia delle Entrate, conservé en copie locale. Il ne s’agit pas d’une connexion en direct et les communes supprimées n’y figurent pas.</li>
</ul>
<h2>Ce que nous ne sommes pas</h2>
<p>Nous ne sommes pas l’Agenzia delle Entrate et n’avons aucun lien avec elle. Nous ne délivrons pas de codice fiscale, et un contrôle formel n’est pas la vérification officielle. Pour celle-ci, utilisez le <a href="${AGENCY_VERIFY}" rel="noopener noreferrer">service de l’Agenzia</a>.</p>
<h2>Contact</h2>
<p>Pour signaler une erreur ou proposer une amélioration, consultez la <a href="{{p:contact}}">page de contact</a>.</p>`,
  },
  contact: {
    title: 'Contact | Codice Fiscale Pro', description: 'Contactez Codice Fiscale Pro pour signaler une erreur, poser une question ou exercer vos droits sur vos données.',
    h1: 'Contact', eyebrow: 'Contact',
    body: `<p>Écrivez à <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>
<h2>Pour signaler une erreur de calcul</h2>
<p>Indiquez le résultat obtenu et celui que vous attendiez, la commune ou l’État de naissance et la date. N’envoyez pas un codice fiscale complet si ce n’est pas nécessaire. Les données personnelles sont traitées comme décrit dans la <a href="{{p:privacy}}">politique de confidentialité</a>.</p>
<h2>Ce que nous ne pouvons pas faire</h2>
<p>Nous ne délivrons pas de codice fiscale et ne pouvons ni corriger ni vérifier des dossiers auprès de l’Agenzia delle Entrate. Pour cela, adressez-vous directement à l’Agenzia.</p>`,
  },
  privacy: {
    title: 'Politique de confidentialité et cookies | Codice Fiscale Pro', description: 'Quelles données traite Codice Fiscale Pro : les saisies du calculateur restent dans votre navigateur. Cookies Google Analytics uniquement avec votre accord.',
    h1: 'Politique de confidentialité et cookies', eyebrow: 'Dernière mise à jour : 5 octobre 2026',
    body: `<p>Cette politique décrit le fonctionnement actuel de codicefiscalepro.com.</p>
<h2>Responsable et contact</h2>
<p>Le site est exploité par Codice Fiscale Pro, un service indépendant. Pour toute demande relative à vos données, écrivez à <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>
<h2>Données saisies dans les outils</h2>
<p>Nom, prénom, date et lieu de naissance, sexe et codici fiscali saisis sont traités uniquement dans votre navigateur. Nous ne les recevons pas, ne les conservons pas et ne les envoyons à aucun service extérieur, Google Analytics compris. Ils n’apparaissent pas dans les adresses des pages. Le bouton de partage ne partage que le lien de l’outil, sans vos données. Le fichier téléchargeable est créé sur votre appareil.</p>
<h2>Données techniques dans votre navigateur</h2>
<p>Nous utilisons le stockage local du navigateur (localStorage) à deux fins techniques qui ne nécessitent pas de consentement :</p>
<ul>
<li><strong>theme</strong> : votre choix entre thème clair et thème sombre.</li>
<li><strong>cf-consent</strong> : votre choix sur les cookies, conservé 6 mois.</li>
</ul>
<h2>Google Analytics (uniquement avec votre consentement)</h2>
<p>Si vous cliquez sur « Accepter l’analyse », nous chargeons Google Analytics 4 pour mesurer l’usage du site de façon statistique : pages consultées, origine approximative, type d’appareil et de navigateur. Si vous refusez ou ne choisissez rien, le script de Google n’est pas chargé.</p>
<ul>
<li><strong>Fournisseur :</strong> Google Ireland Limited, avec un possible transfert de données à Google LLC aux États-Unis. Google indique s’appuyer sur des mécanismes tels que le cadre de protection des données UE-États-Unis et les clauses contractuelles types.</li>
<li><strong>Cookies :</strong> _ga et _ga_G-8GHY9P65L6, jusqu’à 2 ans.</li>
<li><strong>Fonctions publicitaires :</strong> les signaux Google et la personnalisation des annonces sont désactivés.</li>
<li><strong>Durée de conservation :</strong> selon la période de conservation définie dans le compte Google Analytics du site, dans les limites fixées par Google pour GA4.</li>
<li><strong>Base juridique :</strong> votre consentement (article 6, paragraphe 1, point a du RGPD et article 5, paragraphe 3 de la directive ePrivacy, transposée en droit national, en France l’article 82 de la loi Informatique et Libertés).</li>
</ul>
<p>Vous pouvez changer d’avis à tout moment avec « Gérer les cookies » en bas de chaque page. Si vous refusez après avoir accepté, nous supprimons les cookies Google Analytics que le navigateur nous permet d’effacer et arrêtons la mesure.</p>
<h2>Journaux du serveur</h2>
<p>L’hébergeur peut enregistrer des données techniques sur chaque requête, comme l’adresse IP, la date et l’heure, la page demandée et le navigateur, pour la sécurité et le fonctionnement. Nous ne les utilisons pas pour vous identifier.</p>
<h2>Publicité</h2>
<p>Le site n’affiche pas de publicité pour le moment. Si nous en ajoutons, nous mettrons à jour cette politique et demanderons votre consentement avant d’utiliser des cookies publicitaires.</p>
<h2>Si vous nous écrivez</h2>
<p>Si vous envoyez un e-mail à contact@codicefiscalepro.com, nous utilisons votre adresse et votre message uniquement pour vous répondre. Le site n’a pas de formulaire de contact.</p>
<h2>Vos droits</h2>
<p>Vous pouvez demander l’accès, la rectification, l’effacement, la limitation, l’opposition et la portabilité des données vous concernant (articles 15 à 22 du RGPD) et retirer votre consentement à tout moment. Écrivez à l’adresse ci-dessus. Vous pouvez aussi saisir l’autorité de protection des données de votre pays (en France, la <a href="https://www.cnil.fr/" rel="noopener noreferrer">CNIL</a> ; <a href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en" rel="noopener noreferrer">liste des autorités de l’UE</a>) ou le <a href="https://www.garanteprivacy.it/" rel="noopener noreferrer">Garante per la protezione dei dati personali</a> italien.</p>
<h2>Modifications</h2>
<p>Si les outils que nous utilisons changent, nous mettons à jour cette page et la date en haut.</p>`,
  },
  terms: {
    title: 'Conditions d’utilisation | Codice Fiscale Pro', description: 'Conditions d’utilisation de Codice Fiscale Pro : un service indépendant et gratuit. Les résultats ne sont pas officiels et sans garantie.',
    h1: 'Conditions d’utilisation', eyebrow: 'Dernière mise à jour : 5 octobre 2026',
    body: `<h2>Service indépendant</h2>
<p>Codice Fiscale Pro est un site indépendant. Il n’est pas affilié à l’Agenzia delle Entrate ni à aucun organisme public, ne délivre pas de codice fiscale officiel et ne remplace pas les services officiels.</p>
<h2>Ce que propose le site</h2>
<p>Un calculateur de codice fiscale, un décodeur et un contrôle formel, ainsi que des contenus d’information. Le service est gratuit et ne demande pas d’inscription.</p>
<h2>Résultats non officiels</h2>
<p>Les résultats sont calculés avec l’algorithme connu du codice fiscale et une liste locale des communes italiennes et des États étrangers actuels. La liste ne comprend pas les communes supprimées. Un code calculé ici peut différer de celui attribué officiellement, par exemple à cause d’erreurs de saisie, d’omocodia ou de modifications ultérieures de l’état civil. Avant d’utiliser un code dans un acte juridique, un contrat ou une déclaration fiscale, comparez-le avec votre carte de santé ou avec la vérification officielle de l’Agenzia delle Entrate.</p>
<h2>Absence de garantie</h2>
<p>Le site est fourni « en l’état ». Nous nous efforçons de le tenir exact, sans garantir l’absence d’erreurs ni une disponibilité permanente. Dans la mesure permise par la loi, nous ne sommes pas responsables des dommages résultant de l’usage des résultats. Les droits que la loi reconnaît aux consommateurs restent applicables.</p>
<h2>Usage correct</h2>
<p>Utilisez les outils à des fins légitimes. Ne les utilisez pas pour surcharger le site ni pour contourner ses protections techniques.</p>
<h2>Contenus et liens externes</h2>
<p>Les textes, graphismes et le code du site appartiennent à Codice Fiscale Pro, sauf mention contraire. Les liens vers des sites externes, comme celui de l’Agenzia delle Entrate, sont proposés pour votre commodité : nous ne contrôlons pas ces sites.</p>
<h2>Confidentialité</h2>
<p>Le traitement des données est décrit dans la <a href="{{p:privacy}}">politique de confidentialité</a>.</p>
<h2>Droit applicable et modifications</h2>
<p>Ces conditions sont régies par le droit italien, sans priver le consommateur de la protection impérative de son pays de résidence. Nous pouvons les modifier : la date en haut indique la dernière version. Pour toute question, écrivez à <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>`,
  },
  guides: {
    title: 'Guides sur le codice fiscale | Codice Fiscale Pro', description: 'Guides clairs sur le codice fiscale : calcul, lecture du code, omocodia, code Belfiore, personnes nées à l’étranger et vérification.',
    h1: 'Guides sur le codice fiscale',
    intro: 'Guides du Codice Fiscale Pro Team. Chacun répond à une question précise et renvoie vers le bon outil : <a href="{{p:home}}">calculateur</a>, <a href="{{p:inverse}}">décodeur</a> ou <a href="{{p:verify}}">contrôle</a>.',
    other: 'D’autres guides sont disponibles en italien : <a class="text-link underline" href="/it/guide/" hreflang="it" lang="it">Guide al codice fiscale</a>.',
  },
};
export default content;
