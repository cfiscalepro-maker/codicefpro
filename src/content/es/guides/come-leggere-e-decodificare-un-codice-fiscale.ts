import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "como-leer-y-descifrar-un-codice-fiscale",
  "title": "Cómo leer y descifrar un codice fiscale | Codice Fiscale Pro",
  "h1": "Cómo leer y descifrar un codice fiscale",
  "description": "Cómo leer un codice fiscale: qué significan los 16 caracteres, cómo sacar fecha de nacimiento, sexo y lugar, y qué no dice el código.",
  "indexDesc": "Qué significa cada grupo de caracteres y cómo sacar fecha, sexo y lugar.",
  "datePublished": "2026-10-05",
  "summary": "Para leer un codice fiscale se dividen los 16 caracteres en grupos: las posiciones 1-6 salen del apellido y el nombre, 7-8 son el año, 9 el mes, 10-11 el día y el sexo (más 40 en las mujeres), 12-15 el lugar de nacimiento y 16 la letra de control. De GRCJSO80R30Z131B se lee: un hombre, nacido el 30 de octubre de 1980 en España (Z131).",
  "audience": "quien tenga un codice fiscale delante y quiera saber qué dice: empleados que revisan una nómina, personas que rellenan formularios, desarrolladores. Para descifrar de forma automática, usa la herramienta de descifrado.",
  "related": [
    "cos-e-il-codice-fiscale-inverso",
    "cos-e-l-omocodia",
    "codice-belfiore",
    "come-si-calcola-il-codice-fiscale"
  ],
  "faq": [
    {
      "q": "¿Cómo sé si un codice fiscale es de un hombre o de una mujer?",
      "a": "Mira las posiciones 10 y 11. Un número de 01 a 31 indica un hombre, uno de 41 a 71 una mujer, y el día de nacimiento es el número menos 40."
    },
    {
      "q": "¿Qué letra representa el mes?",
      "a": "Posición 9: A enero, B febrero, C marzo, D abril, E mayo, H junio, L julio, M agosto, P septiembre, R octubre, S noviembre, T diciembre."
    },
    {
      "q": "¿Por qué mi código tiene letras donde espero cifras?",
      "a": "Indica omocodia. Una o más de las siete cifras posteriores a las seis primeras letras están sustituidas por letras de L, M, N, P, Q, R, S, T, U, V, que equivalen a las cifras de 0 a 9."
    },
    {
      "q": "¿Puedo leer el año de nacimiento completo?",
      "a": "El código solo contiene las dos últimas cifras. Un código con 80 puede ser de alguien nacido en 1980 o en 1880, así que se elige la fecha plausible."
    }
  ],
  "body": "<h2>¿Cómo se lee un codice fiscale carácter a carácter?</h2>\n<p>Se lee por grupos, siempre en el mismo orden. Tomemos <code>GRCJSO80R30Z131B</code>.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Posiciones</th><th>Grupo</th><th>Significado</th></tr></thead>\n<tbody>\n<tr><td>1-3</td><td><code>GRC</code></td><td>Letras sacadas del apellido</td></tr><tr><td>4-6</td><td><code>JSO</code></td><td>Letras sacadas del nombre</td></tr><tr><td>7-8</td><td><code>80</code></td><td>Año de nacimiento: 80</td></tr><tr><td>9</td><td><code>R</code></td><td>Mes: octubre</td></tr><tr><td>10-11</td><td><code>30</code></td><td>Día 30, masculino</td></tr><tr><td>12-15</td><td><code>Z131</code></td><td>Lugar de nacimiento: España</td></tr><tr><td>16</td><td><code>B</code></td><td>Letra de control</td></tr>\n</tbody></table></div>\n\n<h2>¿Cómo se obtienen la fecha de nacimiento y el sexo?</h2>\n<p>Se usan las posiciones 7 a 11. Las dos primeras cifras son el año, la letra es el mes y las dos últimas cifras el día. Si el número del día supera 40, se trata de una mujer y el día real es el número menos 40. Ejemplo: <code>99T52</code> en <code>MRTMRA99T52Z131V</code> significa 1999, diciembre, día 52 menos 40 igual a 12, femenino.</p>\n\n<h2>¿Cómo se encuentra el lugar de nacimiento?</h2>\n<p>Las posiciones 12 a 15 contienen el código Belfiore. Una letra seguida de tres cifras es un municipio italiano, por ejemplo <code>F205</code> para Milán. Un código que empieza por Z es un Estado extranjero, por ejemplo <code>Z131</code> para España, <code>Z600</code> para Argentina o <code>Z604</code> para Colombia. Búscalo con nuestro <a href=\"{{p:inverse}}\">descifrador</a> o lee la guía del <a href=\"{{g:codice-belfiore}}\">código Belfiore</a>.</p>\n\n<h2>¿Qué dicen las seis primeras letras?</h2>\n<p>Son consonantes y vocales elegidas con una regla fija, así que varios apellidos o nombres dan las mismas letras. <code>RSS</code> encaja con Rossi, Rosso y Ross. <code>MRA</code> encaja con Mario, Mauro y Maria. Se pueden formular hipótesis con las seis letras, pero no se recuperan ni el nombre ni el apellido.</p>\n\n<h2>¿Cómo se reconoce un código con omocodia?</h2>\n<p>En un código sin omocodia, las posiciones 7, 8, 10, 11, 13, 14 y 15 son cifras. Si una de ellas contiene una letra de L, M, N, P, Q, R, S, T, U, V, el código es una variante de omocodia. La cifra original sigue la equivalencia L = 0, M = 1, N = 2, P = 3, Q = 4, R = 5, S = 6, T = 7, U = 8, V = 9. Mira <a href=\"{{g:cos-e-l-omocodia}}\">qué es la omocodia</a>.</p>\n\n<h2>¿Qué no se puede leer en un codice fiscale?</h2>\n<p>No se pueden leer el nombre completo, el siglo de nacimiento ni si el código se asignó de verdad a una persona. Los dos primeros se deben a cómo se construye el código; para el último hace falta la <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">verificación oficial</a>.</p>\n\n<h2>Fuentes</h2>\n<ul>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (en italiano): estructura de los 16 caracteres.</li>\n<li><a href=\"https://www.money.it/codice-fiscale-a-cosa-serve-come-ottenere\" rel=\"noopener noreferrer\" lang=\"it\">Money.it</a> (en italiano): lectura del código y omocodia.</li>\n</ul>"
};
export default g;
