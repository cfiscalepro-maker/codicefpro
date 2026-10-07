import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "code-belfiore",
  "title": "Code Belfiore : définition et comment le trouver | Codice Fiscale Pro",
  "h1": "Code Belfiore : définition et comment le trouver",
  "description": "Le code Belfiore désigne la commune ou l’État de naissance dans le codice fiscale : format, exemples réels, communes homonymes et recherche.",
  "indexDesc": "Le code du lieu de naissance pour les communes et les États, avec des exemples réels.",
  "datePublished": "2026-10-05",
  "summary": "Le code Belfiore est le code de quatre caractères (une lettre et trois chiffres) qui désigne, aux positions 12-15 d’un codice fiscale, la commune italienne ou l’État étranger de naissance. Rome est H501, Milan F205. Les États étrangers commencent par Z, par exemple Z110 pour la France et Z133 pour la Suisse. On le trouve dans la liste des communes et États de l’Agenzia delle Entrate.",
  "audience": "toute personne qui termine un calcul à la main, les développeurs qui valident des codici fiscali et ceux qui ne savent pas quel code utiliser pour une commune au nom répété ou pour un État étranger.",
  "related": [
    "come-si-calcola-il-codice-fiscale",
    "codice-fiscale-per-cittadini-stranieri",
    "errori-comuni-nel-codice-fiscale",
    "come-leggere-e-decodificare-un-codice-fiscale"
  ],
  "faq": [
    {
      "q": "Le code Belfiore est-il le même que le code cadastral ?",
      "a": "Dans l’usage courant, oui : c’est le code cadastral de la commune. Attention aux listes avec plusieurs colonnes de codes. Dans la liste de l’Agenzia delle Entrate que nous utilisons, le bon code est dans la colonne « Codice Nazionale »."
    },
    {
      "q": "Le code Belfiore indique-t-il où j’habite ?",
      "a": "Non. Dans le codice fiscale, il indique la commune ou l’État de naissance, jamais la résidence."
    },
    {
      "q": "Que faire si ma commune de naissance n’existe plus ?",
      "a": "Utilisez le code qu’avait la commune à la naissance. Notre liste ne contient que les communes et États actuels : faites vérifier ces cas avec le service de vérification de l’Agenzia delle Entrate."
    },
    {
      "q": "Pourquoi des communes ont-elles le même nom mais des codes différents ?",
      "a": "Ce sont des communes distinctes dans des provinces différentes. Castro existe dans la province de Bergame avec le code C337 et dans celle de Lecce avec le code M261. Il faut choisir la bonne."
    }
  ],
  "body": "<h2>Qu’est-ce que le code Belfiore ?</h2>\n<p>C’est le code qui désigne une commune italienne ou un État étranger aux positions 12 à 15 du codice fiscale, composé d’une lettre et de trois chiffres. Pour les communes, il suit le codage cadastral, et les États étrangers ont un Z suivi de trois chiffres, comme l’explique <a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (en italien).</p>\n\n<h2>Quels sont quelques exemples de codes Belfiore ?</h2>\n<p>Exemples tirés de la liste de l’Agenzia delle Entrate incluse dans ce site :</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Lieu</th><th>Code</th><th>État</th><th>Code</th></tr></thead>\n<tbody>\n<tr><td>Rome</td><td><code>H501</code></td><td>France</td><td><code>Z110</code></td></tr><tr><td>Milan</td><td><code>F205</code></td><td>Belgique</td><td><code>Z103</code></td></tr><tr><td>Naples</td><td><code>F839</code></td><td>Suisse</td><td><code>Z133</code></td></tr><tr><td>Turin</td><td><code>L219</code></td><td>Luxembourg</td><td><code>Z120</code></td></tr><tr><td>Florence</td><td><code>D612</code></td><td>Canada</td><td><code>Z401</code></td></tr>\n</tbody></table></div>\n\n<h2>Comment trouve-t-on le code Belfiore d’une commune ou d’un État ?</h2>\n<p>Le plus rapide est le champ du lieu du <a href=\"{{p:home}}\">calculateur</a> : saisissez le nom, en français aussi, choisissez le lieu et le code est rempli. La liste complète est dans l’<a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">archive de l’Agenzia delle Entrate</a> (en italien). Notre liste compte 7 894 communes et 249 États étrangers, à jour au 21 février 2026.</p>\n\n<h2>Que faire des communes qui ont le même nom ?</h2>\n<p>Distinguez-les par la province : ce sont des communes différentes, avec des codes différents. Notre liste compte cinq noms dans ce cas.</p>\n<ul>\n<li>Castro: Bergamo <code>C337</code>, Lecce <code>M261</code>.</li>\n<li>Livo: Como <code>E623</code>, Trento <code>E624</code>.</li>\n<li>Peglio: Como <code>G415</code>, Pesaro e Urbino <code>G416</code>.</li>\n<li>Samone: Torino <code>H753</code>, Trento <code>H754</code>.</li>\n<li>San Teodoro: Messina <code>I328</code>, Sassari <code>I329</code>.</li>\n</ul>\n\n<h2>Quelle colonne utiliser dans les listes à plusieurs codes ?</h2>\n<p>Un détail vérifié sur l’export de l’Agenzia delle Entrate : la colonne « Codice Nazionale » contient le code Belfiore (pour Rome <code>H501</code>), alors que la colonne « Codice Catastale » contient un autre code (pour Rome <code>M1AA</code>). Le second donne des codici fiscali faux.</p>\n\n<h2>Que se passe-t-il si la commune a été supprimée ou a changé ?</h2>\n<p>Le codice fiscale garde le code qu’avait la commune à la naissance. Notre liste ne contient que des entrées actuelles. Une personne née dans une commune supprimée, fusionnée ou cédée à un autre État peut avoir un code que le calcul ne connaît pas. Dans ces cas, le <a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">service de vérification de l’Agenzia</a> (2014, en italien) est le bon outil. Voir aussi <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">vérification formelle et officielle</a>.</p>\n\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (en italien) : archive des communes et États étrangers.</li>\n<li><a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (en italien) : structure du code du lieu.</li>\n<li><a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (en italien) : vérification pour les personnes nées dans des communes cédées (2014).</li>\n</ul>"
};
export default g;
