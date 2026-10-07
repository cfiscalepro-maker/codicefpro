import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "codice-fiscale-inverse",
  "title": "Codice fiscale inverse : ce que révèle un code | Codice Fiscale Pro",
  "h1": "Codice fiscale inverse : ce que révèle un code",
  "description": "Codice fiscale inverse : lisez sexe, date et lieu de naissance. Pourquoi le nom reste introuvable, et la différence avec la vérification officielle.",
  "indexDesc": "Quelles données un code révèle et pourquoi le nom et le prénom ne se retrouvent pas.",
  "datePublished": "2026-10-05",
  "summary": "Le codice fiscale inverse lit un code existant et renvoie les données qu’il contient : sexe, jour et mois de naissance, deux derniers chiffres de l’année et lieu de naissance. Il ne renvoie ni nom ni prénom, car les six premières lettres conviennent à de nombreux noms : RSS convient à Rossi, Rosso et Ross, MRA à Mario, Mauro et Maria.",
  "audience": "toute personne qui veut savoir ce que dit un code, par exemple pour contrôler un formulaire rempli ou une fiche dans un dossier. Il ne permet pas d’identifier des inconnus, ce que le code n’autorise pas.",
  "related": [
    "cos-e-il-codice-fiscale",
    "come-leggere-e-decodificare-un-codice-fiscale",
    "cos-e-l-omocodia",
    "verifica-formale-e-verifica-ufficiale"
  ],
  "faq": [
    {
      "q": "Le codice fiscale inverse révèle-t-il nom et prénom ?",
      "a": "Non. Les six premières lettres viennent des consonnes et voyelles du nom et du prénom, et des noms différents donnent les mêmes lettres. On peut faire des hypothèses, pas retrouver les données."
    },
    {
      "q": "Que peut-on lire avec certitude ?",
      "a": "Le sexe, le jour et le mois de naissance, les deux derniers chiffres de l’année et le code de la commune ou de l’État de naissance. Avec la liste des communes, le code donne le nom du lieu."
    },
    {
      "q": "Le codice fiscale inverse est-il officiel ?",
      "a": "Non. Il lit la structure du code. Pour savoir si un code existe et correspond à une personne, utilisez le service de l’Agenzia delle Entrate."
    },
    {
      "q": "Est-il sûr de saisir un codice fiscale sur un site de décodage ?",
      "a": "Cela dépend du site. Préférez les outils qui travaillent dans le navigateur sans envoyer les données, comme celui-ci, et évitez de saisir le code d’autrui sans raison."
    }
  ],
  "body": "<h2>Qu’est-ce que le codice fiscale inverse ?</h2>\n<p>C’est le calcul qui part d’un code et remonte aux données personnelles qui l’ont produit : l’inverse du <a href=\"{{g:come-si-calcola-il-codice-fiscale}}\">calcul normal</a>. Ceux qui le cherchent veulent le plus souvent la date de naissance, le sexe et la commune de naissance.</p>\n\n<h2>Quelles données le codice fiscale inverse donne-t-il ?</h2>\n<p>Il donne avec certitude le sexe, le jour, le mois, les deux derniers chiffres de l’année et le code du lieu de naissance, que la <a href=\"{{p:inverse}}\">liste des communes et États</a> transforme en nom de lieu. Il montre aussi si le code est une variante d’omocodia.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Donnée</th><th>Lisible ?</th><th>Remarque</th></tr></thead>\n<tbody>\n<tr><td>Sexe</td><td>Oui</td><td>Un jour supérieur à 40 indique une femme</td></tr><tr><td>Jour et mois de naissance</td><td>Oui</td><td>La lettre du mois doit être traduite</td></tr><tr><td>Année de naissance</td><td>En partie</td><td>Deux chiffres seulement, le siècle reste ouvert</td></tr><tr><td>Lieu de naissance</td><td>Oui</td><td>D’après le code Belfiore, s’il figure dans la liste</td></tr><tr><td>Nom et prénom</td><td>Non</td><td>Seulement des hypothèses</td></tr>\n</tbody></table></div>\n\n<h2>Pourquoi ne retrouve-t-on pas le nom et le prénom ?</h2>\n<p>Les six premières lettres utilisent des consonnes et, au besoin, des voyelles, de sorte que de nombreux noms donnent le même résultat. Rossi, Rosso et Ross donnent tous <code>RSS</code>. Mario, Mauro et Maria donnent tous <code>MRA</code>. Certaines sources parlent de bonnes chances de deviner le prénom (<a href=\"https://lentepubblica.it/contabilita-bilancio-tasse-tributi/codice-fiscale-inverso-cose-a-cosa-serve-e-come-si-calcola/\" rel=\"noopener noreferrer\" lang=\"it\">Lentepubblica.it</a>, en italien), mais cela reste une conjecture, et c’est plus difficile pour le nom de famille.</p>\n\n<h2>Comment utiliser le codice fiscale inverse ?</h2>\n<p>On saisit le code dans le décodeur et on lit le résultat, en trois étapes.</p>\n<ol>\n<li>Ouvrez le <a href=\"{{p:inverse}}\">décodeur</a>.</li>\n<li>Saisissez les 16 caractères, même avec des lettres à la place de certains chiffres.</li>\n<li>Lisez sexe, date, lieu et code Belfiore, et regardez le résultat du contrôle formel.</li>\n</ol>\n<p>Si deux années conviennent aux deux chiffres, par exemple 2005 et 1905, l’outil affiche les deux et vous choisissez la plausible.</p>\n\n<h2>Le codice fiscale inverse est-il une vérification officielle ?</h2>\n<p>Non. Décoder, c’est lire la structure du code. Cela ne dit pas si le code a été attribué, ni à qui. Voir <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">vérification formelle et officielle</a> et le <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">service de l’Agenzia delle Entrate</a> (en italien).</p>\n\n<h2>Comment protéger sa vie privée en décodant un code ?</h2>\n<p>Un codice fiscale est une donnée personnelle. Notre outil le traite dans votre navigateur et ne l’envoie ni à un serveur ni à Google Analytics. Sur d’autres sites, vérifiez comment les données sont traitées, et évitez de saisir le code d’autrui sans raison concrète.</p>\n\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://lentepubblica.it/contabilita-bilancio-tasse-tributi/codice-fiscale-inverso-cose-a-cosa-serve-e-come-si-calcola/\" rel=\"noopener noreferrer\" lang=\"it\">Lentepubblica.it</a> (en italien) : données lisibles et limites du calcul inverse.</li>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (en italien) : règles pour les lettres.</li>\n</ul>"
};
export default g;
