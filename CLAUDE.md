# ITERA Lex Docs

Sitio de documentacion para ITERA Lex.

> **Tier: Simple** — Next.js 16 + Nextra v4 sin DB, sin auth. Contenido en `content/` con App Router.

## Stack

- Next.js 16 + React 19 + TypeScript
- Nextra v4 (App Router + catch-all route)
- Tailwind v4 (CSS-first)
- Geist Sans/Mono (via next/font/google)
- Color primario naranja ITERA via CSS vars de Nextra (hue 27deg)

## Arquitectura

Contenido en `content/` — estructura: guia-rapida, guias-de-uso, glosario, recursos, changelog.
Contenido se prepara en Notion/Claude Web, aqui solo estructura y MDX.

## Proceso

1. Planificar antes de codear: definir estructura de navegacion. Implementar DESPUES de aprobacion.
2. Verificar en navegador: resultado verificable en `localhost:3000` al final de cada feature.
3. **Lint obligatorio**: correr `npm run lint` despues de terminar cambios y ANTES de commitear.
4. **Lint en Windows**: si `npm run lint` falla por paths con espacios -> fallback: `npx eslint src` directo.
5. Referencias en `.planning/` — STATE.md es la memoria viva.
6. **Tipos compartidos desde el primer uso**: si puede usarse en 2+ archivos -> crearlo en `src/lib/types/` desde el inicio. NUNCA redefinir.

## Scopes de Commits

[ui | content | config | docs] — adaptar al cambio

---

## Guardrails

> Errores conocidos del proyecto. Para indice completo: `.planning/GUARDRAILS.md`

### Checklists de Implementacion

#### Al crear una page:

- SIEMPRE `export const metadata` (estaticas) o `generateMetadata()` (dinamicas) con titulo descriptivo
- Verificar que el route group tenga `error.tsx`

#### Antes de escribir una funcion de formateo/utilidad:

- Buscar en `src/lib/utils/` si ya existe -> NUNCA duplicar formatDate
- `toLocaleDateString()` inline en componentes = PROHIBIDO -> usar utils centrales

#### Al implementar un patron UI por 2da vez:

- PRIMERO grep componentes en `components/` y `components/ui/`
- Si el patron ya existe 2+ veces inline -> extraer AHORA

---

### TypeScript / ESLint

- Despues de cambios -> `npm run lint`
- ANTES de usar campo/prop -> verificar que existe en interface
- SIEMPRE `===` y `!==` -> NUNCA `==` o `!=`
- Evitar `as Type` sin motivo claro

---

### Next.js 16

- `searchParams`, `params`, `cookies()`, `headers()` -> TODAS son Promises -> await ANTES de usar
- Pages dinamicas (`[id]`, `[slug]`) -> SIEMPRE Server Component async -> NUNCA `useParams()`
- `next/image` CDN externo -> agregar a `images.remotePatterns` en next.config.ts

---

### React 19

- Hydration mismatch con `window`/`Date.now()`/`Math.random()` -> useEffect + mounted + Skeleton
- Sincronizar props a state -> SIEMPRE en useEffect con deps, NUNCA en cuerpo del componente
- Elementos interactivos anidados (`<button>` dentro de `<button>`) -> hydration error
- `ref.current` en cuerpo del componente -> SOLO en effects o event handlers

---

### UI / Tailwind v4

- CSS vars custom -> registrar en `@theme inline` de globals.css
- grid-cols arbitrario -> espacios NO comas: `grid-cols-[1fr_280px]`
- **`Button size="icon"` -> SIEMPRE `aria-label` descriptivo**
- `h-full` requiere cascada completa -> todos los padres deben tener `h-full`

---

### Seguridad

- Credenciales -> indicar "agregalo directo a .env.local" -> NUNCA pedir secrets en chat
- Datos demo -> SIEMPRE dentro de `if (process.env.NODE_ENV === 'development')`

---

_Este archivo crece con el proyecto. Las reglas globales estan en `~/.claude/CLAUDE.md`._
