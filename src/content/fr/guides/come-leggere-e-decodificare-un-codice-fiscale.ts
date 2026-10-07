import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "lire-et-decoder-un-codice-fiscale",
  "title": "Lire et décoder un codice fiscale | Codice Fiscale Pro",
  "h1": "Comment lire et décoder un codice fiscale",
  "description": "Comment lire un codice fiscale : sens des 16 caractères, comment obtenir date de naissance, sexe et lieu de naissance, et ce que le code ne dit pas.",
  "indexDesc": "Ce que signifie chaque groupe de caractères et comment obtenir date, sexe et lieu.",
  "datePublished": "2026-10-05",
  "summary": "Pour lire un codice fiscale, on découpe les 16 caractères en groupes : les positions 1-6 viennent du nom et du prénom, 7-8 sont l’année, 9 le mois, 10-11 le jour et le sexe (plus 40 pour les femmes), 12-15 le lieu de naissance et 16 la lettre de contrôle. De DPNJNE83H08Z110E on lit : un homme, né le 8 juin 1983 en France (Z110).",
  "audience": "toute personne qui a un codice fiscale sous les yeux et veut savoir ce qu’il dit : salariés qui contrôlent une fiche de paie, personnes qui remplissent un formulaire, développeurs. Pour décoder automatiquement, utilisez l’outil de décodage.",
  "related": [
    "cos-e-il-codice-fiscale-inverso",
    "cos-e-l-omocodia",
    "codice-belfiore",
    "come-si-calcola-il-codice-fiscale"
  ],
  "faq": [
    {
      "q": "Comment savoir si un codice fiscale est celui d’un homme ou d’une femme ?",
      "a": "Regardez les positions 10 et 11. Un nombre de 01 à 31 indique un homme, un nombre de 41 à 71 une femme, et le jour de naissance est le nombre moins 40."
    },
    {
      "q": "Quelle lettre représente le mois ?",
      "a": "Position 9 : A janvier, B février, C mars, D avril, E mai, H juin, L juillet, M août, P septembre, R octobre, S novembre, T décembre."
    },
    {
      "q": "Pourquoi mon code a-t-il des lettres là où j’attends des chiffres ?",
      "a": "Cela indique une omocodia. Un ou plusieurs des sept chiffres après les six premières lettres sont remplacés par des lettres parmi L, M, N, P, Q, R, S, T, U, V, qui correspondent aux chiffres de 0 à 9."
    },
    {
      "q": "Puis-je lire l’année de naissance complète ?",
      "a": "Le code ne contient que les deux derniers chiffres. Un code avec 83 peut être celui d’une personne née en 1983 ou en 1883 : on retient la date plausible."
    }
  ],
  "body": "<h2>Comment lit-on un codice fiscale caractère par caractère ?</h2>\n<p>On le lit par groupes, toujours dans le même ordre. Prenons <code>DPNJNE83H08Z110E</code>.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Positions</th><th>Groupe</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>1-3</td><td><code>DPN</code></td><td>Lettres tirées du nom</td></tr><tr><td>4-6</td><td><code>JNE</code></td><td>Lettres tirées du prénom</td></tr><tr><td>7-8</td><td><code>83</code></td><td>Année de naissance : 83</td></tr><tr><td>9</td><td><code>H</code></td><td>Mois : juin</td></tr><tr><td>10-11</td><td><code>08</code></td><td>Jour 8, masculin</td></tr><tr><td>12-15</td><td><code>Z110</code></td><td>Lieu de naissance : France</td></tr><tr><td>16</td><td><code>E</code></td><td>Lettre de contrôle</td></tr>\n</tbody></table></div>\n\n<h2>Comment obtient-on la date de naissance et le sexe ?</h2>\n<p>On utilise les positions 7 à 11. Les deux premiers chiffres sont l’année, la lettre est le mois et les deux derniers chiffres le jour. Si le numéro du jour dépasse 40, il s’agit d’une femme et le vrai jour est le numéro moins 40. Exemple : <code>95B57</code> dans <code>MRTFNC95B57Z110V</code> signifie 1995, février, jour 57 moins 40 égale 17, féminin.</p>\n\n<h2>Comment trouve-t-on le lieu de naissance ?</h2>\n<p>Les positions 12 à 15 contiennent le code Belfiore. Une lettre suivie de trois chiffres désigne une commune italienne, par exemple <code>F205</code> pour Milan. Un code qui commence par Z désigne un État étranger, par exemple <code>Z110</code> pour la France, <code>Z103</code> pour la Belgique ou <code>Z133</code> pour la Suisse. Cherchez-le avec notre <a href=\"{{p:inverse}}\">décodeur</a> ou lisez le guide sur le <a href=\"{{g:codice-belfiore}}\">code Belfiore</a>.</p>\n\n<h2>Que disent les six premières lettres ?</h2>\n<p>Ce sont des consonnes et des voyelles choisies selon une règle fixe, donc plusieurs noms ou prénoms donnent les mêmes lettres. <code>RSS</code> convient à Rossi, Rosso et Ross. <code>MRA</code> convient à Mario, Mauro et Maria. On peut formuler des hypothèses à partir des six lettres, mais on ne retrouve ni le prénom ni le nom.</p>\n\n<h2>Comment reconnaît-on un code d’omocodia ?</h2>\n<p>Dans un code sans omocodia, les positions 7, 8, 10, 11, 13, 14 et 15 sont des chiffres. Si l’une d’elles contient une lettre parmi L, M, N, P, Q, R, S, T, U, V, le code est une variante d’omocodia. Le chiffre d’origine suit la correspondance L = 0, M = 1, N = 2, P = 3, Q = 4, R = 5, S = 6, T = 7, U = 8, V = 9. Voir <a href=\"{{g:cos-e-l-omocodia}}\">qu’est-ce que l’omocodia</a>.</p>\n\n<h2>Que ne peut-on pas lire dans un codice fiscale ?</h2>\n<p>On ne peut lire ni le nom complet, ni le siècle de naissance, ni le fait que le code ait réellement été attribué à une personne. Les deux premiers tiennent à la construction du code ; pour le dernier, il faut la <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">vérification officielle</a>.</p>\n\n<h2>Sources</h2>\n<ul>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (en italien) : structure des 16 caractères.</li>\n<li><a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (en italien) : lecture du code et omocodia.</li>\n</ul>"
};
export default g;
