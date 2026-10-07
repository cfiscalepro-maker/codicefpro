import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "verification-formelle-et-officielle",
  "title": "Vérification formelle et officielle du codice fiscale | Codice Fiscale Pro",
  "h1": "Vérification formelle et vérification officielle du codice fiscale",
  "description": "Contrôle formel (structure, lettre de contrôle) ou vérification officielle de l’Agenzia delle Entrate : ce que chacun teste et quand les utiliser.",
  "indexDesc": "Ce que contrôle un site indépendant et ce que contrôle l’Agenzia delle Entrate.",
  "datePublished": "2026-10-05",
  "summary": "Un contrôle formel vérifie qu’un codice fiscale est correctement construit : longueur, caractères, date, sexe, format du lieu et lettre de contrôle. La vérification officielle de l’Agenzia delle Entrate compare le code au registre fiscal. Une vérification formelle du codice fiscale n’équivaut pas à la vérification officielle de l’Agenzia delle Entrate.",
  "audience": "toute personne qui doit contrôler un code avant de l’utiliser dans un formulaire, un contrat ou une base de données, et toute personne qui se demande pourquoi un contrôle en ligne positif ne suffit pas. Utile aussi aux développeurs qui écrivent une validation.",
  "related": [
    "cos-e-il-codice-fiscale-inverso",
    "cos-e-l-omocodia",
    "errori-comuni-nel-codice-fiscale",
    "come-trovare-il-proprio-codice-fiscale"
  ],
  "faq": [
    {
      "q": "Un codice fiscale formellement correct est-il toujours valable ?",
      "a": "Non. Il peut avoir une structure et une lettre de contrôle correctes sans avoir jamais été attribué à quelqu’un. Seul le registre fiscal peut dire s’il existe."
    },
    {
      "q": "Le contrôle de ce site est-il officiel ?",
      "a": "Non. Codice Fiscale Pro est indépendant et n’est pas affilié à l’Agenzia delle Entrate. Notre contrôle est formel et le dit dans chaque résultat."
    },
    {
      "q": "Où se fait la vérification officielle ?",
      "a": "Sur le service de vérification du codice fiscale de l’Agenzia delle Entrate, qui compare le code au registre fiscal. Le lien figure sur cette page."
    },
    {
      "q": "Quand le contrôle formel suffit-il ?",
      "a": "Quand vous voulez repérer une faute de frappe ou de calcul avant d’envoyer un formulaire. Si le code a des effets juridiques ou fiscaux, utilisez aussi la vérification officielle."
    }
  ],
  "body": "<h2>Que teste un contrôle formel ?</h2>\n<p>Il teste la cohérence interne du code, sans consulter de base de données. Le <a href=\"{{p:verify}}\">contrôle</a> de ce site couvre :</p>\n<ul>\n<li>16 caractères, avec lettres et chiffres aux positions prévues ;</li>\n<li>une lettre de mois valide (A, B, C, D, E, H, L, M, P, R, S, T) ;</li>\n<li>un jour et un sexe compatibles avec le mois ;</li>\n<li>le format du code du lieu, une lettre et trois chiffres ;</li>\n<li>une lettre de contrôle correcte, recalculée sur les 15 premiers caractères ;</li>\n<li>l’omocodia : les lettres L, M, N, P, Q, R, S, T, U, V à la place de chiffres sont acceptées.</li>\n</ul>\n\n<h2>Que teste la vérification officielle de l’Agenzia ?</h2>\n<p>Le <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">service de l’Agenzia delle Entrate</a> (en italien) compare le code aux données du registre fiscal et peut aussi vérifier qu’il correspond à l’état civil. À son lancement, <a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (23 avril 2014, en italien) le présentait comme utile pour l’omocodia et pour les personnes nées dans des communes cédées à d’autres États. Ses fonctions actuelles peuvent différer, lisez donc la page du service.</p>\n\n<h2>Quelle est la différence entre les deux ?</h2>\n<p>Le contrôle formel regarde comment le code est écrit. La vérification officielle regarde si le code existe et à qui il appartient.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Question</th><th>Contrôle formel</th><th>Vérification officielle</th></tr></thead>\n<tbody>\n<tr><td>Le code est-il bien écrit ?</td><td>Oui</td><td>Oui</td></tr><tr><td>La lettre de contrôle est-elle juste ?</td><td>Oui</td><td>Oui</td></tr><tr><td>Le code a-t-il été attribué à quelqu’un ?</td><td>Non</td><td>Oui</td></tr><tr><td>Correspond-il au nom et à la date de naissance ?</td><td>Non</td><td>Oui, avec les données saisies</td></tr><tr><td>Gère-t-elle les communes supprimées et cédées ?</td><td>Seulement si le code est dans notre liste</td><td>Oui</td></tr><tr><td>Est-elle officielle ?</td><td>Non</td><td>Oui</td></tr>\n</tbody></table></div>\n\n<h2>Un code peut-il réussir le contrôle formel et ne pas exister ?</h2>\n<p>Oui. <code>RSSMRA85T10H501O</code> passe le contrôle formel, mais c’est un code d’exemple de nos guides. Toute combinaison plausible de données produit un code correct dans la forme, même si personne ne le possède.</p>\n\n<h2>Quand utiliser l’un ou l’autre ?</h2>\n<p>Une règle courte :</p>\n<ol>\n<li>Pour repérer une faute de frappe ou de calcul, commencez par le contrôle formel : il est immédiat et s’exécute dans votre navigateur.</li>\n<li>Avant d’utiliser le code dans un acte juridique, un contrat ou une déclaration fiscale, vérifiez-le aussi officiellement.</li>\n<li>Si le code a des lettres à la place de chiffres, ou si la personne est née dans une commune supprimée ou cédée, utilisez la vérification officielle.</li>\n</ol>\n\n<h2>Comment vos données sont-elles protégées lors d’un contrôle ?</h2>\n<p>Notre outil traite le code dans votre navigateur et ne l’envoie ni à un serveur ni à des statistiques. Sur le site de l’Agenzia, les données sont traitées par l’Agenzia elle-même. Codice Fiscale Pro est indépendant et n’est pas affilié à l’Agenzia delle Entrate. Voir la <a href=\"{{p:privacy}}\">politique de confidentialité</a>.</p>\n\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (italien) : service de vérification du codice fiscale.</li>\n<li><a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (italien) : description du service à son lancement, 23 avril 2014.</li>\n</ul>"
};
export default g;
