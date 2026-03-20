# ITERA LEX Docs

Documentación legal para startups y emprendedores argentinos. Guías prácticas, glosario jurídico, recursos y checklists.

**Producción:** https://docs.iteralex.com

## Stack

- [Next.js 16](https://nextjs.org/) + [Nextra 4](https://nextra.site/) (docs theme)
- React 19, TypeScript, Tailwind CSS 4
- Deploy: Docker (standalone) en Coolify

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3011
```

## Estructura

```
content/           # Contenido MDX
  ├── index.mdx            # Página principal
  ├── changelog.mdx        # Changelog
  ├── guia-rapida/         # Guía rápida
  ├── guias-de-uso/        # Guías de uso detalladas
  ├── glosario/            # Glosario jurídico
  └── recursos/            # Checklists, modelos, blog
app/               # Next.js app router (layout + catch-all para Nextra)
public/            # Assets estáticos
```

## Deploy

Deployado en Coolify (VPS `modern` — 65.108.148.79).

```
Proyecto:    l19hmij73wvdxumu1n0z6qtp
Aplicación:  c4gg5eujjvpbgelqlgurdnoe
Dominio:     https://docs.iteralex.com
```

Push a `master` + redeploy desde Coolify.
