import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "erreurs-courantes-codice-fiscale",
  "title": "Erreurs courantes dans le codice fiscale | Codice Fiscale Pro",
  "h1": "Erreurs courantes dans le codice fiscale et comment les éviter",
  "description": "Les erreurs les plus fréquentes en calculant ou saisissant un codice fiscale : sexe, mois, lieu, nom, omocodia, avec un tableau des erreurs.",
  "indexDesc": "Les erreurs les plus fréquentes du calcul à la main et des outils en ligne.",
  "datePublished": "2026-10-05",
  "summary": "Les erreurs les plus fréquentes sont : oublier le +40 sur le jour des femmes, intervertir nom et prénom, utiliser un mauvais code de lieu (par exemple la mauvaise colonne de la liste ou une commune homonyme d’une autre province), confondre la lettre O et le chiffre 0, et ignorer l’omocodia. Un contrôle formel repère les quatre premières.",
  "audience": "toute personne qui calcule un codice fiscale à la main, le recopie d’un document dans un formulaire ou écrit un logiciel qui le génère. Pour chaque erreur, le guide montre comment la repérer et la corriger.",
  "related": [
    "come-si-calcola-il-codice-fiscale",
    "codice-belfiore",
    "verifica-formale-e-verifica-ufficiale",
    "cos-e-l-omocodia"
  ],
  "faq": [
    {
      "q": "Quelle est l’erreur la plus courante dans le calcul à la main ?",
      "a": "Oublier d’ajouter 40 au jour de naissance des femmes, ou intervertir nom et prénom. Les deux se voient en relisant les deux groupes de trois lettres."
    },
    {
      "q": "Pourquoi mon code calculé diffère-t-il de ma carte de santé ?",
      "a": "Les causes courantes sont une graphie différente du nom sur les documents, un mauvais lieu de naissance, l’usage du nom du conjoint ou un code d’omocodia attribué par l’Agenzia."
    },
    {
      "q": "Quelles lettres ne servent jamais pour le mois ?",
      "a": "F, G, I, N, O, Q, U, V, W, X, Y et Z n’apparaissent jamais. Les mois utilisent seulement A, B, C, D, E, H, L, M, P, R, S, T."
    },
    {
      "q": "Comment contrôler un code après l’avoir calculé ?",
      "a": "Utilisez le contrôle formel pour les erreurs de structure et comparez le code avec votre carte de santé. Pour un contrôle officiel, il y a le service de l’Agenzia delle Entrate."
    }
  ],
  "body": "<h2>Quelles sont les erreurs les plus courantes en calculant un codice fiscale ?</h2>\n<p>Le tableau liste les dix erreurs les plus fréquentes, avec le moyen de les repérer. Les exemples utilisent le code d’exemple <code>RSSMRA85T10H501O</code>.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Erreur</th><th>Comment la repérer</th><th>Comment l’éviter</th></tr></thead>\n<tbody>\n<tr><td>Nom et prénom intervertis</td><td><code>MRA</code> apparaît avant <code>RSS</code></td><td>Les trois premières lettres sont le nom, les trois suivantes le prénom</td></tr><tr><td>Pas de +40 sur le jour d’une femme</td><td>Jour de 01 à 31 pour une femme</td><td>Pour les femmes, ajoutez 40 : le jour 5 devient 45</td></tr><tr><td>Mauvaise lettre de mois</td><td>Lettres comme F, G, I, N, O, Q en position 9</td><td>Utilisez seulement A, B, C, D, E, H, L, M, P, R, S, T</td></tr><tr><td>Résidence au lieu du lieu de naissance</td><td>Code différent de celui de la commune de naissance</td><td>Utilisez toujours le lieu de naissance</td></tr><tr><td>Mauvaise colonne dans la liste des communes</td><td>Un code comme <code>M1AA</code> au lieu de <code>H501</code></td><td>Utilisez « Codice Nazionale », pas « Codice Catastale »</td></tr><tr><td>Commune homonyme d’une autre province</td><td>Castro : <code>C337</code> (BG) ou <code>M261</code> (LE)</td><td>Choisissez aussi la province</td></tr><tr><td>Nom du conjoint utilisé</td><td>Code différent de celui de la carte de santé</td><td>Utilisez le nom de naissance</td></tr><tr><td>Apostrophes, espaces et accents mal traités</td><td>O’Connor qui ne donne pas <code>CNN</code></td><td>Ignorez apostrophes, espaces et accents</td></tr><tr><td>O au lieu de 0, ou l’inverse</td><td>Lettre de contrôle O contre chiffre 0 dans des champs numériques</td><td>Le caractère de contrôle est toujours une lettre</td></tr><tr><td>Omocodia ignorée</td><td>Lettres aux positions qui contiennent normalement des chiffres</td><td>Regardez la carte de santé et lisez <a href=\"{{g:cos-e-l-omocodia}}\">qu’est-ce que l’omocodia</a></td></tr>\n</tbody></table></div>\n\n<h2>Pourquoi mon code calculé diffère-t-il de celui de ma carte de santé ?</h2>\n<p>Les raisons les plus fréquentes sont la graphie des données et l’omocodia. <a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (en italien) cite espaces, apostrophes, prénoms doubles, caractères spéciaux et naissance à l’étranger parmi les causes. Un code avec des lettres là où il faut des chiffres est une variante d’omocodia.</p>\n\n<h2>Comment contrôle-t-on un code après le calcul ?</h2>\n<p>Contrôlez-le en trois étapes, de la plus rapide à la plus sûre.</p>\n<ol>\n<li>Passez-le dans le <a href=\"{{p:verify}}\">contrôle</a> : il repère une mauvaise structure, une mauvaise date et une mauvaise lettre de contrôle.</li>\n<li>Lisez-le avec le <a href=\"{{p:inverse}}\">décodeur</a> pour voir que sexe, date et lieu sont ceux attendus.</li>\n<li>Comparez-le avec votre carte de santé ou le <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">service de l’Agenzia delle Entrate</a> (en italien).</li>\n</ol>\n\n<h2>Quelles erreurs un contrôle formel repère-t-il, et lesquelles non ?</h2>\n<p>Il repère une mauvaise structure, un mois ou un jour impossible et une lettre de contrôle fausse. Il ne repère pas un lieu faux mais plausible, un nom écrit autrement ou un code que personne ne possède. Pour cela, il faut un document officiel. Voir <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">vérification formelle et officielle</a>.</p>\n\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (en italien) : erreurs et variantes dans les données.</li>\n<li><a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (en italien) : liste des communes et États.</li>\n</ul>"
};
export default g;
