import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "codigo-belfiore",
  "title": "Código Belfiore: qué es y cómo encontrarlo | Codice Fiscale Pro",
  "h1": "Código Belfiore: qué es y cómo encontrarlo",
  "description": "El código Belfiore indica el municipio o Estado de nacimiento en el codice fiscale: formato, ejemplos reales, municipios homónimos y cómo buscarlo.",
  "indexDesc": "El código del lugar de nacimiento para municipios y Estados, con ejemplos reales.",
  "datePublished": "2026-10-05",
  "summary": "El código Belfiore es el código de cuatro caracteres (una letra y tres cifras) que identifica, en las posiciones 12-15 de un codice fiscale, el municipio italiano o el Estado extranjero de nacimiento. Roma es H501 y Milán F205. Los Estados extranjeros empiezan por Z, por ejemplo Z131 para España y Z600 para Argentina. Se encuentra en la lista de municipios y Estados de la Agenzia delle Entrate.",
  "audience": "quien termine un cálculo a mano, desarrolladores que validan codici fiscali y quien no sepa qué código usar para un municipio con nombre repetido o para un Estado extranjero.",
  "related": [
    "come-si-calcola-il-codice-fiscale",
    "codice-fiscale-per-cittadini-stranieri",
    "errori-comuni-nel-codice-fiscale",
    "come-leggere-e-decodificare-un-codice-fiscale"
  ],
  "faq": [
    {
      "q": "¿El código Belfiore es lo mismo que el código catastral?",
      "a": "En el uso corriente sí: es el código catastral del municipio. Ojo con las listas que traen varias columnas de códigos. En la lista de la Agenzia delle Entrate que usamos, el código correcto está en la columna «Codice Nazionale»."
    },
    {
      "q": "¿El código Belfiore indica dónde vivo?",
      "a": "No. En el codice fiscale indica el municipio o el Estado de nacimiento, nunca la residencia."
    },
    {
      "q": "¿Qué hago si mi municipio de nacimiento ya no existe?",
      "a": "Usa el código que tenía el municipio al nacer. Nuestra lista solo incluye municipios y Estados actuales, así que comprueba esos casos con el servicio de verificación de la Agenzia delle Entrate."
    },
    {
      "q": "¿Por qué algunos municipios tienen el mismo nombre pero códigos distintos?",
      "a": "Son municipios diferentes en provincias diferentes. Castro existe en la provincia de Bérgamo con el código C337 y en la de Lecce con el código M261. Hay que elegir el correcto."
    }
  ],
  "body": "<h2>¿Qué es el código Belfiore?</h2>\n<p>Es el código que identifica un municipio italiano o un Estado extranjero en las posiciones 12 a 15 del codice fiscale, formado por una letra y tres cifras. En los municipios sigue la codificación catastral, y los Estados extranjeros llevan una Z seguida de tres cifras, como explica <a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (en italiano).</p>\n\n<h2>¿Qué ejemplos hay de códigos Belfiore?</h2>\n<p>Ejemplos de la lista de la Agenzia delle Entrate incluida en este sitio:</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Lugar</th><th>Código</th><th>Estado</th><th>Código</th></tr></thead>\n<tbody>\n<tr><td>Roma</td><td><code>H501</code></td><td>España</td><td><code>Z131</code></td></tr><tr><td>Milán</td><td><code>F205</code></td><td>Argentina</td><td><code>Z600</code></td></tr><tr><td>Nápoles</td><td><code>F839</code></td><td>Colombia</td><td><code>Z604</code></td></tr><tr><td>Turín</td><td><code>L219</code></td><td>México</td><td><code>Z514</code></td></tr><tr><td>Florencia</td><td><code>D612</code></td><td>Chile</td><td><code>Z603</code></td></tr>\n</tbody></table></div>\n\n<h2>¿Cómo se encuentra el código Belfiore de un municipio o Estado?</h2>\n<p>Lo más rápido es el campo de lugar de la <a href=\"{{p:home}}\">calculadora</a>: escribe el nombre, también en español, elige el lugar y el código se rellena. La lista completa está en el <a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">archivo de la Agenzia delle Entrate</a> (en italiano). Nuestra lista tiene 7.894 municipios y 249 Estados extranjeros, actualizada a 21 de febrero de 2026.</p>\n\n<h2>¿Qué hacer con los municipios que comparten nombre?</h2>\n<p>Distínguelos por la provincia: son municipios distintos con códigos distintos. Nuestra lista tiene cinco nombres así.</p>\n<ul>\n<li>Castro: Bergamo <code>C337</code>, Lecce <code>M261</code>.</li>\n<li>Livo: Como <code>E623</code>, Trento <code>E624</code>.</li>\n<li>Peglio: Como <code>G415</code>, Pesaro e Urbino <code>G416</code>.</li>\n<li>Samone: Torino <code>H753</code>, Trento <code>H754</code>.</li>\n<li>San Teodoro: Messina <code>I328</code>, Sassari <code>I329</code>.</li>\n</ul>\n\n<h2>¿Qué columna se usa en las listas con varios códigos?</h2>\n<p>Un detalle que comprobamos en la exportación de la Agenzia delle Entrate: la columna «Codice Nazionale» contiene el código Belfiore (para Roma <code>H501</code>), mientras que la columna «Codice Catastale» contiene otro código (para Roma <code>M1AA</code>). El segundo da codici fiscali erróneos.</p>\n\n<h2>¿Qué pasa si el municipio fue suprimido o cambió?</h2>\n<p>El codice fiscale conserva el código que tenía el municipio al nacer. Nuestra lista solo tiene entradas actuales. Quien nació en un municipio suprimido, fusionado o cedido a otro Estado puede tener un código que el cálculo no conoce. En esos casos, el <a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">servicio de verificación de la Agenzia</a> (2014, en italiano) es la herramienta adecuada. Mira también <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">verificación formal y oficial</a>.</p>\n\n<h2>Fuentes</h2>\n<ul>\n<li><a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (en italiano): archivo de municipios y Estados extranjeros.</li>\n<li><a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (en italiano): estructura del código del lugar.</li>\n<li><a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (en italiano): verificación para nacidos en municipios cedidos (2014).</li>\n</ul>"
};
export default g;
