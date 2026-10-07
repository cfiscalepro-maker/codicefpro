import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "que-es-el-codice-fiscale-inverso",
  "title": "Codice fiscale inverso: qué puede decirte un código | Codice Fiscale Pro",
  "h1": "Codice fiscale inverso: qué puede decirte un código",
  "description": "Codice fiscale inverso: lee sexo, fecha y lugar de nacimiento. Por qué no se recupera el nombre y su diferencia con la verificación oficial.",
  "indexDesc": "Qué datos revela un código y por qué no se recuperan nombre y apellido.",
  "datePublished": "2026-10-05",
  "summary": "El codice fiscale inverso lee un código existente y devuelve los datos que contiene: sexo, día y mes de nacimiento, las dos últimas cifras del año y el lugar de nacimiento. No devuelve nombre ni apellido, porque las seis primeras letras encajan con muchos nombres: RSS encaja con Rossi, Rosso y Ross, y MRA con Mario, Mauro y Maria.",
  "audience": "quien quiera saber qué dice un código, por ejemplo para comprobar un formulario rellenado o un dato de un expediente. No sirve para identificar a desconocidos, algo que el código no permite.",
  "related": [
    "cos-e-il-codice-fiscale",
    "come-leggere-e-decodificare-un-codice-fiscale",
    "cos-e-l-omocodia",
    "verifica-formale-e-verifica-ufficiale"
  ],
  "faq": [
    {
      "q": "¿El codice fiscale inverso revela nombre y apellido?",
      "a": "No. Las seis primeras letras salen de consonantes y vocales del apellido y del nombre, y nombres distintos dan las mismas letras. Se pueden formular hipótesis, no recuperar los datos."
    },
    {
      "q": "¿Qué se puede leer con certeza?",
      "a": "El sexo, el día y el mes de nacimiento, las dos últimas cifras del año y el código del municipio o del Estado de nacimiento. Con la lista de municipios, el código da el nombre del lugar."
    },
    {
      "q": "¿El codice fiscale inverso es oficial?",
      "a": "No. Lee la estructura del código. Para saber si un código existe y corresponde a una persona, usa el servicio de la Agenzia delle Entrate."
    },
    {
      "q": "¿Es seguro escribir un codice fiscale en una web de descifrado?",
      "a": "Depende de la web. Prefiere herramientas que funcionen en el navegador sin enviar los datos, como esta, y evita escribir códigos ajenos sin motivo."
    }
  ],
  "body": "<h2>¿Qué es el codice fiscale inverso?</h2>\n<p>Es el cálculo que parte de un código y vuelve a los datos personales que lo produjeron: lo contrario del <a href=\"{{g:come-si-calcola-il-codice-fiscale}}\">cálculo normal</a>. Quien lo busca suele querer la fecha de nacimiento, el sexo y el municipio de nacimiento.</p>\n\n<h2>¿Qué datos da el codice fiscale inverso?</h2>\n<p>Da con certeza el sexo, el día, el mes, las dos últimas cifras del año y el código del lugar de nacimiento, que la <a href=\"{{p:inverse}}\">lista de municipios y Estados</a> convierte en nombre de lugar. También muestra si el código es una variante de omocodia.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Dato</th><th>¿Se puede leer?</th><th>Nota</th></tr></thead>\n<tbody>\n<tr><td>Sexo</td><td>Sí</td><td>Un día superior a 40 indica una mujer</td></tr><tr><td>Día y mes de nacimiento</td><td>Sí</td><td>La letra del mes hay que traducirla</td></tr><tr><td>Año de nacimiento</td><td>En parte</td><td>Solo dos cifras, el siglo queda abierto</td></tr><tr><td>Lugar de nacimiento</td><td>Sí</td><td>Según el código Belfiore, si está en la lista</td></tr><tr><td>Apellido y nombre</td><td>No</td><td>Solo hipótesis</td></tr>\n</tbody></table></div>\n\n<h2>¿Por qué no se pueden recuperar nombre y apellido?</h2>\n<p>Las seis primeras letras usan consonantes y, si hace falta, vocales, de modo que muchos nombres dan el mismo resultado. Rossi, Rosso y Ross dan todos <code>RSS</code>. Mario, Mauro y Maria dan todos <code>MRA</code>. Algunas fuentes hablan de buenas probabilidades de adivinar el nombre (<a href=\"https://lentepubblica.it/contabilita-bilancio-tasse-tributi/codice-fiscale-inverso-cose-a-cosa-serve-e-come-si-calcola/\" rel=\"noopener noreferrer\" lang=\"it\">Lentepubblica.it</a>, en italiano), pero sigue siendo una conjetura, y con el apellido es más difícil.</p>\n\n<h2>¿Cómo se usa el codice fiscale inverso?</h2>\n<p>Se escribe el código en el descifrador y se lee el resultado, en tres pasos.</p>\n<ol>\n<li>Abre el <a href=\"{{p:inverse}}\">descifrador</a>.</li>\n<li>Escribe los 16 caracteres, también con letras en lugar de algunas cifras.</li>\n<li>Lee sexo, fecha, lugar y código Belfiore, y mira el resultado de la comprobación formal.</li>\n</ol>\n<p>Si dos años encajan con las dos cifras, por ejemplo 2005 y 1905, la herramienta muestra ambos y tú eliges el plausible.</p>\n\n<h2>¿El codice fiscale inverso es una verificación oficial?</h2>\n<p>No. Descifrar es leer la estructura del código. No dice si el código se asignó, ni a quién. Para eso mira <a href=\"{{g:verifica-formale-e-verifica-ufficiale}}\">verificación formal y oficial</a> y el <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">servicio de la Agenzia delle Entrate</a> (en italiano).</p>\n\n<h2>¿Cómo proteger la privacidad al descifrar un código?</h2>\n<p>Un codice fiscale es un dato personal. Nuestra herramienta lo procesa en tu navegador y no lo envía ni a un servidor ni a Google Analytics. En otras webs, comprueba cómo tratan los datos, y evita escribir códigos ajenos sin un motivo concreto.</p>\n\n<h2>Fuentes</h2>\n<ul>\n<li><a href=\"https://lentepubblica.it/contabilita-bilancio-tasse-tributi/codice-fiscale-inverso-cose-a-cosa-serve-e-come-si-calcola/\" rel=\"noopener noreferrer\" lang=\"it\">Lentepubblica.it</a> (en italiano): datos legibles y límites del cálculo inverso.</li>\n<li><a href=\"https://www.pmi.it/?p=362269\" rel=\"noopener noreferrer\" lang=\"it\">Pmi.it</a> (en italiano): reglas de las letras.</li>\n</ul>"
};
export default g;
