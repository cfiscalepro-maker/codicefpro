import type { GuideContent } from '../../../i18n/content';
const g: GuideContent = {
  slug: 'como-se-calcula-el-codice-fiscale',
  title: 'Cómo se calcula el codice fiscale | Codice Fiscale Pro',
  h1: 'Cómo se calcula el codice fiscale: guía paso a paso',
  description: 'Cómo se calcula el codice fiscale: reglas para apellido, nombre, fecha, sexo, lugar de nacimiento y letra de control, con ejemplos resueltos.',
  indexDesc: 'Las reglas para apellido, nombre, fecha, lugar y letra de control, con ejemplos resueltos.',
  datePublished: '2026-10-05',
  summary: 'El codice fiscale se calcula en siete pasos: 3 letras del apellido, 3 del nombre, las 2 últimas cifras del año de nacimiento, una letra para el mes, el día (más 40 en las mujeres), el código del lugar de nacimiento y una letra de control calculada con los 15 caracteres anteriores. Para José García López, nacido en España el 30 de octubre de 1980, el resultado es GRCJSO80R30Z131B.',
  audience: 'quien quiera entender cómo se construye un codice fiscale, comprobarlo a mano o contrastar un resultado: personas que se trasladan a Italia, estudiantes, departamentos de recursos humanos, desarrolladores. Esta guía no da el código oficial, que solo asigna la Agenzia delle Entrate.',
  related: ['cos-e-il-codice-fiscale', 'cos-e-l-omocodia', 'codice-belfiore', 'errori-comuni-nel-codice-fiscale'],
  faq: [
    { q: '¿Se puede calcular el codice fiscale a mano?', a: 'Sí. Hacen falta el apellido, el nombre, la fecha de nacimiento, el sexo y el código del municipio o del Estado de nacimiento. Se obtienen las letras de apellido y nombre, se escribe la fecha y el sexo, se añade el código del lugar y se calcula la letra de control con las dos tablas de conversión.' },
    { q: '¿Cuántos caracteres tiene el codice fiscale?', a: 'El codice fiscale de una persona tiene 16 caracteres: 6 letras de apellido y nombre, 5 caracteres para fecha y sexo, 4 para el lugar y 1 letra de control.' },
    { q: '¿Por qué se suma 40 al día de nacimiento de las mujeres?', a: 'Las posiciones 10 y 11 contienen a la vez el día y el sexo. En los hombres aparece el día de 01 a 31, en las mujeres el día más 40, es decir de 41 a 71.' },
    { q: '¿Qué pasa si el apellido tiene menos de tres letras?', a: 'Se completa con la letra X hasta tener tres caracteres. El apellido Gil, por ejemplo, tiene dos consonantes y una vocal y da GLI, pero Fo da FOX.' },
  ],
  body: `<h2>¿De qué se compone un codice fiscale?</h2>
<p>El codice fiscale es un código alfanumérico de 16 caracteres que identifica a una persona a efectos fiscales en Italia. Sus reglas de construcción proceden de un decreto del Ministerio de Finanzas italiano del 23 de diciembre de 1976, como recuerda <a href="https://www.pmi.it/?p=362269" rel="noopener noreferrer" lang="it">Pmi.it</a> (en italiano). La tabla muestra las siete partes con el ejemplo GRCJSO80R30Z131B.</p>
<div class="table-wrap"><table>
<thead><tr><th>Posiciones</th><th>Contenido</th><th>Ejemplo</th></tr></thead>
<tbody>
<tr><td>1-3</td><td>Apellido</td><td><code>GRC</code></td></tr>
<tr><td>4-6</td><td>Nombre</td><td><code>JSO</code></td></tr>
<tr><td>7-8</td><td>Año de nacimiento (dos últimas cifras)</td><td><code>80</code></td></tr>
<tr><td>9</td><td>Mes de nacimiento</td><td><code>R</code></td></tr>
<tr><td>10-11</td><td>Día de nacimiento y sexo</td><td><code>30</code></td></tr>
<tr><td>12-15</td><td>Municipio o Estado extranjero de nacimiento</td><td><code>Z131</code></td></tr>
<tr><td>16</td><td>Carácter de control</td><td><code>B</code></td></tr>
</tbody></table></div>

<h2>¿Cómo se obtienen las tres letras del apellido?</h2>
<p>Se toman las tres primeras consonantes del apellido, en orden. Si hay menos de tres consonantes, se añaden las vocales, también en orden. Si todavía faltan letras, se completa con X.</p>
<div class="table-wrap"><table>
<thead><tr><th>Apellido</th><th>Letras usadas</th><th>Resultado</th></tr></thead>
<tbody>
<tr><td>García</td><td>G, R, C</td><td><code>GRC</code></td></tr>
<tr><td>López</td><td>L, P, Z</td><td><code>LPZ</code></td></tr>
<tr><td>Martínez</td><td>M, R, T</td><td><code>MRT</code></td></tr>
<tr><td>Peña</td><td>P, N (la ñ cuenta como n), luego la vocal E</td><td><code>PNE</code></td></tr>
<tr><td>Gil</td><td>G, L, luego la vocal I</td><td><code>GLI</code></td></tr>
</tbody></table></div>

<h2>¿Cómo se obtienen las tres letras del nombre?</h2>
<p>Si el nombre tiene cuatro o más consonantes, se toman la primera, la tercera y la cuarta. Con tres consonantes o menos se aplica la misma regla que para el apellido: consonantes, luego vocales, luego X.</p>
<div class="table-wrap"><table>
<thead><tr><th>Nombre</th><th>Consonantes</th><th>Resultado</th></tr></thead>
<tbody>
<tr><td>Alejandro</td><td>L, J, N, D, R: 1.ª, 3.ª y 4.ª</td><td><code>LND</code></td></tr>
<tr><td>Carlos</td><td>C, R, L, S: 1.ª, 3.ª y 4.ª</td><td><code>CLS</code></td></tr>
<tr><td>José</td><td>J, S (dos), luego la primera vocal O</td><td><code>JSO</code></td></tr>
<tr><td>María</td><td>M, R (dos), luego la primera vocal A</td><td><code>MRA</code></td></tr>
<tr><td>Ana</td><td>N (una), luego las vocales A, A</td><td><code>NAA</code></td></tr>
<tr><td>Luz</td><td>L, Z (dos), luego la vocal U</td><td><code>LZU</code></td></tr>
</tbody></table></div>

<h2>¿Cómo se escriben la fecha de nacimiento y el sexo?</h2>
<p>Se escriben las dos últimas cifras del año, una letra para el mes y el día con dos cifras. A las mujeres se les suma 40 al día. Un hombre nacido el 30 de octubre de 1980 recibe <code>80R30</code>. Una mujer nacida el 12 de diciembre de 1999 recibe <code>99T52</code>.</p>
<div class="table-wrap"><table>
<thead><tr><th>Mes</th><th>Letra</th><th>Mes</th><th>Letra</th></tr></thead>
<tbody>
<tr><td>Enero</td><td><code>A</code></td><td>Julio</td><td><code>L</code></td></tr>
<tr><td>Febrero</td><td><code>B</code></td><td>Agosto</td><td><code>M</code></td></tr>
<tr><td>Marzo</td><td><code>C</code></td><td>Septiembre</td><td><code>P</code></td></tr>
<tr><td>Abril</td><td><code>D</code></td><td>Octubre</td><td><code>R</code></td></tr>
<tr><td>Mayo</td><td><code>E</code></td><td>Noviembre</td><td><code>S</code></td></tr>
<tr><td>Junio</td><td><code>H</code></td><td>Diciembre</td><td><code>T</code></td></tr>
</tbody></table></div>
<p>El código contiene solo dos cifras del año, así que el siglo no se puede leer de él. El <a href="{{p:inverse}}">descifrador</a> muestra todas las fechas posibles.</p>

<h2>¿Cómo se encuentra el código del lugar de nacimiento?</h2>
<p>El lugar se escribe con el código Belfiore: una letra y tres cifras. Roma es <code>H501</code> y Milán <code>F205</code>. Los Estados extranjeros tienen códigos que empiezan por Z: España es <code>Z131</code>, Argentina <code>Z600</code>, Colombia <code>Z604</code>, México <code>Z514</code>, Chile <code>Z603</code> y Venezuela <code>Z614</code>.</p>
<p>En la <a href="{{p:home}}">calculadora</a> puedes escribir el nombre del país o de la ciudad en español y el código se rellena solo. Un detalle que comprobamos al trabajar con los datos: en el <a href="https://arcom.agenziaentrate.gov.it/CitizenArCom/" rel="noopener noreferrer" lang="it">archivo de municipios de la Agenzia delle Entrate</a> (en italiano) el código correcto está en la columna «Codice Nazionale». La columna «Codice Catastale» contiene otro código (para Roma <code>M1AA</code>) y daría resultados erróneos. Consulta la guía del <a href="{{g:codice-belfiore}}">código Belfiore</a>.</p>

<h2>¿Cómo se calcula el carácter de control?</h2>
<p>El decimosexto carácter es una letra de la A a la Z. Se obtiene sumando los valores de los 15 primeros caracteres, con una tabla para las posiciones impares y otra para las pares, y convirtiendo en letra el resto de dividir entre 26.</p>
<ol>
<li>Convierte cada carácter en un número. En las posiciones pares, una cifra vale lo que indica y una letra vale su lugar en el alfabeto, con A = 0. En las posiciones impares usa la tabla de abajo.</li>
<li>Suma todos los valores.</li>
<li>Divide el total entre 26 y quédate con el resto.</li>
<li>Convierte el resto en letra: 0 es A, 1 es B, y así hasta 25, que es Z.</li>
</ol>
<h3>Valores de las posiciones impares (1, 3, 5, ... 15)</h3>
<ul>
<li>Cifras de 0 a 9: 1, 0, 5, 7, 9, 13, 15, 17, 19, 21.</li>
<li>Letras de A a J: los mismos valores que las cifras de 0 a 9, en el mismo orden.</li>
<li>Letras de K a Z: 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23.</li>
</ul>
<h3>Ejemplo resuelto: GRCJSO80R30Z131</h3>
<ul>
<li>Posiciones impares: G = 15, C = 5, S = 12, 8 = 19, R = 8, 0 = 1, 1 = 0, 1 = 0. Suma 60.</li>
<li>Posiciones pares: R = 17, J = 9, O = 14, 0 = 0, 3 = 3, Z = 25, 3 = 3. Suma 71.</li>
<li>Total 131. 131 entre 26 da 5 con resto 1. El valor 1 es la letra B.</li>
</ul>
<p>El código completo es <code>GRCJSO80R30Z131B</code>. José García López es una persona de ejemplo.</p>

<h2>¿Qué pasa con tildes, la ñ, espacios y apellidos dobles?</h2>
<p>Solo cuentan las letras del alfabeto. Tildes, apóstrofos, espacios y guiones se ignoran, y una letra con tilde o la ñ valen como la letra base. Las excepciones siguen la tabla de transliteración del Ministerio del Interior italiano, que usa la circular 34/2011 de la Agenzia delle Entrate: ä y æ valen AE, ö y œ valen OE, ü vale UE y ß vale SS. Consonantes y vocales se cuentan sobre todo el apellido o todo el nombre. Con dos apellidos, se leen de izquierda a derecha como un único apellido, según <a href="https://www.avvocatoandreani.it/servizi/calcolo_codice_fiscale.php" rel="noopener noreferrer" lang="it">esta descripción de la regla</a> (en italiano): García López da <code>GRC</code>.</p>
<p>Para las mujeres casadas se usa el apellido de nacimiento, no el del cónyuge. Si tu nombre se escribe distinto en el pasaporte y en la partida de nacimiento, el código oficial puede diferir del calculado.</p>

<h2>¿El código calculado coincide siempre con el oficial?</h2>
<p>No. El resultado puede diferir en casos de omocodia, nombres registrados con otra grafía, nacimiento en el extranjero o datos personales corregidos más tarde. Solo vale el código asignado por la Agenzia delle Entrate. Compáralo con tu tarjeta sanitaria o usa el <a href="https://telematici.agenziaentrate.gov.it/VerificaCF" rel="noopener noreferrer" lang="it">servicio de verificación de la Agenzia</a> (en italiano). Nuestra <a href="{{p:verify}}">comprobación formal</a> solo prueba la estructura y la letra de control. Sobre la omocodia, consulta <a href="{{g:cos-e-l-omocodia}}">qué es la omocodia</a>.</p>

<h2>¿Cómo comprobamos nuestro propio cálculo?</h2>
<p>El motor de cálculo está cubierto por pruebas automáticas y contrastado con una biblioteca de referencia de código abierto. Comparamos los códigos de 7.886 municipios de nuestra lista sin encontrar diferencias, y recalculamos la letra de control del ejemplo anterior con un programa independiente.</p>
<p>Hay dos límites. La lista de lugares procede de una exportación de la Agenzia delle Entrate con los municipios y Estados actuales, por lo que faltan los municipios suprimidos. Y un cálculo no puede saber si a una persona se le asignó un código con omocodia.</p>

<h2>Fuentes</h2>
<ul>
<li><a href="https://www.pmi.it/?p=362269" rel="noopener noreferrer" lang="it">Pmi.it</a> (italiano): algoritmo y decreto de 1976.</li>
<li><a href="https://arcom.agenziaentrate.gov.it/CitizenArCom/" rel="noopener noreferrer" lang="it">Agenzia delle Entrate</a> (italiano): archivo de municipios y Estados extranjeros.</li>
<li><a href="https://telematici.agenziaentrate.gov.it/VerificaCF" rel="noopener noreferrer" lang="it">Agenzia delle Entrate</a> (italiano): servicio oficial de verificación.</li>
</ul>`,
};
export default g;
