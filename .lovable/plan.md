## Estado actual

Revisé los archivos clave sincronizados desde GitHub:

- `src/routes/index.tsx` — declara `createFileRoute("/")` y exporta un componente `Index` con JSX válido. No veo errores de sintaxis.
- `src/routes/__root.tsx` — root layout correcto, con `<Outlet />`, `notFoundComponent` y `errorComponent`.
- `src/router.tsx` — `createRouter` usa `routeTree.gen.ts` correctamente.
- `src/routes/` contiene: `index.tsx`, `cv.tsx`, `musica.tsx`, `pasantias.tsx`, `publicaciones.tsx`, `terreno.tsx`, `__root.tsx`. No hay duplicados (`_app/index.tsx`, `pages/`, etc.) que generen conflicto en `/`.

Los `<Link to="/...">` apuntan a rutas que sí existen (`/publicaciones`, `/musica`, `/terreno`). Los enlaces `/investigación`, `/aula` y `/curaduría musical` se usan como `<a href>` (no `Link`), así que no rompen el typecheck.

Conclusión: si sigues viendo 404 en `/`, lo más probable es **una de estas tres causas**:

1. **`routeTree.gen.ts` desincronizado** tras la edición en GitHub: el plugin de TanStack Router no regeneró el árbol y el router no registra `/`.
2. **Build roto** por algún otro archivo tocado en GitHub (un `import` que ya no resuelve, un asset borrado, etc.) que tira la app entera a la pantalla de error y se ve como 404.
3. **Dev server colgado** tras el push externo (necesita reinicio para releer el árbol de rutas).

## Plan de arreglo

### 1. Verificar el build y el árbol de rutas
- Inspeccionar `src/routeTree.gen.ts` para confirmar que la ruta `/` esté registrada apuntando a `routes/index.tsx`. Si está desincronizada, forzar regeneración tocando `src/routes/index.tsx` (write idéntico) para que el plugin lo redetecte.
- Revisar imports de `index.tsx` (`@/assets/ignacio-portrait.jpg`, `vinyl.jpg`, `terreno.jpg`) y confirmar que los archivos existan en `src/assets/`. Si alguno fue borrado en GitHub, el build falla y la app no monta.
- Revisar `src/components/SiteHeader.tsx` y `SiteFooter.tsx` (los usa `__root.tsx`); si la edición en GitHub afectó a uno de ellos con un import roto, **toda la app cae** y se ve como 404 en `/`.

### 2. Arreglar lo que esté roto
- Reescribir/restaurar imports rotos.
- Si falta un asset, restaurarlo o quitar la referencia.
- Corregir cualquier error de sintaxis residual.

### 3. Reiniciar el dev server
- Tras los cambios, reiniciar el servidor de Vite para que regenere `routeTree.gen.ts` y vuelva a montar la app limpia.

### 4. Verificar
- Build sin errores.
- Navegar a `/` en el preview y confirmar que carga el hero con la foto, las tres identidades, las últimas publicaciones y la sección Terreno + Música.
- Confirmar que `/publicaciones`, `/musica` y `/terreno` siguen navegables desde la home.

### Notas
- No tocaré `src/routeTree.gen.ts` a mano (es autogenerado).
- No voy a alterar el contenido editorial que ya tienes (textos, datos de publicaciones, citas) — solo arreglaré lo necesario para que la home cargue.
- Si después del diagnóstico resulta que el código actual está intacto y el problema era únicamente el dev server, te lo digo y solo reinicio sin tocar archivos.
