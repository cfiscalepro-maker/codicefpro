import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  "slug": "verificacion-formal-y-oficial",
  "title": "Verificación formal y oficial del codice fiscale | Codice Fiscale Pro",
  "h1": "Verificación formal y verificación oficial del codice fiscale",
  "description": "Diferencia entre comprobación formal (estructura, letra de control) y verificación oficial de la Agenzia delle Entrate: qué prueba cada una y cuándo usarlas.",
  "indexDesc": "Qué comprueba un sitio independiente y qué comprueba la Agenzia delle Entrate.",
  "datePublished": "2026-10-05",
  "summary": "Una comprobación formal verifica que un codice fiscale está bien construido: longitud, caracteres, fecha, sexo, formato del lugar y letra de control. La verificación oficial de la Agenzia delle Entrate compara el código con el registro tributario. Una verificación formal del codice fiscale no equivale a la verificación oficial de la Agenzia delle Entrate.",
  "audience": "quien deba comprobar un código antes de usarlo en un formulario, un contrato o una base de datos, y quien se pregunte por qué una comprobación en línea positiva no basta. También sirve a desarrolladores que escriben validaciones.",
  "related": [
    "cos-e-il-codice-fiscale-inverso",
    "cos-e-l-omocodia",
    "errori-comuni-nel-codice-fiscale",
    "come-trovare-il-proprio-codice-fiscale"
  ],
  "faq": [
    {
      "q": "¿Un codice fiscale formalmente correcto es siempre válido?",
      "a": "No. Puede tener estructura y letra de control correctas sin haberse asignado nunca a nadie. Solo el registro tributario puede decir si existe."
    },
    {
      "q": "¿La comprobación de este sitio es oficial?",
      "a": "No. Codice Fiscale Pro es independiente y no está afiliado a la Agenzia delle Entrate. Nuestra comprobación es formal y lo dice en cada resultado."
    },
    {
      "q": "¿Dónde se hace la verificación oficial?",
      "a": "En el servicio de verificación del codice fiscale de la Agenzia delle Entrate, que compara el código con el registro tributario. El enlace está en esta página."
    },
    {
      "q": "¿Cuándo basta la comprobación formal?",
      "a": "Cuando quieres detectar un error de escritura o de cálculo antes de enviar un formulario. Si el código tiene efectos legales o fiscales, usa también la verificación oficial."
    }
  ],
  "body": "<h2>¿Qué prueba una comprobación formal?</h2>\n<p>Prueba la coherencia interna del código, sin consultar ninguna base de datos. La <a href=\"{{p:verify}}\">comprobación</a> de este sitio cubre:</p>\n<ul>\n<li>16 caracteres, con letras y cifras en las posiciones previstas;</li>\n<li>una letra de mes válida (A, B, C, D, E, H, L, M, P, R, S, T);</li>\n<li>un día y un sexo compatibles con el mes;</li>\n<li>el formato del código del lugar, una letra y tres cifras;</li>\n<li>una letra de control correcta, recalculada con los 15 primeros caracteres;</li>\n<li>omocodia: se aceptan las letras L, M, N, P, Q, R, S, T, U, V en lugar de cifras.</li>\n</ul>\n\n<h2>¿Qué prueba la verificación oficial de la Agenzia?</h2>\n<p>El <a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">servicio de la Agenzia delle Entrate</a> (en italiano) compara el código con los datos del registro tributario y puede comprobar también que corresponda a los datos personales. Cuando se presentó, <a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (23 de abril de 2014, en italiano) lo describía como útil para la omocodia y para quienes nacieron en municipios cedidos a otros Estados. Sus funciones actuales pueden ser distintas, así que lee la página del servicio.</p>\n\n<h2>¿Cuál es la diferencia entre las dos?</h2>\n<p>La comprobación formal mira cómo está escrito el código. La verificación oficial mira si el código existe y a quién pertenece.</p>\n<div class=\"table-wrap\"><table>\n<thead><tr><th>Pregunta</th><th>Comprobación formal</th><th>Verificación oficial</th></tr></thead>\n<tbody>\n<tr><td>¿Está bien escrito el código?</td><td>Sí</td><td>Sí</td></tr><tr><td>¿Es correcta la letra de control?</td><td>Sí</td><td>Sí</td></tr><tr><td>¿Se asignó el código a alguien?</td><td>No</td><td>Sí</td></tr><tr><td>¿Coincide con nombre y fecha de nacimiento?</td><td>No</td><td>Sí, con los datos introducidos</td></tr><tr><td>¿Gestiona municipios suprimidos y cedidos?</td><td>Solo si el código está en nuestra lista</td><td>Sí</td></tr><tr><td>¿Es oficial?</td><td>No</td><td>Sí</td></tr>\n</tbody></table></div>\n\n<h2>¿Un código puede pasar la comprobación formal y no existir?</h2>\n<p>Sí. <code>RSSMRA85T10H501O</code> supera la comprobación formal, pero es un código de ejemplo de nuestras guías. Cualquier combinación plausible de datos produce un código correcto en la forma, aunque nadie lo tenga.</p>\n\n<h2>¿Cuándo usar cada una?</h2>\n<p>Una regla breve:</p>\n<ol>\n<li>Para detectar un error de escritura o de cálculo, empieza por la comprobación formal: es inmediata y se ejecuta en tu navegador.</li>\n<li>Antes de usar el código en un acto jurídico, un contrato o una declaración fiscal, compruébalo también con la verificación oficial.</li>\n<li>Si el código tiene letras en lugar de cifras, o la persona nació en un municipio suprimido o cedido, usa la verificación oficial.</li>\n</ol>\n\n<h2>¿Cómo se protegen tus datos al comprobar un código?</h2>\n<p>Nuestra herramienta procesa el código en tu navegador y no lo envía ni a un servidor ni a analítica. En el sitio de la Agenzia, los datos los trata la propia Agenzia. Codice Fiscale Pro es independiente y no está afiliado a la Agenzia delle Entrate. Consulta la <a href=\"{{p:privacy}}\">política de privacidad</a>.</p>\n\n<h2>Fuentes</h2>\n<ul>\n<li><a href=\"https://telematici.agenziaentrate.gov.it/VerificaCF\" rel=\"noopener noreferrer\" lang=\"it\">Agenzia delle Entrate</a> (italiano): servicio de verificación del codice fiscale.</li>\n<li><a href=\"https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/\" rel=\"noopener noreferrer\" lang=\"it\">01net.it</a> (italiano): descripción del servicio en su lanzamiento, 23 de abril de 2014.</li>\n</ul>"
};
export default g;
