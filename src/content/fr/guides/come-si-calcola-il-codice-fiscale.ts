import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  slug: 'comment-calculer-le-codice-fiscale',
  title: 'Comment se calcule le codice fiscale | Codice Fiscale Pro',
  h1: 'Comment calculer le codice fiscale : guide pas à pas',
  description: 'Comment calculer le codice fiscale : règles pour le nom, le prénom, la date, le sexe, le lieu de naissance et la lettre de contrôle, avec des exemples.',
  indexDesc: 'Les règles pour le nom, le prénom, la date, le lieu et la lettre de contrôle, avec des exemples détaillés.',
  datePublished: '2026-10-05',
  summary: 'Le codice fiscale se calcule en sept étapes : 3 lettres du nom, 3 du prénom, les 2 derniers chiffres de l’année de naissance, une lettre pour le mois, le jour (plus 40 pour les femmes), le code du lieu de naissance et une lettre de contrôle calculée sur les 15 caractères précédents. Pour Jean Dupont, né en France le 8 juin 1983, le résultat est DPNJNE83H08Z110E.',
  audience: 'toute personne qui veut comprendre comment est construit un codice fiscale, le recalculer à la main ou contrôler un résultat : expatriés, étudiants, services RH et paie, développeurs. Ce guide ne donne pas le code officiel, que seule l’Agenzia delle Entrate attribue.',
  related: ['cos-e-il-codice-fiscale', 'cos-e-l-omocodia', 'codice-belfiore', 'errori-comuni-nel-codice-fiscale'],
  faq: [
    { q: 'Peut-on calculer le codice fiscale à la main ?', a: 'Oui. Il faut le nom, le prénom, la date de naissance, le sexe et le code de la commune ou de l’État de naissance. On détermine les lettres du nom et du prénom, on écrit la date et le sexe, on ajoute le code du lieu et on calcule la lettre de contrôle avec les deux tables de conversion.' },
    { q: 'Combien de caractères compte le codice fiscale ?', a: 'Le codice fiscale d’une personne compte 16 caractères : 6 lettres tirées du nom et du prénom, 5 caractères pour la date et le sexe, 4 pour le lieu et 1 lettre de contrôle.' },
    { q: 'Pourquoi ajoute-t-on 40 au jour de naissance des femmes ?', a: 'Les positions 10 et 11 contiennent à la fois le jour et le sexe. Pour les hommes on lit le jour de 01 à 31, pour les femmes le jour plus 40, donc de 41 à 71.' },
    { q: 'Que fait-on si le nom a moins de trois lettres ?', a: 'On complète avec la lettre X jusqu’à obtenir trois caractères. Le nom Fo donne FOX.' },
  ],
  body: `<h2>De quoi se compose un codice fiscale ?</h2>
<p>Le codice fiscale est un code alphanumérique de 16 caractères qui identifie une personne à des fins fiscales en Italie. Ses règles de construction viennent d’un décret du ministère italien des Finances du 23 décembre 1976, comme le rappelle <a href="https://www.pmi.it/?p=362269" rel="noopener noreferrer" lang="it">Pmi.it</a> (en italien). Le tableau montre les sept parties avec l’exemple DPNJNE83H08Z110E.</p>
<div class="table-wrap"><table>
<thead><tr><th>Positions</th><th>Contenu</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>1-3</td><td>Nom de famille</td><td><code>DPN</code></td></tr>
<tr><td>4-6</td><td>Prénom</td><td><code>JNE</code></td></tr>
<tr><td>7-8</td><td>Année de naissance (deux derniers chiffres)</td><td><code>83</code></td></tr>
<tr><td>9</td><td>Mois de naissance</td><td><code>H</code></td></tr>
<tr><td>10-11</td><td>Jour de naissance et sexe</td><td><code>08</code></td></tr>
<tr><td>12-15</td><td>Commune ou État étranger de naissance</td><td><code>Z110</code></td></tr>
<tr><td>16</td><td>Caractère de contrôle</td><td><code>E</code></td></tr>
</tbody></table></div>

<h2>Comment obtient-on les trois lettres du nom de famille ?</h2>
<p>On prend les trois premières consonnes du nom, dans l’ordre. S’il y a moins de trois consonnes, on ajoute les voyelles, toujours dans l’ordre. S’il manque encore des lettres, on complète avec X.</p>
<div class="table-wrap"><table>
<thead><tr><th>Nom</th><th>Lettres utilisées</th><th>Résultat</th></tr></thead>
<tbody>
<tr><td>Dupont</td><td>D, P, N</td><td><code>DPN</code></td></tr>
<tr><td>Martin</td><td>M, R, T</td><td><code>MRT</code></td></tr>
<tr><td>Lefèvre</td><td>L, F, V (le è compte comme e)</td><td><code>LFV</code></td></tr>
<tr><td>Le Gall</td><td>L, G, L, L : les trois premières (l’espace ne compte pas)</td><td><code>LGL</code></td></tr>
<tr><td>Fo</td><td>F, puis la voyelle O, puis X</td><td><code>FOX</code></td></tr>
</tbody></table></div>

<h2>Comment obtient-on les trois lettres du prénom ?</h2>
<p>Si le prénom compte quatre consonnes ou plus, on prend la première, la troisième et la quatrième. Avec trois consonnes ou moins, on applique la règle du nom : consonnes, puis voyelles, puis X.</p>
<div class="table-wrap"><table>
<thead><tr><th>Prénom</th><th>Consonnes</th><th>Résultat</th></tr></thead>
<tbody>
<tr><td>Françoise</td><td>F, R, N, C, S : 1re, 3e et 4e (le ç compte comme c)</td><td><code>FNC</code></td></tr>
<tr><td>Jean-Pierre</td><td>J, N, P, R, R : 1re, 3e et 4e (le trait d’union ne compte pas)</td><td><code>JPR</code></td></tr>
<tr><td>Pierre</td><td>P, R, R (trois)</td><td><code>PRR</code></td></tr>
<tr><td>Jean</td><td>J, N (deux), puis la première voyelle E</td><td><code>JNE</code></td></tr>
<tr><td>Marie</td><td>M, R (deux), puis la première voyelle A</td><td><code>MRA</code></td></tr>
<tr><td>Léa</td><td>L (une), puis les voyelles E, A</td><td><code>LEA</code></td></tr>
</tbody></table></div>

<h2>Comment écrit-on la date de naissance et le sexe ?</h2>
<p>On écrit les deux derniers chiffres de l’année, une lettre pour le mois et le jour sur deux chiffres. Pour les femmes, on ajoute 40 au jour. Un homme né le 8 juin 1983 reçoit <code>83H08</code>. Une femme née le 17 février 1995 reçoit <code>95B57</code>.</p>
<div class="table-wrap"><table>
<thead><tr><th>Mois</th><th>Lettre</th><th>Mois</th><th>Lettre</th></tr></thead>
<tbody>
<tr><td>Janvier</td><td><code>A</code></td><td>Juillet</td><td><code>L</code></td></tr>
<tr><td>Février</td><td><code>B</code></td><td>Août</td><td><code>M</code></td></tr>
<tr><td>Mars</td><td><code>C</code></td><td>Septembre</td><td><code>P</code></td></tr>
<tr><td>Avril</td><td><code>D</code></td><td>Octobre</td><td><code>R</code></td></tr>
<tr><td>Mai</td><td><code>E</code></td><td>Novembre</td><td><code>S</code></td></tr>
<tr><td>Juin</td><td><code>H</code></td><td>Décembre</td><td><code>T</code></td></tr>
</tbody></table></div>
<p>Le code ne contient que deux chiffres de l’année : le siècle ne peut donc pas s’en déduire. Le <a href="{{p:inverse}}">décodeur</a> affiche toutes les dates possibles.</p>

<h2>Comment trouve-t-on le code du lieu de naissance ?</h2>
<p>Le lieu s’écrit avec le code Belfiore : une lettre et trois chiffres. Rome est <code>H501</code>, Milan <code>F205</code>. Les États étrangers ont des codes qui commencent par Z : la France est <code>Z110</code>, la Belgique <code>Z103</code>, la Suisse <code>Z133</code>, le Luxembourg <code>Z120</code> et le Canada <code>Z401</code>.</p>
<p>Dans le <a href="{{p:home}}">calculateur</a>, vous pouvez saisir le nom du pays ou de la ville en français et le code est renseigné pour vous. Un détail vérifié en travaillant sur les données : dans l’<a href="https://arcom.agenziaentrate.gov.it/CitizenArCom/" rel="noopener noreferrer" lang="it">archive des communes de l’Agenzia delle Entrate</a> (en italien), le bon code se trouve dans la colonne « Codice Nazionale ». La colonne « Codice Catastale » contient un autre code (pour Rome <code>M1AA</code>) et donnerait des résultats faux. Voir le guide sur le <a href="{{g:codice-belfiore}}">code Belfiore</a>.</p>

<h2>Comment calcule-t-on le caractère de contrôle ?</h2>
<p>Le seizième caractère est une lettre de A à Z. On l’obtient en additionnant les valeurs des 15 premiers caractères, avec une table pour les positions impaires et une pour les positions paires, puis en convertissant en lettre le reste de la division par 26.</p>
<ol>
<li>Convertissez chaque caractère en nombre. Aux positions paires, un chiffre vaut sa valeur et une lettre vaut son rang dans l’alphabet, avec A = 0. Aux positions impaires, utilisez la table ci-dessous.</li>
<li>Additionnez toutes les valeurs.</li>
<li>Divisez le total par 26 et gardez le reste.</li>
<li>Transformez le reste en lettre : 0 est A, 1 est B, et ainsi de suite jusqu’à 25, qui est Z.</li>
</ol>
<h3>Valeurs des positions impaires (1, 3, 5, ... 15)</h3>
<ul>
<li>Chiffres de 0 à 9 : 1, 0, 5, 7, 9, 13, 15, 17, 19, 21.</li>
<li>Lettres de A à J : mêmes valeurs que les chiffres de 0 à 9, dans le même ordre.</li>
<li>Lettres de K à Z : 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23.</li>
</ul>
<h3>Exemple détaillé : DPNJNE83H08Z110</h3>
<ul>
<li>Positions impaires : D = 7, N = 20, N = 20, 8 = 19, H = 17, 8 = 19, 1 = 0, 0 = 1. Somme 103.</li>
<li>Positions paires : P = 15, J = 9, E = 4, 3 = 3, 0 = 0, Z = 25, 1 = 1. Somme 57.</li>
<li>Total 160. 160 divisé par 26 donne 6 reste 4. La valeur 4 correspond à la lettre E.</li>
</ul>
<p>Le code complet est donc <code>DPNJNE83H08Z110E</code>. Jean Dupont est une personne d’exemple.</p>

<h2>Comment traite-t-on les accents, apostrophes, espaces et noms composés ?</h2>
<p>Seules les lettres de l’alphabet comptent. Les accents, apostrophes, espaces et traits d’union sont ignorés, et une lettre accentuée vaut la lettre de base. Les exceptions suivent la table de translittération du ministère de l’Intérieur italien, reprise par la circulaire 34/2011 de l’Agenzia delle Entrate : ä et æ valent AE, ö et œ valent OE, ü vaut UE et ß vaut SS. Consonnes et voyelles se comptent sur l’ensemble du nom ou du prénom. Les noms à particule comme « de La Fontaine » s’écrivent donc comme un seul mot.</p>
<p>Pour les femmes mariées, on utilise le nom de naissance et non celui du conjoint. Si votre nom est écrit différemment sur le passeport et sur l’acte de naissance, le code officiel peut différer du code calculé.</p>

<h2>Le code calculé est-il toujours le code officiel ?</h2>
<p>Non. Le résultat peut différer en cas d’omocodia, de nom enregistré avec une autre graphie, de naissance à l’étranger ou de données d’état civil corrigées plus tard. Seul est valable le code attribué par l’Agenzia delle Entrate. Comparez-le avec votre carte de santé ou utilisez le <a href="https://telematici.agenziaentrate.gov.it/VerificaCF" rel="noopener noreferrer" lang="it">service de vérification de l’Agenzia</a> (en italien). Notre <a href="{{p:verify}}">contrôle formel</a> teste seulement la structure et la lettre de contrôle. Pour l’omocodia, voir <a href="{{g:cos-e-l-omocodia}}">qu’est-ce que l’omocodia</a>.</p>

<h2>Comment vérifions-nous notre propre calcul ?</h2>
<p>Le moteur de calcul est couvert par des tests automatisés et comparé à une bibliothèque de référence open source. Nous avons comparé les codes de 7 886 communes de notre liste sans trouver de différence, et recalculé la lettre de contrôle de l’exemple ci-dessus avec un programme indépendant.</p>
<p>Il y a deux limites. La liste des lieux vient d’un export de l’Agenzia delle Entrate qui contient les communes et États actuels : les communes supprimées manquent. Et un calcul ne peut pas savoir si une personne a reçu un code d’omocodia.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://www.pmi.it/?p=362269" rel="noopener noreferrer" lang="it">Pmi.it</a> (italien) : algorithme et décret de 1976.</li>
<li><a href="https://arcom.agenziaentrate.gov.it/CitizenArCom/" rel="noopener noreferrer" lang="it">Agenzia delle Entrate</a> (italien) : archive des communes et des États étrangers.</li>
<li><a href="https://telematici.agenziaentrate.gov.it/VerificaCF" rel="noopener noreferrer" lang="it">Agenzia delle Entrate</a> (italien) : service officiel de vérification.</li>
</ul>`,
};
export default g;
