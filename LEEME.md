# ¿Qué decidirías tú?

Aventura educativa para un jugador, basada únicamente en las instrucciones de la Evaluación Sumativa N.º 1, Unidad II, de 4.º medio.

## Jugar

Abre `dist/index.html` en un navegador moderno. En la copia descargable, extrae el ZIP y abre `index.html` directamente. No requiere instalación, bibliotecas externas ni conexión a internet. Los vínculos de fuentes sí requieren conexión.

Pulsa «Comenzar aventura». En cada nivel, selecciona el lugar disponible o camina con W, A, S, D o las flechas. Al acercarte al personaje, pulsa «Conversar» o E. En celular, usa las flechas táctiles manteniéndolas pulsadas o toca el encuentro para caminar automáticamente. La cámara se acerca y sigue al personaje, los diálogos se abren en una columna y los botones y textos se amplían para pantallas táctiles. También puedes jugar solo con clics o toques. Cada encuentro tiene tres decisiones, una consecuencia y una reflexión. La nueva escena retoma algunas elecciones anteriores.

«Mi recorrido» permite revisar todas las decisiones y comparar consecuencias alternativas. El juego guarda el progreso en el almacenamiento local del navegador cuando esté disponible; nunca envía las respuestas ni el compromiso a un servidor. El guardado puede depender de las restricciones del navegador, especialmente al abrir archivos locales o usar modo privado. Al final se puede descargar el recorrido como texto.

## Correspondencia con las instrucciones

| Requisito | Implementación |
| --- | --- |
| Título ¿Qué decidirías tú? | Título de la página y del juego |
| Dos niveles | Sudáfrica / colegio y barrio |
| Desafío de fe | Consejo deportivo y conservación del símbolo Springbok |
| Desafío de esperanza | Preparación frente a la final con Nueva Zelanda |
| Desafío de caridad | Actividad comunitaria de rugby inclusiva |
| Tres alternativas y explicación | Los tres encuentros ofrecen retroalimentación para todas las opciones |
| Redes sociales: dilema nuevo | Un audio recortado y su difusión |
| Vida escolar: dilema nuevo | Fracaso académico, competencia y exclusión de un proyecto |
| Sociedad: dilema nuevo | Migración y barrera de inscripción digital |
| Consecuencias diferentes | 18 consecuencias, cambios en indicadores y referencias posteriores |
| Cierre La decisión Invictus | Tres iniciativas válidas para el colegio y plan concreto |

La fe, la esperanza y la caridad se presentan en su sentido teologal. Las escenas son puntos de comparación y reflexión; no se atribuye una profesión religiosa a los personajes ni se garantiza una victoria deportiva por la fe. Las decisiones, textos y consecuencias son adaptaciones educativas originales, no diálogos o finales reales de la película.

## Fuentes

- Documento de instrucciones aportado por el usuario: Evaluación Sumativa N.º 1, Unidad II, Colegio Padre Alberto Hurtado.
- Película *Invictus* (2009), dirección de Clint Eastwood. https://www.warnerbros.com/movies/invictus
- Referencia para situar las escenas: https://en.wikipedia.org/wiki/Invictus_(film)
- Catecismo de la Iglesia Católica, artículos 1812–1829. https://www.vatican.va/archive/catechism_sp/p3s1c1a7_sp.html

El PDF recibido termina con el título «Instrumento de evaluación: Rúbrica Analítica de Desempeño», pero no contiene las filas o criterios de esa rúbrica. Se verifican las instrucciones visibles; no se puede verificar una rúbrica ausente.

## Código y comprobaciones

- `dist/engine.js`: situaciones, consecuencias y reglas de progreso.
- `dist/app.js`: interfaz, exploración del mapa, navegación y guardado.
- `dist/style.css`: diseño adaptable a celular y computador.
- `dist/touch.js`: controles táctiles con liberación segura al soltar, cancelar o cambiar de aplicación.
- `checks.cjs`: comprobación de las 729 rutas y los 2.187 cierres, restauración de progreso, integridad de contenidos y sintaxis. Ejecutar `node checks.cjs` desde la carpeta del proyecto.

Para verificar los controles táctiles, ejecutar `node mobile-checks.cjs`. Se comprueba pulsación, liberación, cancelación, varios dedos, bloqueo durante diálogos y activación accesible. La revisión visual en dispositivos reales queda pendiente porque este entorno no dispone del navegador de pruebas autorizado.

## Publicar en GitHub Pages

Extrae el ZIP y sube `index.html`, `style.css`, `engine.js`, `touch.js`, `app.js` y `LEEME.md` directamente al repositorio. Sube también el ZIP original para mantener el botón de descarga. Activa Settings → Pages → Deploy from a branch → main → / (root). El juego tiene todos los recursos locales y usa rutas relativas, adecuadas para una página de proyecto como `usuario.github.io/que-decidirias-tu/`.

Los indicadores (confianza, inclusión y compromiso) muestran efectos ficticios para este ejercicio; no miden el valor de una persona ni su fe.
