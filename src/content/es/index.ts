import type { LocaleContent } from '../../i18n/content';
const AGENCY_VERIFY = 'https://telematici.agenziaentrate.gov.it/VerificaCF';
const content: LocaleContent = {
  home: {
    title: 'Calcular el codice fiscale online | Codice Fiscale Pro',
    description: 'Calcula gratis tu codice fiscale italiano. El cálculo se hace en tu navegador, sin enviar datos. Para nacidos en Italia o en el extranjero, con omocodia.',
    eyebrow: 'Gratis · Sin registro',
    h1: 'Calcular el codice fiscale online',
    intro: 'El codice fiscale es el número de identificación fiscal italiano. Escribe tus datos personales y obtén el código. El cálculo se hace en tu navegador: nombre, fecha y lugar de nacimiento no se envían a ningún servidor.',
    afterTool: 'Más herramientas: <a class="text-link underline" href="{{p:inverse}}">descifrar un codice fiscale</a> y <a class="text-link underline" href="{{p:verify}}">verificar un codice fiscale</a>. ¿Quieres entender las reglas? Lee <a class="text-link underline" href="{{g:come-si-calcola-il-codice-fiscale}}">cómo se calcula el codice fiscale</a>.',
  },
  inverse: {
    title: 'Descifrar un codice fiscale online (búsqueda inversa) | Codice Fiscale Pro',
    description: 'Descifrar un codice fiscale: lee fecha de nacimiento, sexo, lugar de nacimiento y omocodia del código. En tu navegador, sin enviar datos.',
    eyebrow: 'Descifrado', h1: 'Descifrar un codice fiscale: búsqueda inversa online',
    intro: 'Escribe un codice fiscale para leer los datos que contiene: sexo, fecha de nacimiento, lugar de nacimiento y omocodia. El proceso se hace en tu navegador.',
    body: `<h2>Lo que no se puede recuperar</h2>
<p>La búsqueda inversa no devuelve nombre ni apellido. Las seis primeras letras salen de las consonantes y vocales del apellido y del nombre según una regla fija, y nombres distintos dan las mismas letras. Además, el código solo contiene dos cifras del año, por lo que el siglo queda abierto cuando caben dos años.</p>
<h2>Descifrado y verificación oficial</h2>
<p>Esta página lee la estructura del código. No consulta a la Agenzia delle Entrate y no puede decir si el código llegó a asignarse a alguien. Para eso existe la <a href="{{p:verify}}">comprobación formal</a> y, para una respuesta oficial, el servicio de la propia Agenzia. Para generar un código usa la <a href="{{p:home}}">calculadora de codice fiscale</a>. La guía <a href="{{g:cos-e-il-codice-fiscale-inverso}}">Qué es el codice fiscale inverso</a> explica los límites con más detalle.</p>`,
  },
  verify: {
    title: 'Verificar un codice fiscale: comprobación formal | Codice Fiscale Pro',
    description: 'Verificar un codice fiscale: longitud, fecha, carácter de control y omocodia. Una comprobación formal, no oficial.',
    eyebrow: 'Comprobación formal', h1: 'Verificar un codice fiscale',
    intro: 'Comprueba si un codice fiscale está bien construido. Una verificación formal del codice fiscale no equivale a la verificación oficial de la Agenzia delle Entrate.',
    body: `<h2>Qué comprobamos</h2>
<ul>
<li>16 caracteres, con letras y cifras en las posiciones previstas.</li>
<li>Una letra de mes válida, y un día y un sexo compatibles con el mes.</li>
<li>El formato del código del lugar.</li>
<li>Un carácter de control correcto.</li>
<li>Omocodia: se aceptan letras en lugar de cifras.</li>
</ul>
<h2>Lo que no podemos decir</h2>
<p>Un código puede ser formalmente correcto y no haberse asignado nunca a nadie, y no podemos relacionarlo con un nombre. Para la verificación oficial usa el <a href="${AGENCY_VERIFY}" rel="noopener noreferrer">servicio de la Agenzia delle Entrate</a>. Codice Fiscale Pro es independiente y no está afiliado a la Agenzia. Para leer los datos de un código, consulta <a href="{{p:inverse}}">descifrar un codice fiscale</a>.</p>`,
  },
  about: {
    title: 'Sobre nosotros | Codice Fiscale Pro', description: 'Codice Fiscale Pro es un servicio independiente para calcular, descifrar y verificar el codice fiscale italiano, con cálculo en tu navegador.',
    h1: 'Codice Fiscale Pro', eyebrow: 'Sobre nosotros',
    body: `<p>Codice Fiscale Pro es un servicio en línea independiente, a cargo del Codice Fiscale Pro Team. Ofrece una <a href="{{p:home}}">calculadora de codice fiscale</a>, un <a href="{{p:inverse}}">descifrador</a> y una <a href="{{p:verify}}">comprobación formal</a>, gratis y sin registro. La interfaz está disponible en italiano, alemán, francés, español e inglés.</p>
<h2>Cómo trabajamos</h2>
<ul>
<li>El cálculo se hace en tu navegador. Los datos personales que escribes no se envían.</li>
<li>El algoritmo sigue las reglas conocidas del codice fiscale, incluida la omocodia, y está cubierto por pruebas automáticas, entre ellas una comparación con una biblioteca de referencia de código abierto.</li>
<li>Los códigos de lugar proceden de una exportación de la lista de municipios y Estados actuales de la Agenzia delle Entrate, guardada como copia local. No es una conexión en tiempo real y no incluye los municipios suprimidos.</li>
</ul>
<h2>Lo que no somos</h2>
<p>No somos la Agenzia delle Entrate y no tenemos ninguna relación con ella. No emitimos codici fiscali, y una comprobación formal no es la verificación oficial. Para esta, usa el <a href="${AGENCY_VERIFY}" rel="noopener noreferrer">servicio de la Agenzia</a>.</p>
<h2>Contacto</h2>
<p>Para comunicar un error o proponer una mejora, visita la <a href="{{p:contact}}">página de contacto</a>.</p>`,
  },
  contact: {
    title: 'Contacto | Codice Fiscale Pro', description: 'Contacta con Codice Fiscale Pro para comunicar un error, hacer una pregunta o ejercer tus derechos de privacidad.',
    h1: 'Contacto', eyebrow: 'Contacto',
    body: `<p>Escribe a <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>
<h2>Para comunicar un error de cálculo</h2>
<p>Indícanos el resultado que obtuviste y el que esperabas, el municipio o Estado de nacimiento y la fecha. No nos envíes un codice fiscale completo si no es necesario. Los datos personales se tratan como se describe en la <a href="{{p:privacy}}">política de privacidad</a>.</p>
<h2>Lo que no podemos hacer</h2>
<p>No emitimos codici fiscali y no podemos corregir ni comprobar registros de la Agenzia delle Entrate. Para eso, dirígete directamente a la Agenzia.</p>`,
  },
  privacy: {
    title: 'Política de privacidad y cookies | Codice Fiscale Pro', description: 'Qué datos trata Codice Fiscale Pro: lo que escribes en la calculadora se queda en tu navegador. Cookies de Google Analytics solo con tu consentimiento.',
    h1: 'Política de privacidad y cookies', eyebrow: 'Última actualización: 5 de octubre de 2026',
    body: `<p>Esta política describe cómo funciona hoy codicefiscalepro.com.</p>
<h2>Responsable y contacto</h2>
<p>El sitio lo gestiona Codice Fiscale Pro, un servicio independiente. Para cualquier solicitud sobre privacidad escribe a <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>
<h2>Datos que escribes en las herramientas</h2>
<p>Apellido, nombre, fecha y lugar de nacimiento, sexo y los codici fiscali que introduces se procesan únicamente en tu navegador. No los recibimos, no los guardamos y no los enviamos a servicios externos, tampoco a Google Analytics. No aparecen en las direcciones de las páginas. El botón de compartir comparte solo el enlace a la herramienta, sin tus datos. El archivo descargable se crea en tu dispositivo.</p>
<h2>Datos técnicos en tu navegador</h2>
<p>Usamos el almacenamiento local del navegador (localStorage) con dos fines técnicos que no requieren consentimiento:</p>
<ul>
<li><strong>theme</strong>: tu elección entre tema claro y oscuro.</li>
<li><strong>cf-consent</strong>: tu elección sobre las cookies, que se guarda 6 meses.</li>
</ul>
<h2>Google Analytics (solo con consentimiento)</h2>
<p>Si pulsas «Aceptar analítica», cargamos Google Analytics 4 para medir el uso del sitio de forma agregada: páginas visitadas, procedencia aproximada, tipo de dispositivo y de navegador. Si rechazas o no eliges, no se carga el script de Google.</p>
<ul>
<li><strong>Proveedor:</strong> Google Ireland Limited, con posible transferencia de datos a Google LLC en Estados Unidos. Google indica que se apoya en mecanismos como el Marco de Privacidad de Datos UE-EE. UU. y las cláusulas contractuales tipo.</li>
<li><strong>Cookies:</strong> _ga y _ga_G-8GHY9P65L6, hasta 2 años.</li>
<li><strong>Funciones publicitarias:</strong> las señales de Google y la personalización de anuncios están desactivadas.</li>
<li><strong>Conservación:</strong> según el periodo de conservación configurado en la cuenta de Google Analytics del sitio, dentro de los límites que Google establece para GA4.</li>
<li><strong>Base jurídica:</strong> tu consentimiento (artículo 6.1.a del RGPD y artículo 5.3 de la Directiva ePrivacy, transpuesta a la legislación nacional; en España, el artículo 22.2 de la LSSI).</li>
</ul>
<p>Puedes cambiar de opinión en cualquier momento con «Gestionar cookies», al final de cada página. Si rechazas después de haber aceptado, eliminamos las cookies de Google Analytics que el navegador nos permite borrar y dejamos de medir.</p>
<h2>Registros del servidor</h2>
<p>El proveedor de alojamiento puede registrar datos técnicos de cada solicitud, como dirección IP, fecha y hora, página solicitada y navegador, por seguridad y funcionamiento. No los usamos para identificarte.</p>
<h2>Publicidad</h2>
<p>El sitio no muestra anuncios por ahora. Si añadimos publicidad, actualizaremos esta política y pediremos tu consentimiento antes de usar cookies publicitarias.</p>
<h2>Si nos escribes</h2>
<p>Si envías un correo a contact@codicefiscalepro.com, usamos tu dirección y tu mensaje solo para responderte. El sitio no tiene formulario de contacto.</p>
<h2>Tus derechos</h2>
<p>Puedes solicitar el acceso, la rectificación, la supresión, la limitación, la oposición y la portabilidad de tus datos (artículos 15 a 22 del RGPD) y retirar tu consentimiento en cualquier momento. Escribe a la dirección indicada arriba. También puedes reclamar ante la autoridad de protección de datos de tu país (en España, la <a href="https://www.aepd.es/" rel="noopener noreferrer">AEPD</a>; <a href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en" rel="noopener noreferrer">lista de autoridades de la UE</a>) o ante el <a href="https://www.garanteprivacy.it/" rel="noopener noreferrer">Garante per la protezione dei dati personali</a> italiano.</p>
<h2>Cambios</h2>
<p>Si cambian las herramientas que usamos, actualizamos esta página y la fecha de arriba.</p>`,
  },
  terms: {
    title: 'Condiciones de uso | Codice Fiscale Pro', description: 'Condiciones de uso de Codice Fiscale Pro: un servicio independiente y gratuito. Los resultados no son oficiales y no tienen garantía.',
    h1: 'Condiciones de uso', eyebrow: 'Última actualización: 5 de octubre de 2026',
    body: `<h2>Servicio independiente</h2>
<p>Codice Fiscale Pro es un sitio web independiente. No está afiliado a la Agenzia delle Entrate ni a ningún organismo público, no emite codici fiscali oficiales y no sustituye los servicios oficiales.</p>
<h2>Qué ofrece el sitio</h2>
<p>Una calculadora de codice fiscale, un descifrador y una comprobación formal, además de contenidos informativos. El servicio es gratuito y no requiere registro.</p>
<h2>Resultados no oficiales</h2>
<p>Los resultados se calculan con el algoritmo conocido del codice fiscale y una lista local de municipios italianos y Estados extranjeros actuales. La lista no incluye los municipios suprimidos. Un código calculado aquí puede diferir del asignado oficialmente, por ejemplo por errores en los datos introducidos, por omocodia o por cambios posteriores en los datos personales. Antes de usar un código en un acto jurídico, un contrato o una declaración fiscal, compáralo con tu tarjeta sanitaria o con la verificación oficial de la Agenzia delle Entrate.</p>
<h2>Sin garantía</h2>
<p>El sitio se ofrece «tal cual». Nos esforzamos por mantenerlo exacto, pero no garantizamos que esté libre de errores ni siempre disponible. En la medida en que la ley lo permite, no respondemos de los daños derivados del uso de los resultados. Los derechos que la ley reconoce a los consumidores no se ven afectados.</p>
<h2>Uso adecuado</h2>
<p>Usa las herramientas con fines lícitos. No las uses para sobrecargar el sitio ni para eludir sus protecciones técnicas.</p>
<h2>Contenidos y enlaces externos</h2>
<p>Los textos, gráficos y el código del sitio pertenecen a Codice Fiscale Pro, salvo indicación en contrario. Los enlaces a sitios externos, como el de la Agenzia delle Entrate, se ofrecen por comodidad: no controlamos esos sitios.</p>
<h2>Privacidad</h2>
<p>El tratamiento de los datos se describe en la <a href="{{p:privacy}}">política de privacidad</a>.</p>
<h2>Ley aplicable y cambios</h2>
<p>Estas condiciones se rigen por la ley italiana, sin privar al consumidor de la protección imperativa de su país de residencia. Podemos actualizarlas: la fecha de arriba indica la última versión. Para cualquier duda escribe a <a href="mailto:contact@codicefiscalepro.com">contact@codicefiscalepro.com</a>.</p>`,
  },
  guides: {
    title: 'Guías sobre el codice fiscale | Codice Fiscale Pro', description: 'Guías claras sobre el codice fiscale: cómo se calcula, cómo se lee, omocodia, código Belfiore, nacidos en el extranjero y verificación.',
    h1: 'Guías sobre el codice fiscale',
    intro: 'Guías del Codice Fiscale Pro Team. Cada una responde a una pregunta concreta y remite a la herramienta adecuada: <a href="{{p:home}}">calculadora</a>, <a href="{{p:inverse}}">descifrador</a> o <a href="{{p:verify}}">comprobación</a>.',
    other: 'Hay más guías en italiano: <a class="text-link underline" href="/it/guide/" hreflang="it" lang="it">Guide al codice fiscale</a>.',
  },
};
export default content;
