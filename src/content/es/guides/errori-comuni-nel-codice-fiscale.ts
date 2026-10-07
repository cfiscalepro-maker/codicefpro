import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "errores-comunes-codice-fiscale",
  "title": "Errores comunes en el codice fiscale | Codice Fiscale Pro",
  "h1": "Errores comunes en el codice fiscale y cómo evitarlos",
  "description": "Los errores más frecuentes al calcular o escribir un codice fiscale: sexo, mes, lugar, apellido y omocodia, con una tabla de errores.",
  "indexDesc": "Los fallos más frecuentes en el cálculo a mano y en las herramientas en línea.",
  "datePublished": "2026-10-05",
  "summary": "Los errores más frecuentes son: olvidar el +40 en el día de las mujeres, intercambiar nombre y apellido, usar un código de lugar equivocado (por ejemplo la columna equivocada de la lista o un municipio homónimo de otra provincia), confundir la letra O con la cifra 0 e ignorar la omocodia. Una comprobación formal detecta los cuatro primeros.",
  "audience": "quien calcule un codice fiscale a mano, lo copie de un documento a un formulario o escriba software que lo genere. Para cada error, la guía muestra cómo detectarlo y corregirlo.",
  "related": [
    "come-si-calcola-il-codice-fiscale",
    "codice-belfiore",
    "verifica-formale-e-verifica-ufficiale",
    "cos-e-l-omocodia"
  ],
  "faq": [
    {
      "q": "¿Cuál es el error más común en el cálculo a mano?",
      "a": "Olvidar sumar 40 al día de nacimiento de las mujeres, o intercambiar nombre y apellido. Ambos se ven al releer los dos grupos de tres letras."
    },
    {
      "q": "¿Por qué mi código calculado difiere del de mi tarjeta sanitaria?",
      "a": "Las causas habituales son una grafía distinta del nombre en los documentos, un lugar de nacimiento equivocado, el uso del apellido del cónyuge o un código con omocodia asignado por la Agenzia."
    },
    {
      "q": "¿Qué letras no se usan nunca para el mes?",
      "a": "F, G, I, N, O, Q, U, V, W, X, Y y Z no aparecen nunca. Los meses solo usan A, B, C, D, E, H, L, M, P, R, S, T."
    },
    {
      "q": "¿Cómo compruebo un código después de calcularlo?",
      "a": "Usa la comprobación formal para los errores de estructura y compara el código con tu tarjeta sanitaria. Para una comprobación oficial está el servicio de la Agenzia delle Entrate."
    }
  ],
  "body": "<h2>¿Cuáles son los errores más comunes al calcular un codice fiscale?</h2>\n<p>La tabla recoge los diez errores más frecuentes, con la forma de detectar cada uno. Los ejemplos usan el código de muestra <code>RSSMRA85T10H501O</code>.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Error</th><th>Cómo detectarlo</th><th>Cómo evitarlo</th></tr></thead>\n<tbody>\n<tr><td>Nombre y apellido intercambiados</td><td><code>MRA</code> aparece antes de <code>RSS</code></td><td>Las tres primeras letras son el apellido, las tres siguientes el nombre</td></tr><tr><td>Sin +40 en el día de una mujer</td><td>Día de 01 a 31 en una mujer</td><td>En las mujeres suma 40: el día 5 pasa a 45</td></tr><tr><td>Letra de mes equivocada</td><td>Letras como F, G, I, N, O, Q en la posición 9</td><td>Usa solo A, B, C, D, E, H, L, M, P, R, S, T</td></tr><tr><td>Residencia en vez de lugar de nacimiento</td><td>Código distinto del municipio de nacimiento</td><td>Usa siempre el lugar de nacimiento</td></tr><tr><td>Columna equivocada en la lista de municipios</td><td>Un código como <code>M1AA</code> en vez de <code>H501</code></td><td>Usa «Codice Nazionale», no «Codice Catastale»</td></tr><tr><td>Municipio homónimo de otra provincia</td><td>Castro: <code>C337</code> (BG) o <code>M261</code> (LE)</td><td>Elige también la provincia</td></tr><tr><td>Apellido del cónyuge</td><td>Código distinto del de la tarjeta sanitaria</td><td>Usa el apellido de nacimiento</td></tr><tr><td>Apóstrofos, espacios y tildes mal tratados</td><td>O’Connor que no da <code>CNN</code></td><td>Ignora apóstrofos, espacios y tildes; la ñ vale como n</td></tr><tr><td>O en vez de 0, o al revés</td><td>Letra de control O frente a la cifra 0 en campos numéricos</td><td>El carácter de control es siempre una letra</td></tr><tr><td>Omocodia ignorada</td><td>Letras en posiciones que normalmente son cifras</td><td>Mira la tarjeta sanitaria y lee <a href=\"{{g:cos-e-l-omocodia}}\">qué es la omocodia</a></td></tr>\n</tbody></table></div>\n\n<h2>¿Por qué mi código calculado difiere del de mi tarjeta sanitaria?</h2>\n<p>Los motivos más frecuentes son la grafía de los datos y la omocodia. <a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (en italiano) cita espacios, apóstrofos, nombres dobles, caracteres especiales y nacimiento en el extranjero entre las causas. Un código con letras donde deberían ir cifras es una variante de omocodia.</p>\n\n<h2>¿Cómo se comprueba un código después de calcularlo?</h2>\n<p>Compruébalo en tres pasos, del más rápido al más seguro.</p>\n<ol>\n<li>Pásalo por la <a href=\"{{p:verify}}\">comprobación</a>: detecta estructura, fecha y letra de control erróneas.</li>\n<li>Léelo con el <a href=\"{{p:inverse}}\">descifrador</a> para ver que sexo, fecha y lugar son los esperados.</li>\n<li>Compáralo con tu tarjeta sanitaria o con el <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">servicio de la Agenzia delle Entrate</a> (en italiano).</li>\n</ol>\n\n<h2>¿Qué errores detecta una comprobación formal y cuáles no?</h2>\n<p>Detecta estructura errónea, mes o día imposibles y una letra de control equivocada. No detecta un lugar erróneo pero plausible, un nombre escrito de otra forma ni un código que nadie posee. Para eso hace falta un documento oficial. Mira <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">verificación formal y oficial</a>.</p>\n\n<h2>Fuentes</h2>\n<ul>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (en italiano): errores y variantes en los datos.</li>\n<li><a href=\"https://arcom.agenziaentrate.gov.it/CitizenArCom/\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (en italiano): lista de municipios y Estados.</li>\n</ul>"
};
export default g;
